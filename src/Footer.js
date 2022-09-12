import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Footer() {
  return (
    <div className="footer">
      <p className="developer" id="developer">
        <a
          href="https://github.com/Vedina2022/Weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
          className="developer-link"
        >
          Open-source code
        </a>
        <span> by Nadiia Kyshinska</span>
      </p>
    </div>
  );
}
