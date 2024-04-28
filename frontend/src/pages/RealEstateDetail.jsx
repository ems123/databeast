import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/FooterPages';  
import { auto } from '@popperjs/core';
import { RealEstateDetailImg } from '../utils/allImgs';

const ServiceDetail = () => {
  return (
    <div>
      <Header />
      <div className='container'>
      <div className='row mt-5'>
      <h3 className='text-white mt-5' style={{margin: auto}}>RealEstate Detail</h3>
      <div className='row mt-5 mb-5 text-white'>
        <div className='col-md-6'>
          <img className='' src={CryptoDetailImg}></img>
        </div>
        <div className='col-md-6' style={{ textAlign: 'justify'   }}>
            //your content here 

        </div>
        </div>
      </div>
      
      </div>
      
      <Footer />
    </div>
  );
}

export default ServiceDetail;
        