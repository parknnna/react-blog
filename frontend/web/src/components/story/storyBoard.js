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
import {Link} from "react-router-dom"
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from 'axios'

class License extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        story: null,
    };
  }
  componentDidMount(){
    this.story();
  }

  story = () =>{
    axios.get('http://localhost:8080/story/1/10').then((Response)=>{
      console.log(Response)
      this.setState({
        story: Response.data.story,
      })
    }).catch((Error)=>{
        console.log(Error);
    })
  }

 

  render() {
      var ad = window.sessionStorage.getItem("ad")
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
    const images = importAll(require.context('./myimg', false, /\.(png|jpe?g|svg)$/));
      
    var { story }=this.state
    return (
      <>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">Story</h2>
            </div>
          }
        />
        
        <div className="content">
          <NotificationAlert ref="notificationAlert" />
          <Row>
            {story&&story.map((i,k)=>{
              return(
                  <div>
                    
                    <Col width="20%">
                        <Link to={`storyget/${i.no}/${i.filename}`}>
                    <Card>
                        <CardHeader>       
                            <CardTitle tag="h4">{i.title}</CardTitle>
                        </CardHeader>
                        <CardBody>
                        <Alert color="info">
                        <img src={images[`${Object(i).filename}`]} width="240" height="240"/>
                        <div style={{textAlign: "right"}}>날짜 : {i.day}</div>
                        </Alert>
                        </CardBody>
                    </Card>
                        </Link>
                    </Col> 
                  </div>
              );
            })}  
            
          </Row>
        </div>
        {ad && 
            <div style={{textAlign: "right"}}>
                <Link to="storyInsert" style={{textAlign:"right"}}>일상 작성</Link>
            </div>
        } 
      </>
    );
  }
}

export default License;
