import React from "react";
import { Link } from "react-router-dom";




const FrontPage = (props) => {
    return ( 
    <div className="container my-4 mx-5" >
        <div className="">
<div className="card" style={{ width: "18rem" }}>
  <img src={props.img} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Recuerda Agregar un BOTON de like que se renderize con el boton de navbar</p>
    <Link to="/Solo" >
    <a href="#" className="btn btn-primary">{props.buttom}</a>
    </Link>
  </div>
</div>
</div>
</div>  
    )
}

export default FrontPage;