import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import upload from "../../Assets/Images/upload.png";
import { useNavigate, useParams } from "react-router-dom";
import {
  EXCHANGE_URLS_BUYER,
  EXCHANGE_URLS_IMAGES,
} from "../../Important/URLS";
import axios from "axios";
import { toast } from "react-toastify";

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

export const EditBlog = () => {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [slug, setSlug] = useState("");
  const { id } = useParams();
  // console.log("check edit idddd ", id )
  const navigate = useNavigate();

  useEffect(() => {
    const getSliderApi = async () => {
      try {
        const res = await axios.get(`${EXCHANGE_URLS_BUYER}/blogs/${id}`);
        if (res?.status === 200) {
          const blogData = res?.data?.data[0];
          setData(blogData);
          setTitle(blogData?.title || "");
          setDescription(blogData?.description || "");
          setImage(blogData?.image || "");
          setSlug(blogData?.slug || "")
          console.log("blogdata", blogData);
        }
      } catch (err) {
        toast.error(err.message || "Error");
      }
    };

    getSliderApi();
  }, [id]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (value) => setDescription(value);

  const handleImageChange = (e) => {
           const file = e.target.files[0];
          setImage(file); // Update the image state with the selected file
        };
  const handleSlugChange = (e) =>setSlug(e.target.value)

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug",slug);
    formData.append("description", description);
    if (image) {
      formData.append("image", image); //Appending the file object
    }
    
    try {
      const res = await axios.put(
        `${EXCHANGE_URLS_BUYER}/blog_edit/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        toast.success("Blog updated successfully!");
        navigate(`/admin-blog`);
      } else {
        toast.error("Failed to update the blog. Please try again.");
      }
    } catch (err) {
      toast.error(err.message || "Error updating blog.");
    }
  };

  return (
    <Root>
      <div className="add_title">
        <input
          type="text"
          placeholder="Add Title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>

      <div className="add_title">
        <input
          type="text"
          placeholder="Add Slug"
          name="slug"
          value={slug}
          onChange={handleSlugChange}
        />
      </div>

      <div className="upload_div">

        <img
           src={
            typeof image === "string"
                ? `${EXCHANGE_URLS_IMAGES}/${image}` //Display existing image
                : URL.createObjectURL(image) //Display newly selected image
            }
           alt={`Blog: ${title || "Image"}`}
            loading="lazy"
          />
        <img src={upload} alt="upload_img" />
        <h2>Click here to Upload</h2>
        <input type="file"  onChange={handleImageChange}/>
      </div>

      <Contnt>
        <ReactQuill
          value={description}
          onChange={handleDescriptionChange}
          modules={modules}
          formats={formats}
          placeholder="Write something..."
        />

        <div className="button_div">
          <button
            className="cancel_btn"
            onClick={() => navigate(`/admin-blog`)}
          >
            Cancel
          </button>
          <button className="continue_btn" onClick={handleSave}>
            Save
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
    gap: 0px;
  }

  @media (min-width: 567px) and (max-width: 992px) {
    gap: 0px;
  }
`;
