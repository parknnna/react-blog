import React, { useState, useEffect } from 'react';

import {Button, Card, CardHeader, CardBody, Row, Col  , DropdownMenu, DropdownToggle,UncontrolledDropdown,CardTitle,
    DropdownItem,} from "reactstrap";

import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";
import '../../router'
import Delete from './BoardDelete'
import Update from './BoardUpdate'

function Board(props){
    const [inputs, setInputs] = useState({
        board: "",  
        open: false,open2:false
    });

    const goBack = () => {
        props.history.goBack();
    };

    const { board, open, open2 } = inputs;

    useEffect(() => {
        getBoard();
    },[]);

    const getBoard = () => {
        axios.get(`http://localhost:8080/board/`+props.match.params.no).then((Response)=>{
            setInputs({
                board: Response.data.board,
                open: open,open2: open
            })
          }).catch((Error)=>{
              console.log(Error);
          })
    }

    const close = () => {
        setInputs ({
          open: false,
          open2: false,
          board: board
        });
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
                        <h5 className="card-category">작성자 : {Object(board).name}</h5>
                    </div>
                <UncontrolledDropdown>
                    <DropdownToggle
                    className="btn-round btn-outline-default btn-icon"
                    color="default"
                    >
                    <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <section onClick={()=>{setInputs({open2: true, board: board})}}>
                            <DropdownItem>Update data</DropdownItem>
                        </section>
                        <section onClick={()=>{setInputs({open: true, board: board})}}>
                            <DropdownItem className="text-danger">
                                Remove data
                            </DropdownItem>
                        </section>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                    {Object(board).contents}
                </CardBody>
                <div  style={{textAlign: "right"}}>
                    <Button color="info" onClick={goBack}>back</Button>&nbsp;&nbsp;
                </div>
            </Card>
            </Col>
        </Row>
        <Delete open={open} close={close} no={props.match.params.no}/>
        <Update open={open2} close={close} no={props.match.params.no}/>
        </div>
    </>
    );
}

export default Board;
