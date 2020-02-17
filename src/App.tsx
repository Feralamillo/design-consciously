import * as React from "react";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typical from "react-typical";

import logo from "./img/dc-logo.png";

import "./styles.scss";

export const App = () => {
  return (
    <div className="main">
      <div className="App">
        <div className="container">
          <div className="logo-container">
            <img className="logo" src={logo} alt="Design Consciously" />
          </div>
          <div className="description">
            <p>
              We design experiences for soulful businesses by blending a
              pragmatic approach with{" "}
              <Typical
                steps={[
                  "originality",
                  2000,
                  "passion",
                  2000,
                  "creativity",
                  2000
                ]}
                loop={2}
                className="description-key"
                wrapper="span"
              />
            </p>
            <p>New website coming soon</p>
            <p>
              Get in touch with us at{" "}
              <a href="mailto:corina@designconsciously.com ">
                corina@designconsciously.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
      <a className="phone-icon" href="tel:+447913703623">
        <FontAwesomeIcon icon={faPhoneAlt} size="1x" />
        <div className="phone-number">07913 703 623</div>
      </a>
    </div>
  );
};

export default App;
