import express from 'express';
import bodyParser from 'body-parser';
import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(readFileSync('./serviceAccountKey.json', 'utf8'));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Get All Users
app.get('/users', async (req, res) => {
  try {
    const snapshot = await db.collection('users').get();
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a New User
app.post('/users', async (req, res) => {
  try {
    const user = req.body;
    const docRef = await db.collection('users').add(user);
    res.status(201).json({ id: docRef.id, ...user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a User
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    await db.collection('users').doc(id).update(user);
    res.status(200).json({ id, ...user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a User
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('users').doc(id).delete();
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
