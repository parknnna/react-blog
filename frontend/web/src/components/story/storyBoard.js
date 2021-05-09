import React from "react";
import NotificationAlert from "react-notification-alert";

import "./css/storyBoard.css";
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col
} from "reactstrap";
import {Link} from "react-router-dom";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from 'axios';

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
    axios.get('http://15.164.97.108:8080/story/1/10').then((res)=>{
      console.log(res)
      this.setState({
        story: res.data.story,
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
                    <Col>
                        <Link to={`storyget/${i.no}/${i.filename}`}>
                    <Card>
                        <CardHeader>       
                            <CardTitle tag="h4">{i.title}</CardTitle>
                        </CardHeader>
                        <CardBody>
                        <Alert color="info">
                          <div class="board">
                            {String(Object(i).filename).split("/").length>1 ?
                              <div>
                                <img src={images[`${String(Object(i).filename).split("/")[0]}`]} width="310" height="310"/>
                                <div class="text"><span style = {{fontSize:"1.5em",  color: "black"}}>+{String(Object(i).filename).split("/").length-1}</span></div>
                              </div>:
                              <div class="board-img">
                                <img src={images[`${Object(i).filename}`]} width="310" height="310"/>
                              </div>
                            }
                          </div>
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
