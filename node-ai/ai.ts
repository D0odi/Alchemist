// import OpenAI from "openai";
// export const openai = new OpenAI({ apiKey: process.env.GPT_KEY });
const { GoogleGenerativeAI } = require("@google/generative-ai");

const generationConfig = {
  stopSequences: ["New Item:"],
  maxOutputTokens: 100,
  temperature: 0.7,
  topP: 0.8,
  topK: 16,
};
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
export const ai = genAI.getGenerativeModel({
  model: "gemini-pro",
  generationConfig,
});
