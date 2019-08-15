import React from "react";
import ReactDom from "react-dom";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerProp}</h1>
        <h2>{this.props.contentProp}</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDom.render(
  <App
    headerProp="Header from props..."
    contentProp="Content
   from props..."
  />,
  document.getElementById("app")
);
export default App;
