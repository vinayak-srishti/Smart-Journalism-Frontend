import React from 'react'
import Adminsidebar from './Adminsidebar'

import Registereduser from './Registereduser'

function Adminmain() {
  return (
    <div className='row'>
<div className='col-2'>
    <Adminsidebar/>
</div>
<div className='col-10'>
    <Registereduser/>
</div>
    </div>
  )
}

export default Adminmain