import { motion } from "framer-motion";
import Header from "@/components/header/header";
import ContactItems from "@/components/contactItems/contactItems";

export default function Contact() {
  return (
    <>
      <Header title="Contact" />
      <motion.main
        initial={{ opacity: "0%" }}
        animate={{ opacity: "100%" }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
        exit={{ opacity: "0%" }}
      >
        <ContactItems />
      </motion.main>
    </>
  );
}
