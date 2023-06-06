import React, { useEffect, useState } from 'react';

export default function MachineShiftStatusForm() {
  

  
  const [isInputVisible, setInputVisible] = useState(false);
  

  const toggleInput = () => {
  
    setInputVisible(!isInputVisible);

  };
  

  return (
    <>
      <div className='' >

        <div style={{
          textAlign: "", backgroundColor: "#d3d3d3",
          marginTop: "2px", marginLeft: "-12px", fontSize: "14px",
        }}
        >
          <p style={{ marginLeft: '70px' }}> <b>Machine Shift Status </b></p>

          <div style={{ color: "", marginLeft: '10px' }}> <b>Operator :  11</b></div>

          <div style={{ color: "", marginLeft: '10px' }}><b>Current :12</b></div>


          <br></br>

          <div style={{ textAlign: "" }} className='d-flex'>

            <button className="button-style mt-2 group-button mt-2 mb-2"
              style={{ width: "80px", fontSize: "14px", marginLeft: '20px' }}
              onClick={toggleInput}
            >
              Select  {isInputVisible ?
                <div className='col-md-12' style={{ marginLeft: '120px', marginTop: '-25px', width:'140px'}}>
                  
                   
                 <select className="ip-select" style={{}}>
                    <option value="option 1"> First</option>
                    <option value="option 1">Second</option>
                    <option value="option 1">Third</option>
                 </select>
                 
                </div> : ''}
            </button>





          </div>







        </div>


      </div>




      <div className=' mt-2 '>

        <div style={{
          textAlign: "", backgroundColor: "#d3d3d3",
          marginTop: "2px", marginLeft: "-12px", fontSize: "14px", height:'172px'
        }}
        >
          <p style={{ marginLeft: '70px' }}><b>Process Task Status </b></p>

          <div style={{ color: "", marginLeft: '10px' }}> <b>Task No :  </b></div>

          <div style={{ color: "", marginLeft: '10px' }}><b>Operation :</b></div>
          <div style={{ color: "", marginLeft: '10px' }}> <b>Material :  </b></div>

          <div style={{ color: "", marginLeft: '10px' }}><b>Program no :</b></div>
          <div style={{ color: "", marginLeft: '10px' }}> <b>Start Time :  </b></div>

          <div className='mb-3' style={{ color: "", marginLeft: '10px' }}><b>Running For :</b></div>





        </div>
      </div>


      <div className='mt-2'>

        <div className='' style={{
          backgroundColor: "#d3d3d3", marginLeft: "-12px", 
          fontSize: "14px",marginBottom:'20px', height:'115px'
        }}
        >
          <div className='ms-2'>
            <p className='ms-5'><b>Material Machine Time </b></p>
            <div><b>Sheet Id:</b></div>
            <div> <b>Start Time :  </b></div>
            <div className=''><b>Running For :</b></div>
          </div>
        </div>
      </div>
    </>
  );
}
