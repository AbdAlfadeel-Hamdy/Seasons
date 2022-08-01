import React from "react";
import ReactDOM from "react-dom/client";
// import SeasonDisplay from "./SeasonDisplay";

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => console.error(err)
    );
  }
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

root.render(<App />);
