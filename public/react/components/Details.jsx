import React, { useState } from "react";

const Details = ({ singlePage, getAuthorFromTitle, user, setIsSinglePage }) => {
  getAuthorFromTitle(singlePage.authorId);
  const createdAt = singlePage.createdAt;
  const date = createdAt.slice(0, createdAt.indexOf("T"));
  const dateArray = date.split("-");
  const rightOrder = [dateArray[2], dateArray[1], dateArray[0]];
  const published = rightOrder.join("-");

  const tags = singlePage.tags;

  return (
    <>
      {console.log(singlePage)}
      <h3>{singlePage.title}</h3>
      <div>
        <h4>Author: </h4>
        <p>{user}</p>
      </div>
      <div>
        <h4>Published: </h4>
        <p>{published}</p>
      </div>
      <p>{singlePage.content}</p>
      <div>
        <h4>Tags:</h4>
        {tags.map((tag) => (
          <p>#{tag.name}</p>
        ))}
      </div>
      <button onClick={() => setIsSinglePage(false)}>Back to Wiki</button>
    </>
  );
};

export default Details;
