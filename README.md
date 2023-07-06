# react-flask

## First time setup ##
1. Clone Repository
```bash
git clone https://github.com/FrankM-7/flask-react.git
```
2. Change Directory
```bash
cd react-flask
```
3. Delete .git folder
```bash
sudo rm -R .git
```
3. Create and Start Python Environment
```bash
python3 -m venv env
source env/bin/activate
```
4. Install requirements.txt
```bash
pip install -r requirements.txt
```
5. Change Directory into Client
```bash
cd frontend
```
6. Install npm Packages
```bash
npm install
```
7. Start flask server
```bash
cd ..
flask run
```
8. On a seperate terminal window start react server
```bash
cd frontend
npm start
```
9. Open browser
```bash
https://localhost:3000/
```

## Re-Running ##
1. Start Python Env
```bash
source env/bin/activate
```
2. Start flask server
```bash
flask run
```
3. On Seperate Terminal, Start npm server
```bash
cd frontend
npm start
```

## Deploy on Heroku ##
1. Login to heroku
2. Create app
3. Add Heroku as a remote branch
```bash
git init # only if you havent added to your repositories
heroku git:remote -a APP_NAME
```
4. Make Build
```bash
cd frontend
npm run build
cd ..
```
5. Deploy
```bash
git add .
git commit -am "Heroku"
git push heroku main:master
```


