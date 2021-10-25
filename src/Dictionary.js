import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyphrase, setKeyphrase] = useState("Forest");
  let [results, setResults] = useState(null);
  let [ready, setReady] = useState(false);

  function handleApiResponse(response) {
    setResults(response.data[0]);
  }

  function handleWordSearch(event) {
    setKeyphrase(event.target.value);
  }

  function search(event) {
    //documentation: https://dictionaryapi.dev/ //
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyphrase}`;
    axios.get(apiURL).then(handleApiResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setReady(true);
    search();
  }

  if (ready) {
    return (
      <div className="Dictionary">
        <section>
          <h2>You is getting nosier than a parker....</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="What word are you looking for?"
              autoFocus={true}
              onChange={handleWordSearch}
            />
          </form>
          <div className="hint">
            Suggested words:{" "}
            <em> Ineffable, Somnambulist, Limerence and Ethereal</em>
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading Dictionary...";
  }
}
