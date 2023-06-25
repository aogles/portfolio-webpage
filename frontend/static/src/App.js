import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import home from "./home.jpeg";
import ReactDOM from "react-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { FaChevronCircleDown } from "react-icons/fa";

function App() {
  const [contacts, setContacts] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  useEffect(() => {
    const getContactInfo = async () => {
      const response = await fetch("/api_v1/contacts/");
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      const data = await response.json();
      setContacts(data);
    };

    getContactInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactInfo = {
      name: name,
      email: email,
      phone: phone,
      text: contactMessage,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(contactInfo),
    };
    const response = await fetch("/api_v1/contacts/", options);
    if (!response.ok) {
      throw new Error("network repsonse not ok.");
    }
    const data = await response.json();

    setName("");
    setPhone("");
    setEmail("");
    setContactMessage("");
  };

  return (
    <div className="App">
      <nav>
        {" "}
        <Header />
      </nav>
      <Player
        id="hangingPlant"
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_prkjnzba.json"
        style={{ height: "300px", width: "300px", alignItems: "right" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
      <div className="title  slide-right">
        <h1 id="page-title">Amber Oglesby</h1>
        <h2>Full-Stack Developer | Building the Future, One Line at a Time </h2>
      </div>
      <img
        className="home-image"
        src={require("./home.jpeg")}
        style={{ width: 400, height: 400, borderRadius: 400 / 2 }}
      ></img>
      <div className="arrow bounce">
        <a href="#info-section">
          <div style={{ width: 80, height: 80 }}>
            <FaChevronCircleDown />
          </div>
        </a>
      </div>
      <div className="Socials ">
        <div className="Socials-text">
          {" "}
          <div className="intro" id="info-section">
            <p>
              {" "}
              Welcome to my portfolio! I'm thrilled that you've taken the time
              to explore my work. On this webpage, you'll find a navigation bar
              at the top, guiding you to different sections of my portfolio.
            </p>
            <p>
              The "About Me" page provides insights into my professional
              background and offers a glimpse into who I am beyond being a
              developer. It's a great way to get to know me on a personal level.
              The "Blog" page is a space where I share my thoughts, updates on
              my coding journey, and exciting technologies that I'm currently
              working with. It's a platform for me to express my ideas and
              engage with fellow enthusiasts.
            </p>
            <p>
              Lastly, I invite you to visit my "Work" page, where you can
              explore my latest applications. Feel free to check them out and
              even stick around for a game of Connect Four. I hope you enjoy
              your time here! Thank you once again for visiting, and please feel
              free to reach out if you have any questions or feedback.
            </p>
            <p> - Amber</p>
          </div>
          <div className="row">
            <p className="column">
              <img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-256.png"></img>
            </p>
            <p className="column">
              <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"></img>
            </p>
            <p className="column">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/2840/tiktok-logo-512.png"></img>
            </p>
            <p className="column">
              <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_email-256.png"></img>
            </p>
          </div>
        </div>
      </div>
      <div className="plant-icons">
        <img src="https://cdn2.iconfinder.com/data/icons/fruit-and-vegetable-64/340/cactus_plant_green_nature_cacti-512.png"></img>
        <img src="https://cdn3.iconfinder.com/data/icons/stationery-and-office-3/64/Laptop-computer-electronics-technology-computing-business-256.png"></img>
      </div>
      <h5>
        "Success in tech requires resilience, determination, and the belief that
        you belong in this space. Embrace the challenges and prove yourself." -
        Arlan Hamilton, Founder and Managing Partner of Backstage Capital
      </h5>
      <Player
        id="hangingPlant2"
        autoplay
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_sg1vub6j.json"
        style={{ height: "300px", width: "300px", alignItems: "right" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
      <Player
        id="p2"
        className="formplant"
        autoplay
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_valvvrfy.json"
        style={{ height: "400px", width: "400px", alignItems: "left" }}
      >
        <Controls visible={false} />
      </Player>
      <div className="contactForm">
        <p className="contactTitle">Leave your Contact information</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              placeholder="Message"
              onChange={(e) => setContactMessage(e.target.value)}
              value={contactMessage}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
