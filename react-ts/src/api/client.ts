import axios from "axios";

const baseURL = "https://express-looter-ai.onrender.com";

export const client = axios.create({ baseURL });
