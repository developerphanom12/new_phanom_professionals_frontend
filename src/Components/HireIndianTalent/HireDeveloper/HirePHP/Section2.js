import React from "react";
import styled from "styled-components";
import tag1 from "../../../../Assets/Images/tag1.png";
import tag2 from "../../../../Assets/Images/tag2.png";
import tag3 from "../../../../Assets/Images/tag3.png";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section2() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>
          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>Employ </span> <span className="text"> PHP Developers </span>
            <span>with a simple procedure</span>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 main">
            <div className="segment">
              <img src={tag1} alt="img" />
              <span>Share Your Needs</span>
              <p>
                Contact a professional on our crew who will assist you decide
                your goals, technical requirements, and crew dynamics.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 main">
            <div className="segment">
              <img src={tag2} alt="img" />
              <span>
                Meet The Maximum Appropriate Skills
              </span>
              <p>
                Our knowledge is to supply and in shape skills. Once you
                percentage your requirements, we can shortlist the primary batch
                of applicants inside forty eight hours.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 main">
            <div className="segment">
              <img src={tag3} alt="img" />
              <span>Remote Onboarding And Support</span>
              <p>
                We offer the proper framework and expectancies on each side. Our
                group additionally manages the human resources, IT and
                administrative help of skills. Our committed PHP builders can
                assist you
              </p>
            </div>
          </div>
        </div>
        <div class="cont_sub_btn ">
          <a href="/contact-us"> Ready to hire? </a>
        </div>

  
      </div>
    </Root>
  );
}
const Root = styled.section`
  background: #f3f3f3;
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
    margin-bottom:40px;
    &:hover{
      background-color:#ececec;
      color:#13c9df;
    }
}
} 
  
  svg {
    color: #147888;
  }
  .text_area {
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
  .main{
    text-align: center;
  }
  .segment {
    display: flex;
    flex-direction: column;
    padding: 20px;
    flex: 1;
    img{
        width: 150px;
        height: 150px;
        margin-left: 80px;
    }
    
    span {
      text-align: center;
      background-color:${primaryColor};
      color: white;
      font-size: 14px;
      letter-spacing: 1.1px;
      padding:15px 10px ;
      border-radius: 10px;
      border: none;
      margin-bottom: 20px;
    }
    p {
      color: #6e6e6e;
      text-align: center;
      line-height: 1.7em;
    }
  }
  @media (max-width: 567px) {
     padding:0;

   .text_area {
  padding: 20px 0px;
 
}

 .segment {
    padding:0; 
   align-items: center;

}

 .segment img {
    margin-left: 0;
}
  }

  @media (min-width: 567px) and (max-width: 992px){
    .segment {
   align-items: center;

}
.segment img {
    margin-left: 0;
}


.segment span {
    width: 295px;
}

} 


`;

