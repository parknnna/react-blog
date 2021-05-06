import React, { useState, useEffect } from 'react';

import {Button, Card, CardHeader, CardBody, Row, Col  ,CardTitle, } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";
import '../../router'
import {Link} from "react-router-dom"
import ADDelete from "../adDelete"


function Board(props){
    const [inputs, setInputs] = useState({
        board: "",
        file: ""
    });

    const goBack = () => {
        props.history.goBack();
    };

    const { board,file } = inputs;

    useEffect(() => {
        getBoard();
    },[]);

    const getBoard = () => {
        axios.get(`http://15.164.97.108:8080/project/`+props.match.params.no).then((Response)=>{
            console.log(Response)
            if(Response.data.project.apk!==null){
                setInputs({
                    board: Response.data.project,
                    file: require(`./projects/${Response.data.project.apk}`)
                })
            }else{
                setInputs({
                    board: Response.data.project
                })
            }
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
                    {window.sessionStorage.getItem("ad") &&
                        <div style={{textAlign: "right"}}>
                            <ADDelete no={props.match.params.no} table="project" prop={props}/>
                        </div>
                    }
                    {String(Object(board).filename).length>0 &&
                        <div style={{textAlign:"right"}}>
                            <Link to={`/admin/PDF/${Object(board).filename}`}>PDF 보기</Link>
                        </div>
                    }
                    {String(Object(board).url).length>0 &&
                        <div style={{textAlign:"right"}}>
                            <Link onClick={()=>{window.open(Object(board).url)}}>Github 페이지 이동</Link>
                        </div>
                    }
                    {String(Object(board).apk).length>0&&Object(board).apk!=null &&
                        <div style={{textAlign:"right"}}>
                            <a href={file} download>APK Download</a>
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
