import React from "react"
import './nav.css';
import {
    NavLink
  } from "react-router-dom"
 class Nav extends React.Component{
    render(){
        return(
            <div className="topnav">
            <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
            <NavLink to="/hire" activeClassName="active" exact={true}>Hire</NavLink>
            <NavLink to="/service" activeClassName="active" exact={true}>Service</NavLink>
            <NavLink to="/team" activeClassName="active" exact={true}>Team</NavLink>
            <NavLink to="/faq" activeClassName="active" exact={true}>FAQ</NavLink>
        </div>
        )
    }
 }
export default Nav;