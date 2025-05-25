# contacts-page
Take Home Assessment Documentation

Tech Stack Overview
------------------------------
Category	Technologies
Frontend:	React + TypeScript, Tailwind CSS
Backend: 	Node.js/Express, Firebase Firestore
Services:   Cloudinary (Image Storage)
Tooling:	Vite, ESLint, Prettier
Hosting:	Render.com

Key Architectural Decisions
------------------------------
- Component-based UI with strict prop typing
- Firestore for real-time data sync capabilities
- Cloudinary signed uploads for secure image handling
- Mobile-first responsive design system
- Container/Presentational component pattern

Local Development Setup
------------------------------
Prerequisites:
- Node.js v18+
- npm v9+
- Firebase service account JSON file
- Cloudinary upload preset

1.- Install Dependencies:
npm install *root directory*

2.- Environment Setup:

    1.- Create .env file in /api containing:
    GOOGLE_APPLICATION_CREDENTIALS=./firebase-service-account.json
    CLOUDINARY_SECRET=<your-secret>
    CLOUDINARY_API_KEY=<your-key>

    2.- Add Firebase service account file:
    Download it here: https://console.firebase.google.com/u/1/project/<project-name>/settings/serviceaccounts/adminsdk
    And copy it to: /api/firebase-service-account.json

3.- Start Servers:
#Frontend: npm run dev
#Backend: npm run dev:server
------------------------------

Production Deployment (Render.com):

Build Configuration:
- Build Command: npm run render-build
- Start Command: npm start

Required Environment Variables:
CLOUDINARY_API_KEY
CLOUDINARY_SECRET
GOOGLE_APPLICATION_CREDENTIALS (your firebase document)