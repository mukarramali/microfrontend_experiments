import React from "react";
import ReactDOM from "react-dom";
import Articles from "./articles";

function App() {
  return (
    <div>
      <h1>Trending Articles by React</h1>
      <Articles />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("articles"));
