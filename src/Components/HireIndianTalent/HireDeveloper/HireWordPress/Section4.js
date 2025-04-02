import React from "react";
import styled from "styled-components";
import {  secGradient } from "../../../../Global/GlobalButton";

export default function Section4() {
  return (
    <Root>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 text_area">
            <span>Hire Our In- House</span>{" "}
            <span className="text"> WordPrеss Dеvеlopеr </span>
            <span> from Phanom Professionals</span>
            <p>
              In the dynamic landscape of digital presence, having a robust and
              visually appealing website is paramount for organizations to
              thrive. When it involves harnessing the energy of WordPress,
              Phanom Professionals stands out as a dependable accomplice,
              offering pro-WordPress builders to raise your online ventures.
              Here's a glimpse into why hiring a WordPress developer from Phanom
              Professionals is a strategic move for your internet development
              desires:
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Unparalleled Expertise:</p>
              <div className="mini_block">
                <div>
                  <span>
                    At Phanom Professionals, our WordPress developers convey a
                    wealth of knowledge to the table. Trained in trendy
                    technology and armed with substantial enjoyment, they're
                    properly equipped to handle various initiatives, from custom
                    subject matter improvement to problematic plugin
                    customization. By hiring from us, you faucet right into a
                    pool of expertise that is aware of the problematic nuances
                    of WordPress, making sure that your internet site isn't
                    always just functional but additionally aligns seamlessly
                    together with your enterprise objectives.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Tailored Solutions:</p>
              <span>
                We recognize that every commercial enterprise has precise
                requirements. Our WordPress developers take a customized
                approach, working intently with you to recognize your vision and
                goals. Whether you want a swish company website, an engaging
                e-trade platform, or a feature-wealthy weblog, our developers
                tailor their answers to fulfill your unique needs. This
                guarantees that your website not only captures the essence of
                your emblem but also engages your target market effectively.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Responsive Design for Every Device:</p>
              <span>
                In a technology in which users access websites from diverse
                gadgets, having a responsive design is non-negotiable. Our
                WordPress developers prioritize developing websites that look
                beautiful and perform seamlessly across computers, pills, and
                smartphones. This now not only effectively enhances the user's
                enjoyment but additionally boosts your website's seek engine
                scores, contributing to its usual fulfillment.
              </span>{" "}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>E-commerce Prowess:</p>
              <div className="mini_block">
                <div>
                  <span>
                    For companies venturing into the sector of online retail,
                    our WordPress builders concentrate on seamless e-commerce
                    integration. From putting in place secure price gateways to
                    optimizing product pages for maximum conversions, we make
                    sure that your online shop now not only meets enterprise
                    requirements but exceeds patron expectancies.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Future-Proofing Your Website:</p>
              <span>
                The digital panorama is ever-evolving, and your website needs to
                be equipped to evolve. Our builders incorporate scalability into
                their designs, ensuring that your website stays relevant and
                useful as your business grows. This ahead-wondering approach now
                not best saves you from constant overhauls but additionally
                positions your website as a resilient asset in the long run.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Transparent Communication:</p>
              <span>
                Effective collaboration is the cornerstone of a hit internet
                development. When you rent a WordPress developer from Phanom
                Professionals, you can anticipate obvious verbal exchange at
                every stage of the task. Our builders keep you in the loop,
                providing normal updates and in search of your enter to ensure
                the very last product aligns with your expectations.
              </span>{" "}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p> Timely Delivery without Compromise:</p>
              <div className="mini_block">
                <div>
                  <span>
                    We recognize the fee of time inside the digital realm. Our
                    WordPress builders are dedicated to delivering projects on
                    time and inside finances. This dedication to efficiency
                    doesn’t come at the cost of best; rather, it ensures that
                    you get an excessive-performing website that caters for your
                    commercial enterprise desires without unnecessary delays.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main"></div>
          <div className="col-lg-4 col-md-12 col-12 block_main"></div>
        </div>

        <p className="text-center mt-3">
          In the end, hiring a WordPress developer from Phanom Professionals
          goes past acquiring a carrier—it is strategic funding for the
          achievement and sustainability of your online presence. Experience the
          distinction of working with a crew enthusiastic about WordPress
          development and committed to ensuring your virtual fulfillment.
        </p>

        <div class="cont_sub_btn mt-3 mb-3">
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
    padding: 20px 50px;
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
          color: #147888;
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
      padding: 0;
      margin-bottom: 0;
    }
    .block_main {
      flex: unset;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;
    .text_area {
      padding: 0;
      margin-bottom: 0;
    }
        .block_main {
      flex:unset;
    }
  }
`;
