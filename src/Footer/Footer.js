import React from 'react';
import'./Footer.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
export default class Footer extends React.Component {
    constructor() {
      super();
    //   this.state = {};
    }
    render() {
      return(
        <>
        <div className="clear">

</div>
<div className="black">
    <br></br>
        <Row>
        <Col lg="5" >
        <Row>
            <Col lg="12">
GET IN TOUCH
            </Col>
        </Row>
        <br></br>
        <Row>
            <Col lg="12">
                <p>ersaa@gmail.com</p>
                <p>717-555-1234</p>
            </Col>
        </Row>

        </Col>
        <Col lg="2" className="xx">
            
                <Button outline color="info">CONTACT ME</Button>
            </Col>
            <Col lg="5" className="aboutme"><FontAwesomeIcon icon={['fab', 'google']} /></Col>
            

      </Row>
     </div> 
        </>
      )
     
    }
  }