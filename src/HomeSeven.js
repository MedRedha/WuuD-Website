import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Features from './components/Features';
import Descriptions from './components/Descriptions';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Process from './components/Process';
import Testi from './components/Testi';
import Started from './components/Started';
import Blog from './components/Blog';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import Switcher from './components/Switcher';
import { Link } from 'react-router-dom';
import Aux from './hoc/Aux_';

class HomeSeven extends React.Component {
  render() {

    var bkg1 = {
        backgroundImage: 'url(images/img-1.jpg)',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
      };
 
  	return (
        <Aux>
                {/* Navbar Component*/}
                <Navbar />

                <section className="section section-lg height-100vh" id="home"  style={bkg1} >
                    <div className="bg-overlay"></div>
                        <div className="display-table">
                            <div className="display-table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-2 text-white text-center">
                                            <h1 className="home-title text-rotate">Professional Landing Page Template,We help startups launch their products,Perfect solution for small businesses</h1>
                                            <p className="padding-t-15 home-desc">Etiam sed.Interdum consequat proin vestibulum className at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
                                            <p className="play-shadow margin-t-30 margin-l-r-auto"> <Link to="http://vimeo.com/99025203"  className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i></Link></p>   
                                        </div>
                                    </div>
                                </div>
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

export default HomeSeven;