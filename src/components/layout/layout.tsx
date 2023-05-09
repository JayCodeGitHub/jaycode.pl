import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/globalStyles";
import { theme } from "@/styles/theme";
import NavBar from "../navbar/navbar";
import Background from "../background/background";
import Footer from "../footer/footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Background />
      <NavBar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
