import React from "react";
import styled, { keyframes } from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import adrsh from "../../../Assets/Images/adrsh.png";
import img1 from "../../../Assets/logo/material-symbols_partner-exchange-rounded.png"
import img2 from "../../../Assets/logo/fluent_mobile-optimized-20-filled.png";
import img3 from "../../../Assets/logo/Mask group.png"

const Adarsh = () => {
  return (
    <Container>
      <TopSection>
        <UserName>Adarsh</UserName>
        <UserRole>Phanom Guide</UserRole>
      </TopSection>
      <LeftSection>
        <ProfileImage src={adrsh} alt="Adarsh" />
      </LeftSection>
      <RightSection>
        <Tagline>Virtual Private Server</Tagline>
        <Title>Flexible, private, and affordable VPS Hosting</Title>
        <Feature>
         <img src={img1} alt="img"/>  Expand major projects with hardware strategy design options.
        </Feature>
        <Feature>
        <img src={img2} alt="img"/> Pick Your Dream OS.
        </Feature>
        <Feature>
        <img src={img3} alt="img"/>  Maintain Sites and Applications uptime of 99.9%.*
        </Feature>
        <ButtonGroup>
          <PrimaryButton style={{width:"15vw", fontSize:"20px"}} >Get Plans and Pricing →</PrimaryButton>
          <SecondaryButton className="vps-button">
  Buy Fully Managed VPS
</SecondaryButton>
        </ButtonGroup>
        <Rating>
          <Stars>
            {[...Array(4)].map((_, i) => (
              <AiOutlineStar key={i} color="#ffcc00" />
            ))}
            <AiOutlineStar color="#ccc" />
          </Stars>
          4.6 out of 5 stars based on 110,937 reviews <ViewAll>View All</ViewAll>
        </Rating>
      </RightSection>
    </Container>
  );
};

export default Adarsh;

// Gradient Animation using #ff00ff, #9933ff, #3399ff
// background: linear-gradient(270deg, rgba(67, 156, 225, 0.35) 1.22%, rgba(141, 89, 229, 0.35) 50.09%, rgba(200, 28, 230, 0.35) 98.96%);

const gradientAnimation = keyframes`
  0% { background: linear-gradient(270deg, rgba(67, 156, 225, 0.35) 1.22%, rgba(200, 28, 230, 0.35) 50.09% , rgba(141, 89, 229, 0.35)  98.96%); }
  50% { background: linear-gradient(270deg,rgba(141, 89, 229, 0.35) 1.22%, rgba(67, 156, 225, 0.35) 50.09%  ,  rgba(200, 28, 230, 0.35) 98.96%); }
  100% { background: linear-gradient(270deg, rgba(67, 156, 225, 0.35) 1.22%, rgba(141, 89, 229, 0.35) 50.09%, rgba(200, 28, 230, 0.35) 98.96%); }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 60px 0px;
  border-radius: 10px;
  max-width: 100vw;
  margin: 0px 0px 40px;
  animation: ${gradientAnimation} 6s infinite alternate ease-in-out;
`;

const TopSection = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 67vh;
`;
const LeftSection = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserName = styled.h2`
  margin-top: 10px;
  font-size: 42px;
  font-weight: bold;
  text-transform: capitalize;
  line-height: 44px;
  letter-spacing: 0.5%;
`;

const UserRole = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
`;

const RightSection = styled.div`
  flex: 1;
  padding-left: 40px;
`;

const Tagline = styled.p`
  font-size: 22px;
  color: #666;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: 45px;
  font-weight: bold;
  margin-top: 10px;
  width: 60%;
`;

const Feature = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  color: #333;
  margin: 10px 0;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const PrimaryButton = styled.button`
  background: #6c5ce7;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SecondaryButton = styled.button`
  background: transparent;
  border: none;
  color: Black;
  font-size: 16px;
  cursor: pointer;
  width: 15vw;
  font-size: 20px;
  color: black;
  border: none;
  cursor: pointer;
  transition:  color 0.3s ease-in-out;


  &:hover {
    color: #CC1CE5;
  }

`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  font-size: 20px;
  color: #333;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  margin-right: 10px;

  svg {
    color: rgb(255, 204, 0);
    height: 25px;
    width: 25px;
}
`;

const ViewAll = styled.span`
  color: #6c5ce7;
  font-weight: bold;
  cursor: pointer;
  margin-left:12px;
`;
