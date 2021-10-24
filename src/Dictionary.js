import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyphrase, setKeyphrase] = useState("");
  let [results, setResults] = useState(null);

  function handleApiResponse(response) {
    setResults(response.data[0]);
  }

  function handleWordSearch(event) {
    setKeyphrase(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/ //
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyphrase}`;
    axios.get(apiURL).then(handleApiResponse);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input type="search" autoFocus={true} onChange={handleWordSearch} />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
