import React from "react";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open modal
        </button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal__body">
              <h1>Modal title</h1>
              <p>Awesome modal</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close modal
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
