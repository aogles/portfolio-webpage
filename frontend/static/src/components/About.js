import Header from "./Header";
import { useState } from "react";

function About() {
  const [open, setOpen] = useState(false);

  return (
    <div className="aboutMe">
      <Header />
      <article className="aboutMe">
        <div className="fadein-text">
          Testing Animation Anim pariatur cliche reprehenderit, enim eiusmod
          high life accusamus terry richardson ad squid. Nihil anim keffiyeh
          helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
          proident. Anim pariatur cliche reprehenderit, enim eiusmod high life
          accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,
          craft beer labore wes anderson cred nesciunt sapiente ea proident.
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur
          cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche
          reprehenderit, enim eiusmod high life accusamus terry richardson ad
          squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
          cred nesciunt sapiente ea proident.
        </div>
      </article>
    </div>
  );
}

export default About;
