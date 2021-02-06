import React from 'react';
import'./Hero.css';
import { Jumbotron, Button } from 'reactstrap';
export default class Hero extends React.Component {
    constructor() {
      super();
    //   this.state = {};
    }
    render() {
      return(
        <>
      
      <Jumbotron style={{
          backgroundImage:`url(/img/Dark-Shadows.jpg)`,
          backgroundSize:1100,
        //   height:400,
        //   backgroundSize:100%,
          }}>
        <h1 className="h1jump">Katie Reed</h1>
        <p className="pjump">Web Developer & Designer</p>
            
          {/* <Button color="primary"></Button> */}
          <Button outline color="primary" className="btnjump">CONTACT ME</Button>
        
      </Jumbotron>
      
        </>
      )
     
    }
  }