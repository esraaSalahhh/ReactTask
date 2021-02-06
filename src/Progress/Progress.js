import React from 'react';
import './Progress.css';
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Progress } from 'reactstrap';
export default function Progres(props) {
 
    return (
        <>
            <div>
                <div className="left">{props.Data.name}</div>
                <Progress color="secondary" value={props.Data.value} />
            </div>

        </>
    )


}
