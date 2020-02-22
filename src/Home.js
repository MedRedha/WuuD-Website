import React from 'react';
import Typing from 'react-typing-animation';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Features from './components/Features';
import Descriptions from './components/Descriptions';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Process from './components/Process';
import Testi from './components/Testi';
import Started from './components/Started';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import Blog from './components/Blog';
import Switcher from './components/Switcher';
import { Link } from 'react-router-dom';
import Aux from './hoc/Aux_';
import StarfieldAnimation from 'react-starfield-animation';

class Home extends React.Component {
  render() {
    var bkg1 = {
      backgroundImage: 'url(images/wave-shape/wave1.png)'
    };
    var bkg2 = {
      backgroundImage: 'url(images/wave-shape/wave2.png)'
    };
    var bkg3 = {
      backgroundImage: 'url(images/wave-shape/wave3.png)'
    };

    return (
      <Aux>
        {/* Navbar Component*/}
        <Navbar />
        <div bg-home>
          <StarfieldAnimation
            numParticles={300}
            depth={1}
            style={{
              position: 'fixed',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
        <section className="section bg-home home-half" id="home">
          <div className="bg-overlay"></div>
          <div className="custom-title">
            <Typing loop="true" speed={10}>
              <h1 className="home-title">Just imagine it...</h1>
              <Typing.Backspace count={24} delay={600} speed={10} />
              <h1 className="home-title">We'll code it for you</h1>
              <Typing.Backspace count={24} delay={600} speed={10} />
              <Typing.Reset />
            </Typing>
          </div>
          <div className="display-table">
            <div className="display-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-white text-center">
                    <p className="padding-t-15 home-desc">
                      You have the next great idea & we have the best developers
                      to bring it to life.
                    </p>
                    <p className="play-shadow margin-t-30 margin-l-r-auto">
                      {' '}
                      <Link
                        to="http://vimeo.com/99025203"
                        className="play-btn video-play-icon"
                      >
                        <i className="mdi mdi-play text-center"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wave-effect wave-anim">
            <div className="waves-shape shape-one">
              <div className="wave wave-one" style={bkg1}></div>
            </div>
            <div className="waves-shape shape-two">
              <div className="wave wave-two" style={bkg2}></div>
            </div>
            <div className="waves-shape shape-three">
              <div className="wave wave-three" style={bkg3}></div>
            </div>
          </div>
        </section>

        {/* Services Component*/}
        <Services />

        {/* Features Component*/}
        <Features />

        {/* Descriptions Component*/}
        <Descriptions />

        {/* Pricing Component*/}
        <Pricing />

        {/* Team Component*/}
        <Team />

        {/* Process Component*/}
        <Process />

        {/* Testi Component*/}
        <Testi />

        {/* Started Component*/}
        <Started />

        {/* Blog Component*/}
        <Blog />

        {/* Contact Component*/}
        <Contact />

        {/* SocialMedia Component*/}
        <SocialMedia />

        {/* Footer Component*/}
        <Footer />

        {/* FooterLinks Component*/}
        <FooterLinks />

        {/* Switcher Component*/}
        <Switcher />
      </Aux>
    );
  }
}

export default Home;
