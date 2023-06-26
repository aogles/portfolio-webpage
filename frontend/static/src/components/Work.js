import Header from "./Header";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import { FaReact, FaGithub, FaPython, FaBootstrap } from "react-icons/fa";
import { FaTruckFront } from "react-icons/fa6";
import { BiLogoDjango, BiLogoJavascript, BiNavigation } from "react-icons/bi";
import { CgCopy } from "react-icons/cg";
import { BsFillFileWordFill } from "react-icons/bs";
import { GiGamepadCross } from "react-icons/gi";
import { convoy } from "../Images/convoy-commander.png";
import { game } from "../Images/game-logo.png";

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
          <div className="row">
            <div className="column  tech-icons bounce">
              <FaGithub />
            </div>
            <div className="column  tech-icons bounce">
              <BiLogoJavascript />
            </div>
            <div className="column  tech-icons bounce">
              <FaPython />
            </div>
            <div className="column  tech-icons bounce">
              <BiLogoDjango />{" "}
            </div>
            <div className="column  tech-icons spin">
              <FaReact />
            </div>
            <div className="column  tech-icons bounce">
              <FaBootstrap />
            </div>
            <h2>Experience</h2>
            <div>
              <div className="job-title">
                <div className="Company ">
                  <a>
                    <img
                      id="convoy"
                      src={require("../Images/convoy-commander.png")}
                    ></img>
                  </a>
                  Convoy Trainer
                  <h6 className="job-title2">Full Stack Engineer</h6>
                  <h6 className="stack-logo">
                    <a
                      href="https://convoy-commander.herokuapp.com/"
                      target="__blank"
                    >
                      Convoy Conmmander
                    </a>
                  </h6>
                </div>
                <div className="timeframe">January 2023 - Present</div>
              </div>
              <div class="job-details">
                <p>Helping build better API docs</p>
                <ul>
                  <li>
                    Building out new Metrics features for data-driven API
                    insights
                  </li>
                </ul>
                <hr></hr>
              </div>
            </div>

            <div>
              <div class="job-title">
                <div className="Company ccs">
                  <a>
                    <img src="https://avatars.githubusercontent.com/u/121811161?s=64&v=4"></img>
                  </a>
                  Carolina Code School
                  <h6 className="job-title2">Front End Engineer</h6>
                  <h6 className="stack-logo">
                    <a
                      href="https://aogles.github.io/pixel-perfect"
                      target="__blank"
                    >
                      Pixel Perfect
                    </a>
                  </h6>
                </div>
                <div class="timeframe">January 2023 - February 2023</div>
              </div>
              <div class="job-details">
                <p>Helping build better API docs</p>
                <ul>
                  <li>
                    Building out new Metrics features for data-driven API
                    insights
                  </li>
                </ul>
                <hr></hr>
              </div>
            </div>
            <div>
              <div class="job-title">
                <div className="Company">
                  <p>
                    <BsFillFileWordFill />
                  </p>
                  <div className="wordle">Wordle</div>
                  <h6 className="job-title2">Front End Engineer</h6>
                  <h6 className="stack-logo">
                    <a
                      href="replit.com/@aogles/pythonwordlegame"
                      target="__blank"
                    >
                      Python Wordle
                    </a>
                  </h6>
                </div>
                <div class="timeframe">March 2023</div>
              </div>
              <div class="job-details">
                <p>Helping build better API docs</p>
                <ul>
                  <li>
                    Building out new Metrics features for data-driven API
                    insights
                  </li>
                </ul>
                <hr></hr>
              </div>
            </div>
            <div>
              <div class="job-title">
                <div className="Company">
                  <a>
                    <img
                      id="game"
                      src={require("../Images/game-logo.png")}
                    ></img>
                  </a>
                  Amateur Games
                  <h6 className="job-title2">Front End Engineer</h6>
                  <h6 className="stack-logo">
                    <a
                      href="https://aogles.github.io/react_connect_4_app/"
                      target="__blank"
                    >
                      Connect 4
                    </a>
                  </h6>
                </div>
                <div class="timeframe">May 2023</div>
              </div>
              <div class="job-details">
                <p>Helping build better API docs</p>
                <ul>
                  <li>
                    Building out new Metrics features for data-driven API
                    insights
                  </li>
                </ul>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
