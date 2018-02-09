// import React from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";

// class Detail extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: {},
//       isUpdate: false
//     };
//   }
//   // When this component mounts, grab the book with the _id of this.props.match.params.id
//   // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   componentDidMount() {
//     API.getItems(this.props.match.params.id)
//       .then(res => this.setState({ item: res.data }))
//       .catch(err => console.log(err));
//   }

//   handleUpdate(isUpdate) {
//     this.setState({ isUpdate: isUpdate })
//   }

//   // Handles updating component state when the user types into the input field
//   handleInputChange = event => {
//     const { name, value } = event.target;

//     const updatedItem = {...this.state.Item}
//     updatedItem[name] = value

//     this.setState({
//       item: updatedItem
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.item.name && this.state.item.item) {
//       API.patchItem(this.props.match.params.id, this.state.item)
//         .then(res => this.setState({isUpdate:false}))
//         .catch(err => console.log(err));
//     }
//   };

//   getReadOnly = () => (
//     <Container fluid>
//       <Row>
//         <Col size="md-12">
//           <Jumbotron>
//             <h1>
//               {this.state.item.name}
//             </h1>
//           </Jumbotron>
//         </Col>
//       </Row>
//       <Row>
//         <Col size="md-10 md-offset-1">
//           <item>
//             <h1>Synopsis</h1>
//             <p>
//               {this.state.item.date}
//             </p>
//           </item>
//         </Col>
//       </Row>
//       <Row>
//         <button onClick={() => this.handleUpdate(true)}>Update</button>
//         <Col size="md-2">
//           <Link to="/">← Back to Authors</Link>
//         </Col>
//       </Row>
//     </Container>
//   );

//   getUpdateform = () => (
//     <Container fluid>
//       <Row>
//         <Col size="md-12">
//           <Jumbotron>
//             <h1>Add Item to List</h1>
//           </Jumbotron>
//         </Col>
//       </Row>
//       <Row>
//         <Col size="md-10 md-offset-1">
//           <form>
//             <Input
//               value={this.state.item.name}
//               onChange={this.handleInputChange}
//               name="name"
//               placeholder="name (required)"
//             />
//             <Input
//               value={this.state.item.item}
//               onChange={this.handleInputChange}
//               name="item"
//               placeholder="Item (required)"
//             />
//             <TextArea
//               value={this.state.item.date}
//               onChange={this.handleInputChange}
//               name="date"
//               placeholder="date (required)"
//             />
//             <button onClick={() => this.handleUpdate(false)}>Cancel</button>
//             <FormBtn
//               disabled={!(this.state.item.title)}
//               onClick={this.handleFormSubmit}
//             >
//               Submit Item
//             </FormBtn>
//           </form>
//         </Col>
//       </Row>
//     </Container>
//   );

//   render() {
//     if (this.state.isUpdate) return this.getUpdateform();
//     else return this.getReadOnly();
//   }
// }

// export default Detail;
