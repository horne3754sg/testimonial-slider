import React, { Component } from 'react'
import TestimonialSlider from './components/TestimonalSlider/TestimonialSlider'
import './App.scss'

const slideData = [
  {
    author: 'Tanya Sinclair',
    occupation: 'UX Engineer',
    imgSrc: './images/image-tanya.jpg',
    review: `" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. "`,
  },
  {
    author: 'John Tarkpor',
    occupation: 'Junior Front-end Developer',
    imgSrc: './images/image-john.jpg',
    review: `" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "`,
  },
]

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='section'>
          <div className='container full-height flex-align-center'>
            <TestimonialSlider slides={slideData} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
