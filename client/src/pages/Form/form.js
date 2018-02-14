import React from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { NavLink } from 'react-router-dom';
import { Container } from "../../components/Grid/index";


class Form extends React.Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      expiration: "",

    };
  }


  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.description && this.state.expiration) {
      API.saveItem({
        description: this.state.description,
        expiration: this.state.expiration,
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };



  render() {
    return (
      <Container>
        <div className=".col-xs-6 .col-md-4">
          <div className='jumbotron'>
            <h1 className='text-center'>Add Food Item</h1>
          </div>
          <form>
            <Input
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description"
              placeholder=" description (required)"
            />
            <Input
              value={this.state.expiration}
              onChange={this.handleInputChange}
              name="expiration"
              placeholder="Expiration Date (required)"
            />

            <FormBtn
              disabled={!(this.state.description && this.state.expiration)}
              onClick={this.handleFormSubmit}>Submit Item</FormBtn>
          </form>
          <NavLink to="/Items">View List</NavLink>
        </div>
      </Container>
    );
  }
}


export default Form