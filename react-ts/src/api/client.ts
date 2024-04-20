import axios from "axios";

const baseURL = "http://localhost:8080"; // https://express-looter-ai.onrender.com

const client = axios.create({ baseURL });

const serverStatus = async (): Promise<void> => {
  try {
    const response = await client.get("/");
    console.log(response.data.message);
  } catch (error) {
    console.error(error);
  }
};

const generateItem = async (): Promise<string | null> => {
  try {
    const response = await client.post("/generate-item", {
      sample_1: "water",
      sample_2: "dirt",
    });

    if (response.data.success) {
      return response.data.item;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { serverStatus, generateItem };
