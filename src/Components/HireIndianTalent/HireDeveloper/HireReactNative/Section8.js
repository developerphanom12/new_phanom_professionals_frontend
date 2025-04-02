import React from "react";
import styled from "styled-components";
import svgg from "../../../../Assets/Images/svg.svg";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section8() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div
            className="col-lg-8 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>5 Exploratory </span>
            <span className="text">Questions</span> <span> to Ask -</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Handling Colleague Development:</p>
                <span>
                  Leadership and communication skills: Evaluate the developer's
                  ability to communicate constructive comments to peers while
                  displaying leadership qualities and encouraging development.
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
                <p>Defending Decisions Against the Boss:</p>
                <span>
                 

Assertiveness and reasoning capabilities: Assess the developer's potential to protect beneficial choices at the same time as offering logical rationale without sacrificing professionalism.

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
                <p>Designing New App Speed Features:</p>
                <span>
                Problem-solving abilities and collaboration: Look for instances wherein the developer constructed functions to improve app velocity, with an emphasis on collaborative trouble-solving strategies.
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
                <p>Participation in the Most Interesting Project:
                </p>
                <span>
                 

Understand the developer's hobbies by discussing Our maximum fascinating assignment, emphasizing Our task, contributions, and collaborative efforts in the team.

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
          <div className="col-lg-3 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Working Under Duress:</p>
                <span>
                Stress management and problem-solving: Evaluate the developer's potential to control strain, with a focus on quick situational evaluation, effective coping techniques, and successful trouble-fixing under stress.

                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 block_main">
            
          </div>

          <div className="col-lg-3 col-md-12 col-12 block_main"></div>
          <div className="col-lg-3 col-md-12 col-12 block_main"></div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 30px 50px;

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
      padding: 20px;
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
