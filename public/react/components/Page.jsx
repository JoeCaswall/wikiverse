import React from "react";

export const Page = ({ page, fetchSinglePage }) => {
  return (
    <>
      <h3 onClick={() => fetchSinglePage(page.slug)} className="page">
        {page.title}
      </h3>
    </>
  );
};
