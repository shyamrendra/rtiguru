import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import appstorebutton from '../assets/images/testimonials/appstorebutton.png'
import googleplaybutton from '../assets/images/testimonials/googleplaybutton.png'
import './Mobile.css'



class Mobile extends Component{

  render(){
       return(     
   
  
   

   <section className="separator-style-three overlay-black separator-margin">
   <div className="container">
      <div className="row">
         <div className="col-sm-12">
            <div className="separator-area-three center-767">
               <h2>GET RTI MOBILE</h2>
               <Link className="btn storebtn" to="#" role="button">
               <img src={googleplaybutton} alt="googleplaybutton"/></Link>

               <Link className="btn storebtn" to="#" role="button">
               <img src={appstorebutton} alt="appstorebutton"/>
               </Link> 
            </div>
         </div>
      </div>
   </div>
</section>

     

        );
       

  }
}

export default Mobile;



