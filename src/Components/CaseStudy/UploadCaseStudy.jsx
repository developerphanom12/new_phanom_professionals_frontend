import React, { useState } from "react";
import styled from "styled-components";
import upload from "../../Assets/Images/upload.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { EXCHANGE_URLS_BUYER } from "../../Important/URLS";
import { toast } from "react-toastify";

export const UploadCaseStudy = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [formData, setFormData] = useState({
    category: "design",
    title1: "",
    description1: "",
    image1: null,
    title2: "",
    description2: "",
    image2: null,
    result_title: "",
    result_decription: "",
    result_image1: null,
    result_image2: null,
  });

  const navigate = useNavigate();

  const handleVehicleChange = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleCategoryChange = (e) => {
    setFormData((prev) => ({ ...prev, category: e.target.value }));
  };
  const handleFileChange = (e, imageField) => {
    const file = e.target.files[0];
    if (file) setFormData((prev) => ({ ...prev, [imageField]: file }));
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const response = await axios.post(
        `${EXCHANGE_URLS_BUYER}/case-study`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.status) {
        toast.success("Case study uploaded successfully!");
        navigate("/admin-case-study");
      } else {
        toast.error("Failed to upload case study.");
      }
    } catch (error) {
      console.error("Error uploading case study:", error);
      toast.error(error.response?.data?.message || "Something went wrong.");
    }
  };

  const categoryOptions = {
    digitalmarketing: [
      "SEO (Search Engine Optimisation)",
      "Social Media Marketing",
      "Pay Per Click (PPC)",
      "Youtube Marketing",
    ],
    designAnddevelopment: [
      "Web Development",
      "Shopify",
      "Java",
      "Magento",
      "Wordpress",
      "PHP",
    ],
    animationAndgraphics: [
      "Video Marketing",
      "Branding",
      "Packaging & Labeling",
      "Graphic Design",
      "Web Design",
      "Rotoscoping",
      "Animation",
    ],
    ecommerce: ["E-Commerce Marketing", "Amazon Marketing"],
  };

  return (
    <Root>
      <div className="inp_row">
        <div className="inp_col">
          <div className="submit_btn">
            <input
              style={{ width: "16px" }}
              type="radio"
              name="service"
              value="digitalmarketing"
              onChange={() => handleVehicleChange("digitalmarketing")}
            />
            Digital Marketing
          </div>
          <select value={formData.category} onChange={handleCategoryChange}>
            <option value="">Select</option>
            {selectedVehicle === "digitalmarketing" &&
              categoryOptions.digitalmarketing.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>

        <div className="inp_col">
          <div className="submit_btn">
            <input
              type="radio"
              style={{ width: "16px" }}
              name="service"
              value="design&development"
              onChange={() => handleVehicleChange("design&development")}
            />
            Design & Development
          </div>
          <select value={formData.category} onChange={handleCategoryChange}>
            <option value="">Select</option>
            {selectedVehicle === "design&development" &&
              categoryOptions.designAnddevelopment.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>

        <div className="inp_col">
          <div className="submit_btn">
            <input
              type="radio"
              style={{ width: "16px" }}
              name="service"
              value="animation&graphics"
              onChange={() => handleVehicleChange("animation&graphics")}
            />
            Animations & Graphics
          </div>
          <select value={formData.category} onChange={handleCategoryChange}>
            <option value="">Select</option>
            {selectedVehicle === "animation&graphics" &&
              categoryOptions.animationAndgraphics.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>

        <div className="inp_col">
          <div className="submit_btn">
            <input
              type="radio"
              name="service"
              style={{ width: "16px" }}
              value="ecommerce"
              onChange={() => handleVehicleChange("ecommerce")}
            />
            E-commerce Solution
          </div>
          <select value={formData.category} onChange={handleCategoryChange}>
            <option value="">Select</option>
            {selectedVehicle === "ecommerce" &&
              categoryOptions.ecommerce.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="main_div">
        <div className="sub_div_one">
          <h1>
            Title:
            <input
              name="title1"
              placeholder="Application Design"
              value={formData.title1}
              onChange={handleInputChange}
            />
          </h1>
          <p>
            Description:
            <input
              name="description1"
              placeholder="Add Description"
              value={formData.description1}
              onChange={handleInputChange}
            />
          </p>
        </div>

        <div className="sub_div_two">
          <div className="upload_div">
            <img src={upload} alt="upload_img" />
            <h2>Click here to Upload 1st Image</h2>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "image1")}
            />
          </div>
        </div>
      </div>

      <div className="main_divv">
        <div className="sub_div_two">
          <div className="upload_div">
            <img src={upload} alt="upload_img" />
            <h2>Click here to Upload 2nd image</h2>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "image2")}
            />
          </div>
        </div>
        <div className="sub_div_one">
          <h1>
            Title-2:
            <input
              name="title2"
              placeholder="Application Design"
              value={formData.title2}
              onChange={handleInputChange}
            />
          </h1>
          <p>
            Description-2:
            <input
              name="description2"
              placeholder="Add Description"
              value={formData.description2}
              onChange={handleInputChange}
            />
          </p>
        </div>
      </div>

      <div className="banner_div">
        <div className="sub_banner_div">
          <h1>
            Footer Title:
            <input
              name="result_title"
              placeholder="Footer Title"
              value={formData.result_title}
              onChange={handleInputChange}
            />
          </h1>
          <p>
            Footer Description:
            <input
              name="result_decription"
              placeholder="Add Description"
              value={formData.result_decription}
              onChange={handleInputChange}
            />
          </p>
          <div className="upload_div">
            <img src={upload} alt="upload_img" />
            <h2>Click here to Upload 1st Footer Image</h2>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "result_image1")}
            />
          </div>
        </div>

        <div className="sub_banner_div">
          <div className="upload_div">
            <img src={upload} alt="upload_img" />
            <h2>Click here to Upload 2nd Footer Image</h2>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "result_image2")}
            />
          </div>
        </div>
      </div>

      <div className="button_div">
        <button className="cancel_btn" onClick={() => navigate("/case-study")}>
          Cancel
        </button>
        <button className="continue_btn" onClick={handleSubmit}>
          Continue
        </button>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  input {
    border: 1px solid #fff;
    width: 100%;
  }
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
  .upload_div {
    position: relative;
    width: 70%;
    height: 350px;
    border: 2px dashed #e7e7e9;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
    }

    h2 {
      font-size: 18px;
      font-weight: 600;
    }

    input[type="file"] {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      cursor: pointer;
    }
  }
  .main_div,.main_divv {
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
        font-size: 25px;
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
    }
  }
  .button_div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .cancel_btn {
      border: 1.5px solid #e7e7e9;
      background-color: #fff;
      color: #0d0c22;
      padding: 10px 20px;
      border-radius: 50px;
      font-size: 15px;
      font-weight: 500;
      width: 130px;
      line-height: 18.15px;
      &:hover {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      }
    }

    .continue_btn {
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
  }
  @media (max-width: 567px) {
    padding: 30px 20px;

    .main_div {
      display: flex;
      gap: 30px;
      flex-direction: column;
    }
    .main_divv{
      display: flex;
      gap: 30px;
      flex-direction: column-reverse;
    }
    .inp_row {
      gap: 10px;
      flex-wrap: wrap;
    }

    .inp_row .inp_col {
      flex: 1;
      flex: unset;
      width: 45%;
    }

    .inp_row .inp_col .submit_btn {
      font-size: 11px;
    }

    .inp_row .inp_col select {
      font-size: 11px;
    }
    .main_div .sub_div_two, .main_divv .sub_div_two  {
      justify-content: center;
      display: flex;
    }
    .upload_div {
      width: 100%;
    }
    .banner_div{
      flex-direction: column;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 30px 20px;

    .inp_row {
      gap: 10px;
    }

    .inp_row .inp_col .submit_btn {
      display: flex;
      gap: 5px;
      font-size: 13px;
      font-weight: 600;
      color: #00194c;
      font-family: "Urbanist", sans-serif;
    }

    .inp_row .inp_col select {
      font-size: 13px;
    }
  }
`;
