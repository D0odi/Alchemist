// import OpenAI from "openai";
const { GoogleGenerativeAI } = require("@google/generative-ai");

// export const openai = new OpenAI({ apiKey: process.env.GPT_KEY });
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
export const ai = genAI.getGenerativeModel({ model: "gemini-pro" });
