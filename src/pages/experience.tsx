import { motion } from "framer-motion";
import Header from "@/components/header/header";
import Projects from "@/components/projects/projects";

export default function Experience() {
  return (
    <>
      <Header title="Experience" />
      <motion.main
        initial={{ opacity: "0%" }}
        animate={{ opacity: "100%" }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
        exit={{ opacity: "0%" }}
      >
        <Projects />
      </motion.main>
    </>
  );
}
