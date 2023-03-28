import React from "react";
import {Link, NavLink} from "react-router-dom";
import { getDogs } from "../../redux/actions/index.js";
import { useDispatch } from "react-redux";
import "./NavBar.css"
// import SearchBar from "../searchBar/SearchBar.js";


const NavBar = ()=>{

    // const dispatch = useDispatch();

    // const handleClick = (e)=>{
    //  dispatch(getDogs());
    // }


    return (
      <div className="nav">
        <div className="info">
          <NavLink to="/home" className="navLink">
            Home
          </NavLink>
          <NavLink to="/" className="navLink">
            Landing
          </NavLink>
          <NavLink to="/create" className="navLink">
            Create dog
          </NavLink>
        </div>
      </div>
    );
}

export default NavBar;