import React from 'react';
import'./Skills.css';
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Progress from '../Progress/Progress';
export default class Skills extends React.Component {
    constructor() {
      super();
    //   this.state = {};
    }
    state = {
        List : [
            {
                value : 90,
                name : "Html"
            },
             {
                value : 90,
                name : "CSS"
            },
             {
                value : 80,
                name : "JavaScript"
            },
            {
                value : 80,
                name : "React"
            }, {
                value : 90,
                name : "Photoshop"
            }, {
                value : 75,
                name : "AdobeXD"
            },
            {
                value : 60,
                name : "Nodejs"
            },{
                value : 50,
                name : "Wordpress"
            },
        ]
    }
    render() {
      return(
        <>
      <div className="backcol">
          <Container>
               <p className="pp">Skills</p>
               <p className="ppp">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <br></br> <br></br>
               <Row>
               <Col lg="1" >
           
           </Col>
        <Col lg="5">
            <Row>
                <Col  lg="6">
                MY FOCUS
                </Col>
            </Row>
            <Row>
                <Col  lg="6">
                <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col  lg="6">
                UI/UX Design
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col  lg="6">
                Responsive Design
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col  lg="6">
                Web Design
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col  lg="6">
                Mobile App Design
                </Col>
            </Row>
        </Col>
        <Col lg="6" >
        {/* <Progress value={50} name="html"/> */}
        {this.state.List.map((val ) => {
                return <Progress  Data={val} />
            })}

            
            </Col>
 
      </Row>
      <br></br><br></br>
        </Container>

      </div>
     
        </>
      )
     
    }
  }