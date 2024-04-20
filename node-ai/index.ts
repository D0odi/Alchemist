import express, {
  type Request,
  type Response,
  type NextFunction,
  type Express,
} from "express";
import { ai } from "./ai";
const cors = require("cors");
const app: Express = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.get(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(200).json({
        message: "server is on",
        success: true,
      });
    } catch (error: unknown) {
      next(new Error((error as Error).message));
    }
  }
);

app.get("/generate-item", async (req, res, next) => {
  try {
    const result = await ai.generateContent(
      "pick a random item from a random rpg game and give me its description"
    );
    const response = await result.response;
    const text = response.text();
    res.status(200).json({ item: text, success: true });
  } catch (error: unknown) {
    next(new Error((error as Error).message));
  }
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
