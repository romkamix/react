import React from "react";

export default class Fileinput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: "",
    };
  }

  render() {
    return <input type="file" />;
  }
}
