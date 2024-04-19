import { motion } from "framer-motion";
import { client } from "./api/client";

function App() {
  const handleClick = async () => {
    try {
      const response = await client.get("/");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="full-screen items-center justify-center flex flex-col bg-white">
      <div className="h-2/3 w-1/2 justify-center items-center flex flex-col bg-gray-500">
        <div className="size-full bg-black grid grid-cols-3">
          <div className="col-span-2 flex justify-center items-center bg-green-500">
            fdf
          </div>
          <div className="col-span-1 bg-orange-400 grid grid-rows-3">
            <div className="flex justify-center items-center">Title</div>
            <div className="flex justify-center items-center">Type</div>
            <div className="flex justify-center items-center">Rarity</div>
          </div>
        </div>
        <motion.button
          className="w-full h-28 bg-red-500"
          whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.7)" }}
          onClick={() => handleClick()}
        >
          fdf
        </motion.button>
      </div>
    </div>
  );
}

export default App;
