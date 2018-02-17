import React from 'react';
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import {Navigation} from "../../components/Nav";


class LandingPage extends React.Component {
    render() {
        return (
        <Jumbotron fluid>
          <Container fluid>
          <h1>Welcome to FoodMinder!</h1>
                  <p>We are on a mission to help you be more conscientious of how much food you waste.
                    Use this app to help track your items.
                  </p>
              <div className="item active"> <img src="https://www.agapichristinard.com/wp-content/uploads/2016/06/healthy-background-6.jpg" /> 
            </div>
          </Container>
        </Jumbotron>
        )
      }
    }
    
export default LandingPage;