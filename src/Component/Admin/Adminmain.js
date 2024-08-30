import React from 'react'
import Adminsidebar from './Adminsidebar'
import Adminhome from './Adminhome'

function Adminmain() {
  return (
    <div className='row'>
<div className='col-2'>
    <Adminsidebar/>
</div>
<div className='col-10'>
    <Adminhome/>
</div>
    </div>
  )
}

export default Adminmain