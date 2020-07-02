import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './assets/sass/styles.scss'

import AvatarBg from './assets/images/pattern-bg.svg'
import { ReactComponent as NextArrow } from './assets/images/icon-next.svg'
import { ReactComponent as PrevArrow } from './assets/images/icon-prev.svg'

class TestimonialSlider extends Component {
  state = {
    currentIndex: 0,
  }

  nextSlide = () => {
    const { slides } = this.props
    const { currentIndex: prevIndex } = this.state
    const currentIndex = prevIndex + 1 === slides.length ? 0 : prevIndex + 1
    this.setState({ currentIndex })
  }

  prevSlide = () => {
    const { slides } = this.props
    const { currentIndex: prevIndex } = this.state
    const currentIndex = prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    this.setState({ currentIndex })
  }

  controlsLayout = () => {
    return (
      <div className='controls-container'>
        <div className='next-prev'>
          <div className='prev' onClick={this.prevSlide}>
            <PrevArrow />
          </div>
          <div className='next' onClick={this.nextSlide}>
            <NextArrow />
          </div>
        </div>
      </div>
    )
  }

  slideLayout = (slide) => {
    return (
      <div className='testimonial-slide'>
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
              {this.controlsLayout()}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { slides } = this.props
    const { currentIndex } = this.state
    return (
      <div className='testimonial-slider'>
        <div className='testimonial-slides'>
          {slides.length > 0 && this.slideLayout(slides[currentIndex])}
        </div>
      </div>
    )
  }
}

TestimonialSlider.propTypes = {
  slides: PropTypes.array,
}

export default TestimonialSlider
