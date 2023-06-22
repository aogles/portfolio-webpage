import Header from "./Header";
import { useState } from "react";
import home from "../home.jpeg";
import headshot from "../Images/headshot.jpeg";
import crawfish from "../Images/crawfish.jpeg";
import dogs from "../Images/dogs.jpeg";
import army from "../Images/army.jpeg";

function About() {
  const [open, setOpen] = useState(false);

  return (
    <div className="aboutMe">
      <Header />
      <div className="gradient"></div>
      <article className="aboutMe">
        <div className="fadein-text">
          As a highly motivated and disciplined individual with a passion for
          problem-solving, I am excited to apply my skills and experience to the
          field of software development. After six years in direct patient care
          roles, I have honed my ability to adapt quickly to new challenges,
          work collaboratively with diverse teams, and communicate effectively
          under pressure. Throughout my career in healthcare, I gained valuable
          experience in managing complex workflows, analyzing data, and
          leveraging technology to improve patient outcomes. As an Army officer,
          I developed skills in leadership, strategic planning, and project
          management that are highly applicable to software development. I am
          eager to leverage these skills to build innovative solutions that meet
          the needs of users and businesses alike. Whether it's developing new
          applications or improving existing ones, I am committed to delivering
          high-quality, user-focused products that make a positive impact.
        </div>
      </article>
      <div className="row">
        <img
          className="headshot column"
          src={require("../Images/headshot.jpeg")}
          style={{ width: 400, height: 500, borderRadius: 400 / 2 }}
        ></img>
        <img
          className="army column"
          src={require("../Images/army.jpeg")}
          style={{ width: 400, height: 300, borderRadius: 400 / 2 }}
        ></img>
        <img
          className="dogs column"
          src={require("../Images/dogs.jpeg")}
          style={{ width: 400, height: 500, borderRadius: 400 / 2 }}
        ></img>
        <img
          className="crawfish column"
          src={require("../Images/crawfish.jpeg")}
          style={{ width: 400, height: 500, borderRadius: 400 / 2 }}
        ></img>
      </div>
    </div>
  );
}

export default About;
