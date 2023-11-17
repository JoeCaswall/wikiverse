import React, { useState } from "react";

const AddPage = ({ setIsAddPage, setUser }) => {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(`${apiURL}/wiki/`, {
      method: "POST",
      body: JSON.stringify({
        user: author,
        email: email,
        title: title,
        content: content,
        tags: tags,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setUser("");
    setEmail("");
    setTitle("");
    setContent("");
    setTags("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add your page below!</h2>
        <div>
          <input
            type="text"
            placeholder="Title"
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
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Author Name"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="email"
            placeholder="Author Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Tags"
            name="tags"
            onChange={(e) => setTags(e.target.value)}
          ></input>
        </div>
        <button type="submit" onClick={() => setIsAddPage(false)}>
          Create Page
        </button>
      </form>
    </>
  );
};

export default AddPage;
