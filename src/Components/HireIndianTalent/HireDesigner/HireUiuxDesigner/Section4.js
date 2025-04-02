import React from "react";
import { FaCheck } from "react-icons/fa6";
import styled from "styled-components";
import { primaryColor } from "../../../../Global/GlobalButton";

export default function Section4() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>
                Benefits of Hiring UI/UX Designers from Phanom Professionals
              </p>
             
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                    <b>Exceptional Quality:</b> Benefit from world-class UI/UX
                    design that sets your digital presence apart.
                  </span>
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                    <b>Flexibility:</b> Choose from a range of skilled designers
                    to find the perfect match for your project needs.
                  </span>
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                    <b>Efficient Turnaround:</b> Our streamlined process ensures
                    timely delivery without compromising quality.
                  </span>
                </div>
              </div>

              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                    <b>Scalability:</b> Easily scale your design team as your
                    project grows.
                  </span>
                </div>
              </div>
              
            </div>
          </div>
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
