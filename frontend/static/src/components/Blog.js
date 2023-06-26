import Header from "./Header";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { FaChevronCircleUp, FaSpotify } from "react-icons/fa";

function Blog({ blog, ...props }) {
  const [blogs, setBlogs] = useState([]);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch("/api_v1/blogs/");
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      const data = await response.json();
      setBlogs(data);
    };

    getBlogs();
  }, []);

  const addBlog = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("message", message);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: formData,
    };

    const response = await fetch("/api_v1/blogs/", options);
    if (!response.ok) {
      throw new Error("Network response not OK");
    }

    const data = await response.json();
    // Handle the response data if needed
  };

  const blogHTML = blogs.map((blog) => (
    <div className="blogContainer" key={blog.id}>
      <Button
        className="blogModal"
        variant="light"
        onClick={() => handleShow(blog)}
      >
        <img src={blog.image} alt="Blog Image" className="blogImage" />
        <h1>{blog.title}</h1>
      </Button>
    </div>
  ));

  return (
    <div>
      <Header />
      <div className="gradient" id="top">
        {" "}
        <h1> Blog Posts</h1>
        <p>
          My space for scribbling down notes around what I’m thinking
          about/working on/tinkering with. If you read anything here and have
          feedback, corrections or thoughts, send me a message!
        </p>
        <hr></hr>
      </div>
      <Player
        id="blog-plant1"
        className="blog-plant"
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_wkvirknu.json"
        style={{ height: "400px", width: "400px", alignItems: "right" }}
      >
        <Controls visible={false} />
      </Player>
      <Player
        id="blog-plant2"
        className="blog-plant"
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
      <div className="blogs">
        {blogHTML}

        {selectedBlog && (
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>{selectedBlog.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{selectedBlog.message}</Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
      <div className="arrow2 bounce">
        <a id="blogArrow" href="#top">
          <div style={{ width: 80, height: 80 }}>
            <FaChevronCircleUp />
          </div>
        </a>
      </div>
      <div>
        <Player
          id="blog-plant3"
          className="blog-plant"
          autoplay
          loop
          src="https://assets5.lottiefiles.com/temp/lf20_hKSrGc.json"
          style={{ height: "300px", width: "300px", alignItems: "right" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
        <Player
          id="blog-plant4"
          className="blog-plant"
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_wkvirknu.json"
          style={{ height: "400px", width: "400px", alignItems: "right" }}
        >
          <Controls visible={false} />
        </Player>
        <Player
          id="blog-plant5"
          className="blog-plant"
          autoplay
          loop
          src="https://assets5.lottiefiles.com/temp/lf20_hKSrGc.json"
          style={{ height: "300px", width: "300px", alignItems: "right" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
        <Player
          id="blog-plant6"
          className="blog-plant"
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_wkvirknu.json"
          style={{ height: "400px", width: "400px", alignItems: "right" }}
        >
          <Controls visible={false} />
        </Player>
      </div>

      <footer className="footer">
        <div style={{ width: 100, height: 100 }}>
          <FaSpotify />
          <h3>
            Last listened to{" "}
            <a src="https://open.spotify.com/track/6ElfCM1XppU0YWkkFYh4s2">
              Pressure
            </a>{" "}
            by Ari Lennox
          </h3>
        </div>
      </footer>
    </div>
  );
}

export default Blog;
