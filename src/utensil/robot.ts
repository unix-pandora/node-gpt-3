import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

//环境参数
dotenv.config();
const env = process.env;

const configure = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configure);

export async function getRespond(enquireWord: string) {
  console.info("enquireWord: " + enquireWord);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: enquireWord,
    temperature: 0.9, //每次返回答案相似度0~1(0:每次都一致,1:每次都不同)
    max_tokens: 4000,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    stop: ["Human: ", "AI: "],
  });

  return response;
}
