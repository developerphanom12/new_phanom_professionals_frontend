import React from "react";
import styled from "styled-components";
import {  secGradient } from "../../../../Global/GlobalButton";

export default function Section7(){
  return (
    <Root>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 text_area">
            <span>Why </span>{" "}
            <span className="text"> Phanom Professionals</span>
            <span> is Perfect for You</span>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Expertise Across the Board </p>
              <div className="mini_block">
                <div>
                  <span>
                    At Phanom Professionals, our team is composed of industry
                    veterans who specialize in various aspects of WordPress
                    development. Whether you need a custom WordPress developer,
                    a skilled plugin developer, or a full-stack expert, we have
                    the right talent to meet your needs. Our developers are not
                    just coders—they are problem solvers who bring creativity
                    and technical excellence to every project.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Custom WordPress Development </p>
              <span>
                Our custom WordPress developers excel at building unique,
                tailored solutions that fit your brand and business model
                perfectly. We don’t believe in one-size-fits-all; instead, we
                craft custom themes and functionalities that reflect your vision
                and provide an exceptional user experience. From bespoke
                e-commerce platforms to intricate membership sites, our
                developers have the expertise to deliver results.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p> WordPress Plugin Development</p>
              <span>
                Our WordPress plugin developers are adept at creating robust,
                secure, and feature-rich plugins that enhance your website’s
                functionality. Whether you need a plugin to improve your site’s
                performance, integrate with third-party services, or add custom
                features, we’ve got you covered. Our developers follow WordPress
                coding standards and best practices, ensuring that your plugins
                are reliable and easy to maintain.
              </span>{" "}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Proven Track Record</p>
              <div className="mini_block">
                <div>
                  <span>
                    With a portfolio of successful projects across various
                    industries, Phanom Professionals has established itself as a
                    trusted partner in WordPress development. Our clients choose
                    us for our ability to deliver high-quality work on time and
                    within budget. We take pride in our meticulous attention to
                    detail, our commitment to excellence, and our ability to
                    exceed client expectations.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Client-Centric Approach </p>
              <span>
                At Phanom Professionals, your success is our priority. We take a
                client-centric approach, focusing on building long-term
                relationships based on trust, transparency, and mutual respect.
                We’re not just service providers; we’re your partners in growth,
                committed to helping you achieve your digital goals.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Scalable Solutions</p>
              <span>
              As your business grows, your digital needs will evolve. We provide scalable WordPress solutions that can adapt to your changing requirements. Whether you need to add new features, integrate additional functionalities, or expand your website’s capacity, our team is equipped to handle it all.
              </span>
            </div>
          </div>
        </div>

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
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;
   .block_main {

    flex: unset;
}

  }
`;
