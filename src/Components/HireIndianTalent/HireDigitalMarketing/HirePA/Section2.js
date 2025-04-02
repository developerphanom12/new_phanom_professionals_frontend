import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { secGradient } from "../../../../Global/GlobalButton";

export default function Section2() {
  return (
    <Root>
      <Helmet>
        <title>Hire Programmatic Advertisement - Phanom Professionals</title>
        <meta
          name="description"
          content="Partner with Phanom Professionals for ad experts proficient in programming, seamlessly integrating with your culture while providing directed solutions tailored to your marketing needs."
        />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 ">
            <iframe
              width="521"
              height="293"
              src="https://www.youtube.com/embed/XHOmBV4js_E"
              title="Video Placeholder"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-lg-6 col-md-12 col-12 text_div">
            <span>Proficiеncy in </span>
            <span className="text"> Programming </span>
            <span> for our Ad Expеrts</span>
            <p>
              Smart Talent Getting to Know: Phanom Professionals, as your
              trusted Programmatic Advertising Company, excels at identifying
              and acquiring professional skills that easily integrate with your
              organizational culture.
            </p>
            <p>
              Technical Prowess: Our advert experts have a high degree of
              programming know-how, guaranteeing that they're nicely equipped to
              manipulate an extensive variety of advertising and marketing
              wishes.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <p>
              Cultural Alignment: We place a top class on discovering folks that
              now not only have technical competencies but also a percentage of
              your employer's values and lifestyle, enabling peaceful and
              efficient working surroundings.
            </p>
            <p>
              Partnership with us ensures access to a workforce capable of
              supplying comprehensive advertising and marketing answers, thereby
              contributing to the fulfillment of your enterprise's large
              desires.
            </p>
            <p>
              Directed Solutions: Our programming expertise extends to the
              introduction of customized solutions geared to your organization's
              precise advertising wishes.
            </p>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  p {
    padding-top: 10px;
    font-size: 17px;
    color: #6e6e6e;
  }
  iframe {
    border-radius: 10px;
  }
  .text_div {
    margin-bottom: 30px;

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
      padding-top: 10px;
      font-size: 17px;
      color: #6e6e6e;
    }
  }
  @media (max-width: 567px) {
    iframe {
      width: 100%;
    }
    .text_div {
      margin-bottom: 0;
    }
    .text_div p {
      padding-top: 25px;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    iframe {
      width: 100%;
    }
    .text_div {
      margin-bottom: 0;
    }
    .text_div p {
      padding-top: 25px;
    }
  }
`;
