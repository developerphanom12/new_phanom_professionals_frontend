import React from "react";
import styled from "styled-components";
import {  secGradient } from "../../../../Global/GlobalButton";

export default function Section5() {
  return (
    <Root>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 text_area">
            <span>Comprehensive Support </span>{" "}
            <span className="text"> Beyond</span>
            <span> Development
            </span>
            <p>
            When you hire a WordPress developer from Phanom Professionals, you’re not just hiring a one-time service provider—you’re gaining a dedicated partner in your digital journey. Our commitment to your success extends well beyond the initial development phase. Here's how we ensure your website thrives in the long run:
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Post-Launch Support: </p>
              <div className="mini_block">
                <div>
                  <span>
                  After your website goes live, our relationship doesn’t end. We offer ongoing maintenance, ensuring your WordPress site remains updated with the latest features and security patches. Our team is available to address any issues that arise, providing timely solutions to keep your site running smoothly.

                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Continuous Optimization: </p>
              <span>
              The digital landscape is constantly evolving, and so should your website. Our developers proactively monitor your site’s performance and suggest enhancements to improve speed, usability, and SEO. This continuous optimization helps your website adapt to changing user behaviors and search engine algorithms, ensuring sustained visibility and user engagement.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p> Training and Documentation:</p>
              <span>
              We believe in empowering our clients to take control of their websites. That’s why we provide thorough training sessions to your in-house team, helping them understand how to manage content, use plugins, and make basic updates independently. Additionally, we supply detailed documentation for your custom-built features, making future modifications hassle-free.

              </span>{" "}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Scalability and Growth:</p>
              <div className="mini_block">
                <div>
                  <span>
                  As your business grows, so will your website’s needs. Our WordPress developers design with scalability in mind, allowing your site to expand seamlessly as you add more content, features, or even entire sections. We help you plan for future growth, ensuring your site can handle increased traffic and functionality without compromising performance.

                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>SEO and Content Strategy Integration: </p>
              <span>
              Building a website is just the first step. To attract and retain visitors, your site needs to be visible in search engine results. Our developers work closely with SEO experts to integrate best practices right from the start. We also assist in developing a content strategy that resonates with your audience and supports your business goals.

              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">

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

    .block_main {
      flex:unset;
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
