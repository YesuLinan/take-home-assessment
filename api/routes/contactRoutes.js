const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer();
const cloudinary = require('../utils/cloudinary');

router.get("/ping", (req, res) => {
  res.status(200).json({ message: "Pong!" });
});

// Create a new contact
router.post("/newContact", async (req, res) => {
  try {
    const contactData = req.body;
    const docRef = await req.db.collection("contacts").add(contactData);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Upload image to Cloudinary
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      upload_preset: "ml_default"
    });
    res.status(200).json({ url: result.secure_url });
  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Retrieve all contacts
router.get("/allContacts", async (req, res) => {
  try {
    const snapshot = await req.db.collection("contacts").get();
    const contacts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Parameterized routes with corrected regex syntax
router.get("/:id([\\w-]+)", async (req, res) => {
  // Allows alphanumeric + hyphen
  try {
    const doc = await req.db.collection("contacts").doc(req.params.id).get();
    if (!doc.exists)
      return res.status(404).json({ error: "Contact not found" });
    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id([\\w-]+)", async (req, res) => {
  try {
    await req.db.collection("contacts").doc(req.params.id).update(req.body);
    res.status(200).json({ message: "Contact updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id([\\w-]+)", async (req, res) => {
  try {
    await req.db.collection("contacts").doc(req.params.id).delete();
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;