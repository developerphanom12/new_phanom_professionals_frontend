import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  GradientHeading,
  GradientSecondHeading,
  Heading,
} from "../../../Global/GlobalText";
import BlogsSection from "./BlogsSection";



export const Section9 = () => {
  return (
    <Root>
      <div className="main_div">
        <span>
          <Heading>Our</Heading>
          <GradientHeading>Blog</GradientHeading>
          <Heading>and</Heading>
          <GradientSecondHeading>Articles</GradientSecondHeading>
        </span>

        <Blackdescription>
          Take a look at our Company’s Blog Series or read some professional
          gardening insights and news.
        </Blackdescription>

        <BlogsSection/>

   
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 20px 100px 50px;
  .main_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    .blog_main_div {
      display: flex;
      gap: 30px;
      margin-top: 10px;
      .sub_blog_div {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 14px;

        .icon_content {
          display: flex;
          gap: 6px;
          align-items: center;
          img {
            width: 24px;

            object-fit: contain;
            aspect-ratio: 3 / 2;
          }
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding: 20px;
  .main_div{ 
    gap:20px;
    p{
      text-align: center;
    }
  .blog_main_div {
   
    flex-direction: column;
    align-items: center;
    margin: 0;
    .sub_blog_div{
      width: 90%;
     p{
          text-align: left;
     }
    }
}
  }

  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 20px;
    .main_div{ 
    gap:20px;
    p{
      text-align: center;
    }
    .blog_main_div {
   
   flex-wrap: wrap;
   .sub_blog_div{
    flex:unset;
    width: 47%;
    p{
      text-align: left;
    }
   }
  }

  }
}
`;
