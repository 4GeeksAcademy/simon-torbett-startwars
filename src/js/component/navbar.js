import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	
	return (
		<nav className="navbar bg-light mb-3">
			<div className="container">
				<Link to="/" >
					<img style={{ width: "100px" }} src="https://static.wikia.nocookie.net/esstarwars/images/9/9d/Jedi_symbol.svg/revision/latest?cb=20210502203152"></img>
				</Link>
				<div className="dropdown ml-auto btn btn-ligth">
  					<button 
						className="btn btn-dark bg-black  dropdown-toggle" 
						type="button" 
						data-bs-toggle="dropdown" 
						aria-expanded="false">
    					Favorites {store.favorites.length}
  					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{
							store.favorites.map((favorite)=> {
								return (<li 
											className="dropdown-item d-flex justify-content-between">{favorite.properties.name}
											<i className="fa-solid fa-trash"
											onClick={()=> actions.getUpdateFavorite(favorite)}></i>
										</li>)
							})
						}
												
					</ul>
				</div>				
			</div>
		</nav>
	);
};
