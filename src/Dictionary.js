import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyphrase, setKeyphrase] = useState("Forest");
  let [results, setResults] = useState(null);
  let [ready, setReady] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleApiResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexels(response) {
    setPhotos(response.data.photos);
  }

  function handleWordSearch(event) {
    setKeyphrase(event.target.value);
  }

  function search(event) {
    //documentation: https://dictionaryapi.dev/ //
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyphrase}`;
    axios.get(apiURL).then(handleApiResponse);

    let pexelsApiKey = `563492ad6f9170000100000150ef8c7eb8f64a08bd1a1601c8c6c54f`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyphrase}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexels);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading Dictionary...";
  }
}
