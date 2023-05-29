import React from 'react'
import Form from './Form'

export default function ServerInfo() {
  return (
    <div>
     <div className="col-md-12">
        <div className="">
          <h4 className="title">Server Set Up</h4>
        </div>
      </div>

      <div style={{ marginTop: "10px" }} className="col-md-3 col-sm-12">
          <h5 className="mt-2">Magod MIS Server</h5>
      </div>
      <div className="row col-md-12">

        <div className="col-md-6">

            <div style={{ marginTop: "10px" }} className="col-md-3 col-sm-12">
                <h6 className="mt-2">Data Server</h6>
            </div>

           <div className="col-md-5">
                <label className="form-label">Server Name</label>
                <input className="in-field" style={{marginTop:'-7px'}}/>
            </div>

            <div className="col-md-5">
                <label className="form-label">Driver</label>
                <input className="in-field" style={{marginTop:'-7px'}}/>
            </div>

            <div className="col-md-5">
                <label className="form-label">Option</label>
                <input className="in-field" style={{marginTop:'-7px'}}/>
            </div>

            <div className="row mt-1">
                <button className="button-style mt-2 group-button"
                    style={{ width: "150px"}}>
                    Reset
                </button>
            </div>
        </div>

        <div className="col-md-6">

            <div style={{ marginTop: "10px" }} className="col-md-3 col-sm-12">
                <h6 className="mt-2">Mail Server</h6>
            </div>

            <div className="col-md-5" style={{marginBottom:'120px'}}>
                <label className="form-label">Server Name</label>
                <input className="in-field" style={{marginTop:'-7px'}}/>
            </div>

            <div className="mt-1">
                <button className="button-style mt-2 group-button"
                    style={{ width: "150px", marginTop:'200px'}}>
                        Save
                </button>
            </div>
        </div>

        {/* <div className="d-flex">
            <div className="mt-1">
                <button className="button-style mt-2 group-button"
                    style={{ width: "150px"}}>
                    Reset
                </button>
            </div>

            <div className="mt-1" style={{marginLeft:'445px'}}>
                <button className="button-style mt-2 group-button"
                    style={{ width: "150px"}}>
                        Save
                </button>
            </div>
        </div> */}

      </div>
     
    </div>
  )
}
