from dotenv import load_dotenv
import pyrebase
import os

load_dotenv()

firebaseConfig = {
    "apiKey" : os.getenv("apiKey"),
    "authDomain" : os.getenv("authDomain"),
    "databaseURL" : os.getenv("databaseURL"),
    "projectId" : os.getenv("projectId"),
    "storageBucket" : os.getenv("storageBucket"),
    "messagingSenderId" : os.getenv("messagingSenderId"),
    "appId" : os.getenv("appId"),
    "measurementId" : os.getenv("measurementId")
}

firebase = pyrebase.initialize_app(firebaseConfig)

# Get a reference to the auth service
auth = firebase.auth()

email = "frank@gmail.com"
password = "frankfrank"

# Log the user in
user = auth.sign_in_with_email_and_password(email, password)

print(user)

# # Get a reference to the database service
db = firebase.database()

# # data to save
data = {
    "name": "Mortimer 'Morty' Smith"
}

# # Pass the user's idToken to the push method
results = db.child("users").push(data, user['idToken'])