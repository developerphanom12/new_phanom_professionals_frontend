import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { EXCHANGE_URLS_BUYER } from "../../Important/URLS";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import * as Yup from "yup";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { Loader } from "../../../Loader/Loader";

const validationSchema = Yup.object({
  triedSoftware: Yup.string().required("This field is required"),
  projectDescription: Yup.string().required("This field is required"),

  linkedin: Yup.array()
    .of(
      Yup.string()
        .matches(
          /^(https?:\/\/)?(www\.)?[a-zA-Z0-9./-]+(\.in|\.com)$/,
          "Please enter a valid URL that ends with .in or .com"
        )
        .required("This field is required")
    )
    .min(1, "Please provide at least one LinkedIn URL"),

  expertise: Yup.string().required("This field is required"),
  income: Yup.string().required("This field is required"),
  launchBarrier: Yup.string().required("This field is required"),
  financialSituation: Yup.string().required("This field is required"),
  commitmentTime: Yup.string().required("This field is required"),
});


export const QuestionSection = ({ subData }) => {
  const [questionData, setQuestionData] = useState({
    triedSoftware: "",
    projectDescription: "",
    linkedin: [""],
    expertise: "",
    income: "",
    launchBarrier: "",
    financialSituation: "",
    commitmentTime: "",
  });
  const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const bookid = useSelector((state) => state.users.bookid);
  console.log("Booking ID from Redux:", bookid);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name.startsWith("linkedin")) {
      const updatedLinks = [...questionData.linkedin];
      updatedLinks[index] = value; // Update the correct URL at the index
      setQuestionData({ ...questionData, linkedin: updatedLinks });
    } else {
      setQuestionData({ ...questionData, [name]: value });
    }
  };

  const addMoreUrl = () => {
    setQuestionData({
      ...questionData,
      linkedin: [...questionData.linkedin, ""],
    });
  };

  const validate = () => {
    const validationErrors = {};
    try {
      validationSchema.validateSync(questionData, { abortEarly: false });
    } catch (err) {
      err.inner.forEach((error) => {
        // Store error messages in the validationErrors object by path
        validationErrors[error.path] = error.message;
      });
    }
    setErrors(validationErrors); // Update state with validation errors
    console.log(validationErrors, "123");
    console.log(errors, "1234421321");
    return Object.keys(validationErrors).length === 0;
  };
  const data = { ...subData, ...questionData, id: bookid };
  console.log(data, "123123123123data");
  console.log(subData, "123123123123subDaqta");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("WORKINGQWE");

 

    if (!validate()) {
      toast.error("Invalid Fields");
      return;
    }

    setLoading(true);

    const formdata = { ...subData, ...questionData, id: bookid };

    try {
      console.log("Form Submitted", questionData);
      const response = await axios.post(
        `${EXCHANGE_URLS_BUYER}/aboutBooking`,
        formdata
      );

      if (response.status === 200) {
        toast.success("Thank You for Submitting");
        navigate("/thank-you");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to Submitted Form");
    }
    finally {
      setLoading(false); 
    }
  };

  const deleteUrl = (index) => {
    const updatedLinks = questionData.linkedin.filter((_, i) => i !== index);
    setQuestionData({ ...questionData, linkedin: updatedLinks });
  };

  return (
    <Root>
      <div className="business-form-container">
        <h1>
          Tell us about your{" "}
          <span style={{ color: "#0b66c2" }}>business and your needs,</span> and
          we'll tailor our solutions to help you grow.
        </h1>

        <form onSubmit={handleSubmit}>
          <label>
            1. Have you tried your software with other agencies?
            <div className="label_radio">
              <input
                type="radio"
                name="triedSoftware"
                value="Yes"
                checked={questionData.triedSoftware === "Yes"}
                onChange={handleChange}
              />
              <p>Yes</p>
            </div>
            <div className="label_radio">
              <input
                type="radio"
                name="triedSoftware"
                value="No"
                checked={questionData.triedSoftware === "No"}
                onChange={handleChange}
              />
              <p> No </p>
            </div>
            
            {errors.triedSoftware && (
              <div className="error">{errors.triedSoftware}</div>
            )}
          </label>

          <label>
            2. Describe your projects in 50 words:
            <textarea
              name="projectDescription"
              value={questionData.projectDescription}
              onChange={handleChange}
            />
            {errors.projectDescription && (
              <div className="error">{errors.projectDescription}</div>
            )}
          </label>

          <label>
            3. Share your LinkedIn profile and website link:
            {/* <input
              type="text"
              name="linkedin"
              value={questionData.linkedin}
              onChange={handleChange}
            /> */}
            {questionData.linkedin.map((link, index) => (
              <div key={index} >
                <div className="field_delete_btn"> 
                <input
                  type="text"
                  name={`linkedin[${index}]`}
                  value={link}
                  onChange={(e) => handleChange(e, index)}
                />
                {index > 0 && (
                  <RiDeleteBin4Fill onClick={() => deleteUrl(index)} />
                )}
                </div>

                {errors[`linkedin[${index}]`] && (
                  <div className="error">
                    {errors[`linkedin[${index}]`]}.
                  </div>
                )}

              </div>
            ))}
            <label className="addmore_url">
              <b
                onClick={addMoreUrl}
                
              >
                + Add More URL
              </b>
            </label>
          </label>

          <label>
            4. Please describe your expertise and the main problem you can solve
            for others:
            <textarea
              name="expertise"
              value={questionData.expertise}
              onChange={handleChange}
            />
            {errors.expertise && (
              <div className="error">{errors.expertise}</div>
            )}
          </label>

          <label>
            5. What is your current monthly income/revenue?
            <div className="label_radio">
              <input
                type="radio"
                name="income"
                value="No Income"
                checked={questionData.income === "No Income"}
                onChange={handleChange}
              />
              <p>No Income</p>
            </div>
            <div className="label_radio">
              <input
                type="radio"
                name="income"
                value="Rs 10-50k"
                checked={questionData.income === "Rs 10-50k"}
                onChange={handleChange}
              />
              <p> Rs 10-50k</p>
            </div>
            <div className="label_radio">
              <input
                type="radio"
                name="income"
                value="Rs 50K - 1L"
                checked={questionData.income === "Rs 50K - 1L"}
                onChange={handleChange}
              />

              <p> Rs 50K - 1L </p>
            </div>
            <div className="label_radio">
              <input
                type="radio"
                name="income"
                value="Rs 1-3L"
                checked={questionData.income === "Rs 1-3L"}
                onChange={handleChange}
              />
              <p> Rs 1-3L</p>
            </div>
            <div className="label_radio">
              <input
                type="radio"
                name="income"
                value="Rs 3-5L"
                checked={questionData.income === "Rs 3-5L"}
                onChange={handleChange}
              />
              <p> Rs 3-5L </p>
            </div>
            <div className="label_radio">
              <input
                type="radio"
                name="income"
                value="Rs 5-10L"
                checked={questionData.income === "Rs 5-10L"}
                onChange={handleChange}
              />
              <p> Rs 5-10L</p>
            </div>
            <div className="label_radio">
              <input
                type="radio"
                name="income"
                value="Over 10L"
                checked={questionData.income === "Over 10L"}
                onChange={handleChange}
              />
              <p> Over 10L </p>
            </div>
            {errors.income && <div className="error">{errors.income}</div>}
          </label>

          <label>
            6. What do you think is stopping you from launching your software?
            <textarea
              name="launchBarrier"
              value={questionData.launchBarrier}
              onChange={handleChange}
            />
            {errors.launchBarrier && (
              <div className="error">{errors.launchBarrier}</div>
            )}
          </label>

          <label>
            7. Which of the following best describes your financial situation?
            <div className="label_radio">
              <input
                type="radio"
                name="financialSituation"
                value="I have plenty of cash and credit to invest in growing this  business, Rs 1.5 Lakh or more"
                checked={
                  questionData.financialSituation ===
                  "I have plenty of cash and credit to invest in growing this  business, Rs 1.5 Lakh or more"
                }
                onChange={handleChange}
              />
              <p>
                {" "}
                I have plenty of cash and credit to invest in growing this
                business (Rs 1.5 Lakh or more){" "}
              </p>
            </div>
            <div className="label_radio">
              <input
                type="radio"
                name="financialSituation"
                value="I have some cash and credit to invest, but it's limited"
                checked={
                  questionData.financialSituation ===
                  "I have some cash and credit to invest, but it's limited"
                }
                onChange={handleChange}
              />
              <p>I have some cash and credit to invest, but it's limited</p>
            </div>
            <div className="label_radio">
              <input
                type="radio"
                name="financialSituation"
                value="I'm operating on a tight budget"
                checked={
                  questionData.financialSituation ===
                  "I'm operating on a tight budget"
                }
                onChange={handleChange}
              />
              <p> I'm operating on a tight budget </p>
            </div>
            {errors.financialSituation && (
              <div className="error">{errors.financialSituation}</div>
            )}
          </label>

          <label>
            8.How soon are you committed to building a software?
            <div className="label_radio">
              <input
                type="radio"
                name="commitmentTime"
                value="RIGHT NOW - I want to get started immediately."
                checked={
                  questionData.commitmentTime ===
                  "RIGHT NOW - I want to get started immediately."
                }
                onChange={handleChange}
              />
              <p> RIGHT NOW - I want to get started immediately. </p>
            </div>
            <div className="label_radio">
              <input
                type="radio"
                name="commitmentTime"
                value="WITHIN 90 DAYS - I have other things to attend to first."
                checked={
                  questionData.commitmentTime ===
                  "WITHIN 90 DAYS - I have other things to attend to first."
                }
                onChange={handleChange}
              />
              <p> WITHIN 90 DAYS - I have other things to attend to first. </p>
            </div>
            <div className="label_radio">
              <input
                type="radio"
                name="commitmentTime"
                value="MORE THAN 90 DAYS - I want to do this eventually, but I'm not sure when."
                checked={
                  questionData.commitmentTime ===
                  "MORE THAN 90 DAYS - I want to do this eventually, but I'm not sure when."
                }
                onChange={handleChange}
              />
              <p>
                {" "}
                MORE THAN 90 DAYS - I want to do this eventually, but I'm not
                sure when.{" "}
              </p>
            </div>
            {errors.commitmentTime && (
              <div className="error">{errors.commitmentTime}</div>
            )}
          </label>

          <div className="sub_btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
          {loading && <Loader/>}
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 0 0;
  display: flex;
  justify-content: center;

  .error {
    color: red;
    font-size: 14px;
  }

  .business-form-container {
    width: 70%;
    padding: 30px 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    &:hover {
      box-shadow: 0 10px 20px #0586ceb3, 0 6px 6px #0586ceb3;
    }
  }

  .business-form-container h1 {
    text-align: center;
    font-size: 25px;
    margin-bottom: 20px;
    font-weight: 700;
  }

  form label {
    display: block;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 400;
  }

  .field_delete_btn{
    display:flex;
    align-items:center;
    gap:10px;
    svg{
      font-size: 25px;
      color:#0b66c2;
    }
  }

  .addmore_url{
    cursor:pointer;
    color:#0b66c2;
    font-size:15px;
  }

  .label_radio {
    display: flex;
    gap: 10px;
    align-items: center;
    padding-left: 5px;
    input {
      cursor: pointer;
    }
    p {
      margin: 0;
      font-size: 14px;
      font-weight: 400;
    }
  }

  form input[type="text"],
  form textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #334770;
  }

  form textarea {
    height: 100px;
    resize: vertical;
  }

  .sub_btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    button {
      font-size: 14px;
      color: white;
      text-transform: uppercase;
      padding: 13px 81px;
      border: 0;
      letter-spacing: 3px;
      border-radius: 50px;
      background-image: linear-gradient(101deg, #012d64, #06b0ff);
      box-shadow: 0 10px 20px #0586ceb3;
    }
  }

  @media (max-width: 567px) {
    padding: 20px 0;
    .business-form-container {
      width: 100%;
    }

    .label_radio {
      padding: 5px 5px;
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    .business-form-container {
      width: 90%;
      margin: 0 auto;
    }
  }
`;
