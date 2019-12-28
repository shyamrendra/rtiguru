import React, {Component} from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Wehelp from '../components/Wehelp';
import What from '../components/What';
import Testimonials from '../components/Testimonials';
import Mobile from '../components/Mobile';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Copy from '../components/Copy';




class Home extends Component{

	render(){
       return(

      <div>
      <Navbar/>  
      <Banner/>        
      <Wehelp/>
      <What/>   
      <Testimonials/> 
      <Mobile/>
      <Blog/>
      <Footer/>  
       <Copy/>         


      </div>

       	);
       

	}
}

export default Home;

