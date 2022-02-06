import React from "react";
import ReactDOM from "react-dom";

// learn embedding jsx attributes and styles from css to jsx->html->jsx
var img = "https://picsum.photos/200/300";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false" spellCheck="false">
      {" "}
      Good Pictures from Picsum
    </h1>
    <div>
      <img src={img + "?grayscale"} alt="alternative text" />
    </div>
  </div>,
  document.getElementById("root")
);
