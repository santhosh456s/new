import React from "react";
import Floor from "./floor"
export default class room extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Room</h2>
        <Floor />
      </div>
    );
  }
}