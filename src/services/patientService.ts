// frontend/src/services/patientService.ts
import axios from "axios";
import { PreTransplantPatient, PostTransplantPatient } from "../types/PatientTypes";

const BASE_URL = "http://localhost:4000/api/patients";

export const fetchPreTransplantPatients = async (): Promise<PreTransplantPatient[]> => {
  const response = await axios.get(`${BASE_URL}/pre`);
  return response.data;
};

export const fetchPostTransplantPatients = async (): Promise<PostTransplantPatient[]> => {
  const response = await axios.get(`${BASE_URL}/post`);
  return response.data;
};
