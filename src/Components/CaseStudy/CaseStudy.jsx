import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bgg from "../../Assets/Images/casestudy.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  EXCHANGE_URLS_BUYER,
  EXCHANGE_URLS_IMAGES,
} from "../../Important/URLS";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

const categoryList = [
  {
    name: "Digital Marketing",
    options: [
      "SEO (Search Engine Optimisation)",
      "Social Media Marketing",
      "Pay Per Click (PPC)",
      "Youtube Marketing",
    ],
  },
  {
    name: "Design & Development",
    options: [
      "Web Development",
      "Shopify",
      "Java",
      "Magento",
      "Wordpress",
      "PHP",
    ],
  },
  {
    name: "Animations & Graphics",
    options: [
      "Video Marketing",
      "Branding",
      "Packaging & Labeling",
      "Graphic Design",
      "Web Design",
      "Rotoscoping",
      "Animation",
    ],
  },
  {
    name: "E-commerce solution",
    options: ["E-Commerce Marketing", "Amazon Marketing"],
  },
];

export const CaseStudy = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("design");
  const [blogsData, setBlogsData] = useState([]);
  useEffect(() => {
    const getSliderApi = async () => {
      try {
        const res = await axios.get(
          `${EXCHANGE_URLS_BUYER}/case-get?cases=${encodeURIComponent(
            selectedCategory
          )}`
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
  }, [selectedCategory]);

 
  const generateSlug = (title1) => {
    if (!title1) return ""; // Return empty if title is missing
    return title1
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  // Navigate to the blog details page
  const handleBlogClick = (id, title1) => {
    const slug = generateSlug(title1);
    console.log("id slug",slug)
    navigate(`/case-study-details/${id}/${slug}`);
  };

  return (
    <Root>
      <div className="bg_img"></div>
      <div className="heading">
        <h2>Case Study</h2>
        <p>
        "Innovating Success: An In-Depth Case Study Highlighting the Transformative Journey of Phanom Tecno Pvt Ltd"
        </p>
      </div>

      <div className="sub_div_two">
        <div className="inp_row">
          {categoryList.map((category, idx) => (
            <div className="inp_col" key={idx}>
              <select
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
              >
                <option value="">{category.name}</option>
                {category.options.map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="blog_div">
          {blogsData &&
            blogsData?.map((i) => (
              <div
                className="sub_blog"
                key={i.id} // Use id as the unique key
                onClick={() => handleBlogClick(i.id, i.title1)}
              >
                <img
                  src={`${EXCHANGE_URLS_IMAGES}/${i?.image1}`}
                  alt={`Blog: ${i?.title1 || "Image"}`}
                  loading="lazy"
                />
                <h4>{i?.title}</h4>
                <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    i?.description1?.length > 100
                      ? i.description1.substring(0, 100) + "..."
                      : i.description1 || ""
                  ),
                }}
              />
                <div className="actions">
                 
                     <a
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering parent onClick
                      handleBlogClick(i.id, i.title1);
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
      </div>
    </Root>
  );
};

const Root = styled.section`
  display: flex;
  gap: 30px;
  flex-direction: column;

  .bg_img {
    height: 300px;
    width: 100%;
    background-image: url(${bgg});
  }

  .heading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    h2 {
      margin: 0;
    }
    p {
      margin: 0;
      padding: 0;
      font-size: 16px;
      font-weight: 400;
      color: #6e6e6e;
      margin: 0;
    }
    button {
      background-color: #4caf50;
      color: white;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      border: 1px solid transparent;
      border-radius: 50px;
      background: #13c9df;
      width: 150px;
      text-align: center;
      padding: 10px 10px;
    }
  }

  .sub_div_two {
    padding: 0 15%;
    display: flex;
    flex-direction: column;
    gap: 50px;

    .inp_row {
      display: flex;
      justify-content: center;
      width: 100%;
      gap: 40px;
      .inp_col {
        flex: 1;

        .submit_btn {
          display: flex;
          gap: 5px;
          font-size: 18px;
          font-weight: 600;
          color: #00194c;
          font-family: "Urbanist", sans-serif;
        }

        select {
          width: 100%;
          height: 40px;
          padding: 5px;
          border-radius: 12px;
          border: 1px solid #e1e5ee;
          font-size: 18px;
          font-weight: 600;
          color: #00194c;
          font-family: "Urbanist", sans-serif;
        }
      }
    }

    .blog_div {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .sub_blog {
        width: 32%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 10px;
        border: 1px solid #e1e5ee;
        overflow: hidden;
        img {
          width: 100%;
          object-fit: cover;
          aspect-ratio: 3 / 2;
        }

        h4 {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: #212529;
          text-align: left;
          padding: 0 20px;
        }
        p {
          padding: 0 20px;
          font-size: 16px;
          font-weight: 400;
          color: #6e6e6e;
          margin: 0;
          text-align: left;
        }
        .read_more {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
          padding: 0 20px;
          margin-bottom: 20px;
          color: #13c9df;
          font-size: 17px;
          font-weight: 700;
        }
      }
    }
  }
  @media (max-width: 567px) {
    .bg_img {
      background-size: 100% 100%;
    }

    .heading p {
      margin: 0;
      padding: 0 10px;
      font-size: 16px;
      font-weight: 400;
      color: #6e6e6e;
      margin: 0;
      text-align: center;
    }

    .sub_div_two {
      padding: 0 5%;
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    .sub_div_two .blog_div .sub_blog {
      width: 100%;
    }

    .sub_div_two .inp_row {
      width: 100%;
      gap: 10px;
      flex-wrap: wrap;
      .inp_col {
        flex: unset;
        width: 45%;
      }
    }
  }
  @media (min-width: 567px) and (max-width: 992px) {
    .bg_img {
      background-size: cover;
    }

    .sub_div_two {
      padding: 0 5%;
    }

    .sub_div_two .blog_div {
      display: flex;
      justify-content: center;
      .sub_blog {
        width: 30%;
      }
    }
  }
`;
