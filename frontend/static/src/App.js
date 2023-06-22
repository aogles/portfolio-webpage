import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import home from "./home.jpeg";
import ReactDOM from "react-dom";

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
      <div className="title">
        <h1 id="page-title">Hello World,Im Amber</h1>
        <h2>Software Developer</h2>
      </div>
      <img
        className="home-image"
        src={require("./home.jpeg")}
        style={{ width: 400, height: 400, borderRadius: 400 / 2 }}
      ></img>
      <div className="Socials">
        <div className="Socials-text">
          {" "}
          <h2>Lets Connect </h2>
          <p>
            <img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-256.png"></img>
          </p>
          <p>
            <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"></img>
          </p>
          <p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1FzF6Xu9mFDEkhjdhSH92q0GN8sm3CKiEew&usqp=CAU"></img>
          </p>
        </div>
      </div>

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
