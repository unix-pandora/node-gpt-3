# node-gpt-3

<hr>
<hr>

# brief introduction

Call GPT-3 interface based on NodeJS to realize question and answer with AI.

<hr>

# Add Key

In the root directory:

- Step 1:

  ```
  cp env.example .env
  ```

- Step 2:

In `.env`, assign your API key to `OPENAI_API_KEY`. The specific key is obtained from your OpenAI account

<hr>

# Installation dependency

```
npm --registry https://registry.npm.taobao.org install
```

<hr>

# Create a question and answer file

In the root directory:

```
mkdir txt;

cd txt;

touch last-question.txt  questions.txt  recvice.txt;

```

<hr>

# Operation steps

- Write down the questions you want to ask in `txt/questions.txt`

- start-up: `npm start` or `npm run start`

- If successful, the returned answer will be in `txt/reception.txt`; If you fail, you can only ask again

<hr>

# be careful

- The submitted question cannot be empty, too short or too long (i.e. more than 1024 characters)

- The problems submitted for two consecutive times cannot be the same (to avoid wasting resources)

- The problem cannot be submitted frequently in a short time, and the server error may be returned

<hr>
<hr>

# 简介

基于 NodeJS 调用 GPT-3 接口实现与 AI 进行问答

<hr>

# 添加密钥

- 第一步:

在根目录下:

```
cp env.example .env
```

- 第二步:

在`.env`内,为`OPENAI_API_KEY`赋予你的 API 密钥,具体的密钥从你的 OpenAI 帐号中获取

<hr>

# 安装依赖

```
npm --registry https://registry.npm.taobao.org install
```

<hr>

# 创建问答文件

在根目录下:

```
mkdir txt;

cd txt;

touch last-question.txt  questions.txt  recvice.txt;

```

<hr>

# 操作步骤

- 在`txt/questions.txt`内写下你想问的问题

- 启动: `npm start` 或 `npm run start`

- 如果成功的话,返回的答案会在`txt/recvice.txt`内; 如果失败的话,只能再重新提问

<hr>

# 注意

- 提交的问题不能为空,不能太短,不能太长(即超过 1024 个字符)

- 连续两次提交的问题不能都一样(避免浪费资源)

- 不能在短时间内频繁提交问题,可能会返还服务器错误

<hr>
