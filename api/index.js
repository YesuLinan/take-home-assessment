const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const path = require('path');
const contactRoutes = require('./routes/contactRoutes');
//const serviceAccount = require('./firebase-service-account.json');

const GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const app = express();

app.use(cors());
app.use(express.json());

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(GOOGLE_APPLICATION_CREDENTIALS)),
  projectId: JSON.parse(GOOGLE_APPLICATION_CREDENTIALS).project_id
});

const db = admin.firestore();

// Make Firestore accessible in routes
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Backend API routes
app.use('/api/contacts', contactRoutes);

// Serve React frontend build files
app.use(express.static(path.join(__dirname, '../src/build')));

// For any other routes, serve React's index.html (for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
