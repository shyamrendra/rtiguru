import React, {Component} from 'react'
import historyicon from '../assets/images/what/historyicon.png'
import problemicon from '../assets/images/what/problemicon.png'
import solutionicon from '../assets/images/what/solutionicon.png'
import './What.css'


class What extends Component{

  render(){
       return(     
   
   <div className ="helpsection">


   <div className="container">

  <div className="row h1-margin">
<div className="col-md-6 offset-md-4 mx-auto">
<div className="section-title">
<div className="title-style"><h2>WHAT IS <span> RTI </span></h2></div>
</div>
</div>
</div>
  

   <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
         <div className="services-features">
            <div className="rti-icon">
              <img src={historyicon} alt ="historyicon"/> 
            </div>
            <div className="back-color">
              
               <h4>THE HISTORY </h4>
               
               <p>In 2005 the government approved a law called the RTI Act ( Right to Information) to end inducements and get faster processing of administration services, for example, income tax refunds, issuing passports, and examination answer sheets. </p>
            </div>
         </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
         <div className="services-features">
            <div className="rti-icon">
               <img src={problemicon} alt ="problemicon"/> 
            </div>
            <div className="back-color">
              
               <h4>THE PROBLEM</h4>
               
               <p>We, at RTI Guru, discover precise office and pay government fees using the best method of payment. We send your RTI through registered post or speed post or online options with all necessary attachments.</p>
            </div>
         </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
         <div className="services-features">
            <div className="rti-icon">
               <img src={solutionicon} alt ="solutionicon"/> 
            </div>
            <div className="back-color">
               
               <h4>OUR SOLUTION</h4>
               
               <p>At Online RTI, our lawyers are experts at processing RTIs, so you don’t have to worry about it. Simply click on your problem below, submit your application, and consider your case at the top of the government’s queue.</p>
            </div>
         </div>
      </div>

   </div>
</div>


   </div>



     

        );
       

  }
}

export default What;



