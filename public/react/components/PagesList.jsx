import React from "react";
import { Page } from "./Page";

export const PagesList = ({ pages, fetchSinglePage, setIsAddPage }) => {
  return (
    <>
      {pages.map((page) => (
        <>
          <Page page={page} fetchSinglePage={fetchSinglePage} key={page.id} />
        </>
      ))}
      <button onClick={() => setIsAddPage(true)}>Add a Page</button>
    </>
  );
};
