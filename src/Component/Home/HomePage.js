import React, { useEffect, useRef, useState } from "react";
import "./HomePage.scss";
import sliderData from "./HomePage-Data";
import Home_Page from "./HomePage.module.scss";
import google from "../../Assets/Images/google.svg";
import SignUp_png from "../../Assets/Images/signUp.png";
import main_logo from "../../Assets/Images/css3.svg";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineStar,
} from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Rate } from "antd";

function HomePage(props, history) {
  const stars = sliderData.map((i, index) => i.rating);
  console.log(stars);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 4000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log(currentSlide);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let numbers = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= numbers ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  const listItems = sliderData.map((i, index) => (
    <div
      className={index === currentSlide ? "slide current" : "slide"}
      key={i.id}
    >
      {index === currentSlide && (
        <>
          <div className={Home_Page.image_div}>
            <img
              src={require("../../Assets/Images/" + i.image + ".jpg")}
              alt={i.Tilte}
              className={Home_Page.main_image}
            />
          </div>
          <div className={Home_Page.content}>
            <div className={Home_Page.desc}>{i.Desc}</div>
            <div className={Home_Page.bottom_content}>
              <div className={Home_Page.left_content}>
                <div className={Home_Page.name_rating}>
                  <div className={Home_Page.developer_name}>
                    {i.Developer_name}
                  </div>
                  {/* <Rate defaultValue={Home_Page.rating} allowHalf></Rate> */}
                </div>
                <div className={Home_Page.role}>{i.Role}</div>
                <div className={Home_Page.place}>{i.place}</div>
              </div>
              <div className={Home_Page.right_content}></div>
            </div>
          </div>
        </>
      )}
    </div>
  ));
  return (
    <div className={Home_Page.main}>
      <div className={Home_Page.main_box}>
        <div className={Home_Page.left_child}>
          <div className={Home_Page.logo}>
            <img src={main_logo} alt="" />
            <p className={Home_Page.logo_name}>Untitled UI</p>
          </div>
          <div className={Home_Page.welcome_window}>
            <h4> Welcome Back, User</h4>
            <p>Welcome back! Please enter your details</p>
          </div>
          <div className={Home_Page.google_login}>
            <img src={google} alt="" className={Home_Page.logo_image} />
            <p>Log in with Google</p>
          </div>
          <div className={Home_Page.or}>
            <div className={Home_Page.left_line}></div>
            <p>or</p>
            <div className={Home_Page.right_line}></div>
          </div>
          <form className={Home_Page.login_details}>
            <div className={Home_Page.input_fields}>
              <input type="text" name="" id="email" required />
              <div className={Home_Page.underline}></div>
              <label className={Home_Page.input_label}>Email</label>
            </div>
            <div className={Home_Page.input_fields}>
              <input type="password" name="" id="password" required />
              <div className={Home_Page.underline}></div>
              <label className={Home_Page.input_label}>Password</label>
            </div>
            <div className={Home_Page.remember}>
              <input type="checkbox" name="" id="checkbox" />
              <p className={Home_Page.remember_text}>Remember me</p>x
              <h6>Forgot password</h6>
            </div>
            <button>Login</button>
          </form>
          <div className={Home_Page.signup_message}>
            <p>Don't have an account?</p>
            <h6 className={Home_Page.signup_window}>Sign up for free</h6>
          </div>
          <img src={SignUp_png} alt="" className={Home_Page.signup_png} />
        </div>
        <div className={Home_Page.right_child}>
          <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
          <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
          {listItems}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
