import React from "react";
import "./Layout.scss";
import { VscTriangleRight } from "react-icons/vsc";

const LayoutComponent = () => {
  return (
    <div className="layout-container">
      <div className="content">
        <h1 className="heading">Watch our video</h1>
        <p className="layout-tour">take a tour </p>
        <p className="paragraph">
          Everything was seamless. The private guides were interesting and
          knowledgeable. We felt that they were more than just guides.
        </p>
        <button className="layout-btn">About us</button>
      </div>
      <div className="image-container">
        <img
          src="https://cdn.prod.website-files.com/673db2dcc379e23c771b9685/673db2dcc379e23c771b975f_sea-2559826_1280%20(1)%20(1).jpg"
          alt="Example"
        />
        <div>
          <VscTriangleRight className="video-icon" />
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
