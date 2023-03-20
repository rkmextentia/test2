# server.py
from flask import Flask
import requests

app = Flask(__name__)

@app.route('/rate')
def get_rate():
    response = requests.get('https://api.exchangeratesapi.io/latest?base=EUR&symbols=USD')
    data = response.json()
    rate = data['rates']['USD']
    return {'rate': rate}

if __name__ == '__main__':
    app.run()