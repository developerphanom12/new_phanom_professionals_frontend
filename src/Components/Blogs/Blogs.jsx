import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bgg from "../../Assets/Images/blogbanner.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  EXCHANGE_URLS_BUYER,
  EXCHANGE_URLS_IMAGES,
} from "../../Important/URLS";
import axios from "axios";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";

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

export const Blogs = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");

  const [blogsData, setBlogsData] = useState([]);
  
  useEffect(() => {
    const getSliderApi = async () => {
      try {
        // const res = await axios.get(
        //   `${EXCHANGE_URLS_BUYER}/blogsget?category=${encodeURIComponent(
        //     selectedCategory
        //   )}`
        // );

        const categoryParam = selectedCategory
          ? `?category=${encodeURIComponent(selectedCategory)}`
          : "";
        const res = await axios.get(
          `${EXCHANGE_URLS_BUYER}/blogsget${categoryParam}`
        );
        if (res?.status === 200) {
          setBlogsData(res?.data?.data || []);
          console.log("blogdata", res?.data?.data);
        } else if (res?.status === 400) {
          setBlogsData([]); // Clear any previous data
          setError("Selected category doesn't have data in the database."); // Set error message
        }
      } catch (err) {
        toast.error(err, "Error");
        setBlogsData([]);
      }
    };

    getSliderApi();
  }, [selectedCategory]);

  // const generateSlug = (title) => {
  //   if (!title) return "";
  //   return title
  //     .toLowerCase()
  //     .replace(/[^a-z0-9]+/g, "-")
  //     .trim() 
  //     .replace(/(^-|-$)+/g, "");
  // };

  const generateSlug = (slug) => {
    if (!slug || typeof slug !== "string") return ""; // Safeguard for null or non-string values
    return slug
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .trim(); // Trim extra spaces
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
      <div className="bg_img"></div>

      <div className="heading">
        <h2>Latest Posts</h2>
        <p>
          We have people of multiple kind in the house. Together we can provide
          high quality work to satisfy you.
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
          {error ? (
            <div className="sub_blog">
              <h4>No Data Found</h4>
              <p>{error}</p>
            </div>
          ) : selectedCategory && blogsData.length === 0 ? (
            <div className="sub_blog">
              <h4>No Data Available</h4>
              <p>No blogs available for the selected category.</p>
            </div>
          ) : // Display the blogs if available
          blogsData.length > 0 ? (
            blogsData?.map((i) => (
              <div
                className="sub_blog"
                key={i.id} //Use id as the unique key
                // onClick={() => handleBlogClick(i.id, i.title)}
              >
                <a  
                    href={`/blog-details/${i.id}/${generateSlug(i.slug)}`} // Use generateSlug here
                    onClick={(e) => {
                      e.stopPropagation(); 
                      handleBlogClick(e, i.id, i.slug);
                    }}
                   
                    style={{ cursor: "pointer" }}
                  >
                <img
                  src={`${EXCHANGE_URLS_IMAGES}/${i?.image}`}
                  alt={`Blog: ${i?.title || "Image"}`}
                  loading="lazy"
                />
                </a>
                <h4>{i?.title}</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      i?.description?.length > 100
                        ? i.description.substring(0, 100) + "..."
                        : i.description || ""
                    ),
                  }}
                />

                <b
                  style={{
                    fontSize:"11px",
                    padding:"0px 20px",
                    fontStyle:"normal",
                  }}
                >
                  Published:{" "}
                  {new Date(i?.create_date).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </b>

                <div className="actions">
                  <a  
                    href={`/blog-details/${i.id}/${generateSlug(i.slug)}`} // Use generateSlug here
                    onClick={(e) => {
                      e.stopPropagation(); //Prevent triggering parent onClick
                      handleBlogClick(e, i.id, i.slug);
                    }}
                    className="read_more"
                    style={{ cursor: "pointer" }}
                  >
                    <FaArrowRightLong /> Read More
                  </a>
                </div>
              </div>
            ))
          ) : (
            // Fallback if there are no blogs (general case)
            <div className="sub_blog">
           {/* <img
                src={nodata}
                alt="sunshine-immigration-blogs-image"
                width={300}
                height={200}
                loading="lazy"
                layout="contain"
              />  */}
                
              <h4>No Blogs Availableee</h4>
              <h6 style={{ fontSize: "12px" }}>No Blogs for this Category</h6>
              <p>No content available for the selected category.</p>
            </div>
          )}
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
      justify-content: center;

      .sub_blog {
        width: 30%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 10px;
        border: 1px solid #e1e5ee;
        overflow: hidden;
        img {
          /* width: 100%;
          object-fit: cover;
          aspect-ratio: 3 / 2; */
          width: 100%;
    aspect-ratio: 3 / 2;
    height: 250px;
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
          padding: 0 10px;
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
          color: #6C5FD4;
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

  @media (min-width: 567px) and (max-width: 1024px) {
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
        width: 45%;
      }
    }
  }
`;
