import React from 'react';
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";
import { Link } from 'react-router-dom';
import * as routes from "../../constants/routes.js";
import  withAuthorization from "../../components/withAuthorization";


const HomePage = () =>
     <div>
      <Jumbotron fluid>
       <Container fluid>
        <h1>Welcome! </h1>
        <p className="intro">We help you keep track of how long you have until the food you own goes bad.</p>

        <button><Link to={routes.FORM}>Add Item</Link></button>

        <button><Link to={routes.MYLIST}>My List</Link></button>
          
          </ Container>
        </Jumbotron>
        
     </div>
  

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage)
