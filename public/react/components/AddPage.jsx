import React, { useState } from "react";
import apiURL from "../api";

const AddPage = ({ setIsAddPage, setUser, user, fetchPages }) => {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    let page = await fetch(`${apiURL}/wiki/`, {
      method: "POST",
      body: JSON.stringify({
        name: user,
        email: email,
        title: title,
        content: content,
        tags: tags,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(page);
    setUser("");
    setEmail("");
    setTitle("");
    setContent("");
    setTags("");
    setIsAddPage(false);
    fetchPages();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add your page below!</h2>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Article Content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Author Name"
            name="user"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
              //   console.log(user);
            }}
          ></input>
        </div>
        <div>
          <input
            type="email"
            placeholder="Author Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Tags"
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit" className="button">
            Create Page
          </button>
          <button onClick={() => setIsAddPage(false)} className="button">
            Back to Wiki
          </button>
        </div>
      </form>
    </>
  );
};

export default AddPage;
