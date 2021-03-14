import React, { useState, useEffect } from 'react';

import {Button, Card, CardHeader, CardBody, Row, Col  ,CardTitle, } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";
import '../../router'
import {Link} from "react-router-dom"


function Board(props){
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
        axios.get(`http://15.164.97.108:8080/project/`+props.match.params.no).then((Response)=>{
            console.log(Response)
            setInputs({
                board: Response.data.project
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
                        <h5 className="card-category">개발기간 : {Object(board).startDay} ~ {Object(board).endDay}</h5>
                    </div>
                </CardHeader>
                <CardBody>
                    {Object(board).filename!==undefined &&
                        <div style={{textAlign:"right"}}>
                            <Link to={`/admin/PDF/${Object(board).filename}`}>PDF 보기</Link>
                        </div>
                    }
                    {Object(board).url!==undefined &&
                        <div style={{textAlign:"right"}}>
                            <Link onClick={()=>{window.open(Object(board.url))}}>Github 페이지 이동</Link>
                        </div>
                    }
                    <br></br>
                    <div style={{width:"80%"}}>
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
