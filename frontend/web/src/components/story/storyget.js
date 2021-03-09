import React, { useState, useEffect } from 'react';

import {Button, Card, CardHeader, CardBody, Row, Col  ,CardTitle, } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";
import '../../router'

function Board(props){
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
    const images = importAll(require.context('./myimg', false, /\.(png|jpe?g|svg)$/));
      
    const [inputs, setInputs] = useState({
        board: ""
    });
    
    const goBack = () => {
        props.history.goBack();
    };

    const { board } = inputs;

    useEffect(() => {
        getBoard();
    },[]);

    const getBoard = () => {
        axios.get(`http://localhost:8080/story/`+props.match.params.no).then((Response)=>{
            console.log(Response)
            setInputs({
                board: Response.data.story
            })    
          }).catch((Error)=>{
              console.log(Error);
          })
    }
    


    return (
    <>
        <PanelHeader size="sm" />
        <div className="content">
        <Row>
        <Col xs={12}>
            <Card className="card-chart">
                <CardHeader>
                    <CardTitle tag="h4">{Object(board).title}</CardTitle>
                    <hr></hr>
                    <div style={{textAlign:"right"}}>
                        <h5 className="card-category">등록 날짜 : {Object(board).day}</h5>
                    </div>
                </CardHeader>
                <CardBody>
                    <div style={{textAlign: "center"}}>
                        
                    <img src={images[`${Object(board).filename}`]} width="50%" height="50%"/>
                    </div>
                   <br></br>
                   <br></br>
                   <div style={{textAlign: "center"}}>
                    {Object(board).contents}
                   </div>
                </CardBody>
                <div  style={{textAlign: "right"}}>
                    <Button color="info" onClick={goBack}>back</Button>&nbsp;&nbsp;
                </div>
            </Card>
            </Col>
        </Row>

        </div>
    </>
    );
}

export default Board;
