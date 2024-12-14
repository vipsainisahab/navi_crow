"use client";
import RangeSlider from "@/components/elements/RangeSlider";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function TourPackageV4() {
  const [isToggled, setToggled] = useState(false);
  const handleToggle = () => setToggled(!isToggled);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Tour Package v4">
        <div>
          <div className="mt--82 z-index3 relative">
            <div className="tf-container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="search-form-widget-slider relative">
                    <form action="/" id="search-form-slider">
                      <div className="flex wd-search">
                        <div className="form-group flex">
                          <i className="icon-18" />
                          <div className="search-bar-group">
                            <label>Destination</label>
                            <select className="nice-select" tabIndex={0}>
                              <option data-value className="option selected">
                                Melborn ,Australia
                              </option>
                              <option data-value="hanoi" className="option">
                                HaNoi ,Vietnam
                              </option>
                              <option data-value="tolyo" className="option">
                                Tokyo , Janpan
                              </option>
                              <option data-value="korea" className="option">
                                Seoul , Korea
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group flex">
                          <i className="icon-hiking-1-1 " />
                          <div className="search-bar-group">
                            <label>Type</label>
                            <select className="nice-select" tabIndex={0}>
                              <option data-value className="option selected">
                                Booking Type
                              </option>
                              <option data-value="booking" className="option">
                                Booking Type
                              </option>
                              <option data-value="booking" className="option">
                                Booking Type
                              </option>
                              <option data-value="booking" className="option">
                                Booking Type
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group flex">
                          <i className=" icon-time-left " />
                          <div className="search-bar-group">
                            <label>Duration</label>
                            <select className="nice-select" tabIndex={0}>
                              <option data-value className="option selected">
                                2-4 days tour
                              </option>
                              <option data-value="booking" className="option">
                                3-6 days tour
                              </option>
                              <option data-value="booking" className="option">
                                4-8 days tour
                              </option>
                              <option data-value="booking" className="option">
                                5-10 days tour
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group flex">
                          <i className="icon-user" />
                          <div className="search-bar-group">
                            <label>Guests</label>
                            <input type="text" defaultValue={0} />
                          </div>
                        </div>
                        <div className="form-group flex-two">
                          <div
                            className="icon-icon-filter"
                            onClick={handleToggle}
                          >
                            <i className="icon-14" />
                          </div>
                          <Link href="#" className="btn-search">
                            <i className="icon-Vector5" />
                            Search
                          </Link>
                        </div>
                      </div>
                      <div
                        className={`wd-search-form ${isToggled ? "show" : ""}`}
                      >
                        <div className="input-group-grid">
                          <fieldset className="group-select relative ">
                            <label>Filter By Price</label>
                            <div className="widget widget-price ">
                              <RangeSlider title="Filter By Price" />
                            </div>
                          </fieldset>
                          <fieldset className="group-select relative input-npd ">
                            <div className="search-bar-group relative">
                              <label>0</label>
                              <select className="nice-select" tabIndex={0}>
                                <option
                                  data-value
                                  className="option selected focus"
                                >
                                  Language
                                </option>
                                <option
                                  data-value="language1"
                                  className="option"
                                >
                                  Japan
                                </option>
                                <option
                                  data-value="language2"
                                  className="option"
                                >
                                  Vietnames
                                </option>
                                <option
                                  data-value="language3"
                                  className="option"
                                >
                                  Korea
                                </option>
                              </select>
                            </div>
                          </fieldset>
                          <fieldset className="group-select relative input-npd ">
                            <div className="search-bar-group relative">
                              <label>Any</label>
                              <select className="nice-select" tabIndex={0}>
                                <option
                                  data-value
                                  className="option selected focus"
                                >
                                  Month
                                </option>
                                <option data-value="month1" className="option">
                                  1 Month
                                </option>
                                <option data-value="month2" className="option">
                                  2 Month
                                </option>
                                <option data-value="month3" className="option">
                                  3 Month
                                </option>
                              </select>
                            </div>
                          </fieldset>
                          <fieldset className="group-select relative input-npd">
                            <div className="search-bar-group relative">
                              <label>Any</label>
                              <select className="nice-select" tabIndex={0}>
                                <option
                                  data-value
                                  className="option selected focus"
                                >
                                  Duration
                                </option>
                                <option
                                  data-value="duration1"
                                  className="option"
                                >
                                  10-15 day
                                </option>
                                <option
                                  data-value="duration2"
                                  className="option"
                                >
                                  15-30 day
                                </option>
                                <option
                                  data-value="duration3"
                                  className="option"
                                >
                                  20-30 day
                                </option>
                              </select>
                            </div>
                          </fieldset>
                          <div className="group-check-box-wrap">
                            <div className="checkbox">
                              <input
                                id="check4"
                                type="checkbox"
                                name="check"
                                defaultValue="check"
                              />
                              <label htmlFor="check4">
                                Accepts Credit Cards
                              </label>
                            </div>
                            <div className="checkbox">
                              <input
                                id="check5"
                                type="checkbox"
                                name="check"
                                defaultValue="check"
                              />
                              <label htmlFor="check5">Car Parking</label>
                            </div>
                          </div>
                          <div className="group-check-box-wrap">
                            <div className="checkbox">
                              <input
                                id="check6"
                                type="checkbox"
                                name="check"
                                defaultValue="check"
                              />
                              <label htmlFor="check6">Free Coupons</label>
                            </div>
                            <div className="checkbox">
                              <input
                                id="check7"
                                type="checkbox"
                                name="check"
                                defaultValue="check"
                              />
                              <label htmlFor="check7">Laundry Service</label>
                            </div>
                          </div>
                          <div className="group-check-box-wrap">
                            <div className="checkbox">
                              <input
                                id="check8"
                                type="checkbox"
                                name="check"
                                defaultValue="check"
                              />
                              <label htmlFor="check8">Outdoor Seating</label>
                            </div>
                            <div className="checkbox">
                              <input
                                id="check9"
                                type="checkbox"
                                name="check"
                                defaultValue="check"
                              />
                              <label htmlFor="check9">Reservations</label>
                            </div>
                          </div>
                          <div className="group-check-box-wrap">
                            <div className="checkbox">
                              <input
                                id="check10"
                                type="checkbox"
                                name="check"
                                defaultValue="check"
                              />
                              <label htmlFor="check10">Restaurant</label>
                            </div>
                            <div className="checkbox">
                              <input
                                id="check11"
                                type="checkbox"
                                name="check"
                                defaultValue="check"
                              />
                              <label htmlFor="check11">Smoking Allowed</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Widget Select Form */}
          {/* Widget archieve tour */}
          <section className="archieve-tour">
            <div className="tf-container">
              <form action="/" className="tf-my-listing1 mb-37">
                <div className="row align-center">
                  <div className="col-md-8">
                    <p className="showing">
                      Showing <span className="text-main">12</span> of 21
                      Results
                    </p>
                    <div className="flex-three filter-tour-package">
                      <select className="nice-select" tabIndex={0}>
                        <option data-value className="option selected focus">
                          All Filter
                        </option>
                        <option data-value="all-filter1" className="option">
                          All Filter 1
                        </option>
                        <option data-value="all-filter2" className="option">
                          All Filter 2
                        </option>
                      </select>
                      <select className="nice-select" tabIndex={0}>
                        <option data-value className="option selected focus">
                          Dates
                        </option>
                        <option data-value="date" className="option">
                          Dates
                        </option>
                        <option data-value="date1" className="option">
                          Dates
                        </option>
                      </select>
                      <select className="nice-select" tabIndex={0}>
                        <option data-value className="option selected focus">
                          Type
                        </option>
                        <option data-value="type" className="option">
                          Type
                        </option>
                        <option data-value="type" className="option">
                          Type
                        </option>
                      </select>
                      <select className="nice-select" tabIndex={0}>
                        <option data-value className="option selected focus">
                          Price
                        </option>
                        <option data-value="new" className="option">
                          New
                        </option>
                        <option data-value="Recently Added" className="option">
                          Recently Added
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4  flex-six">
                    <div className="listing-all-wrap">
                      <div className="group-select-recently">
                        <select className="nice-select" tabIndex={0}>
                          <option>Price</option>
                          <option>New</option>
                          <option>Recently Added </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-sm-6 col-xl-3 mb-32">
                  <div className="tour-listing box-sd">
                    <Link href="/tour-single" className="tour-listing-image">
                      <div className="badge-top flex-two">
                        <span className="feature">Featured</span>
                        <div className="badge-media flex-five">
                          <span className="media">
                            <i className="icon-Group-1000002909" />5
                          </span>
                          <span className="media">
                            <i className="icon-Group-1000002910" />2
                          </span>
                        </div>
                      </div>
                      <img
                        src="/assets/images/travel-list/16.jpg"
                        alt="Image Listing"
                      />
                    </Link>
                    <div className="tour-listing-content">
                      <span className="map">
                        <i className="icon-Vector4" />
                        United States USA
                      </span>
                      <h3 className="title-tour-list">
                        <Link href="/tour-single">Premium Tour From 214$</Link>
                      </h3>
                      <div className="review">
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <span>(1 Review)</span>
                      </div>
                      <div className="icon-box flex-three">
                        <div className="icons flex-three">
                          <i className="icon-time-left" />
                          <span>5 days</span>
                        </div>
                        <div className="icons flex-three">
                          <svg
                            width={21}
                            height={16}
                            viewBox="0 0 21 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.1035 15.1797V9.02734"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.1797 12.1035H14.0273"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>12 Person</span>
                        </div>
                      </div>
                      <div className="flex-two">
                        <div className="price-box flex-three">
                          <p>
                            From <span className="price-sale">$169.00</span>
                          </p>
                          <span className="price">$199.00</span>
                        </div>
                        <div className="icon-bookmark">
                          <i className="icon-Vector-151" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 mb-32">
                  <div className="tour-listing box-sd">
                    <Link href="/tour-single" className="tour-listing-image">
                      <div className="badge-top flex-two">
                        <span className="feature">Featured</span>
                        <div className="badge-media flex-five">
                          <span className="media">
                            <i className="icon-Group-1000002909" />5
                          </span>
                          <span className="media">
                            <i className="icon-Group-1000002910" />2
                          </span>
                        </div>
                      </div>
                      <img
                        src="/assets/images/travel-list/16.jpg"
                        alt="Image Listing"
                      />
                    </Link>
                    <div className="tour-listing-content">
                      <span className="map">
                        <i className="icon-Vector4" />
                        United States USA
                      </span>
                      <h3 className="title-tour-list">
                        <Link href="/tour-single">Premium Tour From 214$</Link>
                      </h3>
                      <div className="review">
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <span>(1 Review)</span>
                      </div>
                      <div className="icon-box flex-three">
                        <div className="icons flex-three">
                          <i className="icon-time-left" />
                          <span>5 days</span>
                        </div>
                        <div className="icons flex-three">
                          <svg
                            width={21}
                            height={16}
                            viewBox="0 0 21 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.1035 15.1797V9.02734"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.1797 12.1035H14.0273"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>12 Person</span>
                        </div>
                      </div>
                      <div className="flex-two">
                        <div className="price-box flex-three">
                          <p>
                            From <span className="price-sale">$169.00</span>
                          </p>
                          <span className="price">$199.00</span>
                        </div>
                        <div className="icon-bookmark">
                          <i className="icon-Vector-151" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 mb-32">
                  <div className="tour-listing box-sd">
                    <Link href="/tour-single" className="tour-listing-image">
                      <div className="badge-top flex-two">
                        <span className="feature">Featured</span>
                        <div className="badge-media flex-five">
                          <span className="media">
                            <i className="icon-Group-1000002909" />5
                          </span>
                          <span className="media">
                            <i className="icon-Group-1000002910" />2
                          </span>
                        </div>
                      </div>
                      <img
                        src="/assets/images/travel-list/13.jpg"
                        alt="Image Listing"
                      />
                    </Link>
                    <div className="tour-listing-content">
                      <span className="map">
                        <i className="icon-Vector4" />
                        United States USA
                      </span>
                      <h3 className="title-tour-list">
                        <Link href="/tour-single">Premium Tour From 214$</Link>
                      </h3>
                      <div className="review">
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <span>(1 Review)</span>
                      </div>
                      <div className="icon-box flex-three">
                        <div className="icons flex-three">
                          <i className="icon-time-left" />
                          <span>5 days</span>
                        </div>
                        <div className="icons flex-three">
                          <svg
                            width={21}
                            height={16}
                            viewBox="0 0 21 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.1035 15.1797V9.02734"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.1797 12.1035H14.0273"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>12 Person</span>
                        </div>
                      </div>
                      <div className="flex-two">
                        <div className="price-box flex-three">
                          <p>
                            From <span className="price-sale">$169.00</span>
                          </p>
                          <span className="price">$199.00</span>
                        </div>
                        <div className="icon-bookmark">
                          <i className="icon-Vector-151" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 mb-32">
                  <div className="tour-listing box-sd">
                    <Link href="/tour-single" className="tour-listing-image">
                      <div className="badge-top flex-two">
                        <span className="feature">Featured</span>
                        <div className="badge-media flex-five">
                          <span className="media">
                            <i className="icon-Group-1000002909" />5
                          </span>
                          <span className="media">
                            <i className="icon-Group-1000002910" />2
                          </span>
                        </div>
                      </div>
                      <img
                        src="/assets/images/travel-list/17.jpg"
                        alt="Image Listing"
                      />
                    </Link>
                    <div className="tour-listing-content">
                      <span className="map">
                        <i className="icon-Vector4" />
                        United States USA
                      </span>
                      <h3 className="title-tour-list">
                        <Link href="/tour-single">Premium Tour From 214$</Link>
                      </h3>
                      <div className="review">
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <span>(1 Review)</span>
                      </div>
                      <div className="icon-box flex-three">
                        <div className="icons flex-three">
                          <i className="icon-time-left" />
                          <span>5 days</span>
                        </div>
                        <div className="icons flex-three">
                          <svg
                            width={21}
                            height={16}
                            viewBox="0 0 21 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.1035 15.1797V9.02734"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.1797 12.1035H14.0273"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>12 Person</span>
                        </div>
                      </div>
                      <div className="flex-two">
                        <div className="price-box flex-three">
                          <p>
                            From <span className="price-sale">$169.00</span>
                          </p>
                          <span className="price">$199.00</span>
                        </div>
                        <div className="icon-bookmark">
                          <i className="icon-Vector-151" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 mb-32">
                  <div className="tour-listing box-sd">
                    <Link href="/tour-single" className="tour-listing-image">
                      <div className="badge-top flex-two">
                        <span className="feature">Featured</span>
                        <div className="badge-media flex-five">
                          <span className="media">
                            <i className="icon-Group-1000002909" />5
                          </span>
                          <span className="media">
                            <i className="icon-Group-1000002910" />2
                          </span>
                        </div>
                      </div>
                      <img
                        src="/assets/images/travel-list/19.jpg"
                        alt="Image Listing"
                      />
                    </Link>
                    <div className="tour-listing-content">
                      <span className="map">
                        <i className="icon-Vector4" />
                        United States USA
                      </span>
                      <h3 className="title-tour-list">
                        <Link href="/tour-single">Premium Tour From 214$</Link>
                      </h3>
                      <div className="review">
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <span>(1 Review)</span>
                      </div>
                      <div className="icon-box flex-three">
                        <div className="icons flex-three">
                          <i className="icon-time-left" />
                          <span>5 days</span>
                        </div>
                        <div className="icons flex-three">
                          <svg
                            width={21}
                            height={16}
                            viewBox="0 0 21 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.1035 15.1797V9.02734"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.1797 12.1035H14.0273"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>12 Person</span>
                        </div>
                      </div>
                      <div className="flex-two">
                        <div className="price-box flex-three">
                          <p>
                            From <span className="price-sale">$169.00</span>
                          </p>
                          <span className="price">$199.00</span>
                        </div>
                        <div className="icon-bookmark">
                          <i className="icon-Vector-151" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 mb-32">
                  <div className="tour-listing box-sd">
                    <Link href="/tour-single" className="tour-listing-image">
                      <div className="badge-top flex-two">
                        <span className="feature">Featured</span>
                        <div className="badge-media flex-five">
                          <span className="media">
                            <i className="icon-Group-1000002909" />5
                          </span>
                          <span className="media">
                            <i className="icon-Group-1000002910" />2
                          </span>
                        </div>
                      </div>
                      <img
                        src="/assets/images/travel-list/18.jpg"
                        alt="Image Listing"
                      />
                    </Link>
                    <div className="tour-listing-content">
                      <span className="map">
                        <i className="icon-Vector4" />
                        United States USA
                      </span>
                      <h3 className="title-tour-list">
                        <Link href="/tour-single">Premium Tour From 214$</Link>
                      </h3>
                      <div className="review">
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <span>(1 Review)</span>
                      </div>
                      <div className="icon-box flex-three">
                        <div className="icons flex-three">
                          <i className="icon-time-left" />
                          <span>5 days</span>
                        </div>
                        <div className="icons flex-three">
                          <svg
                            width={21}
                            height={16}
                            viewBox="0 0 21 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.1035 15.1797V9.02734"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.1797 12.1035H14.0273"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>12 Person</span>
                        </div>
                      </div>
                      <div className="flex-two">
                        <div className="price-box flex-three">
                          <p>
                            From <span className="price-sale">$169.00</span>
                          </p>
                          <span className="price">$199.00</span>
                        </div>
                        <div className="icon-bookmark">
                          <i className="icon-Vector-151" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 mb-32">
                  <div className="tour-listing box-sd">
                    <Link href="/tour-single" className="tour-listing-image">
                      <div className="badge-top flex-two">
                        <span className="feature">Featured</span>
                        <div className="badge-media flex-five">
                          <span className="media">
                            <i className="icon-Group-1000002909" />5
                          </span>
                          <span className="media">
                            <i className="icon-Group-1000002910" />2
                          </span>
                        </div>
                      </div>
                      <img
                        src="/assets/images/travel-list/24.jpg"
                        alt="Image Listing"
                      />
                    </Link>
                    <div className="tour-listing-content">
                      <span className="map">
                        <i className="icon-Vector4" />
                        United States USA
                      </span>
                      <h3 className="title-tour-list">
                        <Link href="/tour-single">Premium Tour From 214$</Link>
                      </h3>
                      <div className="review">
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <span>(1 Review)</span>
                      </div>
                      <div className="icon-box flex-three">
                        <div className="icons flex-three">
                          <i className="icon-time-left" />
                          <span>5 days</span>
                        </div>
                        <div className="icons flex-three">
                          <svg
                            width={21}
                            height={16}
                            viewBox="0 0 21 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.1035 15.1797V9.02734"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.1797 12.1035H14.0273"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>12 Person</span>
                        </div>
                      </div>
                      <div className="flex-two">
                        <div className="price-box flex-three">
                          <p>
                            From <span className="price-sale">$169.00</span>
                          </p>
                          <span className="price">$199.00</span>
                        </div>
                        <div className="icon-bookmark">
                          <i className="icon-Vector-151" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 mb-32">
                  <div className="tour-listing box-sd">
                    <Link href="/tour-single" className="tour-listing-image">
                      <div className="badge-top flex-two">
                        <span className="feature">Featured</span>
                        <div className="badge-media flex-five">
                          <span className="media">
                            <i className="icon-Group-1000002909" />5
                          </span>
                          <span className="media">
                            <i className="icon-Group-1000002910" />2
                          </span>
                        </div>
                      </div>
                      <img
                        src="/assets/images/travel-list/32.jpg"
                        alt="Image Listing"
                      />
                    </Link>
                    <div className="tour-listing-content">
                      <span className="map">
                        <i className="icon-Vector4" />
                        United States USA
                      </span>
                      <h3 className="title-tour-list">
                        <Link href="/tour-single">Premium Tour From 214$</Link>
                      </h3>
                      <div className="review">
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <span>(1 Review)</span>
                      </div>
                      <div className="icon-box flex-three">
                        <div className="icons flex-three">
                          <i className="icon-time-left" />
                          <span>5 days</span>
                        </div>
                        <div className="icons flex-three">
                          <svg
                            width={21}
                            height={16}
                            viewBox="0 0 21 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.1035 15.1797V9.02734"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.1797 12.1035H14.0273"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>12 Person</span>
                        </div>
                      </div>
                      <div className="flex-two">
                        <div className="price-box flex-three">
                          <p>
                            From <span className="price-sale">$169.00</span>
                          </p>
                          <span className="price">$199.00</span>
                        </div>
                        <div className="icon-bookmark">
                          <i className="icon-Vector-151" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-20">
                <div className="col-md-12 ">
                  <ul className="tf-pagination flex-five">
                    <li>
                      <Link className="pages-link" href="#">
                        {" "}
                        <i className="icon-29" />
                      </Link>
                    </li>
                    <li>
                      <Link className="pages-link" href="#">
                        1
                      </Link>
                    </li>
                    <li className="pages-item active" aria-current="page">
                      <Link className="pages-link" href="#">
                        2
                      </Link>
                    </li>
                    <li>
                      <Link className="pages-link" href="#">
                        3
                      </Link>
                    </li>
                    <li>
                      <Link className="pages-link" href="#">
                        <i className=" icon--1" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* Widget archieve tour */}
          <section className="mb--93">
            <div className="tf-container">
              <div className="callt-to-action flex-two">
                <div className="callt-to-action-content flex-three">
                  <div className="image">
                    <img src="/assets/images/page/ready.png" alt="Image" />
                  </div>
                  <div className="content">
                    <h2 className="title-call">
                      Ready to adventure and enjoy natural
                    </h2>
                    <p className="des">
                      Lorem ipsum dolor sit amet, consectetur notted adipisicin
                    </p>
                  </div>
                </div>
                <img
                  src="/assets/images/page/vector4.png"
                  alt=""
                  className="shape-ab"
                />
                <div className="callt-to-action-button">
                  <Link href="#" className="get-call">
                    Let,s get started
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
