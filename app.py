from flask import Flask,render_template
from flask_bootstrap import Bootstrap

app=Flask(__name__)
Bootstrap(app)

@app.route('/')
def home():
    return render_template("base.html")

@app.route('/home')
def home2():
    return render_template("home.html")

@app.route('/html')
def html():
    return render_template("html.html")

@app.route('/htmlgame')
def htmlgame():
    return render_template("htmlgame.html") 

@app.route('/about')
def about():
    return render_template("aboutus.html")

@app.route('/signup')
def signup():
    return render_template("signup.html")    
if __name__=='__main__':
    app.run(debug=True)    