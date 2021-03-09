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
/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { CCol, CFormGroup, CLabel} from '@coreui/react';
import {Link} from "react-router-dom"

class Footer extends React.Component {
  state={admin:false, PW:""}

  submit = () =>{
    if(this.state.PW==="tnals123!"){
      alert("관리자 로그인")
      window.sessionStorage.setItem("ad",true);
      document.getElementById("ad").click();
      this.setState({
        admin:false
      })
    }else{
      alert("비밀번호가 다릅니다.")
    }
  }

  onChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };
  close=()=>{
    this.setState({
      admin:false
    })
  };


  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <hidden>
          <Link to="/admin" id="ad"></Link>
        </hidden>
        <Container fluid={this.props.fluid ? true : false}>
          <div style={{textAlign:"right"}}>
            <Button variant="contained" color="primary" onClick={()=>{this.setState({admin:true})}}>관리자</Button>
          </div>

          <Dialog open={this.state.admin} contentStyle={{width: "100%", maxWidth: "none"}} onClose={()=>this.close()} >
          <DialogTitle>관리자 로그인</DialogTitle>
            <DialogContent>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="start_date">Password</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <input type="password" name="PW" placeholder="PW" value={this.state.PW} onChange={this.onChange} />
                </CCol>
              </CFormGroup>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" onClick={this.submit}>로그인</Button>
              <Button variant="outlined" color="primary" onClick={()=>this.close()}>닫기</Button>
            </DialogActions>
          </Dialog>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
