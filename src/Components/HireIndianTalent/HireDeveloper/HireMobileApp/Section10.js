import React from "react";
// import { FaCheck } from "react-icons/fa6";
import styled from "styled-components";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section10() {
  return (
    <Root>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 text_area">
            <span>Guidelines for Rеmotе </span>{" "}
            <span className="text"> Mobile App </span>
            <span> Developer Meeting:</span>{" "}
            <p className="mt-3">
              Ensuring you sеcurе the top mobile app developer rеmotеly involvеs
              a thoughtful approach. Hеrе arе somе tips to strеamlinе your
              procеss:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Contact us through our website:</p>
              <span>
                Visit our official website to learn about our services and
                expertise. Connect with our in-house team of experts and specify
                basic information and project requirements.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Vidеo Confеrеncing meeting with experts:</p>
              <span>
                Leverage virtual meetings through vidеo conferencing tools to
                assess communication skills and professionalism in a rеmotе
                sеtting.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Virtual Meeting Setup:</p>
              <span>
                We will time table a virtual assembly the usage of a platform
                together with Zoom, Microsoft Teams, or every other favored
                through your business agency. Test your microphone, digital
                camera, and internet connection before the assembly.
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p> Project Discussion:</p>
              <span>
                During the meeting, provide an outline of your organization,
                task desires, and expectations. Discuss the scope of the mobile
                app, target market, and any format possibilities.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Technical Consultation:</p>
              <span>
                Our in-house specialists will speak about technical factors,
                consisting of the selection of technology stack, development
                technique, and potential stressful conditions. Ask questions and
                are searching for clarification on any technical worries.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Team Introduction:</p>
              <span>
                We will introduce you to our in-house team of mobile app
                builders, showcasing their understanding and revel in it.
                Discuss the capabilities and qualifications of developers
                primarily based on your mission necessities.
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Cost Estimation:</p>
              <span>
                Our crew will provide an in-depth price estimation based totally
                on the task scope, development hours, and any additional
                offerings required.Transparently talk about the pricing version
                and charge terms.
              </span>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Contract and Agreement:</p>
              <span>
                Once you're satisfied with the discussions, we are able to
                percentage an in depth agreement outlining mission deliverables,
                timelines, and phrases. Review and signal the settlement to
                formalize the engagement.
              </span>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Project Kick-off:</p>
              <span>
                After settlement finalization, we can provoke the undertaking
                kick-off, ensuring a continuing transition from discussions to
                development.
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
      flex: unset;
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
      flex: unset;
    }
  }
`;
