/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from 'axios';
import '../router'

const thead = ['no','title','name','day']
class RegularTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: null,
    };
  }

  componentDidMount(){
    this.boardGet();
  }

  boardGet = () => {
    axios.get('http://localhost:8080/board/1/10').then((Response)=>{
      console.log(Response)
      this.setState({
        body: Response.data.board,
      })
    }).catch((Error)=>{
        console.log(Error);
    })
  }

  render() {
    var {body} = this.state
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
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
