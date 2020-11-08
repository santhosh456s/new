import React from "react";
import Floor from "./floor";
import Celing from "./celing"
export default class kitchen extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>kitchen</h2>
        <Floor />
        <Celing />
      </div>
    );
  }
}
