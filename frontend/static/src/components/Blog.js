import Header from "./Header";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function Blog({ blog, ...props }) {
  const [blogs, setBlogs] = useState([]);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

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
      throw new Error("network repsonse not ok.");
    }
    const data = await response.json();
  };

  const blogHTML = blogs.map((blog) => (
    <div key={blog.id}>
      <h1>{blog.title}</h1>
      <p>{blog.message}</p>
      <img src={blog.image} alt="Blog Image" />
    </div>
  ));

  return (
    <div>
      <Header />
      <div>Blog Page</div>

      <div>{blogHTML}</div>
    </div>
  );
}

export default Blog;
