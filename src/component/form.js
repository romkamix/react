import React from "react";
import Fileinput from "./fileinput.js";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      textarea: "",
      select: "coconut",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSelectChange(event) {
    this.setState({ select: event.target.value });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Отправленное имя: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Имя:
            <input
              type="text"
              name="input"
              onChange={this.handleInputChange}
              value={this.state.value}
            />
          </label>
        </div>

        <div>
          <select
            name="select"
            onChange={this.handleInputChange}
            value={this.state.select}
          >
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option value="coconut">Кокос</option>
            <option value="mango">Манго</option>
          </select>
        </div>

        <div>
          <textarea
            name="textarea"
            onChange={this.handleInputChange}
            value={this.state.text}
          />
        </div>

        <div>
          <Fileinput />
        </div>

        <div>
          <Fileinput />
        </div>

        <div>
          <input type="submit" value="Отправить" />
        </div>
      </form>
    );
  }
}
