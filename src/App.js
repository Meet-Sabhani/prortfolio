import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Home } from "./components/home/Home";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme/Them";
import { FooterS } from "./components/footer/Footer";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Home />
      <Projects />
      <Skills />
      <FooterS />
    </ThemeProvider>
  );
};
