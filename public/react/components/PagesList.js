import React, { useState } from 'react'
import { Page } from './Page'
import ArticleDetails from "./ArticleDetails";

export const PagesList = ({ pages }) => {
	const [details, setDetails] = useState("");
  const [listView, setListView] = useState(true);

	function handleClick(data){
		setDetails(data)
		setListView(false)
	}
  return (
    <>
      {listView ? (
        pages.map((page, idx) => {
          return (
            <>
              <Page onClick={() => handleClick(page)} page={page} key={idx} />
            </>
          );
        })
      ) : (
        <ArticleDetails info={details} onClick={() => setListView(true)} />
      )}
    </>
  );
}
