import React from "react";
import ReactDOM from "react-dom";

console.log("hello world");

const App = () => {
  return (
    <div>
      <p>React here!</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
