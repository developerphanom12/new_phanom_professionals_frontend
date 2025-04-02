import React from "react";
import styled from "styled-components";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section2() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>

          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>Why Choose </span> <span className="text">Phanom </span>
            <span> Professionals?</span>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Exceptional Design Expertise: </p>
              <div className="mini_block">
                <div>
                  <span>
                    When you hire a web designer from Phanom Professionals, you
                    access a team with advanced skills and extensive experience
                    in creating impactful websites. Our designers stay ahead of
                    the latest trends and technologies, ensuring your site is
                    both modern and effective.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Customized Web Design Solutions: </p>
              <span>
                Every business has distinct needs. Our web designers offer
                personalized services to align with your brand’s goals. Whether
                you need a corporate website, an engaging blog, or an intuitive
                e-commerce platform, we provide tailored solutions that meet
                your specific requirements.
              </span>
              {/* <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>Network - employee strength 200 plus </span>{" "}
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>Project delivered - 1000+</span>{" "}
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div className="border-bottom">
                  <span>Experience - 5 years</span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Responsive and User-Centric Designs: </p>
              <span>
                Our designers prioritize creating websites that look great and
                perform well on all devices. A responsive design enhances user
                experience and boosts search engine rankings, ensuring your
                website is accessible and engaging across smartphones, tablets,
                and desktops.
              </span>{" "}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Cost-Effective Solutions: </p>
              <div className="mini_block">
                <div>
                  <span>
                    Working with Phanom Professionals allows you to save up to
                    50% on your web design budget. We offer high-quality design
                    services at competitive rates, providing excellent value
                    without compromising on quality.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Future-Proof Designs: </p>
              <span>
                We build websites with scalability in mind, allowing for future
                growth and adaptation. This approach minimizes the need for
                frequent redesigns, ensuring your site remains relevant and
                effective as your business evolves.
              </span>
              {/* <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>Network - employee strength 200 plus </span>{" "}
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>Project delivered - 1000+</span>{" "}
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div className="border-bottom">
                  <span>Experience - 5 years</span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Transparent and Efficient Communication: </p>
              <span>
                Effective collaboration is crucial for success. When you hire a
                web designer from Phanom Professionals, you’ll benefit from
                clear and consistent communication. We keep you updated on
                progress and actively seek your feedback to ensure the final
                product meets your expectations.
              </span>{" "}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Timely Delivery: </p>
              <div className="mini_block">
                <div>
                  <span>
                  We understand the importance of deadlines. Our team is committed to delivering high-quality websites on schedule and within budget, ensuring you achieve your goals promptly and efficiently.

                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main"></div>
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
    .text_area {
      margin-bottom: 0;
      padding: 0;
    }
     .block_main {
    margin-bottom: 20px;
    /* display: flex; */
    flex: unset;
}
  }
  @media (min-width: 567px) and (max-width: 992px) {
    .text_area {
      margin-bottom: 0;
      padding: 0;
    }
    .block_main {
    margin-bottom: 20px;
    /* display: flex; */
    flex: unset;
}
  }
`;
