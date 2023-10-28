import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
	<Link to="/">
    <a className="navbar-brand" href="#">
      <img src="https://icon-library.com/images/star-wars-logo-icon/star-wars-logo-icon-9.jpg" alt="Logo" width="80" height="70" class="d-inline-block align-text-top"></img>
    </a>
	</Link>
	<div className="btn-group">
  <button type="button" className="btn btn-danger">Action</button>
  <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
  </div>

</nav>
	);
};
