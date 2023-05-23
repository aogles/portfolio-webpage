import Header from "./Header";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
      <div>Blog Page</div>

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
  );
}

export default Blog;
