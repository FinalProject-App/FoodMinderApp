import React from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: "",
      item: "",
      date: ""
    };
  }

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadItems();
  }

  // Loads all books  and sets them to this.state.books
  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ items: res.data, name: "", item: "", date: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteItems = id => {
    API.deleteItems(id)
      .then(res => this.loadItems())
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
    if (this.state.name && this.state.item && this.state.date) {
      API.saveItem({
        item: this.state.item,
        name: this.state.name,
        date: this.state.date
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
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="name (required)"
              />
              <Input
                value={this.state.item}
                onChange={this.handleInputChange}
                name="item"
                placeholder="item (required)"
              />
              <TextArea
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="date (required)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.item && this.state.date)}
                onClick={this.handleFormSubmit}
              >
                Submit Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Food Items on the List</h1>
            </Jumbotron>
            {this.state.items.length ? (
              <List>
                {this.state.items.map(item => {
                  return (
                    <ListItem key={item._id}>
                      <a href={"/books/" + item._id}>
                        <strong>
                          {item.name} from {item.item}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteItems(item._id)} />
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
