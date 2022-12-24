import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
//comment layout
function Layout() {
  return (
    <div className="body-wraper">
    <Header />
    <div className="section wf-section">
        <div className="tabs w-tabs">
            <SideBar />
            <div className="tabs-content w-tab-content">
                <Outlet />
            </div>
        </div>
    </div>
</div>
  )
}

export default Layout