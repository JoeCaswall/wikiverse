import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import Details from "./Details";
import AddPage from "./AddPage";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [singlePage, setSinglePage] = useState({});

  const [isSinglePage, setIsSinglePage] = useState(false);
  const [isAddPage, setIsAddPage] = useState(false);
  const [user, setUser] = useState("");

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

  async function deletePage(slug) {
    try {
      const res = await fetch(`${apiURL}/wiki/${slug}`, {
        method: "DELETE",
      });
      const data = res.json();
      setIsSinglePage(false);
      fetchPages();
    } catch (err) {
      console.log("Oh no an error!", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <main>
      <h1 id="title">WikiVerse</h1>
      {isAddPage ? (
        <AddPage
          setIsAddPage={setIsAddPage}
          setUser={setUser}
          user={user}
          fetchPages={fetchPages}
        />
      ) : isSinglePage ? (
        <Details
          singlePage={singlePage}
          getAuthorFromTitle={getAuthorFromTitle}
          user={user}
          setIsSinglePage={setIsSinglePage}
          deletePage={deletePage}
          setUser={setUser}
        />
      ) : (
        <>
          <h2>An interesting 📚</h2>
          <h3 id="info">Click articles to read and see details:</h3>
          <PagesList
            fetchSinglePage={fetchSinglePage}
            pages={pages}
            setIsAddPage={setIsAddPage}
          />
        </>
      )}
    </main>
  );
};
