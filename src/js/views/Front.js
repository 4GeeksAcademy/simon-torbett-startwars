import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import injectContext from "../store/appContext";
import FrontPage from "../component/FrontPage";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/front.css"

export const Front = () => {
    const { store, actions } = useContext(Context);

  return ( <div className="Container"> <h1>
    Characters
  </h1>
  <div className="front-scroll">
  <div className="row row-cols-6">
  {store.Front.map((Front, i) => (
        <FrontPage/>
      ))}
</div>
</div>
<div>
    <h1>
        Planets
    </h1>
    <div className="front-scroll">
  <div className="row row-cols-6">
  {store.Front.map((Front, i) => (
        <FrontPage/>
      ))}
</div>
</div>
</div>
  </div>
  
  )
};

export default injectContext(Front);