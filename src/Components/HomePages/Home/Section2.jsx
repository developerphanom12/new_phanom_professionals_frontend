import React, { useRef } from "react";
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Textwithborder } from "../../../Global/GlobalText";
import { PurpleSecondBackground } from "../../../Global/GlobalButton";
import img1 from "../../../Assets/logo/Frame 1618873867 (1).png";
import img2 from "../../../Assets/logo/Frame 1618873868 (1).png";
import img3 from "../../../Assets/logo/Frame 1618873869 (1).png";
import img4 from "../../../Assets/logo/Frame 1618873870 (1).png"
import img5 from "../../../Assets/logo/Frame 1618873871.png";
import img6 from "../../../Assets/logo/Frame 1618873873.png"
import img7 from "../../../Assets/logo/Frame 1618873874.png"
import img8 from "../../../Assets/logo/Frame 1618873875.png"
import img9 from "../../../Assets/logo/Frame 1618873876.png"
import img10 from "../../../Assets/logo/Frame 1618873878.png"
import img11 from "../../../Assets/logo/Frame 1618873879.png"
import img12 from "../../../Assets/logo/Frame 1618873880.png"
import img13 from "../../../Assets/logo/Frame 1618873881.png"
import img14 from "../../../Assets/logo/Frame 1618873882.png"
import img15 from "../../../Assets/logo/Frame 1618873883.png"
import img16 from "../../../Assets/logo/Frame 1618873885.png"
import img17 from "../../../Assets/logo/Frame 1618873888.png"
import img18 from "../../../Assets/logo/Frame 1618873891.png"
import img19 from "../../../Assets/logo/Frame 1618873892.png"
import image1 from "../../../Assets/logo/icon-park-outline_seo.png"
import image2 from "../../../Assets/logo/social-media-brands-and-logotypes-svgrepo-com 1.png"
import image3 from "../../../Assets/logo/pay-per-click-mouse-svgrepo-com 1.png"
import image4 from "../../../Assets/logo/line-md_youtube.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const cardSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  arrows: false  
};

const sectionSliderSettings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: "ease-in-out",
  arrows: false // Disable default arrows, we'll use custom arrows
};

export const Section2 = () => {
  const sectionSliderRef = useRef(null);
  const cardSliderRefs = useRef([]);

  // Set up refs for each section's card slider
  const setCardSliderRef = (ref, index) => {
    cardSliderRefs.current[index] = ref;
  };

  const goToNextSectionSlide = () => {
    if (sectionSliderRef.current) {
      sectionSliderRef.current.slickNext();
    }
  };

  const goToPrevSectionSlide = () => {
    if (sectionSliderRef.current) {
      sectionSliderRef.current.slickPrev();
    }
  };

  const goToNextCardSlide = (sectionIndex) => {
    if (cardSliderRefs.current[sectionIndex]) {
      cardSliderRefs.current[sectionIndex].slickNext();
    }
  };

  const goToPrevCardSlide = (sectionIndex) => {
    if (cardSliderRefs.current[sectionIndex]) {
      cardSliderRefs.current[sectionIndex].slickPrev();
    }
  };

  const sections = [
    // Section 1: Digital Marketing
    {
      title: "Digital Marketing",
      description: "Keep your lawn in top shape without lifting a finger and boost the appearance of your property.",
      cards: [
        {
          image: img1,
          stats: "240k+ Appointment Booked Today",
          features: "Technical SEO | On-Page SEO | Local SEO"
        },
        {
          image: img2,
          stats: "240k+ Appointment Booked Today",
          features: "Facebook | Instagram | LinkedIn | Pinterest"
        },
        {
          image: img3,
          stats: "240k+ Appointment Booked Today",
          features: "Google Ads | Display Ads | Lead Generation"
        },
        {
          image: img4,
          stats: "240k+ Appointment Booked Today",
          features: "Channel SEO | Ads | Subscribers & Views"
        }
      ]
    },
    // Section 2: Web Development
    {
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies to give your business the digital presence it deserves.",
      cards: [
        {
          image: img5,
          stats: "150+ Websites Launched This Month",
          features: "React | Vue | Angular | Responsive Design"
        },
        {
          image: img6,
          stats: "99.9% Uptime Guarantee",
          features: "Node.js | Python | PHP | Database Design"
        },
        {
          image: img7,
          stats: "500+ Active Online Stores",
          features: "Shopify | WooCommerce | Custom Solutions"
        },
        {
          image: img8,
          stats: "1000+ CMS Implementations",
          features: "WordPress | Drupal | Custom CMS Solutions"
        }
      ]
    },
    // Section 3: App Development
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences across all devices.",
      cards: [
        {
          image: img9,
          stats: "50+ Apps in App Store",
          features: "Swift | SwiftUI | Objective-C"
        },
        {
          image: img10,
          stats: "100+ Apps in Play Store",
          features: "Kotlin | Java | Android SDK"
        },
        {
          image: img11,
          stats: "40% Development Time Saved",
          features: "React Native | Flutter | Xamarin"
        },
        {
          image: img12,
          stats: "70% Better Performance",
          features: "Service Workers | Offline Functionality"
        }
      ]
    },
    // Section 4: Graphic Design
    {
      title: "Graphic Design",
      description: "Eye-catching visual content that strengthens your brand identity and captivates your audience.",
      cards: [
        {
          image: img13,
          stats: "1000+ Unique Designs Created",
          features: "Vector | Raster | Minimalist | 3D"
        },
        {
          image: img14,
          stats: "500+ Business Cards & Brochures",
          features: "Brochures | Business Cards | Flyers"
        },
        {
          image: img15,
          stats: "200+ Interface Designs",
          features: "Website | Mobile | Dashboard | User Flow"
        },
        {
          image: img16,
          stats: "10k+ Posts Created",
          features: "Instagram | Facebook | Twitter | LinkedIn"
        }
      ]
    },
    // Section 5: Content Writing
    {
      title: "Content Writing",
      description: "Compelling, SEO-optimized content that engages your audience and ranks well in search engines.",
      cards: [
        {
          image: img17,
          stats: "500+ Articles Published",
          features: "SEO-Optimized | Niche Topics | Research"
        },
        {
          image: img18,
          stats: "300+ Websites Populated",
          features: "Landing Pages | About Us | Services"
        },
        {
          image: img19,
          stats: "45% Average Open Rate",
          features: "Newsletters | Campaigns | Automation"
        },
        {
          image: img19,
          stats: "2000+ Engaging Posts",
          features: "Captions | Hashtags | Content Calendar"
        }
      ]
    }
  ];

  return (
    <SectionContainer>
      {/* Left Side - Stays constant */}
      <LeftContent>
        <Textwithborder style={{ fontSize: "48px" }}>
          Explore <br /> our <br /> Service
        </Textwithborder>
        <p>
          Explore our service and discover solutions designed to meet your
          unique needs. With a focus on quality and innovation, we turn your
          vision into reality.
        </p>
        <PurpleSecondBackground>Book an Appointment</PurpleSecondBackground>
      </LeftContent>

      <RightContentWrapper>
        <CommonDiv>
          <Slider ref={sectionSliderRef} {...sectionSliderSettings}>
            {sections.map((section, index) => (
              <div key={index}>
                <RightContent>
                  <h3>{section.title}</h3>
                  <p className="p">{section.description}</p>

                  <CardSliderContainer>
                    <CardArrowLeft onClick={() => goToPrevCardSlide(index)}>
                      <FaArrowLeft />
                    </CardArrowLeft>
                    
                    <CardContainer 
                      ref={(ref) => setCardSliderRef(ref, index)}
                      {...cardSliderSettings}
                    >
                      {section.cards.map((card, cardIndex) => (
                        <CardWrapper key={cardIndex}>
                          <Card>
                            <CardImage>
                              <img src={card.image} alt={`${section.title} service ${cardIndex + 1}`} />
                            </CardImage>
                            <CardContent>
                              <p className="smallp">{card.stats}</p>
                              <p>{card.features}</p>
                              <button>Learn More</button>
                            </CardContent>
                          </Card>
                        </CardWrapper>
                      ))}
                    </CardContainer>
                    
                    <CardArrowRight onClick={() => goToNextCardSlide(index)}>
                      <FaArrowRight />
                    </CardArrowRight>
                  </CardSliderContainer>
                </RightContent>
              </div>
            ))}
          </Slider>
          
          <ToolsSection>
            <ToolsHeading>Tools:</ToolsHeading>
            <ToolsIconContainer>
              <ToolIcon>
                <img src={image1} alt="img"/>
              </ToolIcon>
              <ToolIcon>
              <img src={image2} alt="img"/>
              </ToolIcon>
              <ToolIcon>
                <img src={image3} alt="img"/>
              </ToolIcon>
              <ToolIcon>
                <img src={image4} alt="img"/>
              </ToolIcon>
            </ToolsIconContainer>
          </ToolsSection>
        </CommonDiv>
        
        <SectionNavigationContainer>
          <SectionArrowLeft onClick={goToPrevSectionSlide}>
            <FaArrowLeft />
          </SectionArrowLeft>
          <SectionArrowRight onClick={goToNextSectionSlide}>
            <FaArrowRight />
          </SectionArrowRight>
        </SectionNavigationContainer>
      </RightContentWrapper>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 50px;
  max-width: 90vw;
  width: 100%;
  margin: auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftContent = styled.div`
  max-width: 300px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #9c89f6;
    text-transform: uppercase;
    line-height: 1.2;
  }

  p {
    margin: 15px 0;
    font-size: 18px;
    color: #333;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const RightContentWrapper = styled.div`
  width: 100%;
  max-width: 56vw;
  position: relative;
  margin: 0px 20px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const RightContent = styled.div`
  h3 {
    color: #7a57d1;
    font-weight: 500;
    font-size: 28.38px;
    line-height: 36.49px;
    letter-spacing: 0.5%;
    vertical-align: middle;
  }

  .p {
    color: #444;
    font-family: "Cambria";
    font-weight: 400;
    font-size: 18.25px;
    line-height: 28.38px;
    letter-spacing: 0%;
    vertical-align: middle;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

// Card Slider Container to position the arrows
const CardSliderContainer = styled.div`
  position: relative;
  margin-top: 20px;
`;

const CardContainer = styled(Slider)`
  .slick-track {
    display: flex !important;
  }
  
  .slick-slide {
    height: inherit !important;
    padding: 10px;
    
    & > div {
      height: 100%;
    }
  }
`;

const CardWrapper = styled.div`
  height: 100%;
  padding: 5px;
`;

const Card = styled.div`
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 230px;
  box-shadow: 0px 0px 4px 0px #00000040;
  overflow: hidden;
`;

const CardImage = styled.div`
  height: 100px;
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5; /* Light gray background for any empty space */
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: 3/2;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const CardContent = styled.div`
  padding: 10px;
  background: white;
  
  .smallp {
    font-family: "Cambria";
    font-weight: 400;
    font-size: 10px;
    line-height: 14.19px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #8e8e8e;
    margin: 0;
  }
  
  p {
    font-family: "Cambria";
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0%;
    vertical-align: middle;
    margin: 5px 0;
    color: #000;
  }

  button {
    width: 120px;
    margin: 10px 0;
    border-width: 1px;
    border-radius: 13.18px;
    padding: 3.04px 10.14px;
    border: 1px solid #000000;
    font-family: "Cambria";
    font-weight: 400;
    font-size: 12px;
    line-height: 14.19px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #000000;
    background: transparent;
    
    &:hover {
      background: rgba(20, 14, 14, 0.8);
      color: #fff;
    }
  }
`;

// New Tools Section Components
const ToolsSection = styled.div`
  display: flex;
  align-items: center;
  background: white;
  margin-top: 15px;
`;

const ToolsHeading = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #7a57d1;
`;

const ToolsIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ToolIcon = styled.div`
  width: 32px;
  height: 32px;
  margin: 0 3px;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #7a57d1;
  
  &:hover {
    background: #e0e0e0;
    transform: scale(1.1);
  }
  
  svg {
    font-size: 16px;
  }
`;

// Common Arrow Styling for card navigation
const ArrowBase = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #9c89f6;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    color: #7a57d1;
    transform: scale(1.1);
  }
  
  svg {
    font-size: 18px;
  }
`;

// Card Arrow Positioning - at the sides of cards with no background
const CardArrowLeft = styled(ArrowBase)`
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
`;

const CardArrowRight = styled(ArrowBase)`
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
`;

// Section Navigation Container - positioned at bottom right
const SectionNavigationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  gap: 10px;
`;

// Section Arrow Styling - purple with slightly larger size
const SectionArrowBase = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #9c89f6;
  transition: all 0.3s ease;
  
  &:hover {
    color: #7a57d1;
    transform: scale(1.1);
  }
  
  svg {
    font-size: 20px;
  }
`;

const SectionArrowLeft = styled(SectionArrowBase)``;
const SectionArrowRight = styled(SectionArrowBase)``;

const CommonDiv = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 0px 4px 0px #0000002e;
  width: 100%;
  height: 100%;
`;