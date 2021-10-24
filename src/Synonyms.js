import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return <div className="Synonyms">Hi from Synonyms</div>;
  } else {
    return null;
  }
}
