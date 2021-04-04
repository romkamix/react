import React from "react";

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left} </div>
      <div className="SplitPane-right">{props.right} </div>
    </div>
  );
}

export default function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
