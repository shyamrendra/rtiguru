import React, {Component} from 'react'
import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



class Banner extends Component{

  render(){
       return(     
   
   <div className="banner-area overlay-black">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
        <div className="banner-box">
           <h3>File and track RTI to any central or state government office in India</h3>
    <form>
   <div className="input-group mx-auto">

       <div className ="input-wrapper">
      <input type="text" class="form-control search-control" name="bolgseach" id="search-box" placeholder="Search" required=""/> 
      </div>
      <div id="suggesstion-box"></div>

      <div className="input-group-btns">
         <div className="btn-group" role="group"> <button type="submit" className="btn btn-primary btn-search"><FontAwesomeIcon icon={faSearch} /> </button> </div>
      </div>

   </div>
</form>






               <div>
                   
                









               </div>
            </div>
         </div>
      </div>
   </div>
</div>

     

        );
       

  }
}

export default Banner;



