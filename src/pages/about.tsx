import { motion } from "framer-motion";
import Header from "@/components/header/header";
import AboutSection from "@/components/aboutSection/aboutSection";

export default function About() {
  return (
    <>
      <Header title="About" />
      <motion.main
        initial={{ opacity: "0%" }}
        animate={{ opacity: "100%" }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
        exit={{ opacity: "0%" }}
      >
        <AboutSection />
      </motion.main>
    </>
  );
}
