import React from 'react'
import { Table } from 'react-bootstrap'

export default function SideTable() {
  return (
    <div className='row col-md-12'>
   <div className='mt-3 col-md-6'>
         <div className='col-md-12 col-sm-12'>
         <div style={{height:"350px",overflowY: "scroll",overflowX:'scroll', width:'580px'}}>
     <Table bordered style={{border:'1px solid grey'}}>
         <thead style={{textAlign:"center"}}>
             <tr>
             <th>DwgName</th>
             <th>Qty Nested</th>
             <th>Remarks</th>
             </tr>
         </thead>


         {/* <tbody className='tablebody'>
             <tr className="" >
                 <td>TaskNo</td>
                 <td>Machine</td>
                 <td>Operation</td>
             </tr>
         </tbody> */}
     </Table>
     </div>
     </div>
 </div>
 </div>
  )
}
