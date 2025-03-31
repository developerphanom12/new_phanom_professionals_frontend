import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bgg from "../../Assets/Images/casestudy.jpg";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong, FaTrash } from "react-icons/fa6";
import axios from "axios";
import {
  EXCHANGE_URLS_BUYER,
  EXCHANGE_URLS_IMAGES,
} from "../../Important/URLS";
import { toast } from "react-toastify";
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

export const AdminCaseStudy = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Web Design");
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

  const handleBlogClick = (id) => {
    navigate(`/case-study-details/${id}`);
  };

  const deleteBlog = async (id) => {
    try {
      const res = await axios.put(`${EXCHANGE_URLS_BUYER}/deletecases/${id}`);
      if (res.status === 200) {
        toast.success("Case Study deleted successfully!");
        setBlogsData(blogsData.filter((blog) => blog.id !== id)); // Update state
        navigate("/")
      }
    } catch (err) {
      toast.error("Error deleting blog: " + err.message);
    }
  };
  return (
    <Root>
      <div className="bg_img"></div>
      <div className="heading">
        <h2>Case Study</h2>
        <p>
        "Innovating Success: An In-Depth Case Study Highlighting the Transformative Journey of Phanom Tecno Pvt Ltd"
        </p>
        <button onClick={() => navigate(`/upload-case-study`)}>Upload</button>
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
            blogsData?.map((i, index) => (
              <div
                className="sub_blog"
                key={index}
                onClick={() => handleBlogClick(i?.id)}
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
                  <button
                    className="delete_btn"
                    onClick={() => deleteBlog(i.id)}
                  >
                    <FaTrash />
                  </button>

                  <a href={`/case-study-details/${i?.id}`}
                    onClick={() => handleBlogClick(i?.id)}
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
        .actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom:20px;
          padding: 0 10px;
          button{
            border:1px solid transparent;
            background: transparent;
            svg{
              width:20px;
              height:30px;
            }
            
          }
          .read_more {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #13c9df;
            font-size: 17px;
            font-weight: 700;
          }
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
