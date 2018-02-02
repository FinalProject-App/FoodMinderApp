import React from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
var daysLeft = ((this.state.item.expiration) - (dd));

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      expiration: "",
      timeleft: daysLeft
    };
  }

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadItems();
  }

  // Loads all books  and sets them to this.state.books
  loadItems = () => {
    API.getFood()
      .then(res =>
        this.setState({ description: res.data, date: "", expiration: ""})
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteItem = id => {
    API.deleteFood(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

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
    if (this.state.title && this.state.author) {
      API.saveFood({
        description: this.state.description,
        expiration: this.state.expiration,
        timeLeft: this.state.timeLeft
      })
        .then(res => this.loadFood())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add to List</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.item}
                onChange={this.handleInputChange}
                name="Item"
                placeholder="Name of item with a short description"
              />
              <Input
                value={this.state.expiration}
                onChange={this.handleInputChange}
                name="Expiration Date"
                placeholder="Expiration date (required)"
              />
              <TextArea
                value={this.state.timeLeft}
                onChange={this.handleInputChange}
                name="Days Left"
                placeholder="Days Left"
              />
              <FormBtn
                disabled={!(this.state.description && this.state.expiration)}
                onClick={this.handleFormSubmit}
              >
                Submit Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Food on My List</h1>
            </Jumbotron>
            {this.state.items.length ? (
              <List>
                {this.state.items.map(item => {
                  return (
                    <ListItem key={item._id}>
                      <a href={"/items/" + item._id}>
                        <strong>
                          Description: {item.description} Expiration Date: {item.expiration}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteFood(item._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Items;