import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      style={{
        width: "auto",
        height: "",
        borderRadius: "10px",
      }}
      animate={{
        backgroundColor: [
          "#000000",
          "#333333",
          "#666666",
          "#999999",
          "#000000",
        ],
      }}
      transition={{
        duration: 4, // Duration of one full cycle (in seconds)
        repeat: Infinity, // Infinite repetition
        ease: "linear", // Smooth transition between colors
      }}
      className="flex  justify-center items-center opacity-70 fixed top-0 left-0 right-0 h-screen z-10 w-screen"
    >
      <span className="text-xl xl:text-3xl">Submitting...</span>
    </motion.div>
  );
}
