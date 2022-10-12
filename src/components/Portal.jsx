import React from 'react'
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';

function Portal() {
    return (
        <div id="wrapper" >
            <Sidebar></Sidebar>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content" className='mt-5 pt-4'>
                    
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Portal;