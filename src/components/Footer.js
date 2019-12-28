import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fb from '../assets/images/fb.png'
import google from '../assets/images/google.png'
import linkedin from '../assets/images/linkedin.png'
import twitter from '../assets/images/twitter.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'



class Footer extends Component{

  render(){
       return(     
   
  <footer className="main-footer">
   <div className="container">
      <div className="row">
         <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer-col about">
               <h3>About our <span>RTI</span></h3>
               <p>Right to Information (RTI) is an act by the Government which empowers citizens to seek the information regarding the functioning of all the government sectors or government-funded organizations.</p>
               <a href="https://www.rtiguru.com/about">Read More</a> 
               <ul>
                  <li><FontAwesomeIcon icon={faMapMarkerAlt} /><span className ="space"></span> H No.-26, Opp-E4/15, Rohini, Sector-7, New Delhi </li>
                  <li><FontAwesomeIcon icon={ faEnvelope} /><span className ="space"></span> support@rtiguru.com </li>
                  <li><FontAwesomeIcon icon={faPhone} /><span className ="space"></span> +91-858-804-2506 </li>
                  <li><FontAwesomeIcon icon={faGlobe} /><span className ="space"></span> www.rtiguru.com </li>
               </ul>
            </div>
         </div>
         <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer-col links">
               <h3>Useful <span>links</span></h3>
               <ul>
                  <li><Link to="#">Privacy Policy</Link></li>
                  <li><Link to="#">Disclaimers</Link></li>
                  <li><Link to="#">Terms and Conditions</Link></li>
                  <li><Link to="#">Refund Policy</Link></li>
                  <li><Link to="#">Blogs</Link></li>
                  <li><Link to="#">Testimonials</Link></li>
               </ul>
            </div>
         </div>
         <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer-col newsletter">
               <h3>our <span>newsletter</span></h3>
               <form className="input-group" action="https://www.rtiguru.com/Home/subscribe" method="post">
                  <div className="form-group"> <input className="form-control subscribe" type="email" placeholder="Enter Your Email" name="email" required=""/> </div>
                  <span className="input-group-btn"> <button className="btn btn-default sub-btn" type="submit"> SUBSCRIBE</button> </span> 
               </form>
               <h3><span>Social</span> Links</h3>
               <ul>
                  <li><Link to="https://www.facebook.com/rtiguruonline" target="_blank"><img src={fb} alt="Facebook"/></Link></li>
                  <li><Link to="https://www.linkedin.com/in/rtiguru/" target="_blank"><img src={linkedin} alt="Linkedin"/></Link></li>
                  <li><Link to="https://twitter.com/rti_guru" target="_blank"><img src={twitter} alt="Twitter"/></Link></li>
                  <li><Link to="https://plus.google.com/u/0/102816143818007442339 " target="_blank"><img src={google} alt="google"/></Link></li>
               </ul>
            </div>
         </div>
      </div>
   </div>


   
</footer>
   

     

        );
       

  }
}

export default Footer;



