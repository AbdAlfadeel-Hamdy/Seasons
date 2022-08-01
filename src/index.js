import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);

const App = () => {
  return <div>Hi there</div>;
};

root.render(<App />);
