import React from "react";
import styled from "styled-components";
import svgg from "../../../../Assets/Images/svg.svg";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section2() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div
            className="col-lg-8 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Are you interested in how </span>
            <span className="text">Phanom Profеssionals </span>{" "}
            <span> can assist you?</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img"/>
              </div>
              <div className="tag_text">
                <p>In-House Expertise</p>
                <span>
                  Step into a realm of creativity and innovation with our
                  powerhouse team of 50+.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>24/7 Support</p>
                <span>
                  Our support ensures that assistance is just a message away,
                  anytime you need it.
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Proven Track Records</p>
                <span>
                  Our track record is a symphony of success stories, showcasing
                  our commitment to excellence and the achievements of our
                  partners.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Cost-Effective Brilliance</p>
                <span>
                  We deliver cost-effective solutions that maximize the value of
                  your investment.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-3 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Proven Track Records</p>
                <span>
                  Our track record is a symphony of success stories, showcasing
                  our commitment to excellence and the achievements of our
                  partners.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Cost-Effective Brilliance</p>
                <span>
                  We deliver cost-effective solutions that maximize the value of
                  your investment.
                </span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Dedicated Project Manager</p>
                <span>
                  A dedicated project manager ensures streamlined communication
                  and a singular focus on your project's success.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Delivery On Time</p>
                <span>
                  With us, timelines aren't just promises; they are commitments.
                  Your project will be delivered on time, every time.
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 col-12 block_main"></div>
          <div className="col-lg-3 col-md-12 col-12 block_main"></div>
        </div>

        
        <div class="cont_sub_btn mt-3 mb-3">
          <a href="/contact-us"> Ready to hire? </a>
        </div>

    
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 30px 50px;


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
    padding: 30px;
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
      padding: 10px;
      display: flex;
      border: 1px solid ${primaryColor};
      border-radius: 20px;
      flex-direction: column;
      align-items: center;
      &:hover {
        box-shadow: 1px 1px 5px 1px ${primaryColor};
        transition: 0.5s;
      }
      p {
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        padding-bottom: 10px;
      }
      span {
        font-size: 17px;
        color: #6e6e6e;
        padding-bottom: 20px;
      }
      .number_div {
        color: #147888;
        word-spacing: 1px;
        letter-spacing: 0.1px;
        font-size: 25px;
        font-weight: bold;
        line-height: 1.2em;
      }
      .tag_text {
        padding: 10px 0px;
        text-align: center;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 0;

    .text_div {
      padding:20px;
    }


   .block_main {
     display: unset; 
     flex: unset; 
}
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;

    
   .block_main {
     display: unset; 
     flex: unset; 
}


 .block_main .block_div {
    height: 300px;
}
  }
`;
