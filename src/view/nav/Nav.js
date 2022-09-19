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
            <NavLink to="/about" activeClassName="active" exact={true}>About</NavLink>
        </div>
        )
    }
 }
export default Nav;