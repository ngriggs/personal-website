import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ProjectList from "./components/ProjectList";

class NavBar extends React.Component {
  state = {
    hamburgerClass: "hamburger",
    isActive: false,
  };
  handleClick = () => {
    this.setState({
      hamburgerClass: this.state.isActive ? "hamburger" : "hamburger is-active",
      isActive: !this.state.isActive,
    });
  };

  render() {
    return (
      <nav className="nav-bar-items">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                padding: "1em",
              }}
            >
              <img
                style={{ height: "22px" }}
                src={logo}
                className="App-logo"
                alt="logo"
              />
              Noah
            </div>
          </div>
          <div className="menu">
            <div
              style={{
                display: "flex",
                padding: "1em",
              }}
            >
              About
            </div>
            <div
              style={{
                display: "flex",
                padding: "1em",
              }}
            >
              Technologies
            </div>
          </div>
          <button
            className={this.state.hamburgerClass}
            onClick={this.handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    );
  }
}

class App extends React.Component {
  componentDidMount() {
    document.title = "Noah Griggs";
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <ProjectList />
        </div>
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
      </div>
    );
  }
}

export default App;
