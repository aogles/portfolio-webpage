import Header from "./Header";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";

function About() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Header />
      <div className="aboutMe">
        <>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-fade-text"
            aria-expanded={open}
          >
            About Me
          </Button>
          <Fade in={open}>
            <div id="example-fade-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high
              life accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high
              life accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high
              life accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high
              life accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Fade>
        </>
      </div>
      <div className="fadein-text">Testing Animation</div>
    </div>
  );
}

export default About;
