import React from "react";
import ReactDOM from "react-dom/client";
// import SeasonDisplay from "./SeasonDisplay";

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
  }
  render() {
    navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.error(err)
    );
    return <div>Hi there</div>;
  }
}

root.render(<App />);
