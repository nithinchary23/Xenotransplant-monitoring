// backend/generatePatients.ts
import { faker } from "@faker-js/faker";

// Generate pre-transplant patient data
export const generatePreTransplantPatient = (i: number) => ({
  id: `patient_pre_${i}`,
  name: faker.person.fullName(),  // Updated to use faker.person
  age: faker.number.int({ min: 18, max: 70 }),  // Use faker.number.int for integers
  immuno_response_score: faker.number.float({ min: 0, max: 1 }),  // Use faker.number.float for floating point numbers
  infection_marker_level: faker.number.float({ min: 0, max: 1 }),  // Use faker.number.float
  comorbidities_score: faker.number.float({ min: 0, max: 1 }),  // Use faker.number.float
  recovery_score: faker.number.float({ min: 0, max: 1 }),  // Use faker.number.float
  vitals_stable: faker.datatype.boolean(),
  pre_op_safe: faker.datatype.boolean(),
  status: "pre-transplant",
  label: 0, // or 1 if suitable
});

// Generate post-transplant patient data
export const generatePostTransplantPatient = (i: number) => ({
  id: `patient_post_${i}`,
  name: faker.person.fullName(),  // Updated to use faker.person
  age: faker.number.int({ min: 18, max: 70 }),  // Use faker.number.int for integers
  immuno_response_score: faker.number.float({ min: 0, max: 1 }),  // Use faker.number.float
  infection_marker_level: faker.number.float({ min: 0, max: 1 }),  // Use faker.number.float
  comorbidities_score: faker.number.float({ min: 0, max: 1 }),  // Use faker.number.float
  recovery_score: faker.number.float({ min: 0, max: 1 }),  // Use faker.number.float
  vitals_stable: faker.datatype.boolean(),
  post_status_ok: faker.datatype.boolean(),
  status: "post-transplant",
});
