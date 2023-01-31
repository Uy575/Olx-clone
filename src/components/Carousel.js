import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function CarouselComp() {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
              alt="First slide"
            />
       
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
              alt="Second slide"
            />
    
    
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>
      );
    
}

export default CarouselComp