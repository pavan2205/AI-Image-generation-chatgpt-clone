import { Configuration, OpenAIApi } from "openai";
import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.route("/").post(async (req, res) => {
  const { message } = req.body;
  console.log(message);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    temperature: 0.5,
    max_tokens: 300,
  });
  res.json({ message: response.data.choices[0].text });
});

export default router;
