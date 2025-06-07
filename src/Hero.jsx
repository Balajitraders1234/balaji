import React from 'react'

const Hero = () => {
  return (
    <main className="hero">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BESTYOUR FEET DESERVE THE BESTYOUR FEET DESERVE THE BESTYOUR FEET DESERVE THE BEST</p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className='shopping'>
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
        </div>
        <div className="hero-images">
            <img src="/images/shoe_image.png" alt="Shoe-img" />
        </div>
    </main>
  )
}

export default Hero