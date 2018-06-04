import React from "react";
import Gallery from "./Gallery";
import { FormGroup, FormControl, InputGroup } from "react-bootstrap";
import "../../index.css";
export default class Global extends React.Component {
  state = {
    search: "",
    items: []
  };
  search() {
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${BASE_URL}${this.state.search}`, { method: "GET" })
      .then(response => response.json())
      .then(json => {
        let { items } = json;
        this.setState({ items });
      });
  }

  handleSearch = e => {
    this.setState({
      search: e.target.value
    });
  };
  render() {
    return (
      <div className="Global">
        <h2>Book Explorer!</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a book"
              onChange={this.handleSearch}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  this.search();
                }
              }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => this.search()}
              >
                Search
              </button>
            </div>
          </InputGroup>
        </FormGroup>
        <Gallery items={this.state.items} />
      </div>
    );
  }
}
