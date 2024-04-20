import axios from "axios";

const baseURL = "http://localhost:8080"; // http://localhost:8080

const client = axios.create({ baseURL });

const serverStatus = async (): Promise<void> => {
  try {
    const response = await client.get("/");
    console.log(response.data.message);
  } catch (error) {
    console.error(error);
  }
};

const generateItem = async (
  sample_1: string,
  sample_2: string
): Promise<string | null> => {
  try {
    const response = await client.post("/generate-item", {
      sample_1,
      sample_2,
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
