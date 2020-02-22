/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
  'images/online-world.svg',
  'images/uxuiDesign.png',
  'images/mobile-app-development.png',
  'images/appdevelopment.png'
];

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  arrows: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
};

// const zoomOutProperties = {
//   duration: 3000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   scale: 0.9,
//   arrows: true
// };

class Features extends React.Component {
  render() {
    return (
      <section className="section bg-light" id="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">Our Features</h1>
              <div className="section-title-border margin-t-20"></div>
            </div>
          </div>
          <div className="row vertical-content">
            <div className="col-lg-5">
              <div className="features-box">
                <h3>
                  Signup today and get a <u>FREE</u> app consultation!
                </h3>
                <p className="text-muted web-desc">
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia.
                </p>
                <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                  <li className="">
                    Free 40 minute consultation for your project.
                  </li>
                  <li className="">
                    We are the CTO and Product Manager for your product.
                  </li>
                  <li className="">
                    100% Confidential Consultation including a signed NDA!
                  </li>
                  <li className="">
                    Detailed Documentation and Analysis of your project.
                  </li>
                  <li className="">SUPER quick kick start to your project.</li>
                  <li className="">
                    We always deliver the source code with the project.
                  </li>
                </ul>
                <Link
                  to="SignUp"
                  className="btn btn-custom margin-t-30 waves-effect waves-light"
                >
                  Jump in <i className="mdi mdi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="features-img features-right text-right">
                <div className="slide-container">
                  <Fade {...fadeProperties}>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src={fadeImages[0]} />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src={fadeImages[1]} />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src={fadeImages[2]} />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src={fadeImages[3]} />
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Features;
