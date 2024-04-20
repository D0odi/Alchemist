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

app.post("/generate-item", async (req, res, next) => {
  console.log(req.body);
  const { sample_1, sample_2 } = req.body;
  try {
    const result = await ai.generateContent(
      `Generate a new item by combining the given items. Provide a brief description of the new item's properties.

      Item 1: Sword
      Item 2: Fire Gem
      New Item: Flameblade Sword - A sword imbued with the power of fire. It deals additional fire damage to enemies and can ignite flammable objects on hit.
      
      Item 1: Healing Potion
      Item 2: Frost Shard
      New Item: Frostbite Tonic - A chilling potion that temporarily slows down enemies and reduces their movement speed upon contact. It also provides a minor healing effect.
      
      Item 1: ${sample_1}
      Item 2: ${sample_2}
      New Item:`
    );
    const response = await result.response;
    const text = response.text();
    res
      .status(200)
      .json({ item: text, success: true, samples: [sample_1, sample_2] });
  } catch (error: unknown) {
    next(new Error((error as Error).message));
  }
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
