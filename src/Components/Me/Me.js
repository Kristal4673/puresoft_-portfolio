import React from "react";
import img from "./Img/CrystalSoto.jpeg";

const Me = () => {
  return (
    <div className="section-me" id="me">
      <div>
        <strong>Contact</strong>
        <img src={img} />
      </div>
      <div>
        <a href="https://github.com/Kristal4673">
          <h2>Github</h2>{" "}
        </a>
      </div>

      <div>
        <a>
          <a href="https://www.linkedin.com/in/crystal-soto-estrada-640171ab">
            <h2> Linkedin</h2>
          </a>
        </a>
      </div>
      <div>
        <h2>Email:</h2>
        <p> Puresoft.io@gmail.com </p>
      </div>
      <div>
        <h2>Phone:</h2>
        <p> 469-670-7105 </p>
      </div>
    </div>
  );
};

export default Me;
