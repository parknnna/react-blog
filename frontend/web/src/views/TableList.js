
import React from "react";
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
import '../router'

const thead = ['no','title','name','day']
class RegularTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: null,
      page: []
    };
  }

  componentDidMount(){
    this.boardGet();
  }

  pageChange(selPage){ //페이지 이동 클릭
    const {page}=this.state;
    this.movePage(selPage,page.cntPerPage)
  }
  nextpage(){ //다음 페이지
    const {page}=this.state;
    this.movePage(page.endPage+1,page.cntPerPage)
  }
  prevpage(){ //이전 페이지
    const {page}=this.state;
    this.movePage(page.startPage-1,page.cntPerPage)
  }
  movePage(nowpage,perpage){ //페이지 이동
    axios.get("http://localhost:8080/board/"+nowpage+"/"+perpage)
        .then(res => {
            this.setState({
              body: res.data.board,
              page: res.data.page
            })
        })
        .catch(res => console.log(res))
  }
  makeMap(start,end){ //배열 만드는 함수
    var result=[];
    for(var i=start;i<=end;i++){
      result.push(i);
    }
    return result;
  }

  boardGet = () => {
    axios.get('http://localhost:8080/board/1/10').then((Response)=>{
      console.log(Response)
      this.setState({
        body: Response.data.board,
        page: Response.data.page
      })
    }).catch((Error)=>{
        console.log(Error);
    })
  }

  render() {
    var {body} = this.state
    const { page } = this.state;
    return (
      <>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">notice board</h2>
            </div>
          }
        />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  
                  <div style={{textAlign: "right"}}>
                    <Link to="boardInsert" style={{textAlign:"right"}}>글쓰기</Link>
                  </div>

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
                              <Link to={`/admin/board/${prop.no}`}>{prop.title}</Link>
                            </td>
                            <td>{prop.name}</td>
                            <td>{prop.day}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                  <nav aria-label="pagination">
                    <ul class="pagination justify-content-center">
                      {page.startPage !== 1 ?
                        <li onClick={() => this.prevpage()} class="page-item disabled"><a class="disabled page-link" aria-label="Go to previous page" aria-disabled="true">‹</a></li> : ""} {/*이전 */}
                      {this.makeMap(page.startPage,page.endPage).map((i) => {
                        if(page.nowPage===i){
                          return(<li class="active page-item"><a class="page-link" aria-label="Current page 1">{i}</a></li>);
                        }else{
                          return(<li onClick={() => this.pageChange(i)} class=" page-item"><a class="page-link" aria-label="Go to page 2">{i}</a></li>)
                        }
                      })}
                      {page.endPage !== page.lastPage ? <li class="page-item" onClick={() => this.nextpage()}><a class="page-link" aria-label="Go to next page" aria-disabled="false">›</a></li> : ''} {/*다음 */}
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
}

export default RegularTables;
