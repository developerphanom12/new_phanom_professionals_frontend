import React from "react";
import styled from "styled-components";

export const Section8 = () => {
  return (
    <Root>
      <div className="content_div">

        <h2 className="first-content">

          {/* Still Have Doubts? */}

          on the place of still have doubt 

          
        </h2>

        <p className="paragraph">
          
           {/* Join Our Free consultantion to Maximizing ROI with */}

           Access 50+ software engineers   proficient in 15+ technologies.

        </p>



       <a href="/apply" target="_blank">Join Now</a> 

      </div>
    </Root>
  );
};

const Root = styled.section`
  display: flex;
  justify-content: center;
  margin: 50px 0;

  .content_div {
    border-radius: 10px;
    height: 400px;
    width: 70%;
    background-image: linear-gradient(101deg, #012d64, #06b0ff);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .first-content {
      font-size: 25px;
      font-weight: bold;
      line-height: 1.3em;
      margin-right: 10px;
      word-spacing: 5px;
      color: white;
      text-align: center;
    }

    .paragraph {
      font-size: 18px;
      color: #6e6e6e;
      color: white;
      font-weight: 400;
      margin: 0;
      text-align: center;
    }

    a {
      background-color: #fff;
      color: #010101;
      border: none;
      border-radius: 50px;
      width: 250px;
      font-size: 17px;
      margin-top: 10px;
      text-align: center;
      padding:15px 0;
    }
  }

  @media (max-width: 567px) {
    .content_div {
      width: 90%;
      padding: 0 10px;
      .paragraph {
        text-align: center;
      }
    }
  }

  @media (min-width: 567px) and (max-width:992px){
    margin: 30px 0;


  }
`;
