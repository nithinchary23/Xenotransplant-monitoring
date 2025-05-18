import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier, VotingClassifier
from xgboost import XGBClassifier
from sklearn.model_selection import train_test_split
from joblib import dump
import os

# Generate synthetic pre-transplant data
np.random.seed(42)
n = 100
df = pd.DataFrame({
    "age": np.random.randint(18, 70, n),
    "immuno_response_score": np.random.rand(n),
    "infection_marker_level": np.random.rand(n),
    "comorbidities_score": np.random.rand(n),
    "recovery_score": np.random.rand(n),
    "vitals_stable": np.random.choice([0, 1], n),
    "pre_op_safe": np.random.choice([0, 1], n)
})

# Label logic — define safe for transplant as label = 1
df["label"] = (
    (df["immuno_response_score"] > 0.5) &
    (df["infection_marker_level"] < 0.3) &
    (df["comorbidities_score"] < 0.4) &
    (df["recovery_score"] > 0.5) &
    (df["vitals_stable"] == 1) &
    (df["pre_op_safe"] == 1)
).astype(int)

X = df.drop("label", axis=1)
y = df["label"]

# Define ensemble model
rf = RandomForestClassifier(n_estimators=100, random_state=42)
xgb = XGBClassifier(use_label_encoder=False, eval_metric='logloss')
ensemble = VotingClassifier(estimators=[('rf', rf), ('xgb', xgb)], voting='soft')

# Train
ensemble.fit(X, y)

# Save model
os.makedirs("models", exist_ok=True)
dump(ensemble, "models/pre_transplant_model.joblib")
print("✅ Pre-transplant model trained and saved.")
