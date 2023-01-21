import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Sidebar.css';
export class SidebarLayout extends Component {
  render() {
    return (
        <>
        <Sidebar />
        <Outlet />
        </>
    )
  }
}

export default SidebarLayout