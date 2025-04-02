import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
// import anup from "../../../assets/img/custom/Anup.jpg";
// import boy from "../../../assets/img/custom/boy.png";
// import boyy from "../../../assets/img/custom/boyy.jpg";

function Testimonial() {
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Root>
      <section className="testimonial-area-two test_div">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title-two white-title text-center mb-50 tg-heading-subheading animation-style3">
                <span className="sub-title">Our Testimonials</span>
                <h2 className="title tg-element-title">What Our Client Says</h2>
              </div>
            </div>
          </div>

          <div className="testimonial-item-wrap-two">
            <div className="row testimonial-active-two">
              <div className="slider-container">
                <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
                  <div>
                    <div className="frame_review">
                      <div className="frame_video">
                        <iframe
                          src="https://www.youtube.com/embed/62QxQRt7Yr4?si=2D8R5iVFWpiQTOjA"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        ></iframe>
                      </div>

                      <div className="test-content">
                        <p>
                          I have had an amazing experience working with this
                          company. Adarsh Poddar, who I worked most with, was
                          extremely professional and went above and beyond all
                          expectations to ensure that my project was completed
                          to my satisfaction.
                        </p>
                        <div className="profile_desc">
                          {/* <img src={anup} alt="img" /> */}
                          <div className="profile_content">
                            <h4>Amit Rathore</h4>
                            <p>Yaara Pro</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="frame_review">
                      <div className="frame_video">
                        <iframe
                          src="https://www.youtube.com/embed/62QxQRt7Yr4?si=2D8R5iVFWpiQTOjA"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div className="test-content">
                        <p style={{ fontWeight: "400" }}>
                          The most trust worthy people at work, Thank you Phanom
                          Professional experts’ team, you have done a tremendous
                          job in getting our Gourmet business and the flow of
                          the order on our website to a heavy side. Our
                          customers are rapidly growing with the loads of
                          orders.
                        </p>
                        <div className="profile_desc">
                          {/* <img src={boy} alt="img" /> */}
                          <div className="profile_content">
                            <h4>Bharat Laskari</h4>
                            <p>925 Silver Jaipur</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="frame_review">
                      <div className="frame_video">
                        <iframe
                          src="https://www.youtube.com/embed/62QxQRt7Yr4?si=2D8R5iVFWpiQTOjA"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div className="test-content">
                        <p style={{ fontWeight: "400" }}>
                          Amazing Web development company I have ever dealt
                          with. I had my WordPress website to be integrated with
                          some other PHP Framework and Phanom Professionals's
                          team did it for me and they were on time. Great team
                          to work with.
                        </p>
                        <div className="profile_desc">
                          {/* <img src={boyy} alt="img" /> */}
                          <div className="profile_content">
                            <h4>Sunny Sharma</h4>
                            <p>TSIC</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            {/* <div className="testimonial-nav-two"></div> */}
          </div>
        </div>
      </section>
    </Root>
  );
}
export default Testimonial;

const Root = styled.section`
  .test_div {
    padding: 60px 140px;
    background-color: #13c9df;
  }

  .slick-track {
    display: flex;
    gap: 40px;
  }

  .slick-initialized .slick-slide {
    display: block;
    background: white;
    padding: 50px;
    border-radius: 15px;
  }

  .slick-slide img {
    display: block;
    width: 50px;
    width: 50px;
    border-radius: 50px;
    height: 50px;
    object-fit: cover;
  }

  .profile_desc {
    display: flex;
    gap: 20px;
    h4 {
      margin-bottom: 0;
    }
  }

  .frame_review {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    .frame_video {
      flex: 1;
      height: 300px;
      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }

  .test-content {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h4 {
      color: #13c9df;
    }
  }

  @media (max-width: 567px) {
    .test_div {
      padding: 60px 20px;
    }

    .frame_review {
      flex-direction: column;
    }

   .slick-initialized .slick-slide {
    display: block;
    background: white;
    padding: 20px;
    border-radius: 15px;
}

.frame_review {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

 .slick-track {
    display:flex;
    gap: 0; 
}

.frame_review .frame_video iframe {
    width:100%;
    height:300px;
}


  }

  @media (min-width: 567px) and (max-width: 992px) {
  .test_div {
    padding: 60px 20px;
}
.frame_review {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    flex-direction: column;
}
  

.slick-track {
    display:flex;
     gap:0; 
}
.frame_review .frame_video iframe {
    height: 300px;
}
  }
`;
