import Header from "./Header";
import { useState } from "react";
import home from "../home.jpeg";
import headshot from "../Images/headshot.jpeg";
import crawfish from "../Images/crawfish.jpeg";
import dogs from "../Images/dogs.JPG";
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
          <h1>About Me Professionally</h1>
          <p>
            I am a highly motivated and disciplined individual with a passion
            for problem-solving and creativity. As a Carolina Code School
            graduate, I am excited to apply my new skills and experience to the
            field of software development.
          </p>
          <p>
            {" "}
            After six years in direct patient care roles, I decide to take a
            chance and apply for the VET-TEC program. This program allows
            veterans the opportunity to seek careers in tech. While software
            development is very different from the meical field, I gained
            valuable experience in managing complex workflows,working
            collaboratively, analyzing data, and leveraging technology to
            improve patient outcomes.
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
          src={require("../Images/dogs.JPG")}
          style={{ width: 400, height: 500, borderRadius: 400 / 2 }}
        ></img>
        <img
          className="crawfish "
          src={require("../Images/crawfish.jpeg")}
          style={{ width: 400, height: 500, borderRadius: 400 / 2 }}
        ></img>
      </div>
      <footer className="footer"></footer>
      <article className="personal-intro">
        <h2>Outside of Work </h2>
        <p>
          Gardening is one of my favorite past times, and during the summer
          indulging in the tradition of crawfish boils brings a sense of
          community and culinary adventure to my weekends. When I'm not tending
          to my green thumb or savoring flavorful crustaceans, you can often
          find me out and about enjoying the company of my dogs Deku and Arkai
          or by the poolside with a good book in hand.
        </p>
      </article>
      <div>© 2023, built using React.js and Django in New Orleans, LA</div>
    </div>
  );
}

export default About;
