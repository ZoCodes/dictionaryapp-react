import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio}>Listen</a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
