import React, {Component} from 'react'
import girls from '../assets/images/testimonials/girls.jpg'
import dev from '../assets/images/testimonials/dev.jpg'
import mohit from '../assets/images/testimonials/mohit.jpg'
import img from '../assets/images/testimonials/img.jpg'
import yes1 from '../assets/images/testimonials/yes1.jpg'
import './Testimonials.css'


class Testimonials extends Component{

  render(){
       return(     
   
  
   <section className="testimonial-area">
   <div className="container">
      <div className="row">
         <div className="col-md-6 offset-md-4 mx-auto">
            <div className="section-title">
               <div className="title-style">
                  <h2>TESTIMONIALS</h2>
               </div>
            </div>
         </div>
      </div>
      <div className="row">
         <div className="col-md-12">
            <div className="testimonial-col">
               <div>
                
                  <div className="testimonial-item">
                     <div className="pic"> <img src={img} alt="Deepak Sharma"/> </div>
                     <p className="description"> Such proposals will eventually make stronger to the RTI group. The only challenge is that information officers are doubtful to disclose receptive deta... <a href="https://www.rtiguru.com/testimonials">Read More</a> </p>
                     <h3 className="title"> Deepak Sharma</h3>
                     <br/> <small className="post">- developer</small> 
                  </div>
                  <div className="testimonial-item">
                     <div className="pic"> <img src={girls} alt="Diksha"/> </div>
                     <p className="description"> I have filed an RTI application through the RTI Guru and have found them to be very helpful for the maiden applicants. It's almost 8 weeks since I fil... <a href="https://www.rtiguru.com/testimonials">Read More</a> </p>
                     <h3 className="title"> Diksha</h3>
                     <br/> <small className="post">- managing director</small> 
                  </div>
                  <div className="testimonial-item">
                     <div className="pic"> <img src={yes1} alt="sanjeev Soni"/> </div>
                     <p className="description"> Your Team is provides good service. You read each and every mail received and provide precious suggestions. The Team is committed to dedication. You a... <a href="https://www.rtiguru.com/testimonials">Read More</a> </p>
                     <h3 className="title"> sanjeev Soni</h3>
                     <br/> <small className="post">- IT</small> 
                  </div>
                  <div className="testimonial-item">
                     <div className="pic"> <img src={mohit} alt="mohit chandna"/> </div>
                     <p className="description"> I am really satisfied the way you have responded I am totally satisfied with the services provided and saved me from real trouble of unnecessary inves... <a href="https://www.rtiguru.com/testimonials">Read More</a> </p>
                     <h3 className="title"> mohit chandna</h3>
                     <br/> <small className="post">- bd</small> 
                  </div>
                  <div className="testimonial-item">
                     <div className="pic"> <img src={dev} alt="devendra sonker"/> </div>
                     <p className="description"> I do not vacillate to advice to use the services of online RTI at any time who ever requirements the assistance and service in applying to RTI. Fine a... <a href="https://www.rtiguru.com/testimonials">Read More</a> </p>
                     <h3 className="title"> devendra sonker</h3>
                     <br/> <small className="post">- software developer</small> 
                  </div>
                  <div className="testimonial-item">
                     <div className="pic"> <img src={img} alt="Rashid Hasan"/> </div>
                     <p className="description"> Thank you very much for your service and support I hope I get required information from the concern department! RTI Application No: 155670450584807... <a href="https://www.rtiguru.com/testimonials">Read More</a> </p>
                     <h3 className="title"> Rashid Hasan</h3>
                     <br/> <small className="post">- RTI Applicant</small> 
                  </div>
                  <div className="testimonial-item">
                     <div className="pic"> <img src={img} alt="Vaibhav Pradhan"/> </div>
                     <p className="description"> Thank you for your quick response. This make you trustable...need to send information on first query by customer.... <a href="https://www.rtiguru.com/testimonials">Read More</a> </p>
                     <h3 className="title"> Vaibhav Pradhan</h3>
                     <br/> <small className="post">- RTI Applicant</small> 
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>


     

        );
       

  }
}

export default Testimonials;



