import React from 'react'
import Adminsidebar from './Adminsidebar'




import Viewjournalist from './Viewjournalist'

function Adminmain() {
  return (
    <div className='row'>
<div className='col-2'>
    <Adminsidebar/>
</div>
<div className='col-10'>
    <Viewjournalist/>
</div>
    </div>
  )
}

export default Adminmain