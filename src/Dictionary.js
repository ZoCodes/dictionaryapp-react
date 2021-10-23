import React, { useState } from "react";
import axios from "axios";

import Definition from "./Definition";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyphrase, setKeyphrase] = useState("");
  let [definition, setDefinition] = useState(null);

  function handleApiResponse(response) {
    setDefinition(response.data[0]);
    //console.log(response.data[0].meaning[0].definitions[0].definition);
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
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleWordSearch} />
      </form>
      <Definition definition={definition} />
    </div>
  );
}
