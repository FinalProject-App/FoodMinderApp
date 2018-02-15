import React from 'react';
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import {Navigation} from "../../components/Nav";


class LandingPage extends React.Component {
    render() {

        return (
          <div>
             <Navigation />
          <Container>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>Welcome to FoodMinder!</h1>
                  <p>We are on a mission to help you be more conscientious of how much food you waste.
                    Use this app to help track your items.
                  </p>
                 
                </Jumbotron>
              </Col>
            </Row>
          </Container>
          </div>
        )
      }
    }
    
export default LandingPage