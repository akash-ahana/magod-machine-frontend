import React from 'react';
import { Table } from 'react-bootstrap';

export default function FormAndTable() {
  return (
    <div>
      <div style={{ marginTop: "10px" }} className="col-md-6 col-sm-12">
          <h5 className="mt-2 ms-2"> Shift Log Book </h5>
          
        </div>
      <div className="row mb-2">
        
        <div className="col-md-3 col-sm-12">
          <button
            className="button-style  group-button"
            style={{ width: "80px", marginTop: "10px" , fontSize:'14px'}}
          >
            Save
          </button>
        </div>

        <div className="col-md-3 col-sm-12">
          <button
            className="button-style  group-button"
            style={{ width: "80px", marginTop: "10px" , fontSize:'14px' }}
          >
          Close Shift
          </button>
        </div>
        <div className="col-md-3 col-sm-12" >
          <button
            className="button-style  group-button"
            style={{ width: "80px", marginTop: "10px", fontSize:'14px' }}
          >
          Prepare
          </button>
        </div>
        <div className="col-md-3 col-sm-12">
          <button
            className="button-style  group-button"
            style={{ width: "80px", marginTop: "10px", fontSize:'14px' }}
          >
         UpDate
          </button>
        </div>
      </div>



      <div className='col-md-12' style={{ overflowY: 'scroll', overflowX: 'scroll', height: '250px',  }}>
          <Table striped className="table-data border">
            <thead className="tableHeaderBGColor" style={{fontSize:'12PX'}}>
              <tr>
                
                <th></th>
                <th>Srl</th>
                <th style={{whiteSpace:'nowrap'}}>Program </th>
                <th style={{whiteSpace:'nowrap'}}>From Time</th>
                <th style={{whiteSpace:'nowrap'}}>To Time</th>
                <th style={{whiteSpace:'nowrap'}}>Remarks</th>
                <th style={{whiteSpace:'nowrap'}}>Srl Time</th>
                <th style={{whiteSpace:'nowrap'}}>Locked</th>
               

                

              </tr>
            </thead>

                  <tbody className='tablebody'>
                    <tr >
                    
                      
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     
                     
                    </tr>
                  </tbody>
          </Table>

        </div >
    </div>
  );
}
