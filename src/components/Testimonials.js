import React from 'react'

export default ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <article key={testimonial.author} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)
