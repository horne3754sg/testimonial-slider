import '../sass/styles.scss'
import TestimonialSlider from './includes/testimonial-slider'

const slideData = [
  {
    author: 'Tanya Sinclair',
    occupation: 'UX Engineer',
    imgSrc: './static/images/image-tanya.jpg',
    review:
      "\" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. \"",
  },
  {
    author: 'John Tarkpor',
    occupation: 'Junior Front-end Developer',
    imgSrc: './static/images/image-john.jpg',
    review:
      '" If you want to lay the best foundation possible I\'d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "',
  },
]

const testimonialSliders = document.querySelectorAll('.testimonial-slider')
testimonialSliders.forEach(
  (slider) =>
    new TestimonialSlider(slider, {
      slideData,
    })
)
