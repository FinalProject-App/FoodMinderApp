// import React from "react";
// import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
// import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

// class Items extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       name: "",
//       item: "",
//       date: ""
//     };
//   }

  
//   componentDidMount() {
//     this.loadItems();
//   }


//   // loadBooks = () => {
//   //   API.getItems()
//   //     .then(res =>
//   //       this.setState({ items: res.data, title: "", author: "", synopsis: "" })
//   //     )
//   //     .catch(err => console.log(err));
//   // };




//   loadItems = () => {
//     API.getItems()
//       .then(res =>
//         this.setState({ items: res.data, name: "", item: "", date: "" })
//       )
//       .catch(err => console.log(err));
//   };

//   deleteItem = id => {
//     API.deleteItem(id)
//       .then(res => this.loadItems())
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.name && this.state.item && this.state.date) {


//       API.saveItem({
//         item: this.state.item,
//         name: this.state.name,
//         date: this.state.date
//       })
//         .then(res => this.loadItems())
//         .catch(err => console.log(err));
//     }
//   };

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1>add Food Item</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 value={this.state.name}
//                 onChange={this.handleInputChange}
//                 name="name"
//                 placeholder="name (required)"
//               />
//               <Input
//                 value={this.state.item}
//                 onChange={this.handleInputChange}
//                 name="item"
//                 placeholder="item (required)"
//               />
//               <TextArea
//                 value={this.state.date}
//                 onChange={this.handleInputChange}
//                 name="date"
//                 placeholder="date (required)"
//               />
//               <FormBtn
//                 disabled={!(this.state.name && this.state.item && this.state.date)}
//                 onClick={this.handleFormSubmit}
//               >
//                 Submit Item
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Food Items on the List</h1>
//             </Jumbotron>
//             {this.state.items.length ? (
//               <List>
//                 {this.state.items.map(item => {
//                   return (
//                     <ListItem key={item._id}>
//                       <a href={"/Books/" + item._id}>
//                         <strong>
//                           {item.item} from {item.name}. Expires on: {item.date}
//                         </strong>
//                       </a>
//                       <DeleteBtn onClick={() => this.deleteItem(item._id)} />
//                     </ListItem>
//                   );
//                 })}
//               </List>
//             ) : (
//                 <h3>No Results to Display</h3>
//               )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Items;
