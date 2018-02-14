import React from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
//import { Col, Row, Container } from "../../components/Grid";
import {Container } from "../../components/Grid/index";
import { List, ListItem } from "../../components/List";

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[{ 
      _id:"1",
      description: "dasdasd",
      expiration: "11-11-1111"
    },{ 
      _id:"2",
      description: "asdasdsd",
      expiration: "12-12-1212"
    },
    { 
      _id:"3",
      description: "rtytrytry",
      expiration: "13-13-1313"
    }]
    };
  }

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ items:[{ 
          _id:"1",
          description: "dasdasd",
          expiration: "11-11-1111"
        },{ 
          _id:"2",
          description: "asdasdsd",
          expiration: "12-12-1212"
        },
        { 
          _id:"3",
          description: "rtytrytry",
          expiration: "13-13-1313"
        }]})
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };
  


  render()
  {
    return(
     <Container>
       <div className='.col-xs-6 .col-md-4' style={{'text-align':'center'}}>
         <div className="jumbotron">
           <h1> Food Items on the List </h1>
           </div>
           {this.state.items.length ? (
              <List>
                {this.state.items.map(item => {
                  return (
                    <ListItem key={item._id}>
                        <strong>
                          Item: {item.description}  | Expiration: {item.expiration} 
                        </strong>
                    
                      <DeleteBtn onClick= {() => this.deleteItem(item._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
       </div>

    </Container>
    );


  }
}

export default ItemsList
