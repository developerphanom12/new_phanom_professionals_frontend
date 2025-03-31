import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  EXCHANGE_URLS_BUYER,
  EXCHANGE_URLS_IMAGES,
} from "../../../Important/URLS";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong, FaRegMessage } from "react-icons/fa6";
import { PurpleThirdBackground, secGradient } from "../../../Global/GlobalButton";
import { Blackdescription, BlackHeading } from "../../../Global/GlobalText";
import { FaRegCalendarAlt, FaRegEye } from "react-icons/fa";

export default function BlogsSection() {
  const navigate = useNavigate();
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    const getSliderApi = async () => {
      try {
        const res = await axios.get(
          `${EXCHANGE_URLS_BUYER}/blogsget?category=SEO (Search Engine Optimisation)`
        );
        if (res?.status === 200) {
          setBlogsData(res?.data?.data || []);
          console.log("blogdata", res?.data?.data);
        }
      } catch (err) {
        toast.error(err, "Error");
      }
    };

    getSliderApi();
  }, []);

  const generateSlug = (slug) => {
    if (!slug || typeof slug !== "string") return "";
    return slug
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  };

  const handleBlogClick = (event, id, slug = "") => {
    event.preventDefault();

    if (!id || !slug) {
      console.warn("Invalid ID or Slug, navigation prevented:", { id, slug });
      return;
    }

    const cleanSlug = generateSlug(slug);
    const url = `/blog-details/${id}/${cleanSlug}`;

    if (event.ctrlKey || event.metaKey) {
      window.open(url, "_blank");
    } else {
      navigate(url);
    }
  };

  return (
    <Root>
      <div className="container-fluid">
        <div className="blog_div">
          {blogsData.slice(0, 3).map((blog, index) => (
            <div
              className="sub_blog"
              key={index}
              onClick={() => handleBlogClick(blog?.id)}
            >
              <a
                href={`/blog-details/${blog.id}/${generateSlug(blog.slug)}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleBlogClick(e, blog.id, blog.slug);
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={`${EXCHANGE_URLS_IMAGES}/${blog?.image}`}
                  alt={`Blog: ${blog?.title || "Image"}`}
                  loading="lazy"
                />
              </a>

              <div className="blog_cont">
                <div style={{color: "#252525"}}>
                  <FaRegMessage /> 3 {" "} <FaRegEye /> 400+ {" "} <FaRegCalendarAlt /> 1
                  month ago
                </div>
                <BlackHeading>{blog?.title}</BlackHeading>
                <Blackdescription
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      blog?.description?.length > 150
                        ? blog.description.substring(0, 150) + "..."
                        : blog.description || ""
                    ),
                  }}
                />
              </div>

              <div className="actions">
                <a
                  href={`/blog-details/${blog.id}/${generateSlug(blog.slug)}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBlogClick(e, blog.id, blog.slug);
                  }}
                  className="read_more"
                  style={{ cursor: "pointer" }}
                >
                  <FaArrowRightLong /> Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }} className="view_div">
          <a href="/blogs">
            <PurpleThirdBackground>View All </PurpleThirdBackground>{" "}
          </a>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  margin: auto;
  background-color: #ffffffd4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .sub_div {
    margin: 30px 0;
    h1 {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      span {
        background: ${secGradient};
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  .blog_div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .sub_blog {
      width: 27vw;
      display: flex;
      flex-direction: column;
      /* gap: 20px; */
      overflow: hidden;
      padding: 0 20px;

      img {
        width: 368;
        height: 197;
        border-radius: 16px;
        width: 100%;
        object-fit: cover;
        /* aspect-ratio: 3 / 2; */
      }

      .blog_cont {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 20px;
        h4 {
          text-align: left;
          font-size: 28px;
        }
        p {
          text-align: left;
          margin: 0;
        }
      }

      .read_more {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 6px;
        padding: 0 20px;
        margin-bottom: 20px;
        color: #6c5fd4;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }

  .view_div {
    margin: 30px 0;
  }

  @media (max-width: 567px) {
    .blog_div .sub_blog img {
      width: 100%;
      object-fit: unset;
      aspect-ratio: unset;
    }

    .blog_div .sub_blog {
      width: 100%;
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    .blog_div .sub_blog img {
      width: 100%;
      object-fit: unset;
      aspect-ratio: unset;
    }

    .blog_div .sub_blog {
      width: 48%;
    }
  }

  /* @media (max-width: 876px) {
    img {
      width: 80vw;
    }
    .blog_div .sub_blog {
      width: 100%;
    }
  } */
`;
