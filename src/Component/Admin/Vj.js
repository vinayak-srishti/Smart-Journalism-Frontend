import React from 'react'
import Adminsidebar from './Adminsidebar'



import Approvedjournalist from './Approvedjournalist'

function Adminmain() {
  return (
    <div className='row'>
<div className='col-2'>
    <Adminsidebar/>
</div>
<div className='col-10'>
    <Approvedjournalist/>
</div>
    </div>
  )
}

export default Adminmain