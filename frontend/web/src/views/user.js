import React from "react";

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



function User(){
    return(
        <Row>
        <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img alt="..." src={require("assets/img/bg5.jpg")} />
                </div>
                <CardBody>
                  <div className="author">
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/myimg/3.jpg")}
                      />
                      <h5 className="title">박수민</h5>
                    <p className="description">Park Sumin</p>
                  </div>
                  <p className="description text-center">
                    안녕하세요 박수민입니다.
                  </p>
                </CardBody>
                <hr />
                <div className="button-container">
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-facebook-f" />
                  </Button>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-google-plus-g" />
                  </Button>
                </div>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <CardHeader>
                <h5>자바(JAVA)활용 웹 & 안드로이드 앱 개발</h5>
                </CardHeader>
                <CardBody>
                서버프로그램구현(330시간)<br/>
                -2001020205_16v4 데이터 입출력 구현,2001020206_16v4 통합 구현<br/>
                -2001020211_16v4 서버프로그램 구현, 2001020212_16v4 인터페이스 구현<br/>
                -2001020215_15v3 프로그래밍 언어활용, 2001020216_15v3 응용SW 기초기술 활용<br/>
                클라이언트프로그램 구현 (330시간)<br/>
                -2001020225_16v4 화면 구현, 설계 2001020708_17v2 UI 구현<br/>
                애플리케이션 테스트 및 배포, 설계 (90시간)<br/>
                -2001020227_16v4 애플리케이션 테스트 수행, 2001020214_16v4 애플리케이션 배포<br/>
                데이터베이스 구현 (60시간)<br/>
                -2001020405_16v3 데이터베이스 구현, 2001020413_16v3 SQL활용<br/>
                어플리케이션 설계 (30시간)<br/>
                -2001020221_16v4 어플리케이션 설계<br/>
                -안드로이드 앱 개발 프로젝트 (50시간)<br/>
                -안드로이드 앱 개발과 코틀린, 코틀린 안드로이드 확장, Anko 확장 활용<br/>
                코틀린 프로그래밍 (40시간)<br/>
                -코틀린 기본 익히기, 객체 지향 프로그래밍, 코틀린 표준 라이브러리의 활용<br/><br/><br/>
                </CardBody>
              </Card>
            </Col>
            </Row>
    )
}
export default User;