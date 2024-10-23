import React, { useEffect, useState } from 'react'
import apiURL from '../api'

function ArticleDetails({ info, onClick }) {
  const [details, setDetails] = useState('');
  async function fetchDetails() {
    try {
      const response = await fetch(`${apiURL}/wiki/${info.slug}`);
      const articleData = await response.json();
      setDetails(articleData);
      console.log(articleData, "articleData");
      
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <>

     { details != '' ? (
      <>
      <h1>{details.title}</h1>
      <p>Author: {details.author.name}</p>
      <p>Published: {details.createdAt}</p>
      <p>Content: {details.content}</p>
      <p>Tags: {details.tags.map((tag) => tag.name + " ")}</p>
      <br />
      <br />
      <button onClick={onClick}>Back To Wiki List</button> </>
      ) : ''}
    </>
  );
} 

module.exports = ArticleDetails
