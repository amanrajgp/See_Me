import React from "react";
import {Link} from "react-router-dom";
import Signedinlinks  from "./signinlink";
import Signedoutlinks from "./signoutlink";
import {connect} from "react-redux";

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
          <div className="container">
             <Link to="/" className="brand-logo">SeeMe</Link>
             <Signedinlinks/>
             <Signedoutlinks/> 
          </div>
        </nav>
    
    )}
const mapStatetoProps=(state)=>{
  console.log(state);
  return{

  }
}
export default connect(mapStatetoProps)(Navbar);