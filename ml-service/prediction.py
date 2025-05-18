from joblib import load
import numpy as np

# Load pre-trained models (update paths according to your project structure)
pre_transplant_model = load(r"C:\Users\Niharika Ramojipally\xeno-frontend\ml-service\models\pre_transplant_model.joblib")
post_transplant_model = load(r"C:\Users\Niharika Ramojipally\xeno-frontend\ml-service\models\post_transplant_model.joblib")

# Function to predict pre-transplant suitability
def predict_pre_transplant(data: dict):
    features = np.array([
        data["age"],
        data["immuno_response_score"],
        data["infection_marker_level"],
        data["comorbidities_score"],
        data["recovery_score"],
        data["vitals_stable"]
    ]).reshape(1, -1)  # Reshape for single prediction
    prediction = pre_transplant_model.predict(features)
    return {"prediction": int(prediction[0])}  # Return 0 or 1

# Function to predict post-transplant recovery
def predict_post_transplant(data: dict):
    features = np.array([
        data["age"],
        data["immuno_response_score"],
        data["infection_marker_level"],
        data["comorbidities_score"],
        data["recovery_score"],
        data["vitals_stable"]
    ]).reshape(1, -1)  # Reshape for single prediction
    prediction = post_transplant_model.predict(features)
    return {"prediction": int(prediction[0])}  # Return 0 or 1
