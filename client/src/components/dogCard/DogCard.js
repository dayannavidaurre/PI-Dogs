import React from "react";
import "./DogCard.css";

const DogCard = ({ name, temperament, image, weight,life_span }) => {

    return (

        <div className="dog-card">
            <img src={image} alt="imgage not found" width="200px" height="250px"/>
            <div className="card-info">
            <h3>{name.toUpperCase()}</h3>
            <h5>{temperament}</h5>
            <h6>{weight} KG</h6>
            <h3>{life_span}</h3>

            </div>
        </div>

    )
}

export default DogCard;