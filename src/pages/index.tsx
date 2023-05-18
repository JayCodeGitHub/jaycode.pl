import { motion } from "framer-motion";
import Hero from "@/components/hero/hero";
import Tiles from "@/components/tiles/tiles";
import AnimationSection from "@/components/animationSection/animationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <motion.main
        initial={{ opacity: "0%" }}
        animate={{ opacity: "100%" }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
        exit={{ opacity: "0%" }}
      >
        <Tiles />
        <AnimationSection />
      </motion.main>
    </>
  );
}
