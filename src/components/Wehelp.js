import React, { useState } from 'react';
import './Wehelp.css'
import {Link} from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames'
import MarksheetVerification from '../assets/images/help/MarksheetVerification.png'
import PassportDelay from '../assets/images/help/PassportDelay.png'
import IncomeTaxRefund from '../assets/images/help/IncomeTaxRefund.png'
import FIRStatus from '../assets/images/help/FIRStatus.png'
import EPFStatus from '../assets/images/help/EPFStatus.png'
import PensionApplication from '../assets/images/help/PensionApplication.png'
import OccupancyCertificate from '../assets/images/help/OccupancyCertificate.png'
import Capture from '../assets/images/help/Capture.jpg'
import MyExam1 from '../assets/images/help/MyExam1.png'
import AnswerCopy from '../assets/images/help/AnswerCopy.png'
import PropertyDetails from '../assets/images/help/PropertyDetails.png'
import GramPanchayat from '../assets/images/help/GramPanchayat.jpeg'
import MPfundsutilisation1 from '../assets/images/help/MPfundsutilisation1.png'
import FundsUtilization from '../assets/images/help/FundsUtilization.png'
import MPfundsutilisation from '../assets/images/help/MPfundsutilisation.png'
import TenderDetails from '../assets/images/help/TenderDetails.png'
import RoadWork from '../assets/images/help/RoadWork.png'
import OtherRTI1 from '../assets/images/help/OtherRTI1.png'



const Wehelp = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (

    <div className ="service-area">

    <div className ="container">       

 

    
<div className="row">
<div className="col-md-6 offset-md-4 mx-auto">
<div className="section-title">
<div className="title-style"><h2>HOW CAN WE <span> HELP?</span></h2></div>
</div>
</div>
</div>


  


        



      <Nav tabs className ="tab-containers h-100 ">

      
        <NavItem>
          <NavLink 
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            PERSONAL RTI
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
           SOCIAL RTI
          </NavLink>
        </NavItem>

         <NavItem>
          <NavLink 
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
           OTHER RTI

          </NavLink>
        </NavItem>

         


      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1" className ="tabpanes">
          <Row>
            <Col sm="12">

          



<div className="row row-margin">

   <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={MarksheetVerification} className="helpimgs1"  alt="Marksheet Verification"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">Marksheet Verification</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>


     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={PassportDelay} className="helpimgs1"  alt="Passport Delay"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">Passport Delay</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>



  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={IncomeTaxRefund} className="helpimgs1"  alt="IncomeTax Refund"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">IncomeTax Refund</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>


  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={FIRStatus } className="helpimgs1"  alt="FIR Status "/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">FIR Status</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>



   <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={EPFStatus} className="helpimgs1"  alt="EPF Status"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">EPF Status</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>



  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={PensionApplication} className="helpimgs1"  alt="Pension Application"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">Pension Application</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>


  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={OccupancyCertificate} className="helpimgs1"  alt="Occupancy Certificate"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">Occupancy Certificate</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>




  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={Capture} className="helpimgs1"  alt="Capture"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">Other Personal RTI</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>




  
 

   




 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={MyExam1} className="helpimgs1"  alt="My Exam "/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">My Exam</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>
</div>








            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="2" className ="tabpanes">
           <Row>
            <Col sm="12">
              



    <div className="row row-margin">

   <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={AnswerCopy} className="helpimgs1"  alt="Answer Copy"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">Answer Copy </h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>


     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={PropertyDetails} className="helpimgs1"  alt="Property Details"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">Property defaultails</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>



  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={MPfundsutilisation} className="helpimgs1"  alt="MP funds utilisation"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">MP Funds Utilization</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>


  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={MPfundsutilisation1} className="helpimgs1"  alt="MLA Fund Utilization "/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">MLA Fund Utilization </h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>



   <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={GramPanchayat } className="helpimgs1"  alt="Gram Panchayat"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">Gram Panchayat </h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>



  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={FundsUtilization} className="helpimgs1"  alt="Funds Utilization"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">Funds Utilization</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>


  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={TenderDetails} className="helpimgs1"  alt="Tender Details"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">Tender Details</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>




  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={RoadWork} className="helpimgs1"  alt="Road Work"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">Road Work</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>



 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={OtherRTI1} className="helpimgs1"  alt="Other Social RTI"/> </div>
         <div className="back-color">
            <Link className="" to="#" role="button">
               <h4 className="helpname">Other Social RTI</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>
</div>









            </Col>
          </Row>
        </TabPane>

         

          <TabPane tabId="3" className ="tabpanes">
           <Row>
            <Col sm="12">
              



           <div className="row row-margin">

 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 row-margin">
      <div className="services-features-four">

         <div className="iconbox"> <img src={OtherRTI1} className="helpimgs1"  alt="Other Social RTI"/> </div>
         <div className="back-color">
            <Link className="" href="#" role="button">
               <h4 className="helpname">Other Social RTI</h4>
            </Link>
           <center> <Link className="btn btn-default read-btn" to="#" role="button">Read More</Link></center> 
         </div>
      </div>
   </div>
           </div>
   

            
            </Col>
          </Row>
        </TabPane>







      </TabContent>
    </div>
    </div>
  );
}

export default Wehelp;