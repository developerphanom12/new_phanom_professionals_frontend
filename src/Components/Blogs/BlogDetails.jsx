import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  EXCHANGE_URLS_BUYER,
  EXCHANGE_URLS_IMAGES,
} from "../../Important/URLS";
import DOMPurify from "dompurify";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export const BlogDetails = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  console.log("id check", id);

  useEffect(() => {
    const getSliderApi = async () => {
      try {
        const res = await axios.get(`${EXCHANGE_URLS_BUYER}/blogs/${id}`);
        if (res?.status === 200) {
          setData(res?.data?.data || []);
          console.log("blogdata", res?.data?.data);
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
        {/* <a href="#" onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
          <TiArrowBack/>
        </a> */}
      </div>

      <div className="content">
        <h4 className="title_name">{data[0]?.title || "No Title"}</h4>
        <img
          src={`${EXCHANGE_URLS_IMAGES}/${data[0]?.image}`}
          alt={`Blog: ${data?.title || "Image"}`}
          loading="lazy"
        />

        <p 
        className="blog_desc"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              data[0]?.description || "No Description"
            ),
          }}
        />

      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px;
  display: flex;
  flex-direction: column;
  svg {
    width: 40px;
    height: 40px;
    color: #09abe6;
    :hover {
      color: black;
    }
  }

  .title_name{
    font-size:32px;
    font-weight:700;
    color: #6C5FD4;
    text-transform: capitalize;
  }

  br{
    display: none;
  }

  p.blog_desc {
    display:flex;
    flex-direction:column;
    gap:5px;
}

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 50vw;
    aspect-ratio: 3/2;
    object-fit: contain;
  }

  h1 {
    font-size:28px;
    font-weight: 500;
    color: #6C5FD4;
    text-transform:capitalize;
    margin:0;
  }


  h2 {
    font-size:26px;
    font-weight: 600;
    color: #6C5FD4;
    text-transform:capitalize;
    margin:0;
  }

  h3 {
    margin:0;
    font-size: 24px;
    font-weight: 600;
    color: #6C5FD4;
    text-transform: capitalize;
  }
  
  h4 {
    margin:0;
    font-size: 20px;
    font-weight: 500;
    color: #6C5FD4;
    text-transform: capitalize;
  }
  h5 {
    margin:0;
    font-size: 16px;
    font-weight: 600;
    color: #6C5FD4;
    text-transform: capitalize;
  }

  h6 {
    margin:0;
    font-size: 14px;
    font-weight: 600;
    color: #6C5FD4;
    text-transform: capitalize;
  }
  a {
    font-size: 16px;
    font-weight: 500;
    color: #6C5FD4;
  }

  p ol {
    li {
      list-style: decimal;
      list-style-type: decimal;
    }
  }
  p {
    font-size:16px;
    font-weight:400;
    color:#121213;
    margin:0;
    text-align:left;
    ul li {
      text-align:left;
      list-style:disc;
      ul li {
        list-style: circle;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 10px 20px;
    img {
      width: 80vw;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 10px 20px;
    img {
      width: 80vw;
    }
  }
`;
