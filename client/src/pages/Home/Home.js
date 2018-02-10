import React from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";


 
 class Home extends React.Component {
   
      handleClick = () => {
        this.props.history.push("/Form");

      }
      handleForm = () => {
        this.props.history.push("/Items");

      };

render () {
  return (
  
      <Jumbotron fluid>
       <Container fluid>
        <h1>Welcome!</h1>
        <p className="intro">We help you keep track of how long you have until your food goes bad!</p>
        
          <button type="button" outline color = "primary"
          className = "FormBtn" onClick = {this.handleClick} >
          Add Item.. </button>
          
           <button type="button" outline color = "primary"
          className = "ItemBtn" onClick = {this.handleForm} >
          My Items </button>
          </ Container>
        </Jumbotron>
  
    );
  }
}



export default Home