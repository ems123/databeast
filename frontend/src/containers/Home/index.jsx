import {useEffect}  from "react";
import data from '../../data/data-containers/data-Home.js';

import {handelTitle} from '../../utils'

import './demo.css'

// import Footer from '../../layouts/Footer'
import Footer from '../../layouts/Footer'
// import {Fluid1 , Fluid2} from './Fluid';
import SectionHeading from './SectionHeading'
import SectionDemo from './SectionDemo'

const HomeContainer = () => {

  useEffect(() => {
    handelTitle('Home Template')
  },[])

  useEffect(() => {
    if (document.title === 'Home Template') {
    	document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(180deg,#240044 0,#0f0240 25%,#400959 40%,#0f0240 65%,#0f0240)'
    }else{
    	document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(to right, #4834d4, #341f97)'
    }
  },[])

  return (
  	<>
	  	<section className="demo section-padding-100-0" id="demo">

		    <div className="container">
		      <SectionHeading />
		      <SectionDemo data={data} />
		    </div>
	    </section>
	    <Footer />
    </>
  );
}

export default HomeContainer;

