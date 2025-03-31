import React from "react";
import styled from "styled-components";
import thumb from "../../Assets/Images/thumbnail.webp";

export const Section2 = () => {
  return (
    <Root>
      <h2 className="first-content">
        Message<span style={{ color: "#0b66c2" }}> for</span> you
      </h2>

      <div className="video_div">
      <iframe
          src="https://www.youtube.com/embed/vZuVtF9eEzA" // Updated link here
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </Root>
  );
};

const Root = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .first-content {
    font-size: 45px;
    font-weight: bold;
    line-height: 1.3em;
    word-spacing: 5px;
    text-align: center;
  }
  .paragraph {
    font-size: 20px;
    color: #6e6e6e;
  }
  .video_div {
    height: 400px;
    width: 50%;
    border-radius: 10px;
    /* background-image: url(${thumb}); */
    margin-top: 20px;
    /* background-size: 100% 100%;  */
    box-shadow: 0 10px 20px #0586ceb3;
    iframe {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 567px) {
    padding: 10px;

    .first-content {
      font-size: 35px;
    }
    .paragraph {
      text-align: center;
    }

    .video_div {
      height: 300px;
      width: 90%;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .video_div {
      width: 80%;
    }
  }
`;
