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
              Qualities our team of experts have while recruiting our PHP developers
              </p>
             <span>
               Many individuals have trouble locating the appropriate abilities for their position when searching to hire a PHP developer. We've selected five essential core skill sets to help you locate your ideal match in our team and make wise business decisions.
              </span> 
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                  Willing To Learn & Grow Knowledge and proficiency that surpasses the fundamentals

                  </span>
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                  Familiarity with different programming languages

                  </span>
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                  Easily adjustable to PHP modifications

                  </span>
                </div>
              </div>

              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                  Capacity to resolve issues

                  </span>
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                  A superb work ethic


                  </span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
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
