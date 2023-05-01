import Header from "./Header";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function Blog(blog) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const useEffect (() => {
    const getBlogs = async () => {
      const response = await fetch("/api_v1/blogs/");
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      const data = await response.json();
      
    };

      getBlogs();
    }, []);
  
    
  
  

  const addBlog = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("message", message);

    console.log(title);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      message: formData,
    };
    const response = await fetch("/api_v1/blogs/", options);
    if (!response.ok) {
      throw new Error("network repsonse not ok.");
    }
    const data = await response.json();
  };

  return (
    <div>
      <Header />
      <div>Blog Page</div>;
    </div>
  );
}

export default Blog;
