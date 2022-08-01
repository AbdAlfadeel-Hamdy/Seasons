import React from "react";
import ReactDOM from "react-dom/client";
// import SeasonDisplay from "./SeasonDisplay";

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    if (this.state.lat) return <div>Latitude: {this.state.lat}</div>;
    if (this.state.errorMessage)
      return <div>Error: {this.state.errorMessage}</div>;
    return <div>Loading!</div>;
  }
}

root.render(<App />);
