import "./style/App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderContent() {
    if (this.state.lat) return <SeasonDisplay lat={this.state.lat} />;
    if (this.state.errorMessage)
      return <div>Error: {this.state.errorMessage}</div>;
    return <Spinner message="Please accept location request." />;
  }
  render() {
    return <div className="border">{this.renderContent()}</div>;
  }
}

root.render(<App />);
