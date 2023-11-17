import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import Details from "./Details";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [singlePage, setSinglePage] = useState({});
  const [user, setUser] = useState("");
  const [isSinglePage, setIsSinglePage] = useState(false);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchSinglePage(slug) {
    try {
      const res = await fetch(`${apiURL}/wiki/${slug}`);
      const data = await res.json();
      setIsSinglePage(true);
      setSinglePage(data);
    } catch (err) {
      console.log("Oh no an error!", err);
    }
  }

  async function getAuthorFromTitle(userId) {
    try {
      const res = await fetch(`${apiURL}/users/${userId}`);
      const data = await res.json();
      const name = data.name;
      setUser(name);
    } catch (err) {
      console.log("Oh no an error!", err);
    }
  }

  async function getPageTags(slug) {
    try {
      const res = await fetch(`${apiURL}/wiki/${slug}`);
    } catch (err) {
      console.log("Oh no, an error!", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <main>
      <h1>WikiVerse</h1>
      {isSinglePage ? (
        <Details
          singlePage={singlePage}
          getAuthorFromTitle={getAuthorFromTitle}
          user={user}
          setIsSinglePage={setIsSinglePage}
        />
      ) : (
        <>
          <h2>An interesting 📚</h2>
          <PagesList fetchSinglePage={fetchSinglePage} pages={pages} />
        </>
      )}
    </main>
  );
};
