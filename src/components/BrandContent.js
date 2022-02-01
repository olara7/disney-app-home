import React from 'react';

import './BrandContent.css'

export default function BrandContent() {
  return (
      <div className="brands">
          <div className="brand-container">
              <a href="">
              <video autoPlay muted loop className='video-bg'>
                <source src="/vid/disney-vid.mp4" type="video/mp4" />
              </video>
              <img src="/img/disney-brand.png" alt="disney=brand" />
              </a>
          </div>
          <div className="brand-container">
              <a href="">
              <video autoPlay muted loop className='video-bg'>
                <source src="/vid/pixar-vid.mp4" type="video/mp4" />
              </video>
                <img src="/img/pixar-brand.png" alt="disney=brand" />
              </a>
          </div>
          <div className="brand-container">
            <a href="">
            <video autoPlay muted loop className='video-bg'>
                <source src="/vid/marvel-vid.mp4" type="video/mp4" />
              </video>
            <img src="/img/marvel-brand.png" alt="disney=brands" />
            </a>
          </div>
          <div className="brand-container">
              <a href="">
              <video autoPlay muted loop className='video-bg'>
                <source src="/vid/star-wars-vid.mp4" type="video/mp4" />
              </video>           
              <img src="/img/star-wars-brand.png" alt="disney=brand" />
              </a>
          </div>
          <div className="brand-container">
              <a href="">
              <video autoPlay muted loop className='video-bg'>
                <source src="/vid/national-geo-vid.mp4" type="video/mp4" />
              </video>
              <img src="/img/national-geographic-brand.png" alt="disney=brand" />
              </a>
          </div>
      </div>
  )
}