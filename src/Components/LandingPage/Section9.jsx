import React, { useMemo } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { BsFillStarFill } from "react-icons/bs";

// Import Images (Lazy Loading Applied)
import anup from "../../Assets/Images/anup.jpg";
import downa from "../../Assets/Images/downa.jfif";
import downb from "../../Assets/Images/downb.jfif";
import downc from "../../Assets/Images/downc.jfif";
import downd from "../../Assets/Images/downd.jfif";
import downe from "../../Assets/Images/downe.jfif";
import downf from "../../Assets/Images/downf.jfif";
import downg from "../../Assets/Images/downg.jfif";

// ⭐ Review Data Structure
const reviews = [
  { name: "Alex T", img: downa, review: "The custom Shopify store they built for us exceeded our expectations.", role: "E-commerce Store Owner" },
  { name: "Sarah P", img: downc, review: "Phanom Techno brought our vision to life with a custom software solution.", role: "SaaS Startup Founder" },
  { name: "John D", img: downb, review: "The best development agency I’ve worked with!", role: "Marketing Agency Owner" },
  { name: "Mary K", img: downd, review: "The team was incredibly responsive. The final product was flawless.", role: "Fitness Coach" },
  { name: "Rajesh K", img: anup, review: "Website traffic increased by 40% after their redesign.", role: "Business Consultant" },
  { name: "Emily R", img: downe, review: "They delivered our platform on time and within budget.", role: "Tech Entrepreneur" },
  { name: "Sam M", img: downf, review: "Handled our complex backend integrations effortlessly.", role: "Logistics Manager" },
  { name: "Mike S", img: downg, review: "Transformed our online presence with an amazing website.", role: "Restaurant Owner" },
];

export const Section9 = React.memo(() => {
  // Memoized Slider Settings (Prevents Re-renders)
  const sliderSettings = useMemo(() => ({
    dots: true,
    infinite: true, // Enables infinite loop
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Every 3 seconds
    lazyLoad: "ondemand", // Loads images on demand
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  }), []);

  return (
    <Root>
      <div className="main_div">
        <h2 className="first-content">
          What <span style={{ color: "#0b66c2" }}>Our Customers</span> Say
        </h2>

        {/* Desktop Reviews */}
        <div className="view">
          <div className="rev_div">
            {reviews.slice(0, 4).map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
          <div className="rev_div">
            {reviews.slice(4, 8).map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="mob">
          <Slider {...sliderSettings}>
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </Slider>
        </div>
      </div>
    </Root>
  );
});

// 🎭 Reusable Review Card Component (Optimized for Performance)
const ReviewCard = React.memo(({ review }) => (
  <div className="rev_sub_div">
    <div className="img_content">
      <img src={review.img} alt={review.name} loading="lazy" />
      <div className="name_div">
        <h5>{review.name}</h5>
        <div className="star">
          <p>5.0</p>
          {[...Array(5)].map((_, i) => (
            <BsFillStarFill key={i} />
          ))}
        </div>
      </div>
    </div>
    <p>{review.review} – <b>{review.role}</b></p>
  </div>
));

const Root = styled.section`
  padding: 3% 10%;

  .mob{
    display: none;
  }

  .view {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
  .main_div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .first-content {
    font-size: 45px;
    font-weight: bold;
    line-height: 1.3em;
    margin-right: 10px;
    word-spacing: 5px;
  }
  
  .rev_div {
    display: flex;
    gap: 10px;
    width: 100%;
    .rev_sub_div {
      width: 25%;
      border: 1px solid #d9d3d3;
      padding: 10px;
      border-radius: 10px;
      flex-direction: column;
      gap: 20px;
      display: flex;
      flex-wrap: wrap;
      .img_content {
        display: flex;
        gap: 10px;
        align-items: center;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50px;
        }
        .name_div {
          display: flex;
          flex-direction: column;
          h5 {
            margin: 0;
          }
          .star {
            display: flex;
            gap: 5px;
            align-items: center;
            p {
              margin: 0;
            }

            svg {
              color: #ffb443;
              width: 15px;
              height: 20px;
            }
          }
        }
      }
    }
  }

  .slick-slider .slick-list .rev_sub_div {
    border:1px solid #d9d3d3;
    padding:10px;
    border-radius:10px;
    height:205px;
    .img_content {
      display: flex;
      gap: 10px;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
      }
      .name_div {
        display: flex;
        flex-direction: column;
        h5 {
          margin: 0;
        }
        .star {
          display: flex;
          gap: 5px;
          align-items: center;
          p {
            margin: 0;
          }

          svg {
            color: #ffb443;
            width: 15px;
            height: 20px;
          }
        }
      }
    }
    p{
      margin-top:10px;
    }
  }

  .slick-track {
      display: flex;
      gap:10px;
}

  @media (max-width: 567px) {
    padding: 10% 5% 10%;
    .rev_div {
      flex-wrap: wrap;
      .rev_sub_div {
        width: 100%;
        border: 1px solid #d9d3d3;
        padding: 10px;
        border-radius: 10px;
        flex-direction: column;
        gap: 20px;
        display: flex;
        flex-wrap: wrap;
      }
    }

    .first-content {
      font-size: 35px;
      text-align: center;
      margin:0;
    }

    .view{
      display: none;
    }

  .mob{
    display: block;
    margin-top: 20px;
  }

  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 1% 5%;
    .mob{
      display: none;
    }
    .rev_div {
      flex-wrap: wrap;
      .rev_sub_div {
        width: 48%;
        border: 1px solid #d9d3d3;
        padding: 10px;
        border-radius: 10px;
        flex-direction: column;
        gap: 20px;
        display: flex;
        flex-wrap: wrap;
      }
    }

    .first-content {
      text-align: center;
    }
  }
`;
