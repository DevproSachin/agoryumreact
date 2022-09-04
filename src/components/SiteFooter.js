import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import footerimg from '../images/footer.jpg';
function SiteFooter() {
  return (
    <>
          {/* footer  */}

          <footer className="footer ai-pt" style={{ backgroundImage: `url(${footerimg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                        </div>
                        <div className="col-sm-6 text-center">
                            <div className=" card-footer mb-3 pt-5" >
                                <div className="card-headers bg-transparent"><Link to="/"><img src={logo} alt="" /></Link></div>
                                <div className="card-body">
                                    <p className="card-text pt-3 pb-3 ai-poppins">At our core is a philosophy of service to our clients with the highest level of honesty and integrity 100%... all the time.</p>
                                    <div className="ai-banner-social-footer">
                                        <ul className="list-group list-group-horizontal list-unstyled justify-content-center">
                                            <li><Link className=" text-center text-light ai-social-icon" to="/"><i className="fa fa-linkedin text-light"></i></Link></li>
                                            <li><Link className="text-center text-light ai-social-icon" to="/"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link className=" text-center text-light ai-social-icon" to="/"><i className="fa fa-twitter text-light"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-3 text-center">
                        </div>
                    </div>
                    <div className="row footer-center">
                        <div className="col-sm-6">
                            <h5 className="text-left text-white  text-uppercase footer-widgets ai-rajdhani-medium">Help </h5>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-inline-item text-white"><Link to="/" className="text-white text-decoration-none ai-poppins ai-footer-link">Contact us</Link></li>
                                <li className="list-inline-item"><Link to="/" className="text-white text-decoration-none ai-poppins ai-footer-link">Services</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <h5 className="text-left text-white text-uppercase footer-widgets ai-rajdhani-medium">Case studies </h5>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-inline-item text-white"><Link to="/" className="text-white text-decoration-none ai-poppins ai-footer-link">Cloud Migration</Link></li>
                                <li className="list-inline-item"><Link to="/" className="text-white text-decoration-none ai-poppins ai-footer-link">Website Development</Link></li>
                                <li className="list-inline-item"><Link to="/" className="text-white text-decoration-none ai-poppins ai-footer-link">Code Review</Link></li>
                                <li className="list-inline-item"><Link to="/" className="text-white text-decoration-none ai-poppins ai-footer-link">Application Development</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row bottom-footer">
                        <div className="col-sm-12 text-center pt-4 px-0">
                            <p className="m-0 text-white py-4 ai-poppins">© 2021 Agoryum Ventures, LLC All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
    </>
  )
}

export default SiteFooter
