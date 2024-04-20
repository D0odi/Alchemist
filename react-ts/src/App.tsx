import { motion } from "framer-motion";
import { generateItem, serverStatus } from "./api/client";
import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import { SelectedSamples } from "./types";

function App() {
  const [generatedSample, setGeneratedSample] = useState<string>("");
  const [generatedSamples, setGeneratedSamples] = useState<string[]>([
    "Earth",
    "Fire",
    "Water",
    "Air",
  ]);
  const [selectedSamples, setSelectedSamples] = useState<SelectedSamples>({
    sample_1: null,
    sample_2: null,
  });

  const handleSelect = (sampleName: string): boolean => {
    const entries = Object.entries(selectedSamples);
    const emptySlotEntry = entries.find(([, value]) => value === null);
    const existingSlotEntry = entries.find(([, value]) => value === sampleName);

    if (emptySlotEntry && !existingSlotEntry) {
      const [key] = emptySlotEntry;
      setSelectedSamples((prevState) => ({
        ...prevState,
        [key]: sampleName,
      }));
      return true;
    } else if (existingSlotEntry) {
      const [key] = existingSlotEntry;
      setSelectedSamples((prevState) => ({
        ...prevState,
        [key]: null,
      }));
      return true;
    } else {
      return false;
    }
  };

  const handleGenerateItem = async () => {
    const { sample_1, sample_2 } = selectedSamples;
    const res =
      sample_1 && sample_2
        ? await generateItem(sample_1, sample_2)
        : "Error generating the loot";

    if (res) {
      setGeneratedSample(res);
      setGeneratedSamples((prev) => [...prev, res.split(" -")[0]]);
    } //handle types across full stack to avoid this
  };

  return (
    <div className="full-screen items-center justify-center flex flex-col bg-white">
      <div className="h-2/3 w-1/2 flex flex-col bg-transparent">
        <div className="flex flex-row bg-transparent h-full">
          <div className="w-1/4 overflow-y-scroll overflow-x-hidden bg-red-700">
            <ul>
              {generatedSamples.map((sample, index) => (
                <ListItem
                  key={index}
                  sample={sample}
                  handleSelect={handleSelect}
                />
              ))}
            </ul>
          </div>
          <div className="w-3/4 bg-transparent flex justify-center items-center p-20">
            <div>{generatedSample}</div>
          </div>
        </div>
        <div className="flex justify-between mt-auto ">
          <div className="flex flex-1 flex-row">
            <motion.button
              className=" flex-1 bg-red-500"
              whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.7)" }}
              onClick={() => serverStatus()}
            >
              <span className="uppercase font-bold">Server Test</span>
            </motion.button>
            <motion.button
              className=" h-28 flex-[2] bg-red-500"
              whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.7)" }}
              onClick={() => handleGenerateItem()}
            >
              <span className="uppercase font-bold">Generate Item</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
