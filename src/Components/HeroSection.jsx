import React from 'react'

const HeroSection = () => {
  return (
    <main className="hero">
      <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST </h1>
        <p>YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BESTYOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className='secondary-btn'>Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="Amazon logo" />
            <img src="/images/flipkart.png" alt="Flipkart logo" />
          </div>
        </div>
      </div>
      <div className='hero-image'>
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  )
}
export default HeroSection