import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import './Navbar.css'


class Navbar extends Component{

	render(){
       return(     
   
   <div>



<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark bg-blue">
      <Link className="navbar-brand" to="#"><img src= {logo} className ="img-fluid img-responsive"  alt ="Rti Guru"/></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link nav-links" href="#">ABOUT <span className="sr-only">(current)</span></Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link nav-links" to="#">MY RTIS </Link>
          </li>

           <li className="nav-item">
            <Link className="nav-link nav-links" to="#">PRICING </Link>
          </li>

            <li className="nav-item">
            <Link className="nav-link nav-links" to="#">TEAM </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link nav-links" to="#">BLOG </Link>
          </li>

           <li className="nav-item">
            <Link className="nav-link nav-links" to="#">FAQ </Link>
          </li>

           <li className="nav-item">
            <Link className="nav-link nav-links" to="#">CONTACT </Link>
          </li>

        </ul>
       
          <Link className="btn btn-outline-success my-2 my-sm-0 mr-right" type="submit">Apply Now </Link>
         <ul className ="navbar-nav nav-right">

          <li className="nav-item">
            <Link className="nav-link nav-links nav-margin" to="#">Login </Link>
          </li>
          
        </ul>



      </div>
    </nav>







    </div>

     

       	);
       

	}
}

export default Navbar;



