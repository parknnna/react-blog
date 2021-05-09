import React, { useState, useEffect } from 'react';

import {Button, Card, CardHeader, CardBody, Row, Col  ,CardTitle, } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";
import '../../router';
import ADDelete from "../adDelete";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./css/slide.css"
function Board(props){
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
    const images = importAll(require.context('./myimg', false, /\.(png|jpe?g|svg)$/));
      
    const [inputs, setInputs] = useState({
        board: "",
        slides: ""
    });

    const { board, slides } = inputs;
    
    const goBack = () => {
        props.history.goBack();
    };


    useEffect(() => {
        getBoard();
    },[]);

    const getBoard = () => {
        axios.get(`http://15.164.97.108:8080/story/`+props.match.params.no).then((Response)=>{
            let slideData=[];
            if(Response.data.story.filename.split("/").length>1){
                for(let i=0;i<Response.data.story.filename.split("/").length;i++){
                    slideData.push(images[Response.data.story.filename.split("/")[i]])
                }
            }
            setInputs({
                board: Response.data.story,
                slides: slideData
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
                        {window.sessionStorage.getItem("ad") &&
                            <ADDelete no={props.match.params.no} table="story" prop={props}/>
                        }
                        <h5 className="card-category">등록 날짜 : {Object(board).day}</h5>
                    </div>
                </CardHeader>
                <CardBody>
                    <div style={{textAlign: "center"}}>
                    {String(Object(board).filename).split("/").length>1 ?
                          <div class="slide-container">
                          <Fade>
                            <div className="each-fade">
                              <div className="image-container">
                                <img src={slides[0]} />
                              </div>
                            </div>
                            <div className="each-fade">
                              <div className="image-container">
                                <img src={slides[1]} />
                              </div>
                            </div>
                        
                          </Fade>
                        </div>
                        :
                        <img src={images[`${Object(board).filename}`]} width="50%" height="50%"/>
                    }
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
