import Header from "./Header";
import { useState } from "react";

function About() {
  const [open, setOpen] = useState(false);

  return (
    <div className="aboutMe">
      <Header />
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
    </div>
  );
}

export default About;
