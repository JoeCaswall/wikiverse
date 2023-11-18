import React from "react";
import { Page } from "./Page";

export const PagesList = ({ pages, fetchSinglePage, setIsAddPage }) => {
  return (
    <div className="page-list">
      {pages.map((page) => (
        <>
          <Page page={page} fetchSinglePage={fetchSinglePage} key={page.id} />
        </>
      ))}
      <button onClick={() => setIsAddPage(true)} className="button">
        Add a Page
      </button>
    </div>
  );
};
