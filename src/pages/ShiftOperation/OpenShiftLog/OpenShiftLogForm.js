import React, { useState } from 'react';


import ErrorrForm from './ErrorrForm';

export default function OpenShiftLogForm() {
  const [errorForm, setErrorForm] = useState(false);
  const [isInputVisible, setInputVisible] = useState(false);
  
  
  const toggleInput = () => {
   
setInputVisible(!isInputVisible)

  };
 
  const handleOpen = () => {
    setErrorForm(true)
  }

  const refreshSubmit = () => {
    setInputVisible(false);
  }
  return (
    <>
    

      <div>
        <div className="col-md-12">
          <div className="row">
            <h5 className="title">Machine Log Book</h5>
          </div>
        </div>
        <div className="row">
          <div style={{ marginTop: "10px" }} className="col-md-7 col-sm-12">
            <h5 className="mt-2">Magod Laser Machining Pvt Ltd</h5>
            <h6 className="mt-2">Machine Operator information and Working Form</h6>
          </div>
          <div className="col-md-1 col-sm-12">
            <button
              className="button-style  group-button"
              style={{ width: "90px", marginTop: "10px", fontSize: '14px' }}
              onClick={toggleInput}>
              Stoppage
              {isInputVisible ?  
                <div className='col-md-12' style={{ marginLeft: '-160px', marginTop: '-20px',width:'140px' }}>

                  <div>
                    {/* <label className="form-label">Shift</label> */}
                    <select className="ip-select">
                      <option value="option 1"> First</option>
                      <option value="option 1">Second</option>
                      <option value="option 1">Third</option>
                    </select>

                    <select className="ip-select">
                      <option value="option 1"> First</option>
                      <option value="option 1">Second</option>
                      <option value="option 1">Third</option>
                    </select>

                  </div>

                </div>: '' }


            </button>
          </div>

          <div className="col-md-1 col-sm-12">
            <button
              className="button-style  group-button"
              style={{ width: "90px", marginTop: "10px", fontSize: '14px' }}
            >
              Get Program
            </button>
          </div>
          <div className="col-md-1 col-sm-12">
            <button
              className="button-style  group-button"
              style={{ width: "90px", marginTop: "10px", fontSize: '14px' }}
              onClick={handleOpen}
            >
              Error Report
            </button>
          </div>
          <div className="col-md-1 col-sm-12">
            <button
              className="button-style  group-button"
              style={{ width: "90px", marginTop: "10px", fontSize: '14px' }}
              onClick={refreshSubmit} >
              Refresh
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1 col-sm-12">
            <label className="form-label">Laser5</label>
          </div>
          <div
            style={{ marginLeft: "0px", width: "" }}
            className="col-md-1 col-sm-4"
          >
            <input type="text" />

          </div>

          <div
            style={{ marginLeft: "0px", width: "" }}
            className="col-md-1 col-sm-4"
          >
            <input type="text" />

          </div>

          <div
            style={{ marginLeft: "0px", width: "" }}
            className="col-md-1 col-sm-4"
          >
            <input type="text" />

          </div>
        </div>



        <hr
          style={{
            backgroundColor: "black",
            height: "3px",
          }}
        />


      </div>
      
      <ErrorrForm  setErrorForm={setErrorForm} errorForm={errorForm}/>

    </>
  );
}
