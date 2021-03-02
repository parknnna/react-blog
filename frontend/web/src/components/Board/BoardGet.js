import React from "react";

import { Card, CardHeader, CardBody, Row, Col  , DropdownMenu, DropdownToggle,UncontrolledDropdown,CardTitle,
    DropdownItem,} from "reactstrap";

import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../../router'
import Delete from './BoardDelete'
class boardget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          board: null,
          open: false
        };
      }
    componentDidMount(){
        this.getBoard();
    }

    getBoard(){
        axios.get(`http://localhost:8080/board/`+this.props.match.params.no).then((Response)=>{
            console.log(Response)
            this.setState({
              board: Response.data.board,
            })
          }).catch((Error)=>{
              console.log(Error);
          })
    }

    close(){
        this.setState({
            open: false
        })
    }

    render() {
        return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
            <Row>
                <Col md={12}>
                <Card className="card-chart">
                    <CardHeader>
                    <h5 className="card-category">{Object(this.state.board).name} 님의</h5>
                    <CardTitle tag="h4">{Object(this.state.board).title}</CardTitle>
                    <UncontrolledDropdown>
                        <DropdownToggle
                        className="btn-round btn-outline-default btn-icon"
                        color="default"
                        >
                        <i className="now-ui-icons loader_gear" />
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Update data</DropdownItem>
                            <section onClick={()=>{this.setState({open:true})}}>
                                <DropdownItem className="text-danger">
                                    Remove data
                                </DropdownItem>
                            </section>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </CardHeader>
                    <CardBody>
                        {Object(this.state.board).contents}
                    </CardBody>
                </Card>
                </Col>
            </Row>
            <Delete open={this.state.open}></Delete>
            </div>
        </>
        );
    }
}

export default boardget;
