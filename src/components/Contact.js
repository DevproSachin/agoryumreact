import React from 'react'
import { Link } from 'react-router-dom';
import contactbnr from '../images/contact-banner.jpg';
function Contact() {
  return (
    <>
         {/* Banner */}
         <section className="contact-banner-inner" style={{backgroundImage:`url(${contactbnr})`}}>
            <div className="container">
                <div className="row ai-row align-items-center">
                    <div className="ai-banner-content">
                        <h1 className="ai-about-banner-heading text-light ai-bold text-center">Contact Us</h1>
                        {/* <!--<p className="text-light breadcrumbs text-center ai-rajdhani-medium">Home/Contact Us</p>--> */}
                    </div>

                </div>
            </div>
        </section>
      {/* contact form  */}
      <section className="contact-us ai-pt ai-pb">
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <h2 className="dark-text ai-bold ai-contact-heading pb-5"> <span className="ai-bold">Ask us</span> Anything.  </h2>
                        <form className="row g-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control rajdhani-semibold ps-0" id="inputtext4" placeholder="Your name"/>
                            </div>
                            <div className="col-md-6">
                                <input type="tel" className="form-control rajdhani-semibold ps-0" id="email4" placeholder="Telephone" />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control rajdhani-semibold ps-0" id="inputtext4" placeholder="Your email"/>
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control rajdhani-semibold ps-0" id="email4" placeholder="Company" />
                            </div>
                            <div className="col-md-12">
                                <select id="inputState" className="form-select my-3 rajdhani-semibold ps-0">
                                    <option selected className="rajdhani-semibold">Services</option>
                                    <option className="rajdhani-semibold">1</option>
                                    <option className="rajdhani-semibold">2</option>
                                    <option className="rajdhani-semibold">3</option>
                                </select>
                            </div>
                            <div className="mb-3 ai-poppins">
                                <textarea className="form-control rajdhani-semibold ps-0" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
                            </div>

                            <div className="col-12 text-end">
                                <button type="submit" className="ai-form-submit ai-btn btn btn-danger btn-lg ai-rajdhani-medium">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-5 ai-contact-info">
                        <h2 className="dark-text ai-bold ai-contact-heading pb-4"> <span className="ai-bold">Contact</span> Information.  </h2>
                        <h5 className="text-dark text-left fw-bold pt-3 rajdhani-semibold"> LET'S TALK. </h5>
                        <p className="rajdhani-semibold contact-email"> Email:- mail@agoryum.com</p>
                        <p className="rajdhani-semibold contact-phone">Phone:- (888) 288.1214</p>
                        <h5 className="fw-bold rajdhani-semibold py-3"> Follow us </h5>
                        <div className="ai-banner-social-contact">
                            <ul className="list-group list-group-horizontal list-unstyled">
                                <li><Link className="border border-2 rounded-circle text-dark ai-social-icon" to="/"><i className="fa fa-linkedin "></i></Link></li>
                                <li><Link className="border border-2 rounded-circle text-dark ai-social-icon" to="/"><i className="fa fa-facebook"></i></Link></li>
                                <li><Link className="border border-2 rounded-circle text-dark ai-social-icon" to="/"><i className="fa fa-twitter "></i></Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Contact
