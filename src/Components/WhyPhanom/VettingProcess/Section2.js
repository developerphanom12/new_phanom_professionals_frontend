import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import styled from "styled-components";
import { primaryColor } from "../../../Global/GlobalButton";

export default function Section2() {
  const [isArrowRightVisible3, setIsArrowRightVisible3] = useState(true);
  const [isArrowDownVisible3, setIsArrowDownVisible3] = useState(false);

  const handleArrowRightClick = (sectionNumber) => {
    switch (sectionNumber) {
      case 1:
        setIsArrowRightVisible3(false);
        setIsArrowDownVisible3(true);
        break;
      default:
        break;
    }
  };

  const handleArrowDownClick = (sectionNumber) => {
    switch (sectionNumber) {
      case 1:
        setIsArrowRightVisible3(true);
        setIsArrowDownVisible3(false);
        break;
      default:
        break;
    }
  };

  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 text">
            <h3>
            How we can help the businesses to meet their expectation with our talеntеd profеssionals ?
              {isArrowRightVisible3 && (
                <FaArrowDown
                  onClick={() => handleArrowRightClick(3)}
                  id="arrow3"
                />
              )}
              {isArrowDownVisible3 && (
                <FaArrowRight
                  onClick={() => handleArrowDownClick(3)}
                  id="arrow3"
                />
              )}
            </h3>
            {isArrowRightVisible3 && (
              <>
                <p>
                At Phanom Professionals, we understand the importance of easy communication and a personalized technique to fulfill the suitable desires of your business enterprise. Connecting with us is a sincere technique that units the level for an achievement partnership.
                </p>
                <span>Contacting Us:</span>
                <p>
                Feel free to reach out to us through our net web site or through directly emailing/calling our committed institution. We price some time, and our set off response guarantees that you get the information you need while you want it.
                </p>
                <span>Scheduling an Interview:</span>
                <p>
                Once you precise your requirements, we will immediately time desk an initial interview. This serves as a valuable opportunity for us to look more closely at your business organization, communicate your goals, and understand how we can have a remarkable useful resource for your vision.
                </p>
                <span>In-Depth Project Discussion:</span>
                <p>
                During the interview, we can delve into the specifics of your challenge. We remember in open and transparent communication, so no element is truly too small. This permits us to tailor our answers to your particular requirements
                </p>
                <span>Building Trust Through Transparency:</span>
                <p>
                We apprehend that trust is the inspiration of any successful collaboration. To offer you with self assurance in our skills, we offer:

                </p>

                <li>Portfolio Showcase: Explore our portfolio to look firsthand at the several sorts of responsibilities we've effectively undertaken. This not pleasant showcases our abilities however also offers you an insight into the first-class of work you could expect</li>
                <li>Client Testimonials: Our satisfied customers communicate volumes about our commitment and expertise. Read through our patron testimonials to apprehend the great effect we've had on corporations like yours.</li>
                <li>Service Showcase: We agree in clarity regarding the services we provide. Our service pages offer complete information about every presentation, making sure you have got a smooth understanding of what we deliver to the table.</li>
                <li>Making the Decision: Once you connect to us, assess our portfolio, and gain insights from purchaser testimonials, making the selection to paintings with Phanom Professionals will become a confident and knowledgeable desire.</li>
                <li>Transparent Quotations: We offer unique and obvious quotations, ensuring there aren't any surprises alongside the manner. You'll have a clean statistics of the funding required for your undertaking.</li>
                <li>Flexible Collaboration: Our crew is adaptable and committed to finding solutions that align with your charge range and timeline. We accept it as true within flexibility without compromising on great.</li>
                <li>Ongoing Communication: Communication doesn't quit as soon as the mission starts off. We preserve ordinary conversation to preserve you up to date at the improvement, ensuring your enter is valued during the entire device.</li>
              </>
            )}
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color: #dadada66;
  padding: 50px;
  .text {
    padding: 10px;
    background-color: #fff;
    h3 {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      svg {
        color: ${primaryColor};
        width: 18px;
      }
    }
    span {
      font-weight: bold;
      font-size: 18px;
      padding: 10px;
    }
    p {
      font-size: 15px;
      padding: 10px;
    }
    li {
      padding: 20px;
      margin: 0px 20px;
    }
  }

  
  @media (max-width: 567px) {
     padding: 20px;
  }
  @media (min-width: 567px) and (max-width: 992px){
    padding: 20px;
  }

`;