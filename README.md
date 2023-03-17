## ChatGPT微信小程序源码
包含前后端代码，基于[OpenAI GPT-3.5 Turbo API](https://platform.openai.com/docs/guides/chat)的 demo

后端部署
---
## 接口部署
1. 首先需要有一台外区的服务器，服务器环境要求python3.7以上版本，安装flask框架，拷贝index.py到flask运行目录，填写好key
2. 安装openai库到项目目录 `pip3 install openai -t ./`
3. 运行项目 `python3 index.py`
 
### 目前openai加强了api key的违规检测，对于直接部署在云函数的接口，因为IP不固定等原因很容易封号，现有两个解决方案
1. 有自己的备案域名，绑定到自己部署的服务器地址即可
2. 无备案域名，使用阿里云云函数创建nginx进行反向代理到你在外区所部署的接口服务器，使用云函数分配的url为接口地址

前端部署
---
1. 创建好小程序相关内容，打开小程序开发者工具
2. 导入项目，修改index.js中的apiurl为你的接口地址即可运行

演示地址：

![gh_01d6acdd49ae_344](https://user-images.githubusercontent.com/24582880/218671208-ebd81d32-20e3-4ba9-b3bc-698edcd0a8bc.jpg)

交流群：

![微信图片_20230313125145](https://user-images.githubusercontent.com/24582880/224611286-854da90a-754a-4fb2-862a-400ccc240245.jpg)
