from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/continent/<name>')
def continent(name):
    return render_template('continent.html', continent=name)

if __name__ == '__main__':
    app.run(debug=True)
