import React from 'react';

function Card(props) {
    return (
        <div className="card shadow">
            <img src={props.imgsrc} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.username}</h5>
                <p className="card-text">{props.jobtitle}</p>
                <button className="btn btn-primary">Contact</button>
            </div>
        </div>
    );
}

export default Card;