import React from "react";
import Cards from "../Cards";


function Experience(){
    return(
        <div className='experience'>
          <div className='news'>
              <div className='news-header'>
                  News
              </div>
              <div className='clippings'>
                  <div className='clip'>
                      <img className='news-clip' src={"/website_assets/TOI-Logo.jpg"} alt="toi-logo"/>
                  </div>
                  <div className='clip'>
                      <img className='news-clip' src={"/website_assets/TOI-Logo.jpg"} alt="toi-logo"/>
                  </div>
                  <div className='clip'>
                      <img className='news-clip' src={"/website_assets/TOI-Logo.jpg"} alt="toi-logo"/>
                  </div>
              </div>
          </div>
            <div className='testimonials'>
                <div className='testimonial-header'>
                    Testimonials
                </div>
                <div className='card-sec'>
                    <div className='cards-section_1'>
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                    <div className='cards-section_2'>
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Experience