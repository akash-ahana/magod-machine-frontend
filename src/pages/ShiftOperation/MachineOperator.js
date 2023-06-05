import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainModal from "./OpenShiftLog/MainModal";

export default function MachineOperator() {
  const[openModal, setOpenModal]=useState(false);

  const handleOpen=()=>{
    console.log("11");
setOpenModal(true);
console.log(openModal);
  }
  return (
    <div>
      {
        openModal &&
        <MainModal openModal={openModal} setOpenModal={setOpenModal} />
      }
      <div className="col-md-12">
        <div className="row">
          <h4 className="title">Shift Selection Form</h4>
        </div>
      </div>
      <div className="row">
        <div style={{ marginTop: "10px" }} className="col-md-3 col-sm-12">
          <h6 className="mt-2">Operator Current Shift Selector Form</h6>
        </div>
        <div className="col-md-3 col-sm-12">
     <Link to="/machine/machineOperator/OpenShiftLog">    <button
            className="button-style  group-button"
            style={{ width: "120px", marginTop: "10px" }}
            onClick={handleOpen}
          >
            Open Shift Log
          </button> </Link> 
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-12">
          <label className="form-label">Operator</label>
        </div>
        <div
          style={{ marginLeft: "-200px", width: "15%" }}
          className="col-md-3 col-sm-12"
        >
          <select className="ip-select">
            <option>ABC</option>
            <option>DEF</option>
            <option>GHI</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div style={{ marginTop: "10px" }} className="col-md-3 col-sm-12">
          <b>Shift Date</b>
        </div>
        <div style={{ marginTop: "10px" }} className="col-md-3 col-sm-12">
          <b>Shift</b>
        </div>
      </div>

      <hr
        style={{
          backgroundColor: "black",
          height: "3px",
        }}
      />

<div style={{height:"400px",width:"600px",overflowY: "scroll",overflowX: "scroll",marginTop:"20px"}}>
           <Table striped className="table-data border" style={{border:"1px"}}>
                <thead className="tableHeaderBGColor">
                <tr>
                        <th>Operator</th>
                        <th>Shift Remarks</th>
                        
                </tr>
                </thead>
                 <tbody className='tablebody'>
                  </tbody>
          </Table>
         </div> 
    </div>
  );
}
