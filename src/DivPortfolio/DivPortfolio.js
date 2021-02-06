import React from 'react';
import'./DivPortfolio.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

export default function DivPortfolio (props){
   
      return(
        <>
     
            <div className="divStyle" >
            <p className="textStyle">{props.Data2.name}</p>
        </div>
       
  
        </>
      )
     
    
  }


