import React, { useState } from 'react';

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
import "../../router";
import {Link} from "react-router-dom"


function Insert ({history}) {
    const file = new FormData();
    const [inputs, setInputs] = useState({  
        title: "",
        contents: "",
    })
    const { title,
        contents,} = inputs  

    const goBack = () => {
        history.goBack();
    };

    const submit = () =>{
        var data={
            title: title,
            contents: contents,
            filename: "",
        }
        if(file.get("file")){
            axios.post('http://15.164.97.108:8080/storyfile',file,{"content-type": "multipart/form-data;charset=UTF-8"})
            .then((Response)=>{
            }).catch((Error)=>{
                console.log(Error);
                alert("파일 오류")
                return;
            })
            data.filename=file.get("file").name;
        }
        axios.post('http://15.164.97.108:8080/story',data)
        .then((Response)=>{
            alert("작성완료");
            document.getElementById("link").click();
        }).catch((Error)=>{
            console.log(Error);
            alert("오류");
        })
    }

    const fileChangedHandler = (e) =>{
        console.log(e.target.files[0])
        file.append("file",e.target.files[0])
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
    <hidden>
        <Link to="/admin/story" id="link"></Link>
    </hidden>
    <PanelHeader size="sm" />
    <div className="content">
        <Row>
        <Col xs={12}>
            <Card>
            <CardHeader>
                <h5 className="title">일상 작성</h5>
            </CardHeader>
            <CardBody>
                <Form>
                <Row>
                    <Col className="pr-1" md="5">
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
                <Row>
                <Col className="pr-1" md="9">
                        <FormGroup>
                            <label>이미지</label>
                            <input                               
                                placeholder="file"
                                rows="10" name="filename"
                                type="file" onChange={fileChangedHandler} id="file" 
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
