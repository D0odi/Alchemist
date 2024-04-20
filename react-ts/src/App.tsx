import { motion } from "framer-motion";
import { generateItem, serverStatus } from "./api/client";
import { useState } from "react";

function App() {
  const [generatedItem, setGeneratedItem] = useState<string>("");

  const handleGenerateItem = async () => {
    const res = await generateItem();
    if (res != null) setGeneratedItem(res);
    else setGeneratedItem("Error generating the loot");
  };
  return (
    <div className="full-screen items-center justify-center flex flex-col bg-white">
      <div className="h-2/3 w-1/2 justify-center items-center flex flex-col bg-gray-500">
        <div className="size-full bg-black grid grid-cols-3">
          <div className="col-span-2 flex p-10 bg-green-500">
            <p>{generatedItem}</p>
          </div>
          <div className="col-span-1 bg-orange-400 grid grid-rows-3">
            <div className="flex justify-center items-center">Title</div>
            <div className="flex justify-center items-center">Type</div>
            <div className="flex justify-center items-center">Rarity</div>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <motion.button
            className="w-1/3 h-28 bg-red-500"
            whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.7)" }}
            onClick={() => serverStatus()}
          >
            <span className="uppercase font-bold">Server Test</span>
          </motion.button>
          <motion.button
            className="w-full h-28 bg-red-500"
            whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.7)" }}
            onClick={() => handleGenerateItem()}
          >
            <span className="uppercase font-bold">Generate Item</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default App;
