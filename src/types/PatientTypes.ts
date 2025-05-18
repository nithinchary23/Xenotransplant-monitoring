// frontend/src/types/patientTypes.ts
export interface PreTransplantPatient {
    id: string;
    name: string;
    age: number;
    comorbidities_score: number;
    immuno_response_score: number;
    infection_marker_level: number;
    vitals_stable: boolean;
    pre_op_safe: boolean;
    recovery_score: number;
    status: "pre-transplant";
  }
  
  export interface PostTransplantPatient {
    id: string;
    name: string;
    age: number;
    comorbidities_score: number;
    immuno_response_score: number;
    infection_marker_level: number;
    vitals_stable: boolean;
    post_status_ok: boolean;
    recovery_score: number;
    status: "post-transplant";
  }
  