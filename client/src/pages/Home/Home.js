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
  
      <Jumbotron  style={{'vertical-align':'bottom'}}>
       <Container fluid  >
        <h1 className="text-center">Welcome!</h1>
        <p className="intro text-center">We help you keep track of how long you have until your food goes bad!</p>
        <div  style={{'text-align':'center'}}>
          
          <button type="button" color = "primary"
          className = "FormBtn btn btn-info"   onClick = {this.handleClick} >
          Add Item.. </button>
          <span> </span>
           <button type="button" outline color = "primary"
          className = "ItemBtn btn btn-info" bsStyle="Information" onClick = {this.handleForm} >
          My Items </button>
          </div>
          </ Container>
        </Jumbotron>
  
    );
  }
}



export default Home