import React from "react";

import Skill from "./skill"
import User from "./user"
import $ from "jquery";
import {
  Row,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

var tt=2;
class Dashboard extends React.Component {
  componentDidMount(){
    this.typing()
  }

  typing(){
    var $typing = $("#typing");
    var text = $typing.text();
    $typing.html("");
    var chars = text.split("");

    chars.forEach(function (item) {
        item = (item === " ") ? "&nbsp" : item;
        $("<span style='color:white'></span>").html(item).appendTo($typing);
    });

    var delayStart = 150;
    var speed = 100;

    $typing.children().hide().each(function (index) {
        var delay = delayStart + speed * index;
        $(this).delay(delay).show(1);
    });
  }

  render() {
    return (
      <>
        <PanelHeader
        content={
            <div className="header text-center">
              <h2 id="typing">박수민 블로그에 오신걸 환영합니다.</h2>
            </div>
        }
        />
        <div className="content">
          <User></User> 
          <Row>
            <Skill></Skill>      
          </Row>     
        </div>
      </>
    );
  }
}

export default Dashboard;
