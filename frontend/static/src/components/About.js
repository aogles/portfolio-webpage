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
    <div className="aboutMeContainer">
      <Header />

      <div className="gradient"></div>

      <article className="aboutMe">
        <div className="fadein-text">
          <p className="medical">
            <img src="https://cdn0.iconfinder.com/data/icons/education-color/128/education_color-14-2-256.png"></img>
          </p>
          <h1>About me professionally </h1>
          <p>
            As a highly motivated and disciplined individual with a passion for
            problem-solving, I am excited to apply my skills and experience to
            the field of software development.
          </p>
          <p>
            {" "}
            After six years in direct patient care roles, I have honed my
            ability to adapt quickly to new challenges, work collaboratively
            with diverse teams, and communicate effectively under pressure.
            Throughout my career in healthcare, I gained valuable experience in
            managing complex workflows, analyzing data, and leveraging
            technology to improve patient outcomes.
          </p>
          <p>
            As an Army officer, I developed skills in leadership, strategic
            planning, and project management that are highly applicable to
            software development. I am eager to leverage these skills to build
            innovative solutions that meet the needs of users and businesses
            alike. Whether it's developing new applications or improving
            existing ones, I am committed to delivering high-quality,
            user-focused products that make a positive impact.
          </p>

          <p className="medal">
            <img src="https://cdn4.iconfinder.com/data/icons/military-and-army-2/64/Army_1-05-256.png"></img>
          </p>
        </div>
      </article>

      <div>
        <h2>Outside of Work </h2>
        <p>
          I enjoy gardening, crawfish boils and spedning time with my dogs arkai
          and deku. anything sci-fi or fantasy and in the summer i love reading
          by the pool
        </p>
      </div>
      <div id="about-images">
        <img
          className="headshot "
          src={require("../Images/headshot.jpeg")}
          style={{ width: 400, height: 500, borderRadius: 400 / 2 }}
        ></img>
        <img
          className="army "
          src={require("../Images/army.jpeg")}
          style={{ width: 400, height: 300, borderRadius: 400 / 2 }}
        ></img>
        <img
          className="dogs "
          src={require("../Images/dogs.jpeg")}
          style={{ width: 400, height: 500, borderRadius: 400 / 2 }}
        ></img>
        <img
          className="crawfish "
          src={require("../Images/crawfish.jpeg")}
          style={{ width: 400, height: 500, borderRadius: 400 / 2 }}
        ></img>
      </div>
    </div>
  );
}

export default About;
