import { animate, motion } from "framer-motion";

const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//calculating the reverse index for staggered delay

const reverseIndex = (index) => {
  const totalStep = 6; //Total number of steps
  return totalStep - index - 1;
};

export default function Stairs() {
  return (
    <>
      {/* Rendering 6 motion div, each representing a step of the stairs
        
        Each div will have the same  animation defined by the stairsAnimation object.
        The delay for each div is calculated sinamically  based on its reverse index,
        creating a  staggered effect with the decreasing delay  for each subsequent step.
        */}

      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairsAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
}
