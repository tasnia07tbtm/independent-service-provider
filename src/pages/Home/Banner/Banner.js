import React, { Fragment } from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <Fragment>
         <section className="banner-img">
           <div className="heading">
              <h1>Doctor on Demand</h1>
              <p>Our service and the work efficiency of our staff are the reasons for our success.</p>
              <button>Rede More</button>
           </div>
         </section>
    </Fragment>
      
  );
};

export default Banner;