import React from "react";
import "./ImageGallery.scss";

const ImageGallery = () => {
  const images = [
    {
      src: "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98ba_river-5524569_1280-p-500.jpeg",
      title: "$950.00 USD",
      location: "Rishikesh",
      description:
        "Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!",
    },
    {
      src: "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98bb_madagascar-4287921_1280-p-500.jpeg",
      title: "$950.00 USD",
      location: "Rishikesh",
      description:
        "Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!",
    },
    {
      src: "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98c2_colombia-2462346_1280-p-500.jpeg",
      title: "$950.00 USD",
      location: "Rishikesh",
      description:
        "Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!",
    },
  ];

  return (
    <div>
    <div class="big-title-wrap"><h2 class="great-title-wrapper"><span class="great-title">LAST MINUTES</span></h2></div>
    <div className="gallery-container mt-0">
      {images.map((image, index) => (
        <div key={index} className="image-card">
          <img src={image.src} alt={image.location} />
          <div className="image-overlay">
            <h2 className="title">{image.title}</h2>
            <p className="location">{image.location}</p>
            <p className="description">{image.description}</p>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ImageGallery;
