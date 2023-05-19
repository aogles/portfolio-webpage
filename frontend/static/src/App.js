import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [contacts, setContacts] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
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

  const addContactInfo = async () => {
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
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addContactInfo({ name, email, phone, contactMessage });
  };

  return (
    <div className="App">
      <nav>
        {" "}
        <Header />
      </nav>
      <h1 id="page-title">Hello World,Im Amber</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={setEmail}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={setName}
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={setPhone}
            value={phone}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>message</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={setContactMessage}
            value={contactMessage}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
