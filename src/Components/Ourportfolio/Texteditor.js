import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { TiEyeOutline } from "react-icons/ti";
import { MultiSelect } from "react-multi-select-component";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";
import {
  EXCHANGE_URLS_BUYER,
  EXCHANGE_URLS_IMAGES,
} from "../../Important/URLS";
import { toast } from "react-toastify";

export const Texteditor = () => {
  const [show, setShow] = useState(false);
  const [heart, setHeart] = useState(2);
  const [eye, setEye] = useState(12);
  const [selected, setSelected] = useState([]);
  const [editorContent, setEditorContent] = useState("");

  const { id } = useParams();

  const location = useLocation();

  const { imageUrl } = location.state || {};
  console.log("UploadedImageURL", imageUrl);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const options = [
    { label: "Branding & Logos ", value: "brandinglogos" },
    { label: "Web design", value: "webdesign" },
    { label: "Advertisement", value: "advertisement" },
    { label: "Packaging & Labeling", value: "packaginglabeling" },
    { label: "Video Marketing", value: "videomarketing" },
    { label: "SEO Portfolio", value: "seoportfolio" },
  ];

  const handleEditorChange = (content, delta, source, editor) => {
    setEditorContent(content);
  };

  const addImageToEditor = () => {
    // Add the image to the editor content
    if (imageUrl) {
      const imageHtml = `<img src="${EXCHANGE_URLS_IMAGES}/${imageUrl}" alt="Uploaded" />`;
      setEditorContent((prevContent) => prevContent + imageHtml);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "underline"],
      [
        { list: "ordered"},
        { list: "bullet"},
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
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
    "video"
  ];

  const handleSubmit = async () => {
    if (selected.length === 0) {
      toast.error("Please select at least one tag.");
      return;
    }

    try {
      // Prepare payload data
      const payload = {
        content: editorContent,
        tags: Array.isArray(selected) ? selected.map((item) => item.value) : [], // Ensure this is an array
        id: `${id} `,
        // imageUrl: imageUrl, // Add the image URL to the payload
      };

      // Make POST request to send data
      const response = await axios.post(
        `${EXCHANGE_URLS_BUYER}/portfoliotext`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      // Check response status
      if (response.status === 200) {
        console.log("ujydjyu", response.data);
        toast.success("File uploaded successfully!");
        navigate("/thumbnail");
        // Show success message or navigate
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  useEffect(() => {
    // Function to increment view count

    const incrementHeart = () => {
      setHeart((prevHeart) => prevHeart + 1);
    };

    const incrementEye = () => {
      setEye((prevHeart) => prevHeart + 1);
    };

    // Set interval to update view count every second

    const intervalHeart = setInterval(incrementHeart, 2000);
    const intervalEye = setInterval(incrementEye, 2000);

    // Clean up interval on component unmount
    return () => {
      clearInterval(intervalHeart);
      clearInterval(intervalEye);
    };
  }, []);

  useEffect(() => {
    addImageToEditor();
  }, [imageUrl]);

  return (
    <Root>
      <div className="button_div">
        <button
          className="cancel_btn"
          onClick={() => {
            navigate("/thumbnail");
          }}
        >
          Cancel
        </button>
        <button className="continue_btn" onClick={handleShow}>
          Continue
        </button>
      </div>

      <ReactQuill
        value={editorContent}
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
        placeholder="Write something..."
      />

   

      <CustomModal
        show={show}
        onHide={handleClose}
        className="custom_large_modal"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#13c9df", fontWeight: "600" }}>
            Final Touches
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="main_body">
            <div className="sub_div_one">
              <h5>Thumbnail Preview</h5>
              <img src={`${EXCHANGE_URLS_IMAGES}/${imageUrl}`} alt="Uploaded" />
              <div className="like_view_div">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder className="heart_icon" />}
                  checkedIcon={
                    <Favorite
                      defaultChecked
                      sx={{
                        color: "#13c9df",
                        "&.Mui-checked": {
                          color: "#13c9df",
                        },
                      }}
                    />
                  }
                />
                <p>{heart}</p>
                <TiEyeOutline className="eye_icon" />
                <p>{eye}</p>
              </div>
            </div>

            <div className="sub_div_two">
              <div className="tag_select">
                <h5>Tags</h5>
                <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                />
              </div>
              <div className="button_div">
                <button className="cancel_btn" onClick={handleClose}>
                  Close
                </button>

                <button className="continue_btn" onClick={handleSubmit}>
                  Publish
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </CustomModal>

      
    </Root>
  );
};

const Root = styled.section`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .quill {
    min-height: 300px;
  }

  .ql-snow .ql-editor img {
    height: 400px;
  }

  .button_div {
    display: flex;
    justify-content: space-between;
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
    padding: 10px;
    .ql-snow .ql-editor img {
      height: unset;
    }

    .main_body {
      flex-direction: column;
      .sub_div_one {
        width: 100%;
      }
      .sub_div_two {
        width: 100%;
      }
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .ql-snow .ql-editor img {
      height: 200px;
    }
  }
`;

const CustomModal = styled(Modal)`
  .main_body {
    display: flex;
    gap: 30px;
    .sub_div_one {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      h5 {
        font-size: 15px;
        font-weight: 400;
        color: #9e9ea7;
        margin: 0;
      }

      img {
        width: 100%;
        object-fit: cover;
      }

      .like_view_div {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 5px;

        .heart_icon {
          width: 20px;
          height: 20px;
          color: #9e9ea7;
        }
        .css-q1exzq-MuiSvgIcon-root {
          width: 20px;
          height: 20px;
        }
        .css-i4bv87-MuiSvgIcon-root {
          width: 20px;
          height: 20px;
        }

        .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root {
          padding: 0;
        }
        p {
          font-size: 15px;
          font-weight: 400;
        }
        .eye_icon {
          color: #9e9ea7;
          width: 20px;
          height: 20px;
        }
        p {
          color: #9e9ea7;
          margin: 0;
        }
      }
    }
    .sub_div_two {
      width: 60%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      h5 {
        font-size: 15px;
        font-weight: 400;
        color: #9e9ea7;
      }
      .button_div {
        display: flex;
        justify-content: space-between;
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
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
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
    }
  }

  @media (max-width: 567px) {
    .main_body {
      flex-direction: column;
      .sub_div_one {
        width: 100%;
      }
      .sub_div_two {
        width: 100%;
        gap: 20px;
      }
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .main_body {
      flex-direction: column;
      .sub_div_one {
        width: 100%;
      }
      .sub_div_two {
        width: 100%;
        gap: 20px;
      }
    }
  }
`;
