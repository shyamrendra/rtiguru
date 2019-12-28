import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ChildCustodyandVisitationRights1 from '../assets/images/blog/ChildCustodyandVisitationRights1.jpg'
import passport2 from '../assets/images/blog/passport2.jpg'
import Successcomesincans1 from '../assets/images/blog/Successcomesincans1.jpg'
import './Blog.css'



class Blog extends Component{

  render(){
       return(     
   
  
   <section className="blog-area">
   <div className="container">
      <div className="row">
         <div className="col-md-6 col-md-offset-3  mx-auto">
            <div className="section-title">
               <div className="title-style">
                  <h2>BLOG</h2>
               </div>
               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
         </div>
      </div>
      <div className="row">
         <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 fw-600">
            <div className="blog-col wow fadeIn" data-wow-duration="1s" data-wow-delay=".0s">
               <div className="blog-img">
                  <img src={ChildCustodyandVisitationRights1} alt="Child Custody and Visitation R"/> 
                  <div className="post-date">
                     <h3>20 June, 2018</h3>
                  </div>
               </div>
               <div className="blog-content">
                  <h4><Link to="#">Child Custody and Visitation R</Link></h4>
                  
                  <p>When people choose to separate after many years of their marriage, child custody and visitation forms an important aspec</p>
                  <Link className="btn btn-default my-btn" to="#" role="button">Read More</Link> 
               </div>
            </div>
         </div>
         <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 fw-600">
            <div className="blog-col wow fadeIn" data-wow-duration="1s" data-wow-delay=".0s" >
               <div className="blog-img">
                  <img src={Successcomesincans1} alt="RTI application for income tax"/> 
                  <div className="post-date">
                     <h3>20 June, 2018</h3>
                  </div>
               </div>
               <div className="blog-content">
                  <h4><Link to="#">RTI application for income tax</Link></h4>
                 
                  <p>How to file RTI application for income tax refund?
                     We have seen numerous ways to recognize your income tax refund statu
                  </p>
                  <Link className="btn btn-default my-btn" to="#" role="button">Read More</Link> 
               </div>
            </div>
         </div>
         <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 fw-600">
            <div className="blog-col wow fadeIn" data-wow-duration="1s" data-wow-delay=".0s">
               <div className="blog-img">
                  <img src={passport2} alt="RTI FOR PASSPORT DELAYS"/> 
                  <div className="post-date">
                     <h3>20 June, 2018</h3>
                  </div>
               </div>
               <div className="blog-content">
                  <h4><Link to="#">RTI FOR PASSPORT DELAYS</Link></h4>
                  
                  <p>A passport is a travel document that is issued by the countries Government. The document is used for the purpose of Inte</p>
                  <Link className="btn btn-default my-btn" to="#" role="button">Read More</Link> 
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

     

        );
       

  }
}

export default Blog;



