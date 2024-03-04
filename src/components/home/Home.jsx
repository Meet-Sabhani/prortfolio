import React from "react";
import MeetImg from "../../images/Meet.jpg";
import { HomeStyle } from "./HomeStyle";

export const Home = () => {
  return (
    <HomeStyle>
      <div className="bg-layer"></div>
      <div className="wrap-home container">
        <div className="home-left">
          <img src={MeetImg} alt="" />
          <div className="name-wrap">
            <h1>Meet Sabhani</h1>
            <p>@Meet-Sabhani</p>
          </div>
        </div>
        <div className="home-Right">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/meet-sabhani-548829196/"
          >
            <i class="fa-brands fa-linkedin-in"></i>
            <span> Follow me on Linkedin</span>
          </a>
          <a target="_blank" href="https://github.com/Meet-Sabhani">
            <i class="fa-brands fa-github"></i>
            <span> Follow me on GitHub</span>
          </a>
        </div>
      </div>
    </HomeStyle>
  );
};
