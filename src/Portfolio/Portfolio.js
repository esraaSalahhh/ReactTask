import React from 'react';
import'./Portfolio.css';
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import DivPortfolio from '../DivPortfolio/DivPortfolio';

export default class Skills extends React.Component {
    constructor() {
      super();
    //   this.state = {};
    }

    state = {
        List : [
            {
               
                name : "web Design"
            },
             {
                name : "Mobile Design"
            },
             {
                name : "Loo Design"
            },
            {
                name : "Web application Development"
            }, {
                name : "mobile application Development"
            }, {
                name : "PWA Development"
            }
        ]
    }
    
    render() {
      return(
        <>
        <Container>
            <Row>
                <Col></Col>
            </Row>
            <Col lg="4" className="aboutme">Portfolio</Col>
        {this.state.List.map((valu ) => {
                return <DivPortfolio  Data2={valu} />
            })}
            <br></br>
            <br></br>
        </Container>
        </>
      )
     
    }
  }