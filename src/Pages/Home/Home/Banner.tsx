import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

// Import your banner images or use placeholder URLs
// Example placeholders - replace with your actual image paths/URLs
const bannerImages = [
  {
    src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    alt: 'Shop Banner 1 - Electronics Store Display',
    title: 'Huge Electronics Sale!',
    description: 'Get up to 50% off on selected gadgets and electronics.',
    buttonText: 'Shop Now',
    buttonLink: '/deals/electronics' // Example link
  },
  {
    src: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    alt: 'Shop Banner 2 - Modern Retail Interior',
    title: 'New Arrivals Weekly',
    description: 'Discover the latest trends in fashion and accessories.',
    buttonText: 'Explore Collection',
    buttonLink: '/products/new'
  },
  {
    src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a',
    alt: 'Shop Banner 3 - Product Showcase',
    title: 'Home Essentials Refresh',
    description: 'Upgrade your living space with our curated home goods.',
    buttonText: 'View Home Goods',
    buttonLink: '/categories/home'
  },
];

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false} // Hide thumbnail navigation
      showStatus={false} // Hide status indicator (e.g., "1 of 3")
      showIndicators={true} // Show dot indicators
      interval={5000} // Change slide every 5 seconds
      transitionTime={500} // Animation transition time in ms
      className="w-full" // Optional: Add Tailwind classes if needed
    >
      {bannerImages.map((image, index) => (
        <div key={index} className="relative"> {/* Make container relative */}
          <img src={image?.src} alt={image?.alt} className="w-full lg:h-[500px] h-auto object-cover" />
        

        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
