import React from "react";
// import { FaCheck } from "react-icons/fa6";
import styled from "styled-components";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section4() {
  return (
    <Root>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 text_area">
            <span>How Our</span> <span className="text"> iOS dеvеlopеr</span>
            <span> helps in providing the best services</span>{" "}
            <p className="mt-3">
              At Phantom Professionals, our iOS builders play a pivotal function
              in delivering remarkable offerings, putting the degree to a great
              mobile app experience. Armed with an understanding of Swift
              programming, and the spine of iOS app improvement, our builders
              meticulously craft code that guarantees optimum overall
              performance and adherence to enterprise standards. What sets our
              offerings apart is our dedication to tailoring solutions to
              satisfy the unique wishes of every purchaser. From
              conceptualization to execution, our iOS developers engage in
              collaborative efforts, making sure that the resulting packages
              align seamlessly with the specific commercial enterprise targets
              of our customers.
            </p>
            <p>
              Navigating the iOS developer process is crucial to ensure you're
              invеsting wisely. Hеrе аrе key questions to gauge technical and
              interpersonal skills:
            </p>
            <span>
              Expert Tips for Hiring the Best In-House iOS Developers from
              Phanom Professionals
            </span>
            <p className="mt-3">
              When hiring in-house iOS developers, choosing top talent is
              crucial for the success of your app development projects. At
              Phanom Professionals, we offer valuable advice to guide your
              hiring process and ensure you get the best fit for your team.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p> Prioritize Swift Expertise: </p>
              <span>
                Look for developers proficient in Swift, the essential language
                for iOS app development. Our iOS developers at Phanom
                Professionals are skilled in Swift, ensuring the creation of
                high-performance apps that meet industry standards.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Focus on UI/UX Design Skills: </p>
              <span>
                Choose developers with a strong background in UI/UX design. A
                visually appealing and user-friendly interface is key to
                attracting and retaining users. Our developers excel in crafting
                designs that enhance the overall user experience.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p> Ensure Device Compatibility: </p>
              <span>
                Select developers with experience in making apps compatible
                across the entire iOS ecosystem, including iPhones, iPads, and
                Apple Watches. This ensures a seamless experience for users on
                any device.
              </span>
            </div>        
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Look for Proven Track Records: </p>
              <span>
                Opt for developers who have demonstrated their ability to
                integrate third-party APIs and enhance app functionalities. This
                experience is crucial for building feature-rich applications.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p> Emphasize Security and Maintenance: </p>
              <span>
              Prioritize developers who understand the importance of app security, ongoing maintenance, and compliance with Apple’s guidelines. This ensures your app remains secure and up-to-date.

              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p> Value Communication and Collaboration:  </p>
              <span>
              Hire developers who excel in communication and teamwork. Our iOS developers at Phanom Professionals are committed to providing regular updates and collaborating closely with clients throughout the development process.

              </span>
            </div>
          </div>
        </div>

        <p className="text-center mt-3">By focusing on these key aspects when hiring iOS developers, you can build a strong in-house team that drives your app development success.</p>
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
