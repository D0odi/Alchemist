import { ListItemProps } from "../types";
import { useState } from "react";
import { motion } from "framer-motion";

export const ListItem: React.FC<ListItemProps> = ({ sample, handleSelect }) => {
  const [isChosen, setisChosen] = useState(false);

  const handleClick = () => {
    if (handleSelect(sample)) setisChosen(!isChosen);
  };

  return (
    <motion.li
      className="p-3 hover:cursor-pointer"
      onClick={handleClick}
      animate={{
        backgroundColor: isChosen
          ? "rgba(239, 68, 68, 0.7)"
          : "rgba(239, 68, 68, 1)",
        scale: isChosen ? 1.05 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {sample}
    </motion.li>
  );
};
