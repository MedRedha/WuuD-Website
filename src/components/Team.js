import React from 'react';

class Team extends React.Component {
  render() {
    return (
      <section className="section pt-4" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">Meet the team</h1>
              <div className="section-title-border margin-t-20"></div>
              <p className="section-subtitle text-muted text-center font-secondary padding-t-30">
                Our team is flexible and adaptable from head to toes. We can
                deliver and scale up on demand. Working in constant
                collaboration so that knowledge-transfer is built right in.
              </p>
            </div>
          </div>
          <div className="row margin-t-50 padding-t-32">
            <div className="col-lg-3 col-sm-6">
              <div className="team-box text-center hover-effect">
                <div className="team-wrapper">
                  <div className="team-member">
                    <img
                      alt=""
                      src="images/team/img-1.jpg"
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <h4 className="team-name">Mohamed Badjah</h4>
                <p className="text-uppercase team-designation">
                  Backend Lead Developer
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="team-box text-center hover-effect">
                <div className="team-wrapper">
                  <div className="team-member">
                    <img
                      alt=""
                      src="images/team/img-2.jpg"
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <h4 className="team-name">Nassim Amokrane</h4>
                <p className="text-uppercase team-designation">
                  Web Lead Developer
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="team-box text-center hover-effect">
                <div className="team-wrapper">
                  <div className="team-member">
                    <img
                      alt=""
                      src="images/team/img-3.jpg"
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <h4 className="team-name">Med Redha Khelifi</h4>
                <p className="text-uppercase team-designation">
                  Mobile Lead Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Team;
