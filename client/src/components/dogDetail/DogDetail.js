import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {getDogId} from "../../redux/actions/index.js";
import "./DogDetail.css"
import { Link } from "react-router-dom";
import Loading from "../loading/Loading.js";


const DogDetail = (props)=>{

    const dispatch = useDispatch(); //envia acciones
    const idDog = props.match.params.id;

    useEffect(()=>{
         dispatch(getDogId(idDog));
    },[])

    const { dogDetail:dog , loadingDetail} = useSelector((state)=> state);
    if (loadingDetail) {
        return <Loading/>
    }
    return (
        <div className="contenedor-principal">
        <div className="contenedor-detail">
            <div className="detail-img">
            <img src={dog.image} alt="imgage not found"/>
            </div>
            <div className="detail-info">
                <h2>{dog.name}</h2>

                <h4>{dog.temperament && dog.temperament.join(", ")}</h4>

                <h5>Height: {dog.height}</h5>

                <h5>Weight: {dog.weight}</h5>

                <h5>Life span: {dog.life_span}</h5>

                <Link to="/home"><button className="btnn">BACK TO HOME</button></Link>
            </div>
            </div>
            </div>
    )
}

export default DogDetail;