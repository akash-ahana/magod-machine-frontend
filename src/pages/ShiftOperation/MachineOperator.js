import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";
import {baseURL} from '../../api/baseUrl'
import { useState } from "react";
import { useEffect } from "react";
import OpenShiftModal from "./OpenShiftLogModal";

export default function MachineOperator() {

  //get Machine List
  const[machineList,setMachineList]=useState([])
  const getMachineList=()=>{
    axios.get(baseURL + "/ShiftOperator/getallMachines").then((response) => {
      setMachineList(response.data);
      console.log(response.data)
    });
  }
  useEffect(()=>{
    getMachineList();
  },[])

  //Selected Machine
  const moment = require('moment');
  const today = moment();
  let Date=today.format("YYYY-MM-DD HH:mm:ss");
   console.log(Date);

   let array=Date.split(' ');
   console.log(array[1]);
   let  date=array[0];

    // Date Format  Change
    let date1 =date.split("-")
    let year1 = date1[0];
    let month1 = date1[1];
    let day1 = date1[2];
    let finalDay1 = day1+"/"+month1+"/"+year1
    let Time=array[1].split(':');
    let hour=Time[0];
    let Shift=''
  if(hour<14 && hour>=6  ){
    Shift='First'
  }
  else if(hour>=14 && hour<22){
    Shift='Second'
  }
  else if(hour>=22 && hour<6){
    Shift="Third"
  }
  // else if(hour>=9 && hour<=17){
  //   Shift="General"
  // }
console.log(Shift)
  const[selectedMachine,setSelectedMachine]=useState('');
  const[shiftDetails,setShiftDetails]=useState([])
  const handleMachineChange = (e) => {
    setSelectedMachine(e.target.value);
    axios.post(baseURL + "/ShiftOperator/getShiftDetails",{refName:e.target.value,ShiftDate:date,Shift:Shift}).then((response) => {
      setShiftDetails(response.data);
      console.log(response.data)
      console.log("function Called")
    });
  };
  console.log("MachineSelected",selectedMachine)

  //Open ShiftLog  Modal
  const[openmodal,setOpenmodal]=useState('');
  const openShiftLogModal=()=>{
    setOpenmodal(true);
  }

  //selecting table
  const[selectshifttable,setSelectshifttable]=useState({})
  const selectShifttableRow=(item,index)=>{
      let list={...item,index:index}
      setSelectshifttable(list);
  }

  return (
    <div>
      <OpenShiftModal openmodal={openmodal}
      setOpenmodal={setOpenmodal}/>
      <div className="col-md-12">
        <div className="row">
          <h4 className="title">Shift Selection Form</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-12 mt-2">
          <h6 className="mt-2" style={{whiteSpace:"nowrap"}}><b>Operator Current Shift Selector Form</b></h6>
        </div>
        <div className="col-md-3 ms-2 col-sm-12">
          <button
            className="button-style  group-button"
            style={{ width: "150px", marginTop: "10px" }}
            onClick={openShiftLogModal}
          >
            Open Shift Log
          </button>
        </div>
      </div>

      <div className="row mt-2">
         <div className="col-md-4" style={{display:"flex"}}>
         <label style={{whiteSpace:"nowrap"}} className="form-label">Select Machine</label>
         <select className="ip-select ms-5"  onChange={handleMachineChange}>
              <option selected>Select Machine</option>
                {machineList.map((dataMachineList) => (
                  <option  value={dataMachineList.refName}>{dataMachineList.refName}</option>
                ))}
              </select>
         </div>
      </div>

      <div className="row mt-3 mb-5">
        <div  className="col-md-3  col-sm-12" style={{display:"flex",gap:"40px"}}>
          <b>Shift Date</b><b>{finalDay1}</b>
        </div>
        <div  className="col-md-3 col-sm-12" style={{display:"flex",gap:"40px",marginLeft:"-50px"}}>
          <b>Shift</b><b>{Shift}</b>
        </div>
      </div>
      <div></div>

      <div style={{display:"flex",gap:"30px",marginTop:"-30px"}} className="ms-2">
        <div>
          {finalDay1}
        </div>
        <div>
          {Shift==='First' ? (<p>6:00:00</p>):
           Shift==='Second' ? (<p>14:00:00</p>):
           Shift==='Second' ? (<p>22:00:00</p>):
           null
          }
        </div>
      -
        <div>
          {Shift==='First' ? (<p>14:00:00</p>):
           Shift==='Second' ? (<p>22:00:00</p>):
           Shift==='Second' ? (<p>6:00:00</p>):
           null
          }
      </div>
      </div>

      <hr
        style={{
          backgroundColor: "black",
          height: "3px",
        }}
      />

<div style={{height:"400px",width:"600px",overflowY: "scroll",overflowX: "scroll",marginTop:"20px"}}>
           <Table striped className="table-data border">
                <thead className="tableHeaderBGColor">
                <tr>
                        <th>Operator</th>
                        <th>Shift Remarks</th>
                </tr>
                </thead>
                 <tbody className='tablebody'>
                  {shiftDetails.map((item,key)=>{
                    return(
                      <>
                      <tr onClick={()=>{selectShifttableRow(item,key)}} className={key===selectshifttable?.index? 'selcted-row-clr':'' }>
                        <td>{item.Operator}</td>
                        <td>{item.ShiftRemarks}</td>
                      </tr>
                      </>
                    )
                  })}
                  </tbody>
          </Table>
         </div> 
    </div>
  );
}
