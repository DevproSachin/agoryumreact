import React  from 'react';
import { Link } from 'react-router-dom';
import hero from '../images/home-banner.jpg';
import image from '../images/Group 162.png';
import image1 from '../images/Group 163.png';
import image2 from '../images/Group 164.png';
import image3 from '../images/Group 165.png';
import image4 from '../images/Group 166.png';
import ball from '../images/Group 18.png';
import case0 from '../images/case-1.jpg';
import case1 from '../images/case-2.jpg';
import case2 from '../images/case-3.jpg';
import case3 from '../images/case-4.jpg';
import Slider from "react-slick";
import service from '../images/services-1.jpg';
import grp from '../images/Group 37.png';
import video from '../images/video-bg.jpg';
import client from '../images/clients-1.png';
import client1 from '../images/clients-2.png';
import client2 from '../images/clients-3.png';
import client3 from '../images/clients-4.png';
import client4 from '../images/clients-5.png';
import client5 from '../images/clients-6.png';
import client6 from '../images/clients-7.png';
import client7 from '../images/clients-8.png';
import clientbck from '../images/Group-167.jpg';
import clientprofile from '../images/client-profile-1.png';
import { dataslide } from '../data';
function Home() {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
    
        <>
                 
            <section className="ai-banner  d-sm-block d-some-none d-md-block" style={{ backgroundImage: `url(${hero})` }}>
                <div className="container">
                    <div className="row ai-row align-items-center">
                        <div className="ai-banner-content">
                            <h1 className="text-light ai-bold ">
                                <span className="ai-bold letters">Technology</span>
                                <span className="ai-bold letters ">Business </span>
                                <span className="ai-bold letters ">Solutions </span>
                            </h1>
                            <p className="text-light banner-text">to your Routine & Complex Business Challenges</p>
                            <button className="ai-btn ai-banner-btn btn btn-danger mt-4 ai-rajdhani-medium">Get Started</button>
                        </div>
                        <div className="ai-banner-social">
                            <ul className="list-group list-group-horizontal list-unstyled">
                                <li><Link className="border border-2 rounded-circle text-light ai-social-icon" to="/contact"><i className="fa fa-linkedin text-light"></i></Link></li>
                                <li><Link className="border border-2 rounded-circle text-light ai-social-icon" to="/about"><i className="fa fa-facebook"></i></Link></li>
                                <li><Link className="border border-2 rounded-circle text-light ai-social-icon" to="/contact"><i className="fa fa-twitter text-light"></i></Link></li>
                            </ul>
                        </div>
                        {/* <div className="ai-banner-bottom-icon text-center">
                        <ul className="list-unstyled">
                            <li><a href="/" className="ai-mouse-icon text-light text-decoration-none ai-bold"><i className="fa fa-circle" aria-hidden="true"></i></a></li>
                            <li className="pt-2"><a href="/" className="text-light"><i className="fa fa-chevron-down" aria-hidden="true"></i></a></li>
                        </ul>
                    </div> */}
                    </div>
                </div>
            </section>

            <section className="ai-icon-box  d-sm-block d-some-none d-md-block">
                <div className="container-fluid text-light">
                    <div className="row pt-4 pb-4">
                        <div className="col col-6 col-sm-4 col-md-4 col-lg p-3 d-flex align-items-center ps-4 pe-0">
                            <img className="me-3" src={image} alt="" width="40" height="40" />
                            <div className="d-inline-block">
                                <h3 className="m-0 ai-icon-heading">UI/UX</h3>
                                <p className="m-0 ai-icon-content ai-poppins">focused on improving a user</p>
                            </div>
                        </div>
                        <div className="col col-6 col-sm-4 col-md-4 col-lg p-3 d-flex align-items-center ps-4 pe-0">
                            <img className="me-3" src={image1} alt="" width="40" height="40" />
                            <div className="d-inline-block">
                                <h3 className="m-0 ai-icon-heading">IoT</h3>
                                <p className="m-0 ai-icon-content ai-poppins">Harness the power of IoT</p>
                            </div>
                        </div>
                        <div className="col col-6 col-sm-4 col-md-4 col-lg p-3 d-flex align-items-center ps-4 pe-0">
                            <img className="me-3" src={image2} alt="" width="40" height="40" />
                            <div className="d-inline-block">
                                <h3 className="m-0 ai-icon-heading">Core Engineering</h3>
                                <p className="m-0 ai-icon-content ai-poppins">Software development life cycle</p>
                            </div>
                        </div>
                        <div className="col col-6 col-sm-4 col-md-4 col-lg p-3 d-flex align-items-center ps-4 pe-0">
                            <img className="me-3" src={image3} alt="" width="40" height="40" />
                            <div className="d-inline-block">
                                <h3 className="m-0 ai-icon-heading">DevOps</h3>
                                <p className="m-0 ai-icon-content ai-poppins">Get more from your DevOps</p>
                            </div>
                        </div>
                        <div className="col col-6 col-sm-4 col-md-4 col-lg p-3 d-flex align-items-center ps-4 pe-0">
                            <img className="me-3" src={image4} alt="" width="40" height="40" />
                            <div className="d-inline-block">
                                <h3 className="m-0 ai-icon-heading">Security</h3>
                                <p className="m-0 ai-icon-content ai-poppins">focused on improving a user</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case studies */}

            <section id="case-studies" className="ai-pt ai-pb ai-card-section d-none d-sm-block d-sm-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div>
                            <img className="ai-object-img" src={ball} alt="" height="100%" width="50px" />
                        </div>
                        <h2 className="ai-heading mt-3 mb-5"><span className="ai-heading-d">Case</span> Studies</h2>
                    </div>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col pe-0">
                            <div className="card h-100 ai-card">
                                <a href="/" target="_blank"><img src={case0} className="card-img-top" alt="..." /></a>
                                <div className="card-body text-center">
                                    <h5 className="card-title ai-card-title">Cloud <span>Migration</span></h5>
                                </div>
                                <div className="card-body ai-card-btn-body">
                                    <a href="/" className="ai-btn ai-card-btn btn btn-danger card-link text-uppercase">READ MORE</a>
                                    <a href="/" className="ai-btn ai-card-btn btn btn-secondary card-link text-uppercase">CONTACT US</a>
                                </div>
                            </div>
                        </div>
                        <div className="col pe-0">
                            <div className="card h-100 ai-card">
                                <a href="/" target="_blank">  <img src={case1} className="card-img-top" alt="..." /></a>
                                <div className="card-body text-center">
                                    <h5 className="card-title ai-card-title">Website <span>Development</span></h5>
                                </div>
                                <div className="card-body ai-card-btn-body">
                                    <a href="/" className="ai-btn ai-card-btn btn btn-danger card-link text-uppercase">READ MORE</a>
                                    <a href="/" className="ai-btn ai-card-btn btn btn-secondary card-link text-uppercase">CONTACT US</a>
                                </div>
                            </div>
                        </div>
                        <div className="col pe-0">
                            <div className="card h-100 ai-card">
                                <a href="/" target="_blank">   <img src={case2} className="card-img-top" alt="..." /></a>
                                <div className="card-body text-center">
                                    <h5 className="card-title ai-card-title">Application <span>Code Review</span></h5>
                                </div>
                                <div className="card-body ai-card-btn-body">
                                    <a href="/" className="ai-btn ai-card-btn btn btn-danger card-link text-uppercase">READ MORE</a>
                                    <a href="contact.html" className="ai-btn ai-card-btn btn btn-secondary card-link text-uppercase">CONTACT US</a>
                                </div>
                            </div>
                        </div>
                        <div className="col pe-0">
                            <div className="card h-100 ai-card">
                                <a href="/" target="_blank"> <img src={case3} className="card-img-top" alt="..." /></a>
                                <div className="card-body text-center">
                                    <h5 className="card-title ai-card-title">Application <span>Development</span></h5>
                                </div>
                                <div className="card-body ai-card-btn-body">
                                    <a href="/" className="ai-btn ai-card-btn btn btn-danger card-link text-uppercase">READ MORE</a>
                                    <a href="/" className="ai-btn ai-card-btn btn btn-secondary card-link text-uppercase">CONTACT US</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* client section  */}
            <section className="ai-client-section ai-pt" style={{ backgroundImage: `url(${clientbck})` }}>
                <div className="container text-light">
                    <div className="row">
                        <div className="col-sm-6">
                            <h5 className="text-uppercase ai-client-sub-heading">clients</h5>
                            <h2 className="text-capitalize ai-cleint-heading ai-rajdhani-medium"><span className="ai-heading-d">Our</span> clients</h2>
                            <div className="row text-center">
                                <div className="col-6 col-sm-6 col-md-6 col-lg-3 p-3">
                                    <img src={client} alt="" />
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-3 p-3">
                                    <img src={client1} alt="" />
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-3 p-3">
                                    <img src={client2} alt="" />
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-3 p-3">
                                    <img src={client3} alt="" />
                                </div>
                            </div>
                            <div className="row pb-5 text-center">
                                <div className="col-6 col-sm-6 col-md-6 col-lg-3 p-3">
                                    <img src={client4} alt="" />
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-3 p-3">
                                    <img src={client5} alt="" />
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-3 p-3">
                                    <img src={client6} alt="" />
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-3 p-3">
                                    <img src={client7} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-10 col-lg-9 col-xl-8 testimonials-col-mb">
                                    <div className="ai-client-testimonials-card card card-main border-0">
                                        <h5 className="ai-testimonial-sub-heading ai-rajdhani-medium">OUR HAPPY CLIENTS</h5>
                                        <h2 className="ai-testimonial-heading ai-bold pb-3">What Client's Say?</h2>
                                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                            <div className="carousel-indicators ai-carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active ai-slide-label link-light bg-light" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="ai-slide-label link-light bg-light" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="ai-slide-label link-light bg-light" aria-label="Slide 3"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="card border-0 card-0">
                                                        <p className="ai-testimonials-content ai-poppins-light">From start to finish, our project was handled above our expectations. The Team at Agoryum understood our goals, walked us through the process and showed us where we could go. For us, there has been no better clarity and focus provided by any development team.</p>
                                                        <hr />
                                                        <div className="d-inline-block pt-3">
                                                            <img className="ai-object-img" src={clientprofile} alt="" height="100%" width="70px" />
                                                            <p className="d-inline-block client-name">Cliff H.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="card border-0 card-0">
                                                        <p className="ai-testimonials-content ai-poppins-light">From start to finish, our project was handled above our expectations. The Team at Agoryum understood our goals, walked us through the process and showed us where we could go. For us, there has been no better clarity and focus provided by any development team.</p>
                                                        <hr />
                                                        <div className="d-inline-block pt-3">
                                                            <img className="ai-object-img" src={clientprofile} alt="" height="100%" width="70px" />
                                                            <p className="d-inline-block client-name">Cliff H.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="card border-0 card-0">
                                                        <p className="ai-testimonials-content ai-poppins-light">From start to finish, our project was handled above our expectations. The Team at Agoryum understood our goals, walked us through the process and showed us where we could go. For us, there has been no better clarity and focus provided by any development team.</p>
                                                        <hr />
                                                        <div className="d-inline-block pt-3">
                                                            <img className="ai-object-img" src={clientprofile} alt="" height="100%" width="70px" />
                                                            <p className="d-inline-block client-name">Cliff H.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end client */}

            {/* slider our services */}
            <section className="sliid pt-5 pb-5">
                <div className="container">
                    <div className="row ai-text-center">
                        <div>
                            <img className="ai-object-img ai-icon-heading-icon" src={ball} alt="" height="100%" width="50px" />
                        </div>
                        <h2 className="ai-heading ai-mob-heading mt-3 mb-5"><span className="ai-heading-d">Our </span>Services</h2>
                    </div>
                    <Slider {...settings} >
                        {dataslide.map((item) => (
                            <div className='c'>
                                <div className="ai-card-slider ai-card-slider-bg-1 mx-3" style={{ backgroundImage: `url(${service})` }}> 
                                    <div className="ai-box-height"></div>
                                    <div className="card-body p-4">
                                        <h5 className="card-title ai-card-title text-light ai-slick-heading ai-rajdhani-medium"><br />{item.cardtitle}</h5>
                                        <p className="card-text ai-card-text text-light ai-poppins">{item.cardtext}</p>
                                    </div>
                                    <div className="card-body ai-card-btn-body p-4">
                                        <a href="/" className="ai-slick-btn ai-btn ai-card-btn btn btn-danger card-link text-uppercase">{item.btn1}</a>
                                        <a href="/" className="ai-slick-btn ai-btn ai-card-btn btn btn-secondary card-link text-uppercase">{item.btn2}</a>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </Slider>
                </div>
            </section>

            {/* <!--video-section --> */}
            <section className="ai-video-section ai-pt ai-pb" style={{ backgroundImage: `url(${video})` }}>
                <div className="container text-center text-light pt-5 pb-5">
                    <div className="row">
                        <h2 className="text-uppercase ai-video-heading ai-bold pb-4 m-0">THOUGHTS, BELIEFS AND THE FUTURE</h2>
                        <div>
                            <a className="" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                <img src={grp} alt="video-icon" width="100px" />
                            </a>
                        </div>
                        <p className="ai-poppins text-uppercase ai-video-content pt-4">Digital transformation: are you ready for exponential change?</p>
                    </div>
                </div>
            </section>
            {/* Popup  */}
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-fullscreen-sm-down ai-video-popup">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title ai-popup-heading ai-bold" id="exampleModalToggleLabel">THOUGHTS, BELIEFS AND THE FUTURE</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <iframe width="100%" height="500px" src="https://www.youtube.com/embed/ystdF6jN7hc" title="YouTube video player" frameBorder="0" allow="" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="ai-btn btn btn-danger ai-rajdhani-medium" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Digital Skills</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-fullscreen-sm-down ai-video-popup">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title ai-popup-heading ai-bold" id="exampleModalToggleLabel2">THOUGHTS, BELIEFS AND THE FUTURE</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <iframe id="modal-video" width="100%" height="500px" src="https://www.youtube.com/embed/Y9FOyoS3Fag" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="ai-btn btn btn-danger ai-rajdhani-medium" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Digital Transformation</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Popup End--> */}
            {/* arogyum next project section  */}

            <section className="arogyum-next-project">
                <div className="container p-5 pt-5 pb-5">
                    <div className="row">
                        <div className="col-sm-6 col-md-12 col-lg-9">
                            <h2 className="arogyum-head ai-bold"> <span className="ai-bold">ABOUT YOUR </span> NEXT PROJECT.</h2>
                            <p className="proj-desc ai-poppins">If you would like additional information from an Agoryum Business Consultant contact us.</p>
                        </div>
                        <div className="col-sm-6 col-md-12 col-lg-3 text-end">
                            <button className="arogyum-ai-btn ai-btn btn btn-danger my-3 ai-rajdhani-medium">Let's Talk</button>
                        </div>
                    </div>
                </div>
            </section>

           
        </>
    )
}

export default Home

