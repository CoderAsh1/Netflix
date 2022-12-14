import React, { useState } from "react";
import "./accordion.scss";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h2>{title}</h2>
        <h2>{isActive ? "-" : "+"}</h2>
      </div>
      {isActive && (
        <div className="accordion-content" data-aos="fade-in">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
