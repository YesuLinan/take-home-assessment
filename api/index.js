const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const contactRoutes = require('./routes/contactRoutes');
const serviceAccount = require('./firebase-service-account.json');


const app = express();
app.use(cors());
app.use(express.json());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: serviceAccount.project_id
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
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
