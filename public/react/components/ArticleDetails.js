import React, { useEffect, useState } from 'react'
import apiURL from '../api'

function ArticleDetails({setRefresh, info, onClick }) {
  const [details, setDetails] = useState('');
  async function fetchDetails() {
    setRefresh(false);
    try {
      const response = await fetch(`${apiURL}/wiki/${info.slug}`);
      const articleData = await response.json();
      setDetails(articleData);
      console.log(articleData, "articleData");
      
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function deleteDetail() {
    try {
      const response = await fetch(`${apiURL}/wiki/${info.slug}`, {
        method: "DELETE",
      });
      setRefresh(true)
      onClick()
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <>
      {details != "" ? (
        <>
          <h1>{details.title}</h1>
          <p>
            {" "}
            <strong>Author:</strong> {details.author.name}
          </p>
          <p>
            <strong> Published: </strong> {details.createdAt}
          </p>
          <p>
            <strong>Content:</strong> {details.content}
          </p>
          <p>
            <strong>Tags:</strong> {details.tags.map((tag) => tag.name + " ")}
          </p>
          <br />
          <br />
          <button onClick={deleteDetail}>Delete</button>
          <button onClick={onClick}>Back To Wiki List</button>
        </>
      ) : (
        ""
      )}
    </>
  );
} 

module.exports = ArticleDetails
