import React from "react";



function Card(props) {
  let status

  if(props.soldOut){
    status = "sold out"
  }else if(props.country === "USA"){
    status = "Online"
  }else {
    status = "offline"
  }

  return (
      <div className="card">
      <img src={`./img/${props.img}`}  alt="img"/>
      {status && <span className="status">{status}</span>}
      <div className="rate">
        <img src="./icon/Star.png" alt="start"/>
        <span className="rates">{props.rate}</span><span>({props.viewCount})</span> <span className="dot">.</span> <span>{props.country}</span>
      </div>
      <p className="title">{props.title}</p>
      <p className="price" >
      From ${props.price} <span>/ person</span> 
      </p>
      </div>
  );
}

export default Card;
