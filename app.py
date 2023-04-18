from flask import Flask, render_template
from flask_socketio import SocketIO, emit, send
from flask_cors import cross_origin

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
#@cross_origin(origins='http://localhost:5000') # CORS protects against the scenario where a malicious site tricks an unmodified browser to make a cross site-request to a legitimate site
def index():
    return render_template('index.html')

@app.route('/creative')
def creative():
    return render_template('creative.html')

@app.route('/answers')
def answers():
    return render_template('answers.html')

@socketio.on('connect')
def test_connect():
    emit('after connect',  {'data':'We are connected!'})



if __name__ == '__main__':
    socketio.run(app)