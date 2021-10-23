import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyphrase, setKeyphrase] = useState("");

  function handleApiResponse(response) {
    console.log(response.data[0]);
  }

  function handleWordSearch(event) {
    setKeyphrase(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/ //

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_UK/${keyphrase}`;
    axios.get(apiURL).then(handleApiResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleWordSearch} />
      </form>
    </div>
  );
}
