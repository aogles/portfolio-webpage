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
              <div class="job-title">
                <div className="Company">
                  <h6 className="job-title2">Front End Engineer"</h6>
                  <h6 className="stack-logo">
                    <a href="#" target="__blank">
                      stack used
                    </a>
                  </h6>
                </div>
                <div class="timeframe">Oct 2022 - Present</div>
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
                  <h6 className="job-title2">Front End Engineer"</h6>
                  <h6 className="stack-logo">
                    <a href="#" target="__blank">
                      stack used
                    </a>
                  </h6>
                </div>
                <div class="timeframe">Oct 2022 - Present</div>
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
                  <h6 className="job-title2">Front End Engineer"</h6>
                  <h6 className="stack-logo">
                    <a href="#" target="__blank">
                      stack used
                    </a>
                  </h6>
                </div>
                <div class="timeframe">Oct 2022 - Present</div>
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
                  <h6 className="job-title2">Front End Engineer"</h6>
                  <h6 className="stack-logo">
                    <a href="#" target="__blank">
                      stack used
                    </a>
                  </h6>
                </div>
                <div class="timeframe">Oct 2022 - Present</div>
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
                  <h6 className="job-title2">Front End Engineer"</h6>
                  <h6 className="stack-logo">
                    <a href="#" target="__blank">
                      stack used
                    </a>
                  </h6>
                </div>
                <div class="timeframe">Oct 2022 - Present</div>
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
