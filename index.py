from flask import Flask,request
import requests
import json
import random
import openai
import os

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '在此输入apikey 样式:sk-s5S5BoV...'

@app.route('/message',methods = ['POST'])
def mess():  # put application's code here
    message = request.json.get('msg')
    openai.api_key = "key" #修改这里为自己申请的api_key
    messages = [
        {"role": "system", "content": "You are a coding tutor bot to help user write and optimize python code."},
    ]
    messages.append({"role": "user", "content": message})
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo", 
    messages=[{"role": "user", "content": message}]
    )

    print(completion)
    #messages.append({"role": "assistant", "content": response["choices"][0]["message"].content})
    res = {
            "resmsg":completion,
            "code":200
            }
    return res
if __name__ == '__main__':
    app.run(threaded = False,processes=5,host="0.0.0.0",port="5000")
