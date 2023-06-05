import React from 'react';
import OpenShiftLogForm from './OpenShiftLogForm';
import MachineShiftStatusForm from './MachineShiftStatusForm';
import Form1 from './ProgramMaterialTab/Form1';
import TabsTwo from './TabsTwo';
import TabsFour from './TabsFour';

export default function CallFile() {
  return (
    <>
    <div>
      <OpenShiftLogForm/>
      </div>

      <div className='row col-md-12'>
      <div className='col-md-3'>
      <MachineShiftStatusForm/>
      </div>
      <div className='col -md-4'>
      <TabsTwo/>
      </div>

      <div className='col-md-5'>
      <TabsFour/>
      </div>
      
      </div>
    
    </>
  );
}
