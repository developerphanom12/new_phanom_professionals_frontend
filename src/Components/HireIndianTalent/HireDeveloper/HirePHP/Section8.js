import React from "react";
import styled from "styled-components";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section8() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-12 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Why Choose </span>
            <span className="text"> Phanom Professionals </span>{" "}
            <span> for PHP Development?</span>
            <p className="mt-3">
              Selecting the right PHP developers can be a game-changer for your
              business. At Phanom Professionals, we pride ourselves on offering
              more than just coding expertise. Here's why our PHP developers
              stand out:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-6 col-12 block_main1">
            <div className="block_div1">
              <div className="number_div1">01</div>
              <div>
                <p>Comprehensive Skill Set: </p>
                <span>
                  Our PHP developers are not just proficient in PHP but are also
                  skilled in related technologies like Laravel, Symfony, and
                  CodeIgniter. This broad knowledge base allows them to deliver
                  robust and scalable web applications.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 block_main">
            <div className="block_div">
              <div className="number_div">02</div>
              <div>
                <p>Client-Centric Approach:</p>
                <span>
                  We place our clients at the center of everything we do. Our
                  developers work closely with you to understand your unique
                  needs and deliver solutions that align with your business
                  objectives.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 block_main">
            <div className="block_div">
              <div className="number_div">03</div>
              <div>
                <p>Proven Track Record: </p>
                <span>
                  With a portfolio of successful projects across various
                  industries, our PHP developers bring experience, reliability,
                  and a commitment to quality.
                </span>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-6 col-12 block_main">
            <div className="block_div">
              <div className="number_div">04</div>
              <div>
                <p> Agile Development Process: </p>
                <span>
                  We follow agile methodologies to ensure that your project is
                  delivered on time, within budget, and with maximum flexibility
                  to accommodate changes as your business evolves.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 block_main">
            <div className="block_div">
              <div className="number_div">05</div>
              <div>
                <p> Long-Term Partnership: </p>
                <span>
                    We believe in building lasting relationships. Our developers not only deliver high-quality code but also provide ongoing support and maintenance to ensure your application remains up-to-date and secure.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 block_main"></div>
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

  .text_div {
    margin-bottom: 0.7em;
    padding: 20px 30px;
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
  }
  .block_main {
    margin-bottom: 20px;
    display: flex;
    flex: 1;
    .block_div {
      word-spacing: 1px;
      letter-spacing: 0.1px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      border: 1px solid #dadada;
      border-radius: 30px;
      &:hover {
        background-color: #dadada4f;
      }
      p {
        font-size: 20px;
        font-weight: bold;
        margin: 0;
        padding-bottom: 10px;
      }
      span {
        font-size: 17px;
        color: #6e6e6e;
      }
      .number_div {
        color: ${primaryColor};
        word-spacing: 1px;
        letter-spacing: 0.1px;
        font-size: 25px;
        font-weight: bold;
        line-height: 1.2em;
      }
    }
  }

  .block_main1 {
    margin-bottom: 20px;
    display: flex;
    flex: 1;
    .block_div1 {
      background-color: ${primaryColor};
      word-spacing: 1px;
      letter-spacing: 0.1px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      border: 1px solid #dadada;
      border-radius: 30px;

      p {
        font-size: 20px;
        font-weight: bold;
        margin: 0;
        padding-bottom: 10px;
        color: #fff;
      }
      span {
        font-size: 17px;
        color: #fff;
      }
      .number_div1 {
        color: #fff;
        word-spacing: 1px;
        letter-spacing: 0.1px;
        font-size: 25px;
        font-weight: bold;
        line-height: 1.2em;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 0;
    .block_main1 {
      flex: unset;
    }
    .block_main {
      flex: unset;
    }
  }
  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;
    .block_main1 {
      flex: unset;
    }
    .block_main {
      flex: unset;
    }
  }
`;
