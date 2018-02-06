import React from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

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
<Container fluid>
<Row>
  <Col size="md-6">
    <Jumbotron>
      <h1>add Food Item</h1>
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
      </Container>
    );
  }
}


export default Form;