import React from "react";

import Floor from "./floor";
import Celing from "./celing"

export default class balcony extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Balcony</h2>
        <Floor />
        <Celing />
      </div>
    );
  }
}