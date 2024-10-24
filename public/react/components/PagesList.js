import React, { useState } from 'react'
import { Page } from './Page'
import ArticleDetails from "./ArticleDetails";
import AddPage from "./AddPage";

export const PagesList = ({ setRefresh, pages }) => {
  const [details, setDetails] = useState("");
  const [listView, setListView] = useState(true);
  const [isAddingPage, setIsAddingPage] = useState(false);

  function handleClick(data) {
    setDetails(data);
    setListView(false);
  }
  function handleCreate() {
    setListView(false);
    setIsAddingPage(true);
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
      ) : isAddingPage ? (
        <AddPage
          setListView={setListView}
          setRefresh={setRefresh}
          setIsAddingPage={setIsAddingPage}
        />
      ) : (
        <ArticleDetails
          setRefresh={setRefresh}
          info={details}
          onClick={() => setListView(true)}
        />
      )}

      {listView && <button onClick={handleCreate}>Add Page</button>}
    </>
  );
};
