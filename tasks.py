from flask import request
from app import app

@app.route('/tasks/add', methods=['POST'])
def add_task():
    # get the parameters from the request
    print(request.json['task'])
    return 200