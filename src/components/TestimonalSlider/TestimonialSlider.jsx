import React, { Component } from 'react'
import './assets/sass/styles.scss'

import AvatarBg from './assets/images/pattern-bg.svg'
import { ReactComponent as NextArrow } from './assets/images/icon-next.svg'
import { ReactComponent as PrevArrow } from './assets/images/icon-prev.svg'

class TestimonialSlider extends Component {
  render() {
    const { slides } = this.props
    return (
      <div className='testimonial-slider'>
        <div className='testimonial-slides'>
          {slides.map((slide, index) => (
            <div key={index} className='testimonial-slide'>
              <div className='slide-content-container'>
                <div className='quote-container'>
                  <div className='quote-text'>{slide.review}</div>
                  <div className='quote-cite'>
                    <span className='quote-author'>{slide.author}</span>{' '}
                    <span className='quote-occupation'>{slide.occupation}</span>
                  </div>
                </div>
                <div className='avatar-container'>
                  <img className='avatar-bg' src={AvatarBg} alt='' />
                  <div className='quote-avatar'>
                    <img src={slide.imgSrc} alt='' />
                    <div className='controls-container'>
                      <div className='next-prev'>
                        <div className='prev'>
                          <PrevArrow />
                        </div>
                        <div className='next'>
                          <NextArrow />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default TestimonialSlider
