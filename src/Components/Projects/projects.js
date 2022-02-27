import React from "react";
import IMG1 from "./IMG/Screen Shot 2022-02-26 at 1.26.33 PM.png"
import IMG2 from "./IMG/Screen Shot 2022-02-26 at 1.27.37 PM.png"
import IMG3 from "./IMG/Screen Shot 2022-02-26 at 1.29.18 PM.png"
import IMG4 from "./IMG/Screen Shot 2022-02-26 at 1.30.33 PM.png"

import './Projects.css'

const Project = () => {
  return (
    <div className="section-projects" id="projects">
      <strong> Projects</strong>
      <div>
        <a href="https://lux-rentals.herokuapp.com/">
          <img src={IMG1} />
          <h2>Lux Rental</h2>
          <p>
            Node-based application for a car rental business, which consists of
            a full stack application created with express, mysql and sequelize
            through model/controller/view design pattern.
          </p>
          <a href="https://github.com/Kristal4673/LUX.git"> Github Link</a>
        </a>
      </div>
      <div>
        {" "}
        <a href="https://kristal4673.github.io/js_Quizlet/">
          <img src={IMG2} />
          <h2>JavaScript Quiz </h2>
          <p>
            Timed quiz on JavaScript fundamentals that stores high scores SO
            THAT I can gauge my progress compared to my peers
          </p>
          <a href="https://github.com/Kristal4673/js_Quizlet.git ">
            
            Github Link
          </a>
        </a>
      </div>
      <div>
        <a href="https://raversoutlet.herokuapp.com/">
          <img src={IMG3} />
          <h2>RaversOutlet</h2>
          <p>
            Ravers Outlet is an e-commerce Platform to allow fellow ravers to
            shop for rave essentials before any festival or concert!
          </p>
          <a href="https://github.com/Kristal4673/raversoutlet.git ">
            Github Link
          </a>
        </a>
      </div>
      <div>
        <a href="https://offlinebudgett.herokuapp.com/">
          <img src={IMG4} />
          <h2>Offline Budget </h2>
          <p>
            The user will be able to add expenses and deposits to their budget
            with or without a connection. When entering transactions offline,
            they should populate the total when brought back online.
          </p>
          <a href="https://github.com/Kristal4673/offline_budgeting "> Github Link </a>
        </a>
      </div>
    </div>
  );
};

export default Project;
