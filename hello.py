from flask import Flask
from flask import url_for
from flask import render_template

app = Flask(__name__)

# Create the root/index route + method and display an HTML template
@app.route('/')
def index():
    return render_template('index.html') #Renders the HTML file in /templates directory: index.html

#with app.test_request_context():
    #print(url_for('static', filename="css/main.css"))
    #app.logger.debug('App has started in Debug mode') Log debug statement
    #app.logger.warning('A warning occurred (%d apples)', 42) #Log warning statement
    #app.logger.error('This is an error') #Log an error to the console

