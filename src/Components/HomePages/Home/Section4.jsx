import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  Blackdescription,
  BlackHeading,
  Textwithborder,
} from "../../../Global/GlobalText";
import { PurpleBackground } from "../../../Global/GlobalButton";
import holistic from "../../../Assets/Images/holistic.png";
import clent from "../../../Assets/Images/clientt.png";
import innovative from "../../../Assets/Images/innovative.png";
import team from "../../../Assets/Images/team.png";
import edgetechnology from "../../../Assets/Images/edgetechnology.png";
import excellence from "../../../Assets/Images/excellence.png";
import strategy from "../../../Assets/Images/strategy.png";
import practice from "../../../Assets/Images/practice.png";
import { Appointment } from "../../Appointment/Appointment";

export const Section4 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const sectionRef = useRef(null);
  const slideRef = useRef(null);
  const [isScrollingInside, setIsScrollingInside] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  
  useEffect(() => {
    const sectionElement = sectionRef.current;
    const slideElement = slideRef.current;
    
    // Function to handle wheel events
    const handleWheel = (e) => {
      // If we're currently scrolling inside and haven't reached the bottom
      if (isScrollingInside && !hasScrolledToBottom) {
        // Calculate if we've reached the bottom of the scrollable area
        const isAtBottom = 
          Math.abs(slideElement.scrollHeight - slideElement.scrollTop - slideElement.clientHeight) < 5;
        
        if (e.deltaY > 0 && !isAtBottom) {
          // Scrolling down and not at bottom - scroll the inner div
          e.preventDefault();
          slideElement.scrollTop += 200; // Adjust scroll speed as needed
        } else if (e.deltaY > 0 && isAtBottom) {
          // Reached the bottom, allow page scrolling to continue
          setHasScrolledToBottom(true);
          setIsScrollingInside(false);
        } else if (e.deltaY < 0) {
          // Scrolling up
          e.preventDefault();
          slideElement.scrollTop -= 200; // Adjust scroll speed as needed
          
          // If scrolled all the way to top
          if (slideElement.scrollTop <= 0) {
            setIsScrollingInside(false);
          }
        }
      }
    };
    
    // Set up Intersection Observer to detect when section is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsScrollingInside(true);
          setHasScrolledToBottom(false);
        } else {
          // Reset states when section is out of view
          setIsScrollingInside(false);
        }
      });
    }, { threshold: 0.3 }); // Adjust threshold as needed
    
    if (sectionElement) {
      observer.observe(sectionElement);
      sectionElement.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
        sectionElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isScrollingInside, hasScrolledToBottom]);
  
  // Reset scroll state when user scrolls back to this section
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // If section is above viewport, reset scroll states for when user scrolls back down
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
          setHasScrolledToBottom(false);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Root ref={sectionRef}>
      <div className="main_div">
        <div className="sub_div">
          <div className="text_border">
            <Textwithborder> What makes</Textwithborder>
            <Textwithborder> Us Unique?</Textwithborder>
          </div>

          <Blackdescription>
            At Phanom Professionals, we don't just offer services; we innovate,
            create, and lead with excellence. Our unique and forward-thinking
            approach sets us apart in the highly competitive world of marketing
            and IT services. As a leading digital marketing agency in India, we
            are committed to delivering transformative solutions that drive
            growth, inspire engagement, and establish lasting success for our
            clients.
          </Blackdescription>

          <div>
            <PurpleBackground onClick={handleShow}>Book an Appointment</PurpleBackground>
          </div>

          <Appointment show={show} handleClose={handleClose} />
        </div>

        <div className="sub_div_two">
          <div className="slide_div" ref={slideRef}>
            <div className="sub_slide_div">
              <div className="img_div">
                <img src={holistic} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Holistic Solutions</BlackHeading>
                <Blackdescription>
                  We provide end-to-end services that address all aspects of
                  your needs, ensuring seamless integration and effective
                  results.
                </Blackdescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={clent} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Client-Centric Approach</BlackHeading>
                <Blackdescription>
                  Your goals and satisfaction are our top priorities, driving us
                  to craft tailored solutions that align seamlessly with your
                  vision and exceed expectations.
                </Blackdescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={innovative} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Innovative Thinking</BlackHeading>
                <Blackdescription>
                  Our team is made up of highly skilled professionals with
                  extensive experience & diverse expertise, guaranteeing
                  quality, innovative solutions, and outstanding results in
                  every project we undertake.{" "}
                </Blackdescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={team} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Expert Team</BlackHeading>
                <Blackdescription>
                  Our team is made up of highly skilled professionals with
                  extensive experience & diverse expertise, guaranteeing
                  quality, innovative solutions, and outstanding results in
                  every project we undertake.
                </Blackdescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={edgetechnology} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Cutting-Edge Technology</BlackHeading>
                <Blackdescription>
                  We leverage the latest tools and technologies to stay ahead of
                  industry trends and deliver modern solutions.
                </Blackdescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={excellence} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Commitment to Excellence</BlackHeading>
                <Blackdescription>
                  Our dedication to quality and continuous improvement ensures
                  outstanding results and long-term client satisfaction.
                </Blackdescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={strategy} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Customized Strategies</BlackHeading>
                <Blackdescription>
                  We understand that every client is unique, so we design
                  personalized strategies to meet specific goals and challenges.
                </Blackdescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={practice} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Sustainable Practices</BlackHeading>
                <Blackdescription>
                  We prioritize solutions that are not only effective but also
                  environmentally and socially responsible.
                </Blackdescription>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 60px 100px;
  .main_div {
    display: flex;
    gap: 20px;

    .sub_div {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 35px;
      .text_border {
        display: flex;
        gap: 5px;
        flex-direction: column;
      }
    }

    .sub_div_two {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      justify-content: center;
      gap: 50px;

      .slide_div {
        height: 400px;
        width: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 30px;
        scroll-behavior: smooth;

        .sub_slide_div {
          padding: 40px 30px;
          display: flex;
          gap: 20px;

          box-shadow: 0px 12px 28px 0px rgba(140, 149, 159, 0.3);
          border-radius: 20px;
          .img_div {
            width: 15%;
          }
          .content_div {
            width: 85%;
            display: flex;
            gap: 10px;
            flex-direction: column;
          }
        }
      }

      .slide_div::-webkit-scrollbar {
        display: none;  
      }
    }
  }

  @media (max-width: 567px) {
    padding: 10px 20px 50px;
    .main_div {
      flex-direction: column;

      .sub_div {
        gap: 25px;
        text-align: center;
        .text_border {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
        }
      }

      .sub_div_two .slide_div .sub_slide_div {
        padding: 20px 10px;
        margin-top: 20px;

        .img_div {
          width: 30%;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;
    .main_div {
      flex-direction: column;
      .sub_div {
        gap: 25px;
        text-align: center;
        .text_border {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
        }
      }
    }
  }
`;