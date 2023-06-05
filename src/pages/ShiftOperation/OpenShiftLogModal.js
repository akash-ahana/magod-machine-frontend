
import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


export default function OpenShiftModal({openmodal,setOpenmodal}) {

    const handleClose=()=>{
        setOpenmodal(false);
    }

  return (
    <div>
         <Modal show={openmodal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Magod Machine</Modal.Title>
        </Modal.Header>

        <Modal.Body>Is Program Operator Meeting running from the begining of this shift?
        </Modal.Body> 

        <Modal.Footer>
          <Button style={{backgroundColor:"#2b3a55",border:"#2b3a55"}} >
            Yes
          </Button>
          <Button  variant='secondary'>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
