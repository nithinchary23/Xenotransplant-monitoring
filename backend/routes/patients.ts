// backend/routes/patients.ts
import express from 'express';
import { getFirestore } from 'firebase-admin/firestore';
import { db } from '../firebase'; // initialize Firestore instance

const router = express.Router();

// 🟩 Get all pre-transplant patients
router.get('/pre', async (_req, res) => {
  try {
    const patientsRef = db.collection('patients').where('status', '==', 'pre-transplant');
    const snapshot = await patientsRef.get();
    const patients = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch pre-transplant patients' });
  }
});

// 🟩 Get all post-transplant patients
router.get('/post', async (_req, res) => {
  try {
    const patientsRef = db.collection('patients').where('status', '==', 'post-transplant');
    const snapshot = await patientsRef.get();
    const patients = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch post-transplant patients' });
  }
});

// 🟩 Add new pre-transplant patient
router.post('/add-pre-transplant', async (req, res) => {
  try {
    const newPatient = req.body;
    newPatient.status = 'pre-transplant'; // ✅ enforce correct status
    await db.collection('patients').add(newPatient);
    res.status(200).send('Patient added to pre-transplant list');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add patient' });
  }
});

export default router;
