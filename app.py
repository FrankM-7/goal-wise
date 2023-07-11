from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask import request, jsonify

import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from firebase_admin import firestore
#from flask_cors import CORS #comment this on deployment

# Fetch the service account key JSON file contents
cred = credentials.Certificate('credentials.json')
fb_admin = firebase_admin.initialize_app(cred)
db = firestore.client()

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

@app.route('/login', methods=['POST'])
def login():
    auth = firebase.auth()
    email = request.json.get('username')
    password = request.json.get('password')
    try:
        login = auth.sign_in_with_email_and_password(email, password)
        auth_token = login['refreshToken']
        print(auth_token)
        
        return {'success': True, 'token': auth_token}  # Return token as a response
    except:
        print("Was not able to login")
        return {'success': False, 'error': 'Invalid credentials'}

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
    
# import tasks
@app.route('/api/gettasks', methods=['GET'])
def get_tasks():
    token = request.args.get('token')

    try:
        auth = firebase.auth()
        user = auth.refresh(token)
        user_id = user['userId']

        tasks = db.collection("users").document(user_id).collection("tasks").get()
        
        tasks_list = []
        id = 0
        for task in tasks:
            json_task = {
                'id': id,
                'title': task.to_dict()['title'],
            }
            tasks_list.append(json_task)
            id += 1

        return {'status' : 200, 'tasks' : tasks_list}
    except:
        return {'status': 401, 'message': 'Invalid token'}

@app.route('/tasks/add', methods=['POST'])
def add_task():
    # get the parameters from the request
    token = request.json['token']

    # authenticate and retrieve user ID
    try:
        auth = firebase.auth()
        user = auth.refresh(token)
        user_id = user['userId']

        task = {
            'title': request.json['task'],
            'description': "some random description",
        }

        # Add a new doc in collection 'cities' with ID 'LA'
        db.collection("users").document(user_id).collection("tasks").add(task)
    except:
        return {'status': 401, 'message': 'Invalid token'}
    return { 'status' : 200 }