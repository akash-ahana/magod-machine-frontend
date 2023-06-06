import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import ErrorSaveModal from './ErrorSaveModal';

function ErrorrForm({setErrorForm,errorForm}) {
    const handleClose=()=>{
        setErrorForm(false);
        }
        const [errorSave, setErrorSave] = useState(false);
        const handleSubmit = () => {
         
            setErrorForm(false);
            setErrorSave(true);
        }
       
  return (
    <div>
      <Modal show={errorForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>magod_machine</Modal.Title>
        </Modal.Header>

        <Modal.Body> <div>

            

<div className="col-md-12">
<div className="row">
<h5 className="">Operator Error Report Form</h5>
</div>
</div>
<div className='ip-box form-bg'>
<div className="row">




</div>



<div className=" d-flex ms-3 col-md-12">
<label className="form-label col-md-4"> Machine</label>
<input className='in-field col-md-6' style={{}} />
</div>




<div className="col-md-12 mt-2 d-flex ms-3">
<label className="form-label col-md-4"> Operator</label>
<input className='in-field col-md-6' style={{}} />
</div>

<div className="col-md-12 mt-2 d-flex ms-3">
<label className="form-label col-md-4"> Error No</label>
<input className='in-field col-md-6' style={{}} />
</div>

<div className="col-md-6 mt-3 d-flex ms-3 ">
<label className="form-label col-md-8"> Error Description </label>
<textarea className='col-md-4' maxLength={100}
 style={{ borderRadius: "0", height: "80px", width: "223px",resize:'none' }} />
</div>


<div className="col-md-6 mt-3 d-flex ms-3">
<label className="form-label col-md-8"> Action Taken </label>
<textarea className='col-md-4' maxLength={100} 
style={{ borderRadius: "0", height: "80px", width: "223px",resize:'none' }} />
</div>




<div className="row mt-3 mb-2">
<div className='col-md-5'>

</div>

<div className="col-md-2 col-sm-12">
  <button
    className="button-style  group-button"
    style={{ width: "60px", marginTop: "0px" }}

  >
    Reset
  </button>
</div>

<div className="col-md-1 col-sm-12">
  <button
    className="button-style  group-button"
    style={{ width: "70px", marginTop: "0px" }}
    onClick={handleSubmit}
  >
    Submit
  </button>
</div>
</div>

</div>

</div>
         </Modal.Body> 

        <Modal.Footer>
          <Button variant="primary" 
        >
           Ok
          </Button>
          {/* <Button variant="secondary" onClick={handleClose}>
            No
          </Button> */}
        </Modal.Footer>
      </Modal>
      {
        errorSave &&
        <ErrorSaveModal errorSave={errorSave} setErrorSave={setErrorSave} />
      }
    </div>
  );
}

export default ErrorrForm;
