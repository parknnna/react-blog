
import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';

import {
  Card,
  CardBody,
  CardHeader,
  Table,
  Row,
  Col,
} from "reactstrap";

import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from 'axios';
import '../../router'

const ad = window.sessionStorage.getItem("ad")
const thead = ['no','title','personnel','develop period']
const Project = () => {
    const [inputs, setInputs] = useState({
        body: "",  
        page: [],
        day:""
    });

    const { body, page } = inputs;

    useEffect(() => {
        boardGet();
    },[]);

    const pageChange = (selPage) => { //페이지 이동 클릭
        movePage(selPage,page.cntPerPage)
    }
    const nextpage = () => { //다음 페이지
        movePage(page.endPage+1,page.cntPerPage)
    }
    const prevpage = () => { //이전 페이지
        movePage(page.startPage-1,page.cntPerPage)
    }
    const movePage = (nowpage,perpage) => { //페이지 이동
        axios.get("http://15.164.97.108:8080/project/"+nowpage+"/"+perpage)
            .then(Response => {
                let project=[];
                for(let i=0;i<Response.data.projects.length;i++){
                    var msDiff = new Date(Response.data.projects[i].startDay).getTime() - 
                        new Date(Response.data.projects[i].endDay).getTime();  
                    var diff = Math.floor(msDiff / (1000 * 60 * 60 * 24));
                    let temp={
                        no:Response.data.projects[i].no,
                        title:Response.data.projects[i].title,
                        personnel:Response.data.projects[i].personnel,
                        day:diff
                    };
                    project.push(temp);
                }
                

                setInputs({
                    body: project,
                    page: Response.data.page,
                })
            })
            .catch(res => console.log(res))
    }
    const makeMap = (start,end) => { //배열 만드는 함수
        var result=[];
        for(var i=start;i<=end;i++){
        result.push(i);
        }
        return result;
    }

    const boardGet = () => {
        axios.get('http://15.164.97.108:8080/project/1/10').then((Response)=>{
            let project=[];
            for(let i=0;i<Response.data.projects.length;i++){
                var msDiff = new Date(Response.data.projects[i].endDay).getTime() - 
                    new Date(Response.data.projects[i].startDay).getTime();  
                var diff = Math.floor(msDiff / (1000 * 60 * 60 * 24));
                let temp={
                    no:Response.data.projects[i].no,
                    title:Response.data.projects[i].title,
                    personnel:Response.data.projects[i].personnel,
                    day:diff,
                    startDay:Response.data.project[i].startDay,
                    endDay:Response.data.project[i].endDay
                };
                project.push(temp);
            }
            

            setInputs({
                body: project,
                page: Response.data.page,
            })
        }).catch((Error)=>{
            console.log(Error);
        })
    }
    return (
    <>
        <PanelHeader
        content={
            <div className="header text-center">
            <h2 className="title">Projects</h2>
            </div>
        }
        />
        <div className="content">
        <Row>
            <Col xs={12}>
            <Card>
                <CardHeader>
                    {ad && 
                        <div style={{textAlign: "right"}}>
                            <Link to="projectInsert" style={{textAlign:"right"}}>프로젝트 작성</Link>
                        </div>
                    }          
                </CardHeader>
                <CardBody>
                <Table responsive>
                    <thead className="text-primary">
                    <tr>
                        {thead.map((prop, key) => {
                        if (key === thead.length - 1)
                            return (
                            <th key={key} className="text-right">
                                {prop}
                            </th>
                            );
                        if(key === 1){
                            return(
                            <th key={key} style={{width:"40%"}}>{prop}</th>
                            );
                        }
                        return <th key={key} style={{width:"20%"}}>{prop}</th>;
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {body&&body.map((prop, key) => {
                        return (
                        <tr key={key}>
                            <td>{prop.no}</td>
                            <td>
                            <Link to={`/admin/projectGet/${prop.no}`}>{prop.title}</Link>
                            </td>
                            <td>{prop.personnel}</td>
                            <td className="text-right">{prop.startDay} ~ {prop.endDay}({prop.day} 일)</td>
                        </tr>
                        );
                    })}
                    </tbody>
                </Table>
                <nav aria-label="pagination">
                    <ul class="pagination justify-content-center">
                    {page.startPage !== 1 ?
                        <li onClick={() => prevpage()} class="page-item disabled"><a class="disabled page-link" aria-label="Go to previous page" aria-disabled="true">‹</a></li> : ""} {/*이전 */}
                    {makeMap(page.startPage,page.endPage).map((i) => {
                        if(page.nowPage===i){
                        return(<li class="active page-item"><a class="page-link" aria-label="Current page 1">{i}</a></li>);
                        }else{
                        return(<li onClick={() => pageChange(i)} class=" page-item"><a class="page-link" aria-label="Go to page 2">{i}</a></li>)
                        }
                    })}
                    {page.endPage !== page.lastPage ? <li class="page-item" onClick={() => nextpage()}><a class="page-link" aria-label="Go to next page" aria-disabled="false">›</a></li> : ''} {/*다음 */}
                    </ul>
                </nav>
                </CardBody>
            </Card>
            </Col>
        </Row>
        </div>
    </>
    );
    
}

export default Project;
