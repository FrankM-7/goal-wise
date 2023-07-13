from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask import request, jsonify

import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from firebase_admin import firestore
import pyrebase
from dotenv import load_dotenv
import os

# from flask_cors import CORS #comment this on deployment

app = Flask(__name__ ,static_folder='frontend/build',static_url_path='')
# cors = CORS(app)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')
if __name__ == '__main__':
    app.run(host='0.0.0.0')

# Fetch the service account key JSON file contents
credConfig = {
    "type": os.getenv("type"),
    "project_id": os.getenv("project_id"),
    "private_key_id": os.getenv("private_key_id"),
    "private_key": os.getenv("private_key").replace('\\n', '\n'),
    "client_email": os.getenv("client_email"),
    "client_id": os.getenv("client_id"),
    "auth_uri": os.getenv("auth_uri"),
    "token_uri": os.getenv("token_uri"),
    "auth_provider_x509_cert_url": os.getenv("auth_provider_x509_cert_url"),
    "client_x509_cert_url": os.getenv("client_x509_cert_url"),
    "universe_domain": os.getenv("universe_domain"),
}
  
cred = credentials.Certificate(credConfig)
fb_admin = firebase_admin.initialize_app(cred)
db = firestore.client()

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
    print(token)
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

@app.route('/api/add/list', methods=['POST'])
def add_list():
    # get the parameters from the request
    token = request.json['token']

    # authenticate and retrieve user ID
    try:
        auth = firebase.auth()
        user = auth.refresh(token)
        user_id = user['userId']

        customList = {
            'title': request.json['name'],
            'description': "some random description",
        }

        # Add a new doc in collection 'cities' with ID 'LA'
        db.collection("users").document(user_id).collection("lists").add(customList)
    except:
        return {'status': 401, 'message': 'Invalid token'}
    return { 'status' : 200 }

@app.route('/api/lists', methods=['GET'])
def get_lists():
    token = request.args.get('token')
    print(token)
    try:
        auth = firebase.auth()
        user = auth.refresh(token)
        user_id = user['userId']

        lists = db.collection("users").document(user_id).collection("lists").get()
        
        lists_list = []
        id = 0
        for list in lists:
            json_list = {
                'id': id,
                'title': list.to_dict()['title'],
            }
            lists_list.append(json_list)
            id += 1

        return {'status' : 200, 'lists' : lists_list}
    except:
        return {'status': 401, 'message': 'Invalid token'}