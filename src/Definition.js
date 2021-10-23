import React from "react";

export default function Definition(props) {
  if (props.definition) {
    return <div className="Definition">Hello from definition</div>;
  } else {
    return null;
  }
}
