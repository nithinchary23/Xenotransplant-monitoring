from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from joblib import load
import numpy as np
import os

app = FastAPI()

# Paths to models
MODEL_DIR = os.path.join(os.path.dirname(__file__), "models")
PRE_MODEL_PATH = os.path.join(MODEL_DIR, "pre_transplant_model.joblib")
POST_MODEL_PATH = os.path.join(MODEL_DIR, "post_transplant_model.joblib")

# Load models
pre_model = load(PRE_MODEL_PATH)
post_model = load(POST_MODEL_PATH)

# Input schema for pre-transplant
class PreTransplantInput(BaseModel):
    age: int
    immuno_response_score: float
    infection_marker_level: float
    comorbidities_score: float
    recovery_score: float
    vitals_stable: bool
    pre_op_safe: bool

# Input schema for post-transplant
class PostTransplantInput(BaseModel):
    age: int
    immuno_response_score: float
    infection_marker_level: float
    comorbidities_score: float
    recovery_score: float
    vitals_stable: bool

@app.get("/")
def health_check():
    return {"status": "ML service running"}

@app.post("/predict/pre")
def predict_pre_transplant(data: PreTransplantInput):
    try:
        features = np.array([
            data.age,
            data.immuno_response_score,
            data.infection_marker_level,
            data.comorbidities_score,
            data.recovery_score,
            int(data.vitals_stable),
            int(data.pre_op_safe)
        ]).reshape(1, -1)
        prediction = pre_model.predict(features)[0]
        return {"prediction": int(prediction)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/predict/post")
def predict_post_transplant(data: PostTransplantInput):
    try:
        features = np.array([
            data.age,
            data.immuno_response_score,
            data.infection_marker_level,
            data.comorbidities_score,
            data.recovery_score,
            int(data.vitals_stable)
        ]).reshape(1, -1)
        prediction = post_model.predict(features)[0]
        return {"prediction": int(prediction)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
