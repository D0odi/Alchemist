// import OpenAI from "openai";
// export const openai = new OpenAI({ apiKey: process.env.GPT_KEY });
const { GoogleGenerativeAI } = require("@google/generative-ai");

const generationConfig = {
  stopSequences: ["New Item:"],
  maxOutputTokens: 70,
  temperature: 0,
  topP: 0.95,
  topK: 1,
};
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
export const ai = genAI.getGenerativeModel({
  model: "gemini-pro",
  generationConfig,
});
