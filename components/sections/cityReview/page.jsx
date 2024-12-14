import React from "react";
import "./cardReview.scss";
const CardReview = () => {
  return (
    <div className="card-carousel-card">
      <div className="marquee">
        {/* Card 1 */}
        <div className="card">
          <div className="card-top">
            <div className="card-start-popup">
              <div className="card-star">
                <div className="stars">★★★★★</div>
                <h5>Colourful India</h5>
              </div>
              <div className="card-cots">”</div>
            </div>
            <p>
              Everything was seamless. The private guides were interesting and
              knowledgeable. We felt that they were more than just guides. It
              was like we had a friend in each city
            </p>
          </div>
          <div className="card-bottom">
            <img
              src="https://d1q40j6jx1d8h6.cloudfront.net/Obituaries/33561500/Thumbnail.webp"
              alt="User Image"
              className="user-image"
            />
            <div className="user-name">
              <span>Raymon Thomas</span>
              <p>/Marketer</p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card">
          <div className="card-top">
            <div className="card-start-popup">
              <div className="card-star">
                <div className="stars">★★★★★</div>
                <h5>Yangshuo Mist</h5>
              </div>
              <div className="card-cots">”</div>
            </div>

            <p>
              Everything was seamless. The private guides were interesting and
              knowledgeable. We felt that they were more than just guides. It
              was like we had a friend in each city.
            </p>
          </div>
          <div className="card-bottom">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgouCFp6TZcLZ6o7by3uBeiLrC1tcUrHE8mg&s"
              alt="User Image"
              className="user-image"
            />
            <div className="user-name">
              <span>Tasha Stewart</span>
              <p>/Marketer</p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card">
          <div className="card-top">
            <div className="card-start-popup">
              <div className="card-star">
                <div className="stars">★★★★★</div>
                <h5>Miami Beach</h5>
              </div>
              <div className="card-cots">”</div>
            </div>
            <p>
              Everything was seamless. The private guides were interesting and
              knowledgeable. We felt that they were more than just guides. It
              was like we had a friend in each city.
            </p>
          </div>
          <div className="card-bottom">
            <img
              src="https://www.marinerwealthadvisors.com/wp-content/uploads/2020/04/Jacob-Jones-Headshot.jpg"
              alt="User Image"
              className="user-image"
            />
            <div className="user-name">
              <span>Jacob Jones</span>
              <p>/Marketer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
