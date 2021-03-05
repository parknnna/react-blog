import React, { useState, useEffect } from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import axios from 'axios'
import PanelHeader from "components/PanelHeader/PanelHeader.js";


function Insert (props) {
    const [inputs, setInputs] = useState({  
        name: '',
        pw: '',
        title: '',
        contents: '',
    })
    const { name, pw, title, contents } = inputs  

    const goBack = () => {
        props.history.goBack();
    };

    useEffect(() => {
        getBoard();
    },[]);

    const getBoard = () => {
        axios.get(`http://localhost:8080/board/`+props.match.params.no).then((Response)=>{
            console.log(Response)
            setInputs({
                name:Response.data.board.name,
                pw:"", 
                title:Response.data.board.title,
                contents:Response.data.board.contents,
            })
          }).catch((Error)=>{
              console.log(Error);
          })
    }

    const submit = () =>{
        if(document.getElementById("pw").value===""){
            alert("비밀번호를 입력해주세요")
            return
        }
        axios({
            method:"PUT",
            url: 'http://localhost:8080/board',
            data:{
                "no": props.match.params.no,
                "name": name,
                "pw": pw,
                "title": title,
                "contents": contents
            }
        }).then((Response)=>{
            alert("작성 완료")  
        }).catch((Error)=>{
            console.log(Error);
            alert("오류")
        })
    }

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
        ...inputs,
        [name]: value
        });
    };
    return (
    <>
    <PanelHeader size="sm" />
    <div className="content">
        <Row>
        <Col xs={12}>
            <Card>
            <CardHeader>
                <h5 className="title">글수정</h5>
            </CardHeader>
            <CardBody>
                <Form>
                <Row>
                    <Col className="pr-1" md="5">
                    <FormGroup>
                        <label>이름</label>
                        <Input onChange={onChange}
                            placeholder="name" name="name"
                            type="text" value={name}
                        />
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="pr-1" md="5">
                    <FormGroup>
                        <label>비밀 번호</label>
                        <Input onChange={onChange}
                            placeholder="password" name="pw" id="pw"
                            type="password" value={pw}
                        />
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="8">
                    <FormGroup>
                        <label>제목</label>
                        <Input onChange={onChange}
                            placeholder="title" name="title"
                            type="text" value={title}
                        />
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="pr-1" md="9">
                    <FormGroup>
                        <label>내용</label>
                        <Input
                            cols="100%" value={contents}
                            placeholder="contents"
                            rows="10" name="contents"
                            type="textarea" onChange={onChange}
                        />
                    </FormGroup>
                    </Col>
                </Row>
                </Form>
            <div style={{textAlign:"right"}}>
                <Button color="info" onClick={submit}>submit</Button>{' '}
                <Button color="secondary" onClick={goBack}>back</Button>
            </div>
            </CardBody>
            </Card>
        </Col>
        </Row>
    </div>
    </>
    );
  
}

export default Insert;
