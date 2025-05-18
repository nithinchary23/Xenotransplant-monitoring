// backend/scripts/seedPatients.ts
import { generatePreTransplantPatient, generatePostTransplantPatient } from '../generatePatients';
import db from '../firebase'; // Firebase initialization
import { collection, doc, setDoc } from 'firebase/firestore';

// Number of patients to generate
const numPreTransplantPatients = 100;
const numPostTransplantPatients = 100;

const seedPatients = async () => {
  try {
    // Pre-transplant patients
    const preTransplantCollection = collection(db, 'patients');
    for (let i = 0; i < numPreTransplantPatients; i++) {
      const patientData = generatePreTransplantPatient(i);
      await setDoc(doc(preTransplantCollection, patientData.id), patientData);
    }

    // Post-transplant patients
    const postTransplantCollection = collection(db, 'patients');
    for (let i = 0; i < numPostTransplantPatients; i++) {
      const patientData = generatePostTransplantPatient(i);
      await setDoc(doc(postTransplantCollection, patientData.id), patientData);
    }

    console.log(`✅ Successfully seeded ${numPreTransplantPatients} pre-transplant and ${numPostTransplantPatients} post-transplant patients.`);
  } catch (error) {
    console.error('Error seeding patients: ', error);
  }
};

// Run the seeding function
seedPatients();
