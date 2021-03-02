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
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col
} from "reactstrap";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from 'axios'

class License extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      License: null
    };
  }
  componentDidMount(){
    this.LicenseGet();
  }

  LicenseGet = () =>{
    axios.get('http://localhost:8080/License').then((Response)=>{
      console.log(Response)
      this.setState({
        License: Response.data.License
      })
    }).catch((Error)=>{
        console.log(Error);
    })
  }

 

  render() {
    var { License }=this.state
    return (
      <>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">License</h2>
            </div>
          }
        />
        <div className="content">
          <NotificationAlert ref="notificationAlert" />
          <Row>
            {License&&License.map((i)=>{
              return(
                <Col md={6} xs={12}>
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">License</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Alert color="info">
                      <h3>{i.name}</h3>
                      <div style={{textAlign: "right"}}>발급 : {i.home}</div>
                      <div style={{textAlign: "right"}}>날짜 : {i.day}</div>
                      </Alert>
                    </CardBody>
                  </Card>
                </Col> 
              );
            })}  
          </Row>
        </div>
      </>
    );
  }
}

export default License;
