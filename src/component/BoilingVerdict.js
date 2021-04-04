import React from "react";

export default function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <h1>Вода закипит</h1>;
  }

  return <h1>Вода не закипит</h1>;
}

// export default class BoilingVerdict extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     if (this.props.celsius >= 100) {
//       return <h1>Вода закипит</h1>;
//     }

//     return <h1>Вода не закипит</h1>;
//   }
// }
