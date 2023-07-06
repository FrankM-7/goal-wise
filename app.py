from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask import request
#from flask_cors import CORS #comment this on deployment

import pyrebase
from dotenv import load_dotenv
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

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
#CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route('/add-task', methods=['POST'])   
def add_task():
    # get the parameters from the request
    print(request.json['task'])
    return "Task added successfully"

@app.route('/login', methods=['POST'])
def login():
    auth = firebase.auth()
    email = request.json.get('username')
    password = request.json.get('password')
    try:
        login = auth.sign_in_with_email_and_password(email, password)
    except:
        print("Was not able to login")
        return "unsuccess"

    print("Was able to login")
    return "success"

@app.route('/register', methods=['POST'])
def register():
    auth = firebase.auth()
    email = request.json.get('email')
    password = request.json.get('password')
    try:
        user = auth.create_user_with_email_and_password(email, password)
    except:
        return "unsuccess"
    
    return "success"
    