import React from 'react'
import './sass/styles.scss'

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

function App() {
  return (
    <div className='app'>
      <div className='section'>
        <div className='container full-height flex-align-center'>
          <div className='testimonial-slider'>
            <div className='testimonial-slides'>
              {slideData.map((slide, index) => (
                <div key={index} className='testimonial-slide'>
                  <div className='testimonial-slide-content'>
                    <div className='quote-content'>
                      <div className='quote-text'>{slide.review}</div>
                      <div className='quote-cite'>
                        <span className='quote-author'>{slide.author}</span>{' '}
                        <span className='quote-occupation'>
                          {slide.occupation}
                        </span>
                      </div>
                    </div>
                    <div className='quote-avatar'>
                      <img src={slide.imgSrc} alt='' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
