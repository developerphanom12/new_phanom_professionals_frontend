import React from "react";
import styled from "styled-components";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section6() {
  return (
    <Root>
      <div className="container-fluid mt-3">
      

        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>

          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>Why Hire </span>{" "}
            <span className="text"> UI/UX Designers </span>
            <span>from Phanom Professionals?</span>{" "}
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p> Expertise You Can Trust</p>
              <span>
                <b>Experienced Team: </b>Our UI/UX designers have a proven track
                record of working on diverse projects, from mobile apps to
                complex websites.
              </span>
              <span>
                <b>Technical Proficiency: </b> We specialize in UI/UX design for
                both iOS and Android platforms, as well as web-based
                applications, ensuring a seamless user experience.
              </span>
              {/* <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>Share your requirements.</span>
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>Explore our in-house team tailored to your needs.</span>
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div className="border-bottom">
                  <span>
                    Select the perfect fit for your business for our in-house
                    team.
                  </span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p> Cost-Effective Solutions</p>
              <span>
                <b>Save Up to 50%: </b>Hiring from Phanom Professionals allows
                you to access top-tier UI/UX design talent at a fraction of the
                typical cost, offering significant savings without compromising
                on quality.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Comprehensive Services</p>
              <span>
                <b>End-to-End Design: </b> From initial mockups and wireframes
                to final prototypes, we handle every aspect of UI/UX design.
              </span>
              <span>
                <b>Responsive and Adaptive Designs: </b> Our designs ensure a
                flawless user experience across all devices and screen sizes.
              </span>
              {/* <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                    Hands-on knowledge for creating powerful UX/UI in
                    IOS/Android mobilе apps and wеbsitеs.
                  </span>{" "}
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                    Expеriеncе across divеrsе industries such as SaaS,
                    Staffing/Rеcruiting, marketing, and Advеrtising.
                  </span>{" "}
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>Proficiency in mobile and web-based design</span>
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div className="border-bottom">
                  <span>
                    Illustration and prеsеntation skills using procеss flows,
                    prototypеs, and sitеmaps.
                  </span>
                </div>
              </div>

              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div className="border-bottom">
                  <span>
                    Collaborativе ability to work with cross-functional tеams
                    (Dеsign, Contеnt, and Coding) to attain business goals.
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Collaborative Approach</p>
              <span>
                <b>Integrated Teamwork:</b> Our designers work closely with your
                team, including developers and content creators, to deliver a
                cohesive and effective design strategy.
              </span>

              <span>
                <b>Client-Centric: </b> We prioritize your feedback and ensure
                the final design aligns with your business objectives and user
                needs.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Proven Success</p>
              <span>
                <b>Track Record:</b>With over 1,000 successful projects and a client satisfaction rating of 4.9/5, our results speak for themselves.
              </span>

              <span>
                <b>Global Trust:</b> Our work has earned us the trust of leading brands and startups alike, showcasing our ability to deliver exceptional UI/UX design solutions.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main"></div>
        </div>
        <div class="cont_sub_btn mt-3 mb-5">
          <a href="/contact-us"> Ready to hire? </a>
        </div>

      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 0 50px;
  .cont_sub_btn {
    display: flex;
    justify-content: center;
 a {
    font-size:14px;
    color:white;
    background-color:#13c9df;
    padding:19px 31px;
    border:0;
    letter-spacing:3px;
    border-radius: 50px;
    transition: 0.2s;
    font-weight: 600;
    &:hover{
      background-color:#ececec;
      color:#13c9df;
    }
}
}

  .text_area {
    margin-bottom: 30px;
    padding: 0 50px;
    text-align: center;
    .text {
      background: ${secGradient};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      font-weight: bold;
      font-size: 35px;
      line-height: 1.3em;
    }
    span {
      font-weight: bold;
      font-size: 35px;
      line-height: 1.3em;
    }
    p {
      text-align: center;
      color: #6e6e6e;
      padding: 20px;
      word-spacing: 1px;
    }
  }
  .block_main {
    margin-bottom: 20px;
    display: flex;
    flex: 1;
    span {
      color: #6e6e6e;
    }
    .block_div {
      padding: 50px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      border: 1px solid #dadada;
      border-radius: 30px;
      &:hover {
        background-color: #dadada4f;
      }
      p {
        font-size: 25px;
        font-weight: bold;
        margin: 0;
      }
      .mini_block {
        display: flex;
        .border-bottom {
          padding-bottom: 30px;
          border-bottom: 1px solid #dadada;
        }
        svg {
          color: ${primaryColor};
          width: 20px;
          height: 20px;
          font-weight: 600;
          margin: 10px;
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding: 0;
    .text_area {
      margin-bottom: 0;
      padding: 0;
    }
    .block_main {
      margin-bottom: unset;
      margin-top: 20px;
      flex:unset;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;
    .text_area {
      margin-bottom: 0;
      padding: 0;
    }

    .block_main {
      margin-bottom: unset;
      margin-top: 20px;
      flex:unset;
    }
  }
`;
