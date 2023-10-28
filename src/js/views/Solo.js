import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import injectContext from "../store/appContext";
import SoloPage from "../component/SoloPage";

const Solo = () => {
    const { store, actions } = useContext(Context);

  return ( 
<div>

<SoloPage/>
     
</div>
  )
};

export default injectContext(Solo);