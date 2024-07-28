import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    searchImages(word);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  function searchImages(query) {
    let apiKey = "c7eebf8ff7o8d23ac85774cb72ct0a65";
    let apiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${apiKey}`;
    axios.get(apiUrl).then((response) => {
      console.log(response.data);
      setImages(response.data.photos);
    });
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter word" onChange={updateWord} />
        <input type="submit" value="Search" />
      </form>
      <div className="ImageResults">
        {images.map((image, index) => (
          <div key={index} className="ImageResult">
            <img src={image.src.original} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
