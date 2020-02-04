import React from 'react';

class Testi extends React.Component {
  render() {
  	return (
         <section className="section" id="testi">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">What they've said</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center font-secondary padding-t-30">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
                    </div>
                </div>
                <div className="row margin-t-50">
                    <div className="col-lg-4">
                        <div className="testimonial-box hover-effect margin-t-30">
                            <img src="images/testimonials/user-2.jpg" alt="" className="img-fluid d-block img-thumbnail rounded-circle" />
                            <div className="testimonial-decs">
                                <p className="text-muted text-center mb-0">“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I need to throw curve balls.” </p>
                            </div>
                            <h5 className="text-center text-uppercase padding-t-15">Ruben Reed - <span className="text-muted text-capitalize">Charleston</span></h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-box hover-effect margin-t-30">
                            <img src="images/testimonials/user-1.jpg" alt="" className="img-fluid d-block img-thumbnail rounded-circle" />
                            <div className="testimonial-decs">
                                <p className="text-muted text-center mb-0">“Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.” </p>
                            </div>
                            <h5 className="text-center text-uppercase padding-t-15">Michael P. Howlett - <span className="text-muted text-capitalize">Worcester</span></h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-box hover-effect margin-t-30">
                            <img src="images/testimonials/user-3.jpg" alt="" className="img-fluid d-block img-thumbnail rounded-circle" />
                            <div className="testimonial-decs">
                                <p className="text-muted text-center mb-0">“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” </p>
                            </div>
                            <h5 className="text-center text-uppercase padding-t-15">Theresa D. Sinclair - <span className="text-muted text-capitalize">Lynchburg</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default Testi;