import React, { useState } from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import MachineTaskTable from './MachineTasksTab/MachineTaskTable';
import FormAndTable from './ShiftLogTab/FormAndTable';
import ShiftSummryTable from './ShiftSummaryTab/ShiftSummryTable';
import ProgramInfoForms from './ProductionReportTab/ProgramInfoForms';

export default function TabsFour() {

    const [key, setKey] = useState("");
    
  return (
    <div>
      <div className='row'>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 mt-2  "
      style={{fontSize:'12px'}}
    >
      

      <Tab eventKey="mt" title="Machine Tasks" >
       <MachineTaskTable/>
       </Tab>

       <Tab eventKey="sl" title="Shift Log">
      <FormAndTable/>
       </Tab>
       <Tab eventKey="pr" title="Production Report">
       <ProgramInfoForms/>
       </Tab>

       <Tab eventKey="ss" title="Shift Summary">
      <ShiftSummryTable/>
       </Tab>
      
    </Tabs>
  </div>
    </div>
  );
}
