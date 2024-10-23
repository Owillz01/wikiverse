import React from 'react'
import ArticleDetails from "./ArticleDetails";

export const Page = (props) => {
  return (
    <>
      <h3 onClick={props.onClick}>{props.page.title}</h3>

      {/* <ArticleDetails /> */}
    </>
  );
}
