import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import upload from "../../Images/upload.png";
import { EXCHANGE_URLS_BUYER } from "../../Important/URLS";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();
  // const id = useSelector((state) => state.users.id);

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Function to handle file upload
  const handleUpload = async () => {
    if (!selectedFile) return toast.error("Please select a file first!");

    // Create a FormData object and append the file
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      // Send the formData to your API endpoint using axios
      const response = await axios.post(
        `${EXCHANGE_URLS_BUYER}/addthumnail`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("File uploaded successfully!");

      const id = response.data.data.id;
      console.log("id Successfully", id);

      const imageUrl = response.data.data.image;

      navigate(`/upload/new/${id}`, { state: { imageUrl } });
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Error uploading file!");
    }
  };

  return (
    <Root>
      
      <h2>What have you been working on?</h2>

      <div className="upload_div">
        <img src={upload} alt="upload_img" />
        <h2>Click here to Upload</h2>
        <input type="file" onChange={handleFileChange} />
      </div>

      <button
        onClick={() => {
          handleUpload();
        }}
      >
        Upload
      </button>

      <div>
        {/* Step 3: Display the ID in the UI */}
        {/* {id ? <p>{id}</p> : <p>No file uploaded yet</p>} */}
      </div>
    </Root>
  );
};

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  gap: 20px;

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
    margin-top: 20px;
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
    h2 {
      font-size: 2rem;
      text-align: center;
    }
  }
`;
