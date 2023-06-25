import Header from "./Header";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import { FaReact, FaGithub, FaPython, FaBootstrap } from "react-icons/fa";
import { BiLogoDjango, BiLogoJavascript } from "react-icons/bi";

function Work() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <Header />
        <div className="gradient"></div>
      </div>
      <div>
        <div className="experience-head">
          <h2>Experience</h2>
          <div className="row">
            <div className="column  tech-icons">
              <FaGithub />
            </div>
            <div className="column  tech-icons">
              <BiLogoJavascript />
            </div>
            <div className="column  tech-icons">
              <FaPython />
            </div>
            <div className="column  tech-icons">
              <BiLogoDjango />{" "}
            </div>
            <div className="column  tech-icons">
              <FaReact />
            </div>
            <div className="column  tech-icons">
              <FaBootstrap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
