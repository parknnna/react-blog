import React from 'react';

import { DropdownItem } from "reactstrap";
import axios from 'axios'

function ADDelete(props){
    const goBack = () => {
        props.prop.history.goBack();
    };

    const adminDelete = () => {
        axios.delete(`http://15.164.97.108:8080/AD`,{
            data: {
                no: props.no,
                table: props.table    
            }
        }).then(()=>{
            alert("삭제되었습니다.");
            goBack();
        }).catch((Error)=>{
            console.log(Error);
        })
    }
    
    return (
    <>
        <div>
            <section onClick={()=>{adminDelete()}}>
                <DropdownItem className="text-danger">
                    Remove data(AD)
                </DropdownItem>
            </section>
        </div>
    </>
    );
}

export default ADDelete;
