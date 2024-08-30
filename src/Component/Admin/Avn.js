import React from 'react'
import Adminsidebar from './Adminsidebar'
import Viewnews from '../News/Viewnews'





function Adminmain() {
  return (
    <div className='row'>
<div className='col-2'>
    <Adminsidebar/>
</div>
<div className='col-10'>
    <Viewnews/>
</div>
    </div>
  )
}

export default Adminmain