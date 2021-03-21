
import React from "react";
// react plugin used to create charts

import "assets/css/icon.css"

import {ajax_,css3_,github_,html5_,java_,jquery_,js_
  ,maria_,mybatis_,node_,oracle_,python_,spring_,springboot_,c_
} from "../assets/img/icon/icon"


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";




function Skill(){
    return(
        <Col xs={20} md={12}>
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h4">skills</CardTitle>
                </CardHeader>
                <CardBody>
                  <div><h3>Launage</h3></div>
                  <Row>&nbsp;&nbsp;&nbsp;
                    <div class="Skill_image_container" style={{backgroundImage: `url(${c_})`}}><div class="Skill_label">C</div></div>
                    <div class="Skill_image_container" style={{backgroundImage: `url(${java_})`}}><div class="Skill_label">JAVA</div></div>
                    <div class="Skill_image_container" style={{backgroundImage: `url(${python_})`}}><div class="Skill_label">Python</div></div>
                  </Row>
                  <div><h3>Web Skils</h3></div>
                  <Row>&nbsp;&nbsp;&nbsp;
                    <div class="Skill_image_container" style={{backgroundImage: `url(${css3_})`}}><div class="Skill_label">CSS3</div></div>
                    <div class="Skill_image_container" style={{backgroundImage: `url(${html5_})`}}><div class="Skill_label">HTML5</div></div>
                    <div class="Skill_image_container" style={{backgroundImage: `url(${jquery_})`}}><div class="Skill_label">Jquery</div></div>
                    <div class="Skill_image_container" style={{backgroundImage: `url(${js_})`}}><div class="Skill_label">Java Script</div></div>
                    <div class="Skill_image_container" style={{backgroundImage: `url(${mybatis_})`}}><div class="Skill_label">Mybatis</div></div>
                    <div class="Skill_image_container" style={{backgroundImage: `url(${ajax_})`}}><div class="Skill_label">AJAX</div></div>
                  </Row>
                  <div><h3>Data Base</h3></div>
                  <Row>&nbsp;&nbsp;&nbsp;
                    <div class="Skill_image_container" style={{backgroundImage: `url(${maria_})`}}><div class="Skill_label">MariaDB</div></div>
                    <div class="Skill_image_container" style={{backgroundImage: `url(${oracle_})`}}><div class="Skill_label">Oracle</div></div>
                  </Row>
                  <div><h3>Frame Work</h3></div>
                  <Row>&nbsp;&nbsp;&nbsp;
                    <div class="Skill_image_container" style={{backgroundImage: `url(${spring_})`}}><div class="Skill_label">Spring</div></div>
                    <div class="Skill_image_container" style={{backgroundImage: `url(${springboot_})`}}><div class="Skill_label">SpringBoot</div></div>
                    <div class="Skill_image_container" style={{backgroundImage: `url(${node_})`}}><div class="Skill_label">Node.JS</div></div>
                  </Row>
                  <div><h3>ETC</h3></div>
                  <Row>&nbsp;&nbsp;&nbsp;
                    <div class="Skill_image_container" style={{backgroundImage: `url(${github_})`}}><div class="Skill_label">Github</div></div>
                  </Row>
                </CardBody>
                <CardFooter>
                 
                </CardFooter>
              </Card>
            </Col>
    )
}

export default Skill;