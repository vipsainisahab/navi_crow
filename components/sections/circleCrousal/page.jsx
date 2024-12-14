"use client";
import React, { useEffect, useState } from "react";
import "./crousal.scss";

const data = [
  {
    id: 1,
    image: "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98b2_lithuania-912363_640-p-500.jpeg",
    location: "New York, USA",
    description: "A bustling city full of life and opportunities.",
  },
  {
    id: 2,
    image: "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98b3_waterfall-3723422_640-p-500.jpeg",
    location: "Paris, France",
    description: "The city of lights and romance.",
  },
  {
    id: 3,
    image: "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98b4_venice-3183168_640-p-500.jpeg",
    location: "Tokyo, Japan",
    description: "A vibrant blend of tradition and modernity.",
  },
  {
    id: 4,
    image: "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98b6_farming-6959629_640-p-500.jpeg",
    location: "London, UK",
    description: "A historic city with modern charm.",
  },
  {
    id: 5,
    image: "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98b2_lithuania-912363_640-p-500.jpeg",
    location: "Sydney, Australia",
    description: "A stunning city by the harbor.",
  },
  {
    id: 6,
    image: "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98b8_heritage-5430081_640-p-500.jpeg",
    location: "Cape Town, South Africa",
    description: "A city with breathtaking landscapes.",
  },
];

const CircleCrousal = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // Default to 3 items (desktop)
  const [isAnimating, setIsAnimating] = useState(false);

  const updateSlide = () => {
    setStartIndex((prev) =>
      prev + itemsToShow >= data.length ? 0 : Math.min(prev + itemsToShow, data.length - itemsToShow)
    );
    triggerAnimation();
  };

  const triggerAnimation = () => {
    setIsAnimating(false); // Reset animation
    setTimeout(() => {
      setIsAnimating(true); // Trigger animation
    }, 10); // Small delay to ensure CSS re-trigger
  };

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setItemsToShow(1); // Mobile: 1 item
    } else if (width <= 1024) {
      setItemsToShow(2); // Tablet: 2 items
    } else {
      setItemsToShow(3); // Desktop: 3 items
    }
  };

  useEffect(() => {
    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize); // Update on resize
    const interval = setInterval(() => {
      updateSlide();
    }, 8000); // Autoplay interval (8000ms = 8s)

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, []);

  return (
    <div className="carousel">
      <button className="carousel__button left" onClick={() => updateSlide()}>
        &#8249;
      </button>
      <div
        className={`carousel__content ${isAnimating ? "scale-animation" : ""}`}
      >
        {data.slice(startIndex, startIndex + itemsToShow).map((item) => (
          <div key={item.id} className="carousel__item">
            <div className="carousel__image-wrapper">
              <span className="rotating-text">from $200</span>
              <img src={item.image} alt={`Slide ${item.id}`} />
            </div>
            <h3>{item.location}</h3>
            <p>{item.description}</p>
            <button className="button-cousal">READ MORE</button>
          </div>
        ))}
      </div>
      <button className="carousel__button right" onClick={() => updateSlide()}>
        &#8250;
      </button>
    </div>
  );
};

export default CircleCrousal;
