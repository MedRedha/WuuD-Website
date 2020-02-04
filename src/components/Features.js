import React from 'react';
import { Link } from 'react-router-dom';

class Features extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="features">
        <div className="container">
            <div className="row vertical-content">
                <div className="col-lg-5">
                    <div className="features-box">
                        <h3>A digital web design studio creating modern & engaging online experiences</h3>
                        <p className="text-muted web-desc">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                            <li className="">We put a lot of effort in design.</li>
                            <li className="">The most important ingredient of successful website.</li>
                            <li className="">Sed ut perspiciatis unde omnis iste natus error sit.</li>
                            <li className="">Submit Your Orgnization.</li>
                        </ul>
                        <Link to="JavaScript:Void(0);" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="features-img features-right text-right">
                        <img src="images/online-world.svg" alt="macbook image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Features;