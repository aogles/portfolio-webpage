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
import { reason } from "../Images/reason_one_inc_logo.jpeg";
import { het } from "../Images/het-logo.png";

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
                  Convoy Commander
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
                <p>Built military convoy training application</p>
                <ul>
                  <li>
                    Full-stack mobile application that utilizes Django and
                    ReactJS.
                  </li>
                  <li>
                    Built RESTful API in Django using Django Rest Framework that
                    implements CRUD.
                  </li>
                  <li>Integrated Google Maps API for navigation assistance.</li>
                  <li>
                    Implemented a comprehensive user authentication and access
                    control system using Django Rest Auth.
                  </li>
                  <li>Application data stored in PostgreSQL database.</li>
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
                <p>Webpage recreation & scraping</p>
                <ul>
                  <a
                    href="https://www.linkedin.com/posts/amber-l-oglesby_css-project-pixelperfect-activity-7038026824227966976-9gdK?utm_source=share&utm_medium=member_desktop"
                    target="__blank"
                  >
                    {" "}
                    Recreated webpages to client specification using HTML and
                    CSS that is a pixel perfect match to the provided desktop
                    image.
                  </a>
                </ul>
                <hr></hr>
              </div>
            </div>
            <div>
              <div class="job-title">
                <div className="Company">
                  <a>
                    <img
                      id="reason"
                      src={require("../Images/reason_one_inc_logo.jpeg")}
                    ></img>
                  </a>
                  <div className="wordle">Reason One</div>
                  <h6 className="job-title2">Scholarship Recipient & Mentee</h6>
                  <h6 className="stack-logo">
                    <a
                      href="https://www.reasononeinc.com/reason-one-mentorship-and-scholarship-winners-2023"
                      target="__blank"
                    >
                      Reason One
                    </a>
                  </h6>
                </div>
                <div class="timeframe">May 2023</div>
              </div>
              <div class="job-details">
                <p>Tech mentorship program </p>
                <ul>
                  <li>
                    A full service agency building a creating useful, inclusive
                    websites for healthcare, associations, and nonprofits. A
                    Certified B Corporation™, we use our business as a force for
                    good.
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
                      src={require("../Images/het-logo.png")}
                    ></img>
                  </a>
                  Morehouse College
                  <h6 className="job-title2">Front End Developer</h6>
                  <h6 className="stack-logo">
                    <a
                      href="https://healthequitytracker.org/?gad_source=1&gclid=Cj0KCQjw4MSzBhC8ARIsAPFOuyXpcY_zI8rCYV3JkF57PzuMpek-BsJTb9zaLwhVSCLfyW9BuVm9i3YaAp34EALw_wcB"
                      target="__blank"
                    >
                      Health Equity Tracker
                    </a>
                  </h6>
                </div>
                <div class="timeframe">February 2024</div>
              </div>
              <div class="job-details">
                <p> Open Source Contribution Program</p>
                <ul>
                  <li>
                    The Health Equity Tracker from the Satcher Health Leadership
                    Institute aims to address health disparities in the United
                    States by identifying at-risk populations and highlighting
                    data inequities
                  </li>
                  <li>
                    Develop new features, fix bugs, and improve the codebase for
                    the Health Equity Tracker.
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
