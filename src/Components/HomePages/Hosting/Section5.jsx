import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  GradientHeading,
  Heading,
  PointerHeading,
} from "../../Global/GlobalText";

export const Section5 = () => {
  return (
    <Root>
      <div className="main_div">
        <span>
          <Heading>Benefits of</Heading>
          <GradientHeading> Phanom VPS Hosting! </GradientHeading>
        </span>

        <div className="sub_main_div">
          <div className="sub_content_div">
            <PointerHeading> Peace of Mind!</PointerHeading>
            <Blackdescription>
            Knowing your servers are in 
            expert hands.
            </Blackdescription>
          </div>

          <div className="sub_content_div">
            <PointerHeading> Improved Performance</PointerHeading>
            <Blackdescription>
            Optimized configurations for faster load times.
            </Blackdescription>
          </div>

          <div className="sub_content_div">
            <PointerHeading>Cost-Effective Solutions</PointerHeading>
            <Blackdescription>
                 Save money with our bundled services.
            </Blackdescription>
          </div>
        </div>

        <div className="sub_main_div">
          <div className="sub_content_div">
            <PointerHeading> Time Savings</PointerHeading>
            <Blackdescription>
                 Spend less time on technical issues and more on growing your business.
            </Blackdescription>
          </div>

          <div className="sub_content_div">
            <PointerHeading> Enhanced Security</PointerHeading>
            <Blackdescription>
            Regular audits and advanced threat protection.
            </Blackdescription>
          </div>

          <div className="sub_content_div">
            <PointerHeading>Reliable Scalability</PointerHeading>
            <Blackdescription>
                  Easily adjust resources as your business demands grow.
            </Blackdescription>
          </div>

        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 20px 70px;
  
  .main_div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    .sub_main_div {
      display: flex;
      gap: 50px;
      margin-top: 20px;
      width:100%;

      .sub_content_div {
        flex: 1;
        display: flex;
        flex-direction: column;
        
      }
    }
  }

  @media (max-width: 567px) {
    padding:   0 20px 20px ;
    .main_div{
      span{
        text-align: center;
      }

   .sub_main_div {
   flex-direction: column;
   gap:20px;
}
    }
    

  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding:   50px 20px;
  }
`;
