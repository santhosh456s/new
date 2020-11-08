import React from "react";

import Room from "./room.jsx";
import Balcony from "./balcony";
import Kitchen from "./kitchen";

export default class home extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>home</h1>
        <Room />
        <Balcony />
        <Kitchen />
      </div>
    );
  }
}
