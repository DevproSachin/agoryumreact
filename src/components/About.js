import React from 'react'
import aboutbnr from '../images/about-banner.jpg';
function About(props) {
    return (
        <>

            {/* about banner section  */}
            <section className="about-banner-inner " style={{ backgroundImage: `url(${aboutbnr})` }}>
                <div className="container">
                    <div className="row h-100 ai-row align-items-center">
                        <div className="ai-banner-content">
                            <h1 className="ai-about-banner-heading text-light ai-bold text-center">{props.title}</h1>
                            {/* <p className="text-light breadcrumbs text-center ai-rajdhani-medium">Home/About Us</p> */}
                        </div>

                    </div>
                </div>
            </section>
            {/* below banner */}
            <section className="contact-us ai-pt ai-pb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className="about-right-heading dark-text ai-bold"> <span className="ai-bold">{props.aboutrighttext}</span> {props.aboutrighttext1} </h2>


                        </div>

                        <div className="col-sm-6 text-left">
                            <p className="ai-poppins about-content">{props.aboutdescr} </p>
                            <h3 className="about-content-b-heading dark-text ai-bold"> <span className="ai-bold"> {props.cleartext}</span> {props.cleartxt} </h3>
                        </div>

                    </div>
                </div>
            </section>
            {/* arogyum next project section  */}

            <section className ="arogyum-next-project">
                <div className="container px-5 ai-pt ai-pb">
                    <div className="row">
                        <div className="col-sm-6 col-md-12 col-lg-9">
                            <h2 className="arogyum-head ai-bold"> <span className="ai-bold">ABOUT YOUR </span> NEXT PROJECT.</h2>
                            <p className ="proj-desc ai-poppins">If you would like additional information from an Agoryum Business Consultant contact us.</p>
                        </div>
                        <div className ="col-sm-6 col-md-12 col-lg-3 text-end">
                            <button className ="arogyum-ai-btn ai-btn btn btn-danger my-3 ai-rajdhani-medium">Let's Talk</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* end */}
        </>
    )
}

export default About
