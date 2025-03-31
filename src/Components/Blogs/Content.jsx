import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";

export const Content = () => {
  const location = useLocation(); // Retrieve passed state
  const navigate = useNavigate();

  const [description, setDescription] = useState(
    location.state?.description || ""
  );

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleSave = () => {
    alert("Content saved successfully!");
    navigate("/admin-blog");
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "underline"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      // ["clean"], // remove formatting button
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

  return (
    <Contnt>
      <ReactQuill
        modules={modules}
        formats={formats}
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Write something..."
      />

      <div className="button_div">
        <button
          className="cancel_btn"
          onClick={() => {
            navigate("/admin-blog");
          }}
        >
          Cancel
        </button>
        <button
          className="continue_btn"
          onClick={() => {
            handleSave()
          }}
        >
          Continue
        </button>
      </div>
    </Contnt>
  );
};

const Contnt = styled.section`
  padding: 30px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

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
`;
