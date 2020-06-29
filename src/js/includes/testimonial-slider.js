export default class TestimonialSlider {
  constructor(slider, options = {}) {
    this.slider = slider
    this.slideData = options.slideData || []
    this.render()
  }

  render() {
    this.slider.insertAdjacentHTML(
      'beforeend',
      `<div class="testimonial-slides">
      ${this.slideData.map(
        (slide) =>
          `<div class="testimonial-slide">
          <div class="testimonial-slide-content">
            <div class="quote-content">
              <div class="quote-text">${slide.review}</div>
              <div class="quote-cite">
                <span class="quote-author">${slide.author}</span>
                <span class="quote-occupation">${slide.occupation}</span>
              </div>
            </div>
            <div class="quote-avatar">
              <img src="${slide.imgSrc}" alt="" />
            </div>
          </div>
        </div>`
      )}
      </div>`
    )
  }

  nextSlide() {}

  prevSlide() {}
}
