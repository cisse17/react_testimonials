  import React, { useState } from 'react'
 import "../style.css"
  const Testimonial = () => {
      const [currentIndex, setCurrentIndex] = useState(0)

      const testimonials = [
          {
              quote : "This is the best product i've ever used !",
              author : "Jane Doe",

          },
          {
              quote : "I highly recommend this product to everyone",
              author : "John Smith",

          },
        {
              quote : "I like my country senegal for several reasons ...!",
              author : "  Bassirou",

          }
      ];
      const handlePrevButton = () => {          setCurrentIndex(              (currentIndex + testimonials.length -1) % testimonials.length          )      }

      const handleNextButton = () => {
          setCurrentIndex(
              (currentIndex + 1) % testimonials.length
          )
      }


   return (
      <>
      <div className='testimonials'>
         <div className='testimonials-quote'>
              {testimonials[currentIndex].quote }        </div>
         <div className='testimonials-author'>
              {testimonials[currentIndex].author }
         </div>
         <testimonial className="testimonials-nav">
          <button onClick={handlePrevButton}>Previous</button>
          <button onClick={handleNextButton}>next</button>
         </testimonial>
      </div>
      
      </>   )
  }

  export default Testimonial
