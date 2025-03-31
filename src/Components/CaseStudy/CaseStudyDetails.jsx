import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  EXCHANGE_URLS_BUYER,
  EXCHANGE_URLS_IMAGES,
} from "../../Important/URLS";
import axios from "axios";
import { toast } from "react-toastify";
import { TiArrowBack } from "react-icons/ti";
import DOMPurify from "dompurify";

export const CaseStudyDetails = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSliderApi = async () => {
      try {
        const res = await axios.get(`${EXCHANGE_URLS_BUYER}/case/${id}`);
        if (res?.status === 200) {
          setData(res?.data?.data || {});
          console.log("casedata", res?.data?.data);
        }
      } catch (err) {
        toast.error(err, "Error");
      }
    };

    getSliderApi();
  }, [id]);
  return (
    <Root>
      <div>
        <a href="#" onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
          <TiArrowBack />
        </a>
      </div>
      <div className="main_div">
        <div className="sub_div_one">
          <h1>{data[0]?.title1 || "No Title"}</h1>
          <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              data[0]?.description1 || "No Description"
            ),
          }}
        />
        </div>

        <div className="sub_div_two">
          <img
            src={`${EXCHANGE_URLS_IMAGES}/${data[0]?.image1}`}
            alt={`Blog: ${
              data?.title1 || "transforming ideas into digital solutions"
            }`}
            loading="lazy"
          />
        </div>
      </div>

      <div className="main_div">
        <div className="sub_div_two">
        <img
          src={`${EXCHANGE_URLS_IMAGES}/${data[0]?.image2}`}
          alt={`Blog: ${data?.title2 || "transforming ideas into digital solutions"}`}
          loading="lazy"
        />
        </div>
        <div className="sub_div_one">
        <h1>{data[0]?.title2 || "No Title"}</h1>
          <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              data[0]?.description2 || "No Description"
            ),
          }}
        />
        </div>
      </div>

      <div className="banner_div">
        <div className="sub_banner_div">
          <h1>{data[0]?.result_title || "No Title"}</h1>
          <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              data[0]?.result_decription || "No Description"
            ),
          }}
        />
          <img
          src={`${EXCHANGE_URLS_IMAGES}/${data[0]?.result_image1}`}
          alt={`Blog: ${data?.title1 || "transforming ideas into digital solutions"}`}
          loading="lazy"
        />
        </div>

        <div className="sub_banner_div">
        <img
          src={`${EXCHANGE_URLS_IMAGES}/${data[0]?.result_image2}`}
          alt={`Blog: ${data?.title1 || "transforming ideas into digital solutions"}`}
          loading="lazy"
        />
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .main_div {
    display: flex;
    gap: 50px;
    .sub_div_one {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      h1 {
        margin: 0;
        font-size: 32px;
        font-weight: 700;
        line-height: 1.2;
      }
      p {
        padding: 0;
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        color: #6e6e6e;
      }
      .but_div {
        display: flex;
        gap: 20px;
        .start_button {
          font-size: 16px;
          color: #fff;
          background-color: #13c9df;
          padding: 10px 25px;
          border: 1px solid transparent;
          border-radius: 50px;
          &:hover {
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
              0 3px 6px rgba(0, 0, 0, 0.23);
          }
        }

        .learn_button {
          font-size: 16px;
          padding: 10px 25px;
          color: #13c9df;
          border: 1px solid #13c9df;
          border-radius: 50px;
          background-color: #fff;
          &:hover {
            background-color: #13c9df;
            color: #fff;
          }
        }
      }
    }

    .sub_div_two {
      flex: 1;
      img {
        width: 100%;
        height: 400px;
        border-radius: 12px;
      }
    }
  }
  .banner_div {
    display: flex;
    gap: 50px;
    margin-top: 30px;
    .sub_banner_div {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 30px;

      h1 {
        margin: 0;
        font-size: 32px;
        font-weight: 700;
        line-height: 1.2;
      }
      p {
        padding: 0;
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        color: #6e6e6e;
        margin-bottom: 20px;
      }
      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 30px 20px;

    .main_div {
      display: flex;
      gap: 30px;
      flex-direction: column;
    }
    .banner_div{
      flex-direction: column-reverse;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 30px 20px;
  }
`;
