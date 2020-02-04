import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
  	return (
         <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 margin-t-20">
                        <h4>DORSIN</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><Link to="JavaScript:Void(0);">Home</Link></li>
                                <li><Link to="JavaScript:Void(0);">About us</Link></li>
                                <li><Link to="JavaScript:Void(0);">Careers</Link></li>
                                <li><Link to="JavaScript:Void(0);">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Information</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><Link to="JavaScript:Void(0);">Terms & Condition</Link></li>
                                <li><Link to="JavaScript:Void(0);">About us</Link></li>
                                <li><Link to="JavaScript:Void(0);">Jobs</Link></li>
                                <li><Link to="JavaScript:Void(0);">Bookmarks</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Support</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><Link to="JavaScript:Void(0);">FAQ</Link></li>
                                <li><Link to="JavaScript:Void(0);">Contact</Link></li>
                                <li><Link to="JavaScript:Void(0);">Disscusion</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Subscribe</h4>
                        <div className="text-muted margin-t-20">
                            <p>In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>
                        </div>
                        <form className="form subscribe">
                            <input placeholder="Email" className="form-control" required />
                            <Link to="JavaScript:Void(0);" className="submit"><i className="pe-7s-paper-plane"></i></Link>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
  	);
  }
}
export default Footer;