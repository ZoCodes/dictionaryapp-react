import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyphrase, setKeyphrase] = useState("");

  function handleWordSearch(event) {
    setKeyphrase(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert("Searching");
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleWordSearch} />
      </form>
    </div>
  );
}
