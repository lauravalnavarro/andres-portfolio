import React, { useEffect, useState } from "react";
import imgBack from "../../../src/assets/ContactMe/contact.png";
import load1  from "../../../src/assets/ContactMe/load2.gif";
import axios from "axios";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import { toast } from "react-toastify";
import "./ContactMe.css";
import Footer from "../Footer/Footer";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Typical from "react-typical";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const ContactMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = {
        name,
        email,
        message,
      };

      setBool(true);

      const res = await axios.post(`/contact`, data);

      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading
        subHeading={"Let's Keep In Touch"}
        title={props.screenName ? props.screenName : ""}
      />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
        

                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Get In Touch 📧", 
                    3000,
                  ]}
                />
            
        </h2>
        <a href= 'https://www.facebook.com/andres.f.rodriguezagudelo'>
          <FacebookIcon className="colz-icon-facebook"/> 
          </a>
          <a href= 'https://www.instagram.com/afr.rorro'>
          <InstagramIcon className="colz-icon-instagram"/>
          </a>
          <a href= 'https://www.linkedin.com/in/And-Rod'>
          <LinkedInIcon className="colz-icon-linkeding"/>
          </a>
        </div>

        <div className="back-form">
          <div className="img-back">
            <h4>Send your message</h4>
            <img src={imgBack} alt="" />
          </div>
          <form onSubmit={formSubmit}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              onChange={handleMessage}
              value={message}
              name="message"
            />

            <div className="send-btn">
              <button type="submit">
                Send <i className="fa fa-paper-plane"></i>
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="load1" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
        <button className="btn highlighted-btn" onClick={() => ScrollService.scrollHandler.scrollToHome()}>{""}Up{" "}</button>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;