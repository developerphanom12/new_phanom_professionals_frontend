import React, { useState } from "react";
import styled from "styled-components";
import upload from "../../Assets/Images/upload.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { EXCHANGE_URLS_BUYER } from "../../Important/URLS";
import ReactQuill from "react-quill";

const modules = {
  toolbar: [
    [
      { header: "1" },
      { header: "2" },
      { header: "3" },
      { header: "4" },
      { header: "5" },
      { header: "6" },
      { font: [] },
    ],
    [{ size: [] }],
    ["bold", "underline"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
  ],
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export const UploadBlog = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    slug: "",
    image: null,
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
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleDescriptionChange = (value) => {
    setFormData((prev) => ({ ...prev, description: value }));
  };
  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("category", formData.category);
      data.append("description", formData.description);
      data.append("image", formData.image);
      data.append("slug", formData.slug);

      const response = await axios.post(
        `${EXCHANGE_URLS_BUYER}/addblogs`,

        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.status) {
        alert("Blog uploaded successfully!");
        navigate("/admin-blog"); // Pass formData to Content page
      } else {
        alert("Failed to upload blog.");
      }
    } catch (error) {
      console.error("Error uploading blog:", error);
      alert(error.response?.data?.message || "Something went wrong.");
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
      <div className="add_title">
        <input
          type="text"
          placeholder="Add Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="add_title">
        <input
          type="text"
          placeholder="Add Title"
          name="slug"
          value={`https://www.phanomprofessionals.com/${formData.slug}`}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              slug: e.target.value.replace(
                "https://www.phanomprofessionals.com/",
                ""
              ),
            }))
          }
        />
      </div>

      <div className="inp_row">
        <div className="inp_col">
          <div className="submit_btn">
            <input
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

      <div className="upload_div">
        <img src={upload} alt="upload_img" />
        <h2>Click here to Upload</h2>
        <input type="file" onChange={handleFileChange} />
      </div>

      <Contnt>
        <ReactQuill
          modules={modules}
          formats={formats}
          value={formData.description}
          onChange={handleDescriptionChange}
          placeholder="Write something..."
        />

        <div className="button_div">
          <button
            className="cancel_btn"
            onClick={() => navigate("/admin-blog")}
          >
            Cancel
          </button>
          <button className="continue_btn" onClick={handleSubmit}>
            Continue
          </button>
        </div>
      </Contnt>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  .add_title {
    width: 100%;
    display: flex;
    justify-content: center;
    input {
      height: 40px;
      border-radius: 12px;
      border: 1px solid #e1e5ee;

      cursor: pointer;
      font-size: 18px;
      font-weight: 600;
      line-height: 38.73px;
      color: #00194c;
      padding: 0 10px;
      width: 50%;
      font-family: "Urbanist", sans-serif;
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
      font-size: 24px;
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

  @media (max-width: 567px) {
    padding: 30px 20px;
    gap: 30px;

    .add_title input {
      width: 100%;
    }
    .upload_div {
      width: 100%;
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
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 30px 20px;
    gap: 30px;
    .add_title input {
      width: 100%;
    }
    .upload_div {
      width: 100%;
      height: 300px;
    }

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

const Contnt = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  .ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
    height: 250px;
  }
  .quill {
    width: 100%;
    min-height: 300px;
  }

  .ql-snow .ql-editor img {
    height: 400px;
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
      background: #6C5FD4;
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
    gap: 0px;
  }

  @media (min-width: 567px) and (max-width: 992px) {
    gap: 0px;
  }
`;
