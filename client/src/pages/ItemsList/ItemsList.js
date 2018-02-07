import React from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      description: "",
      expiration: ""
    };
  }

  // When the component mounts, load all books and save them to this.state.books
 /* componentDidMount() {
    this.loadItems();
  } */

  // Loads all books  and sets them to this.state.books
  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ items: res.data, description: "", expiration: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteItem = id => {
    API.deleteItems(id)
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container>
       <Row>
     
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Food Items on the List</h1>
            </Jumbotron>
            {this.state.items.length ? (
              <List>
                {this.state.items.map(item => {
                  return (
                    <ListItem key={item._id}>
                      <a href={"/items/" + item._id}>
                        <strong>
                          {item.description} Expiration: {item.expiration}
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

export default ItemsList
