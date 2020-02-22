import React from 'react';

class Services extends React.Component {
  render() {
    return (
      <section className="section pt-5" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">Our Services</h1>
              <div className="section-title-border margin-t-20"></div>
              <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">
                Got an app idea? Let’s make your dream app a reality together.
                Since the company’s inception, we’ve had an affair with
                creativity which compels us to strive harder! The key to our
                success is dedication and responsibility to deliver world-class
                mobile apps. Striving for excellence motivates us to deliver
                exactly what our clients want. Bolstered by a passionate team,
                we offer concrete web & mobile solutions within the budget and
                as per the timelines. Give us a chance and we’ll help broaden
                your horizon to reach new heights!
              </p>
            </div>
          </div>
          <div className="row margin-t-30">
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-phone text-custom"></i>
                <h4 className="padding-t-15">Mobile App Development</h4>
                <p className="padding-t-15 text-muted">
                  We deliver an exquisite experience with either powerful,
                  beautiful & cross-platform mobile apps. React Native or
                  Flutter? We'll choose the best paltform for your business.
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-monitor text-custom"></i>
                <h4 className="padding-t-15">Website Development</h4>
                <p className="padding-t-15 text-muted">
                  Nothing better than a Web application to boost your idea.
                  Stability, responsiveness and premium designs are the
                  trademarks of your Web Development.
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-graph2 text-custom"></i>
                <h4 className="padding-t-15">Strategy Solutions</h4>
                <p className="padding-t-15 text-muted">
                  From your MVP to deployment, let us write your story with the
                  best roadmap to success.
                </p>
              </div>
            </div>
          </div>
          <div className="row margin-t-30">
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-like text-custom"></i>
                <h4 className="padding-t-15">Web & Graphics Design</h4>
                <p className="padding-t-15 text-muted">
                  Design should win hearts at a glance. Create designs with us
                  that emphasize your content and the artwork for the maximum
                  impression.
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-mouse text-custom"></i>
                <h4 className="padding-t-15">Digital Marketing</h4>
                <p className="padding-t-15 text-muted">
                  Go digital! Increase conversions, bring home more traffic and
                  generate amazing brand loyalty online.
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-shopbag text-custom"></i>
                <h4 className="padding-t-15">E-Commerce App Development </h4>
                <p className="padding-t-15 text-muted">
                  Scale your websites and applications to reach more people with
                  quality e-commerce solutions developed by us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Services;
