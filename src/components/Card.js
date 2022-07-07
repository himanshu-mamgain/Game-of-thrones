import React from "react";

import "./Card.css";

const Card = props => {
    return <>
        <div className='col-6 col-md-3 col-sm-3 mt-5'>
            <div className="card mx-auto" style={{width: "100%"}}>
                <img src={props.data.imageUrl} className="card-img-top" alt="characters_img" />
                <div className="card-body">
                    <h5 className="card-title fw-bolder">{props.data.fullName.toUpperCase()}</h5>
                    <p className="card-text mb-0">TITLE: {props.data.title.toUpperCase()}</p>
                    <p className="card-text mt-0">FAMILY: {props.data.family.toUpperCase()}</p>
                </div>
            </div>
        </div>
    </>
};

export default Card;