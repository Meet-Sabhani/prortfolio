import React from "react";
import { ProjectStyle } from "./ProjectSytle";

export const Projects = () => {
  return (
    <ProjectStyle className="container">
      <div className="project-info">
        <iframe
          src="https://vennu-booking.vercel.app/"
          frameborder="0"
          scrolling="no"
        ></iframe>
        <div className="p-bottom">
          <h3>Vennu </h3>
          <p>
            React js, Login , Sing Up , Local Storage , Slote , Booking , Sell
            Slote , redux
          </p>
          <a href="https://vennu-booking.vercel.app/" target="_blank">
            Go to website <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div className="project-info">
        <iframe
          src="https://meet-sabhani.github.io/Supplier/"
          frameborder="0"
          scrolling="no"
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
          scrolling="no"
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
