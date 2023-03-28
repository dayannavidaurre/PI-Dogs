import React from "react";
import {useState} from "react";
import { useDispatch } from "react-redux";
import { getDogName } from "../../redux/actions/index.js";
import "./SearchBar.css";
// import lupa from  "../../assest/lupa.png"

//barra de busqueda que nos permite busacr un nombre de perro //

const SearchBar = ({updateCurrentPage}) =>{
   const dispatch = useDispatch();
   const [dogName, setDogName] = useState();

    //cuando se escribe en el input se va actualizando en el estado local dogName//
    const handleChange = (e) =>{
       e.preventDefault();
       setDogName(e.target.value);
    }

    // funcion que se ejecutara cuando le presionen enter//
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(getDogName(dogName));
        updateCurrentPage();
    }

    return(
        <form onSubmit={handleSubmit} className="search">
            <input className="inputSearch" type="text" placeholder="Search by breed..." onChange={(e)=>handleChange(e)}/>
           {/* <img onClick={(e)=>handleSubmit(e)} className="lupa" src={lupa}/> */}
        </form>
    )
};

export default SearchBar;