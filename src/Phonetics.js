import React from "react";

export default function Phonetics(props) {
  // add an icon of a listen image to play sound rather than the word listen
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer noopener">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
