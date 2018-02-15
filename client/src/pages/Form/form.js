import React from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { NavLink } from 'react-router-dom';
import { firebase } from "../../firebase";
import withAuthorization from "../../components/withAuthorization";


class Form extends React.Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      description: "",
      expiration: "",
      email: "",
      unique:[]
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      this.setState({"email": authUser.email})
      this.loadEvents();
    })
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
      this.state.unique.push(event.email);
      API.saveItem({
        events: [],
        description: this.state.description,
        expiration: this.state.expiration,
        email: this.state.email,
        unique: []
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };



render() {
    return (
<Container fluid>
<Row>
  <Col size="md-6">
    <Jumbotron>
      <h1>Add Food Item</h1>
    </Jumbotron>
    <form>
      <Input
        value={this.state.description}
        onChange={this.handleInputChange}
        name="description"
        placeholder="item description (required)"
      />
      <Input
        value={this.state.expiration}
        onChange={this.handleInputChange}
        name="expiration"
        placeholder="Expiration Date (required)"
      />
  
      <FormBtn
        disabled={!(this.state.description && this.state.expiration)}
        onClick={this.handleFormSubmit}
      >
        Submit Item
      </FormBtn>
    </form>
    
  </Col>
  </Row>
  <NavLink to="/Items">View List</NavLink>

      </Container>
    );
  }
}

const authCondition = (authUser) => !!authUser
export default Form;
