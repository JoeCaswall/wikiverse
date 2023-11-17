import React from "react";
import { Page } from "./Page";

export const PagesList = ({ pages, fetchSinglePage }) => {
  return (
    <>
      {pages.map((page, idx) => (
        <>
          <Page page={page} fetchSinglePage={fetchSinglePage} key={idx} />
        </>
      ))}
    </>
  );
};
