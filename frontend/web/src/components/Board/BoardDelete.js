import React from "react";

import { CCol, CFormGroup, CLabel} from '@coreui/react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

import { Link } from 'react-router-dom';
import axios from 'axios'
import '../../router'


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false
    };
  }

  close=()=>{
    this.props.close();
  };

  onChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  submit = () =>{
    axios.delete(`http://localhost:8080/board`,{
      data: {
        no: this.props.no,
        name: this.state.name,
        pw: this.state.pw
      }
    }).then((Response)=>{
      if(Number(Response.data)===1){
        alert("삭제 되었습니다.")
        document.getElementById("delete").click()
      }else if (Number(Response.data)===-1){
        alert("이름이 다릅니다")
      }else{
        alert("비밀 번호가 다릅니다.")
      }           
    }).catch((Error)=>{
      console.log(Error);
    })
  }

  render() {
    return (
      <>
      <hidden>
          <Link to="/admin/extended-tables" id="delete">
          </Link>
      </hidden>
      <Dialog open={this.props.open} contentStyle={{width: "100%", maxWidth: "none"}} onClose={()=>this.close()} >
        <DialogTitle>게시글 삭제</DialogTitle>
          <DialogContent>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="start_date">Name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <input name="name" placeholder="이름" value={this.state.title} onChange={this.onChange} />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="start_date">PassWord</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <input type="password" name="pw" placeholder="비밀 번호" value={this.state.pw} onChange={this.onChange} />
              </CCol>
            </CFormGroup>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={this.submit}>삭제</Button>
            <Button variant="outlined" color="primary" onClick={()=>this.close()}>닫기</Button>
          </DialogActions>
      </Dialog>
      </>
    );
  }
}

export default User;
