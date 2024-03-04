import React from "react";
import { ProjectStyle } from "./ProjectSytle";

export const Projects = () => {
  return (
    <ProjectStyle className="container">
      <div className="project-info">
        <iframe src="https://happykamper.vercel.app/" frameborder="0"></iframe>
        <div className="p-bottom">
          <h3>happycamper</h3>
          <p>React js, Ant Design , Silk Carousel , Font awsome icon </p>
          <a href="https://happykamper.vercel.app/" target="_blank">
            Go to website <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div className="project-info">
        <iframe
          src="https://standup-comedy-tikit.vercel.app/"
          frameborder="0"
        ></iframe>
        <div className="p-bottom">
          <h3>Vennu </h3>
          <p>
            React js, Login , Sing Up , Local Storage , Slote , Booking , Sell
            Slote
          </p>
          <a href="https://standup-comedy-tikit.vercel.app/" target="_blank">
            Go to website <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div className="project-info">
        <iframe
          src="https://meet-sabhani.github.io/Supplier/"
          frameborder="0"
        ></iframe>
        <div className="p-bottom">
          <h3>Supplier</h3>
          <p>HTML, CSS, javaScript, Font Aowsome Icon </p>
          <a href="https://meet-sabhani.github.io/Supplier/" target="_blank">
            Go to website <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div className="project-info">
        <iframe
          src="https://meet-sabhani.github.io/image-Search/"
          frameborder="0"
        ></iframe>
        <div className="p-bottom">
          <h3>Image Search</h3>
          <p>HTML, CSS, javaScript, unsplash Api </p>
          <a
            href="https://meet-sabhani.github.io/image-Search/"
            target="_blank"
          >
            Go to website <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </ProjectStyle>
  );
};
