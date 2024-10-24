import React, { useEffect, useState } from 'react'
import { PagesList } from './PagesList'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
  const [pages, setPages] = useState([])
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function fetchPages() {
      try {
        const response = await fetch(`${apiURL}/wiki`);
        const pagesData = await response.json();
        setPages(pagesData);
        console.log(pagesData, "pagesData");
      } catch (err) {
        console.log("Oh no an error! ", err);
      }
    }

    fetchPages();
  }, [refresh]);

  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      <PagesList
        setRefresh={setRefresh}
        pages={pages}
      />
    </main>
  );
}
