import React from "react";
import { SkillsStyle } from "./SkillsStyle";

export const Skills = () => {
  return (
    <SkillsStyle className="container">
      <h1>What i know</h1>
      <div className="skills-list">
        <p>HTML</p>
        <p>CSS</p>
        <p>Styled Components</p>
        <p>JavaScript</p>
        <p>React js</p>
        <p>Ant Design</p>
      </div>
    </SkillsStyle>
  );
};
