import React from "react";
import Marquee from "react-fast-marquee";
import { BsFillQuestionDiamondFill } from "react-icons/bs";

import "./CardCarousel.scss";

const cardsData = [
  {
    image:
      "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98bb_madagascar-4287921_1280-p-500.jpeg",
    title: "$ 2000.00 USD/Person",
    description:
      "Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!",
    city: "Holand",
  },
  {
    image:
      "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98c2_colombia-2462346_1280-p-500.jpeg",
    title: "$ 2000.00 USD/Person",
    description:
      "Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!",
    city: "Iceland",
  },
  {
    image:
      "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98c4_rome-2151629_1280-p-500.jpeg",
    title: "$ 2000.00 USD/Person",
    description:
      "Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!",
    city: "Uttrakhand",
  },
  {
    image:
      "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98ba_river-5524569_1280-p-500.jpeg",
    title: "$ 2000.00 USD/Person",
    description:
      "Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!",
    city: "Haridwar",
  },
  {
    image:
      "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98c3_truebsee-5337646_1280-p-500.jpeg",
    title: "$ 2000.00 USD/Person",
    description:
      "Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!",
    city: "Himachal",
  },
  {
    image:
      "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98c4_rome-2151629_1280-p-500.jpeg",
    title: "$ 2000.00 USD/Person",
    description:
      "Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!",
    city: "Pryagraj",
  },
  {
    image:
      "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98c6_beach-429749_1280-p-500.jpeg",
    title: "$ 2000.00 USD/Person",
    description:
      "Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!",
    city: "Paris",
  },
  {
    image:
      "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98c2_colombia-2462346_1280-p-500.jpeg",
    title: "$ 2000.00 USD/Person",
    description:
      "Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!",
    city: "Jaipur",
  },
  {
    image:
      "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98c3_truebsee-5337646_1280-p-500.jpeg",
    title: "$ 2000.00 USD/Person",
    description:
      "Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!",
    city: "Nagpur",
  },
  {
    image:
      "https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98c4_rome-2151629_1280-p-500.jpeg",
    title: "$ 2000.00 USD/Person",
    description:
      "Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!",
    city: "Agra",
  },
];

const CardCarousel = () => {
  return (
    <div className="card-carousel">
      <div className="card-name-container">
        <h4>Travel far enough, meet yourself</h4>
        <h2>MOST POPULAR TOURS</h2>
      </div>
      <Marquee gradient={false} speed={50} className="marquee">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <div className="card-image-card">
              <div className="city-overlay">
                <h5>{card.city}</h5>
                <p>⭐⭐⭐⭐⭐ (5.2 Rating)</p>
              </div>
              <img src={card.image} alt={card.title} className="card-image" />
            </div>
            <div className="card-info">
              <p className="card-span">
                <BsFillQuestionDiamondFill className="card-icons" /> 8 days
              </p>
              <p className="card-span">
                <BsFillQuestionDiamondFill className="card-icons" /> Adventure
              </p>
              <p className="card-span">
                <BsFillQuestionDiamondFill className="card-icons" /> 8+Age
              </p>
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
            <button className="card-button">Add to Cart</button>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CardCarousel;
