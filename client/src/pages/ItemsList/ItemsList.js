import React from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { firebase } from "../../firebase";
import  withAuthorization from "../../components/withAuthorization";
import withAuthentication from "../../components/withAuthentication";

class ItemsList extends React.Component {
  constructor(props, { authUser }) {
    super(props);
    this.state = {
      items: [],
      description: "",
      expiration: "",
      email: ""
    };
  }

 componentDidMount() {
    this.loadItems();
  firebase.auth.onAuthStateChanged(authUser => {
   this.setState({"email": authUser});
   })
  }

  loadItems = () => {
    API.getItems(this.state.email)
      .then(res =>
        this.setState({ items: res.data, description: "", expiration: ""})
      )
      .catch(err => console.log(err));
  };

  deleteItem = id => {
    API.deleteItem(id)
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
                        <strong>
                          Item: {item.description} 
                         </strong>
                        <strong>
                          Expiration: {item.expiration}
                        </strong>
                    
                      <DeleteBtn onClick= {() => this.deleteItem(item._id)} />
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

const authCondition = (authUser) => !!authUser;

export default ItemsList;

