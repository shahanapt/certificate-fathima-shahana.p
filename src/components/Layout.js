import React from 'react'
import Dheader from './dashboard/Dheader';
import Dsidebar from './sidebar/Dsidebar';

function Layout({children}) {
  return (
    <div style={{display:'flex'}}>
        <Dsidebar/>
        <div>
            <Dheader/>
            <div className='w-100'>{children}</div>
        </div>
    </div>
  )
}

export default Layout