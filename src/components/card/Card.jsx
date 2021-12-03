import React from 'react';
import './Card.css';


export default function Card({image, height, width, text}) {
    return (
        <>
        <div className="card">
            <div className="card-wrapper">
                <img src={image} style={{width:width, height:height}} alt="" className="card-img" />
                <p className="card-text">{text}</p>
            </div>
        </div>
        </>
    )
}
