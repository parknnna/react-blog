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

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";


import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";



class User extends React.Component {
  render() {
    return (
      <>
      <Dialog open={this.props.open} contentStyle={{width: "100%", maxWidth: "none"}} onClose={this.props.close()}>
      
        <DialogTitle>결재 하기</DialogTitle>
          <DialogContent>
          
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

export default User;
