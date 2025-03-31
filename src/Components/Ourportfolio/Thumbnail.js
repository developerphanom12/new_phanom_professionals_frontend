import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bgg from "../../Images/bg.png";
import logo from "../../Images/download (1).png";
import Modal from "react-bootstrap/Modal";
import { IoLocationSharp } from "react-icons/io5";
import { FaCirclePlus, FaSquarePinterest, FaYoutube } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import Formm from "../Home/Formm";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { TiEyeOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import axios from "axios";
import {
  EXCHANGE_URLS_BUYER,
  EXCHANGE_URLS_IMAGES,
} from "../../Important/URLS";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

const tagsList = [
  { title: "Branding & Logos", value: "brandinglogos" },
  { title: "Web design", value: "webdesign" },
  { title: "Advertisement", value: "advertisement" },
  { title: "Packaging & Labeling", value: "packaginglabeling" },
  { title: "Video Marketing", value: "videomarketing" },
  { title: "SEO Portfolio", value: "seoportfolio" },
];

function Thumbnail() {
  const [selectedButton, setSelectedButton] = useState(1);
  const [views, setViews] = useState(107);
  const [appreciations, setAppreciations] = useState(4);
  const [show, setShow] = useState(false);
  const [heart, setHeart] = useState(2);
  const [eye, setEye] = useState(12);
  const [collection, setCollection] = useState([]);
  const [portdata, setPortdata] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState([]);
  const [selectedWebDesignItem, setSelectedWebDesignItem] = useState([]);
  const [selectedAdvertisementItem, setSelectedAdvertisementItem] = useState(
    []
  );
  const [selectedPackagingItem, setSelectedPackagingItem] = useState([]);
  const [selectedVideoMarketing, setVideoMarketingItem] = useState([]);
  const [selectedSeo, setSelectedSeo] = useState([]);
  const [selectedTag, setSelectedTag] = useState(tagsList[0]?.value || "");

  // selected tags

  const navigate = useNavigate();
  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          `${EXCHANGE_URLS_BUYER}/portfoliogetdata?tags=${selectedTag}`
        );
        if (response.status === 200) {
          console.log("reponse", response);
          setCollection(response.data.data);
        }
      } catch (error) {
        toast.error("error");
      }
    };
    getApi();

    // Function to increment view count

    const incrementViews = () => {
      setViews((prevViews) => prevViews + 1);
    };

    const incrementAppreciations = () => {
      setAppreciations((prevAppreciations) => prevAppreciations + 1);
    };

    const incrementHeart = () => {
      setHeart((prevHeart) => prevHeart + 1);
    };

    const incrementEye = () => {
      setEye((prevHeart) => prevHeart + 1);
    };

    // Set interval to update view count every second
    const intervalId = setInterval(incrementViews, 2000); // Adjust the interval as needed
    const intervalValue = setInterval(incrementAppreciations, 2000);
    const intervalHeart = setInterval(incrementHeart, 2000);
    const intervalEye = setInterval(incrementEye, 2000);

    // Clean up interval on component unmount
    return () => {
      clearInterval(intervalId);
      clearInterval(intervalValue);
      clearInterval(intervalHeart);
      clearInterval(intervalEye);
    };
  }, [selectedTag]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    setSelectedTag(tagsList[buttonIndex - 1]?.value || "");
  };

  // const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const brandingLogosContent = (
    <>
      {collection.map((brand, index) => (
        <div key={index} className="containerrr">
          <img
            src={`${EXCHANGE_URLS_IMAGES}/${brand.image}`}
            alt="Branding Images"
            className="className"
            style={{ width: "100%" }}
            onClick={() => {
              setSelectedPortfolioItem(brand); // Store the clicked item data
              setSelectedWebDesignItem(null); // Clear web design item
              setSelectedAdvertisementItem(null); // Clear advertisement item
              setSelectedPackagingItem(null); // Clear packaging & Labeling item
              setVideoMarketingItem(null); // Clear Video Marketing item
              setSelectedSeo(null); // Clear Seo item
              porthandleShow(); // Show the modal
            }}
          />
          <div className="middle"></div>
          <div className="like_view_div">
            <Checkbox
              icon={<FavoriteBorder className="heart_icon" />}
              checkedIcon={
                <Favorite
                  defaultChecked
                  sx={{
                    color: "#13c9df",
                    "&.Mui-checked": { color: "#13c9df" },
                  }}
                />
              }
            />
            <p>{heart}</p>
            <TiEyeOutline className="eye_icon" />
            <p>{eye}</p>
          </div>
        </div>
      ))}
    </>
  );

  const webdesign = (
    <>
      {collection.map((brand, index) => (
        <div key={index} className="containerrr">
          <img
            src={`${EXCHANGE_URLS_IMAGES}/${brand.image}`}
            alt="Branding Images"
            className="className"
            style={{ width: "100%" }}
            onClick={() => {
              setSelectedPortfolioItem(null);
              setSelectedWebDesignItem(brand);
              setSelectedAdvertisementItem(null);
              setSelectedPackagingItem(null);
              setVideoMarketingItem(null);
              setSelectedSeo(null);
              porthandleShow();
            }}
          />
          <div className="middle"></div>
          <div className="like_view_div">
            <Checkbox
              icon={<FavoriteBorder className="heart_icon" />}
              checkedIcon={
                <Favorite
                  defaultChecked
                  sx={{
                    color: "#13c9df",
                    "&.Mui-checked": { color: "#13c9df" },
                  }}
                />
              }
            />
            <p>{heart}</p>
            <TiEyeOutline className="eye_icon" />
            <p>{eye}</p>
          </div>
        </div>
      ))}
    </>
  );

  const advertisement = (
    <>
      {collection.map((brand, index) => (
        <div key={index} className="containerrr">
          <img
            src={`${EXCHANGE_URLS_IMAGES}/${brand.image}`}
            alt="Branding Images"
            className="className"
            style={{ width: "100%" }}
            onClick={() => {
              setSelectedPortfolioItem(null);
              setSelectedWebDesignItem(null);
              setSelectedAdvertisementItem(brand);
              setSelectedPackagingItem(null);
              setVideoMarketingItem(null);
              setSelectedSeo(null);
              porthandleShow();
            }}
          />
          <div className="middle"></div>
          <div className="like_view_div">
            <Checkbox
              icon={<FavoriteBorder className="heart_icon" />}
              checkedIcon={
                <Favorite
                  defaultChecked
                  sx={{
                    color: "#13c9df",
                    "&.Mui-checked": { color: "#13c9df" },
                  }}
                />
              }
            />
            <p>{heart}</p>
            <TiEyeOutline className="eye_icon" />
            <p>{eye}</p>
          </div>
        </div>
      ))}
    </>
  );

  const packaginglabeling = (
    <>
      {collection.map((brand, index) => (
        <div key={index} className="containerrr">
          <img
            src={`${EXCHANGE_URLS_IMAGES}/${brand.image}`}
            alt="Branding Images"
            className="className"
            style={{ width: "100%" }}
            onClick={() => {
              setSelectedPortfolioItem(null);
              setSelectedWebDesignItem(null);
              setSelectedAdvertisementItem(null);
              setSelectedPackagingItem(brand);
              setVideoMarketingItem(null);
              setSelectedSeo(null);
              porthandleShow();
            }}
          />
          <div className="middle"></div>
          <div className="like_view_div">
            <Checkbox
              icon={<FavoriteBorder className="heart_icon" />}
              checkedIcon={
                <Favorite
                  defaultChecked
                  sx={{
                    color: "#13c9df",
                    "&.Mui-checked": { color: "#13c9df" },
                  }}
                />
              }
            />
            <p>{heart}</p>
            <TiEyeOutline className="eye_icon" />
            <p>{eye}</p>
          </div>
        </div>
      ))}
    </>
  );

  const videomarketing = (
    <>
      {collection.map((brand, index) => (
        <div key={index} className="containerrr">
          <img
            src={`${EXCHANGE_URLS_IMAGES}/${brand.image}`}
            alt="Branding Images"
            className="className"
            style={{ width: "100%" }}
            onClick={() => {
              setSelectedPortfolioItem(null);
              setSelectedWebDesignItem(null);
              setSelectedAdvertisementItem(null);
              setSelectedPackagingItem(null);
              setVideoMarketingItem(brand);
              setSelectedSeo(null);
              porthandleShow();
            }}
          />
          <div className="middle"></div>
          <div className="like_view_div">
            <Checkbox
              icon={<FavoriteBorder className="heart_icon" />}
              checkedIcon={
                <Favorite
                  defaultChecked
                  sx={{
                    color: "#13c9df",
                    "&.Mui-checked": { color: "#13c9df" },
                  }}
                />
              }
            />
            <p>{heart}</p>
            <TiEyeOutline className="eye_icon" />
            <p>{eye}</p>
          </div>
        </div>
      ))}
    </>
  );

  const seoportfolio = (
    <>
      {collection.map((brand, index) => (
        <div key={index} className="containerrr">
          <img
            src={`${EXCHANGE_URLS_IMAGES}/${brand.image}`}
            alt="Branding Images"
            className="className"
            style={{ width: "100%" }}
            onClick={() => {
              setSelectedPortfolioItem(null);
              setSelectedWebDesignItem(null);
              setSelectedAdvertisementItem(null);
              setSelectedPackagingItem(null);
              setVideoMarketingItem(null);
              setSelectedSeo(brand);
              porthandleShow();
            }}
          />
          <div className="middle"></div>
          <div className="like_view_div">
            <Checkbox
              icon={<FavoriteBorder className="heart_icon" />}
              checkedIcon={
                <Favorite
                  defaultChecked
                  sx={{
                    color: "#13c9df",
                    "&.Mui-checked": { color: "#13c9df" },
                  }}
                />
              }
            />
            <p>{heart}</p>
            <TiEyeOutline className="eye_icon" />
            <p>{eye}</p>
          </div>
        </div>
      ))}
    </>
  );

  const renderContent = () => {
    switch (selectedButton) {
      case 1:
        return brandingLogosContent;
      case 2:
        return webdesign;
      case 3:
        return advertisement;
      case 4:
        return videomarketing;
      case 5:
        return packaginglabeling;
      case 6:
        return seoportfolio;
      default:
        return;
    }
  };

  const porthandleClose = () => setPortdata(false);
  const porthandleShow = () => setPortdata(true);

  return (
    <Root>
      <div className="bg_img"></div>

      <div className="main_div">
        <div className="sub_div_one">
          <div className="logo_div">
            <img src={logo} alt="logo img" />
          </div>
          <div className="profile">
            <h2>Phanom Team</h2>
            {/* <p>Senior Graphic Designers</p>
            <p>Phanom Professionals</p>
            <button>https://www.phanomprofessionals.com/</button> */}
          </div>
          <div className="location">
            <IoLocationSharp />
            <p>Mohali, India</p>
          </div>

          <div className="btn_div">
            <button className="follow_btn">
              <FaCirclePlus />
              Follow
            </button>
            <button className="message_btn" onClick={handleShow}>
              <FaEnvelope />
              Hire us Now
            </button>
          </div>

          <div className="Project_views">
            <h5>Project Views</h5>
            <p>{views}</p>
          </div>

          <div className="Project_views">
            <h5>Appreciations</h5>
            <p>{appreciations}</p>
          </div>

          <div
            className="upload_material"
            onClick={() => {
              navigate("/upload");
            }}
          >
            <div className="upload_div">Upload New</div>
            <h2>Click here to Upload</h2>
          </div>

          <div className="web">
            <h2>ON THE WEB</h2>
            <div className="social_links">
              <a
                href="https://mobile.twitter.com/phanompro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="links_heading">
                  <div className="icon_title">
                    <AiFillTwitterCircle />

                    <span>Twitter</span>
                  </div>
                  <IoArrowRedoCircleOutline />
                </div>
              </a>

              <a
                href="https://www.facebook.com/phanom.professionals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="links_heading">
                  <div className="icon_title">
                    <IoLogoFacebook />
                    <span>Facebook</span>
                  </div>
                  <IoArrowRedoCircleOutline />
                </div>
              </a>

              <a
                href="https://www.instagram.com/phanomprofessionalsofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="links_heading">
                  <div className="icon_title">
                    <RiInstagramFill />
                    <span>Instagram</span>
                  </div>
                  <IoArrowRedoCircleOutline />
                </div>
              </a>

              <a
                href="https://www.youtube.com/@phanomprofessionals"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="links_heading">
                  <div className="icon_title">
                    <FaYoutube />
                    <span>YouTube</span>
                  </div>
                  <IoArrowRedoCircleOutline />
                </div>
              </a>

              <a
                href="https://in.pinterest.com/phanom_professionals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="links_heading">
                  <div className="icon_title">
                    <FaSquarePinterest />

                    <span>Pinterest</span>
                  </div>
                  <IoArrowRedoCircleOutline />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/phanom-professionals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="links_heading">
                  <div className="icon_title">
                    <BsLinkedin />
                    <span>LinkedIn</span>
                  </div>
                  <IoArrowRedoCircleOutline />
                </div>
              </a>
            </div>
          </div>

          <div className="about_div">
            <h2>ABOUT ME</h2>
            <p>
              Business consultant based in India, Phanom Professional have
              served many phenomenal services, which has been a great milestone
              for lots of start-ups proving them with Digital Marketing,
              packaging & labeling, video editing, explainer videos, Branding &
              Web Development & Designing assistance as well a…
            </p>
            {/* <div className="read_btn">
              Read More <IoIosArrowForward />
            </div> */}
          </div>

          {/* <div className="member_spec">
            <h5>MEMBER SINCE: SEPTEMBER 21, 2022</h5>
            <p>Report</p>
          </div> */}
        </div>

        <div className="sub_div_two">
          <div className="port_categ">
            {tagsList.map((tag, index) => (
              <button
                key={index}
                className={selectedButton === index + 1 ? "selected" : ""}
                onClick={() => handleButtonClick(index + 1)}
              >
                {tag.title}
              </button>
            ))}
          </div>
          <div className="fortfolio_img">{renderContent()}</div>
        </div>
      </div>

      <CustomModal
        show={show}
        onHide={handleClose}
        className="custom_large_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#13c9df", fontWeight: "600" }}>
            Hire us Now
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formm />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </CustomModal>

      <PortfolioModal show={portdata} onHide={porthandleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedPortfolioItem ? (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    selectedPortfolioItem.content || ""
                  ),
                }}
              />
            </>
          ) : selectedWebDesignItem ? (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    selectedWebDesignItem.content || ""
                  ),
                }}
              />
            </>
          ) : selectedAdvertisementItem ? (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    selectedAdvertisementItem.content || ""
                  ),
                }}
              />
            </>
          ) : selectedPackagingItem ? (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    selectedPackagingItem.content || ""
                  ),
                }}
              />
            </>
          ) : selectedVideoMarketing ? (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    selectedVideoMarketing.content || ""
                  ),
                }}
              />
            </>
          ) : selectedSeo ? (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(selectedSeo.content || ""),
                }}
              />
            </>
          ) : (
            "No Data Available"
          )}
        </Modal.Body>

        <Modal.Footer>
          <button className="close_btn" onClick={porthandleClose}>
            Close
          </button>
        </Modal.Footer>
      </PortfolioModal>
    </Root>
  );
}

export default Thumbnail;

const CustomModal = styled(Modal)`
  .modal-dialog {
    max-width: 1270px;
    margin: 1.75rem auto;
    height: 600px;
    overflow: auto;
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none;
  }
  .modal-dialog::-webkit-scrollbar {
    display: none; /* Hides the scrollbar */
  }

  @media (max-width: 567px) {
    .modal-body {
      padding: 0rem;
    }
  }
`;

const PortfolioModal = styled(Modal)`
  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    img {
      height: 300px;
      width: 100%;
    }
  }

  .close_btn {
    border: 1px solid transparent;
    border-radius: 50px;
    background: #13c9df;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    line-height: 18.15px;
    cursor: pointer;
    width: 130px;
    text-align: center;
    padding: 10px 10px;
  }
`;

const Root = styled.section`
  .bg_img {
    height: 300px;
    width: 100%;
    background-image: url(${bgg});
    background-size: 100% 100%;
  }

  .main_div {
    display: flex;
    padding: 0 50px;
    gap: 50px;
    .sub_div_one {
      width: 30%;
      padding: 25px 30px 16px;
      box-shadow: 0 1px 3px rgba(25, 25, 25, 0.1);
      background-color: #fff;
      border-radius: 3px;
      margin-top: -170px;
      .logo_div {
        display: flex;
        justify-content: center;
        img {
          width: 110px;
          height: 110px;
        }
      }
      .profile {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        h2 {
          font-size: 24px;
          font-weight: 600;
        }

        p {
          font-size: 15px;
          line-height: 1.4;
          margin: 1px 0 0 0;
          color: #696969;
          font-weight: 500;
        }

        button {
          font-size: 15px;
          line-height: 1.4;
          margin: 1px 0 0 0;
          color: #696969;
          font-weight: 500;
          text-decoration: underline;
          border: 1px solid transparent;
          background: none;
          cursor: pointer;
        }
      }

      .location {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        color: #696969;
        gap: 20px;
        p {
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 0;
        }
      }

      .btn_div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .follow_btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          background-color: #13c9df;
          color: white;
          font-size: 16px;
          border: 1px solid transparent;
          padding: 6px 0px;
          border-radius: 50px;
          font-weight: 600;
          gap: 10px;
        }
        .message_btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          color: #13c9df;
          font-size: 16px;
          border: 1px solid transparent;
          padding: 6px 0px;
          border-radius: 50px;
          font-weight: 600;
          gap: 10px;
        }
      }

      .hire {
        border: 1px solid #dee8ff;
        width: 100%;
        border-radius: 5px;
        padding: 10px 20px 5px;
        margin: 20px 0;

        h2 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #191919;
        }
        .first_heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #dee8ff;
          padding: 12px 0;
          color: #191919;
          cursor: pointer;
          &:hover {
            color: #13c9df;
          }
          svg {
            color: #13c9df;
          }

          .icon_title {
            display: flex;
            gap: 10px;
            align-items: center;
            span {
              font-weight: 600;
              font-size: 14px;
            }
          }
        }
      }

      .Project_views {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        h5 {
          font-size: 14px;
          color: #191919;
          margin: 0;
        }
        p {
          margin: 0;
        }
      }

      .web {
        margin-top: 20px;
        h2 {
          color: #707070;
          font-size: 11px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .social_links {
          border: 1px solid #dee8ff;
          width: 100%;
          border-radius: 5px;
          .links_heading {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #dee8ff;
            padding: 10px 20px;
            color: #191919;
            cursor: pointer;
            &:hover {
              background-color: #13c9df;
              color: #fff;
            }

            .icon_title {
              display: flex;
              gap: 10px;
              align-items: center;
              span {
                font-weight: 600;
                font-size: 14px;
              }
            }
          }
        }
      }

      .about_div {
        margin-top: 30px;
        h2 {
          color: #707070;
          font-size: 11px;
          font-weight: bold;
          text-transform: uppercase;
        }
        p {
          font-size: 14px;
          font-weight: 500;
        }
        /* .read_btn {
          display: flex;
          gap:5px;
          align-items: center;
          color: dimgray;
          font-size: 14px;
          transition:0.2s;
          margin-top:15px;
        } */
      }

      .upload_material {
        border: 1px solid #fbf0f0;
        display: flex;
        flex-direction: column;
        background-color: #eeeeee;
        border-radius: 25px;
        padding: 20px;
        align-items: center;
        gap: 10px;
        justify-content: center;
        margin-top: 10px;

        .upload_div {
          border: 1px solid transparent;
          border-radius: 50px;
          background: #13c9df;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          line-height: 18.15px;
          cursor: pointer;
          width: 150px;
          text-align: center;
          padding: 10px 10px;
        }

        h2 {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          color: #191919;
        }
      }

      .member_spec {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 20px;
        h5 {
          color: #707070;
          font-size: 11px;
          font-weight: bold;
          text-align: center;
          text-transform: uppercase;
        }
        p {
          color: dimgray;
          font-size: 13px;
          cursor: pointer;
        }
      }
    }

    .sub_div_two {
      width: 70%;
      padding-top: 30px;
      .port_categ {
        display: flex;
        gap: 10px;
        button {
          background-color: #13c9df;
          color: white;
          padding: 10px 18px;
          font-size: 12px;
          border-radius: 50px;
          border: 1px solid transparent;
          font-weight: 700;
          &.selected {
            background-color: #eeeeee;
            color: #13c9df;
          }
        }
      }

      .fortfolio_img {
        margin-top: 30px;
        display: flex;
        gap: 15px;
        flex-wrap: wrap;

        .containerrr {
          position: relative;
          width: 49%;
          border: 1px solid #fbf0f0;
          padding: 10px;
          border-radius: 5px;
          img {
            /* border-radius: 5px;
            height: 416px; */
            /* object-fit: contain; */
            /* height: 416px; */
            border-radius: 5px;
            aspect-ratio: 3 / 2;
            object-fit: cover;
          }
          iframe {
            border: 0;
            width: 100%;
            height: 300px;
            border-radius: 5px;
          }

          .like_view_div {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 5px;
            margin-top: 5px;
            .heart_icon {
              width: 20px;
              height: 20px;
              color: #9e9ea7;
            }
            .css-q1exzq-MuiSvgIcon-root {
              width: 20px;
              height: 20px;
            }
            .css-i4bv87-MuiSvgIcon-root {
              width: 20px;
              height: 20px;
            }

            .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root {
              padding: 0;
            }
            p {
              font-size: 15px;
              font-weight: 400;
            }
            .eye_icon {
              color: #9e9ea7;
              width: 20px;
              height: 20px;
            }
            p {
              color: #9e9ea7;
              margin: 0;
            }
          }
        }

        .image {
          opacity: 1;
          display: block;
          width: 100%;
          height: auto;
          transition: 0.5s ease;
          backface-visibility: hidden;
        }

        .middle {
          opacity: 0;
          position: absolute;
          top: 85%;
          left: 3%;
          /* / transform: translate(-50%, -50%); /
          / -ms-transform: translate(-50%, -50%); / */
          text-align: center;
        }

        .containerrr:hover .image {
          opacity: 0.3;
        }

        .containerrr:hover .middle {
          opacity: 1;
        }

        .text {
          color: black;
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
  }

  @media (max-width: 567px) {
    overflow: hidden;
    .bg_img {
      height: 170px;
    }

    .main_div {
      display: flex;
      flex-wrap: wrap;
      padding: 0 22px;
      gap: 0;
    }

    .main_div .sub_div_one {
      width: 100%;
      margin-top: -70px;
    }

    .main_div .sub_div_two {
      width: 100%;
    }

    .main_div .sub_div_two .fortfolio_img .containerrr {
      width: 47%;
    }
    .main_div .sub_div_two .port_categ {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .main_div {
      display: flex;
      flex-wrap: wrap;
      padding: 0 22px;
      gap: 0;
    }

    .main_div .sub_div_one {
      width: 100%;
      margin-top: -100px;
    }

    .main_div .sub_div_two {
      width: 100%;
    }

    .main_div .sub_div_two .fortfolio_img .containerrr {
      width: 47%;
    }

    .main_div .sub_div_two .port_categ {
      display: flex;
      justify-content: center;
      button {
        font-size: 9px;
      }
    }
  }
`;
