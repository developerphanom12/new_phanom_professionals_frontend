import React from "react";
import { FaCheck } from "react-icons/fa6";
import styled from "styled-components";
import { primaryColor } from "../../../../Global/GlobalButton";

export default function Section10() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>How Phanom Professionals Ensures Quality in PHP Development</p>

              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                  PHP is not a language that should be used alone. On the client side, it collaborates with other languages to create a functional website
                  </span>
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>A full-stack PHP developer's proficiency with HTML, CSS, and Javascript. This will enable website developers to create a useful and intuitive interface</span>
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>Employ our problem-solving PHP programmers, just like you would with any other web developer. Having the ability to think critically and quickly will be essential for meeting deadlines.</span>
                </div>
              </div>

              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>Hire our committed PHP engineers with MySQL, jQuery, and Ajax knowledge. A developer's comfort level with databases such as MySQL suggests that they possess a diverse skill set. This will undoubtedly benefit your team.</span>
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>Finally, the PHP developer needs to be a skilled communicator that we have. If you're searching for remote PHP engineers for your team, this is really important.</span>
                </div>
              </div>
              <span>However, you should look for PHP web developers who can solve problems well in addition to having strong technical PHP talents. They don't have to be experts in coding. However, you shouldn't write off that PHP web developer if they can demonstrate a presence of mind that you can find here.
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
  .block_main {
    margin-bottom: 20px;
    /* display: flex;
    flex: 1; */
    .block_div {
      padding: 50px;
      display: flex;
      flex-direction: column;
      gap: 10px;
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

        svg {
          color: ${primaryColor};
          width: 20px;
          height: 20px;
          font-weight: 600;
          margin: 10px;
        }
      }
    }
    span {
      color: #6e6e6e;
    }
  }
`;
