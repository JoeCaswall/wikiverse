import React from "react";

export const Page = ({ page, fetchSinglePage }) => {
  return (
    <>
      <h3 onClick={() => fetchSinglePage(page.slug)}>{page.title}</h3>
    </>
  );
};
