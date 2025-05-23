const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const contactRoutes = require('./routes/contacts');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin SDK
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Make Firestore accessible in routes
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Use contact routes
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 3000;
