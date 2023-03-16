# ChatGPT-wxapp
## ChatGPT微信小程序源码

后端接口使用flask框架部署，拷贝index.py到flask运行目录，填写好key

~~建议使用阿里云函数计算FC，免备案~~
~~备注：1、使用云函数创建flask应用时，不要选择大陆区域，建议选择美区； 2、部署环境需要手动安装openai库）~~

* ### 目前OPENAI加强了openai账号 api key的违规检测，对于直接部署在云函数的接口很容易封号，现有两个解决方案
  * #### 1、有自己的备案域名，建议直接部署在国外服务器，保持固定ip访问接口
  * #### 2、无备案域名，使用云函数创建nginx进行反向代理到国外服务器，接口同样部署在国外服务器



配置好后端接口,导入项目到小程序后，只需要修改index.js中的apiurl为你的接口地址即可运行

演示地址：

![gh_01d6acdd49ae_344](https://user-images.githubusercontent.com/24582880/218671208-ebd81d32-20e3-4ba9-b3bc-698edcd0a8bc.jpg)

交流群：

![微信图片_20230313125145](https://user-images.githubusercontent.com/24582880/224611286-854da90a-754a-4fb2-862a-400ccc240245.jpg)
