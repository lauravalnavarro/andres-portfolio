import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./References.css";
import laura from "../../../src/assets/References-img/Laura.jpg";
import nestor from "../../../src/assets/References-img/Nestor.jpg";
import liliana from "../../../src/assets/References-img/Liliana.jpg";
import shape from "../../../src/assets/References-img/shape-bg.png";

export default function References(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
      const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        },
      };
    
      return (
        <div>
          <ScreenHeading
            title={"References"}
            subHeading={"What My Friends Say About Me"}
          />
          <section className="testimonial-section" id={props.id || ""}>
            <div className="container">
              <div className="row">
                <OwlCarousel
                  className="owl-carousel"
                  id="testimonial-carousel"
                  {...options}
                >
                                      <div className="col-lg-12">
                    <div className="testi-item">
                      <div className="testi-comment">
                        <p>
                          <i className="fa fa-quote-left" />
                          I have always been amazed by his ability to respond to his obligations in high-pressure situations. I dont say it just because I am his mother.
                          <i className="fa fa-quote-right" />
                        </p>
                        <ul className="stars list-unstyled">
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star-half-alt" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                        </ul>
                      </div>
                      <div className="client-info">
                        <img src={liliana} alt="no internet connection"></img>
                        <h5>Liliana</h5>
                        <p>Mother</p>
                        <span>cel: +57 313 6417690</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="testi-item">
                      <div className="testi-comment">
                        <p>
                          <i className="fa fa-quote-left" />
                          I found Andres to be very kind and respectful. The work was completed according to my expectations. He was very efficient and communicative. Highly recommend and look forward to our next project with him!
                          <i className="fa fa-quote-right" />
                        </p>
                        <ul className="stars list-unstyled">
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star-half-alt" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                        </ul>
                      </div>
                      <div className="client-info">
                        <img src={laura} alt="no internet connection"></img>
                        <h5>Laura</h5>
                        <p>CEO Diana Country</p>
                        <span>cel: +57 300 7365769</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="testi-item">
                      <div className="testi-comment">
                        <p>
                          <i className="fa fa-quote-left" />
                          Demonstrated a great sense of responsibility and above all punctuality in the delivery of the project. I highly recommend his work
                          <i className="fa fa-quote-right" />
                        </p>
                        <ul className="stars list-unstyled">
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star-half-alt" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                        </ul>
                      </div>
                      <div className="client-info">
                        <img src={nestor} alt="no internet connection"></img>
                        <h5>Nestor</h5>
                        <p>Freelance photographer</p>
                        <span>cel: +57 319 2775909</span>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </section>
          <div className="footer-image">
            <img src={shape} alt="image not responding" />
          </div>
        </div>
      );
    }