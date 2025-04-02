import React from "react";
import styled from "styled-components";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import {
  PiNumberCircleOneBold,
  PiNumberCircleThreeBold,
  PiNumberCircleTwoBold,
} from "react-icons/pi";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";
import { EXCHANGE_URLS_BUYER } from "../../../Important/URLS";
import { primaryColor, secGradient } from "../../../Global/GlobalButton";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const serviceOptions = [
  "Optimization (SEO)",
  "Social Media",
  "Application Development",
  "Shopify API Development",
  "Web Design",
  "ECommerce Optimization",
  "Website Development",
  "WordPress Plugin",
  "Pay Per Click (PPC)",
  "Shopify Development",
  "Custom Website Development",
  "Ecommerce Website Development",
];
const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required."),
  phone: yup
    .number()
    .required("Phone is required.")
    .min(5, "Phone should be at least 5 characters."),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required."),
  services: yup.array().min(1, "At least one service is required.").required(),
  budget: yup.string().required("Budget is required"),
  start_date: yup.string().required(" Project Start Timings are required"),
  details: yup.string().required("Project details are required"),
});


export default function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = async (data) => {
    try {
 

      const res = await axios.post(`${EXCHANGE_URLS_BUYER}/project`, data);

      if (res.status === 200) {
        toast.success("Thank You Submitting");
      } else {
        toast.error("Form submission failed");
      }
    } catch (err) {
      toast.error("An error occurred during form submission");
      console.error(err);
    }
  };

  return (
    <Root>
      <div className="container-fluid">
        <div className="row bg-color">
          <div className="col-lg-5 col-md-12 col-12 first-col">
            <form className="form-div" onSubmit={handleSubmit(onSubmit)}>
              {" "}
              <span className="black-content">Experience </span>
              <span className="colored-content">Real </span>
              <span className="black-content">Results</span>
              <p className="paragraph">
                Partner with Phanom Digital Marketing Agency and scale your
                business.
              </p>
              <div className="row field_div">
                <div className="col-lg-6 col-md-12 col-12  ">
                  <Controller
                    name="username"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Name*"
                        fullWidth
                        error={!!errors.username}
                        helperText={errors.username?.message}
                      />
                    )}
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-12 sec-input ">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Phone*"
                        fullWidth
                        type="tel"
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6 col-md-12 col-12  ">
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Email Address*"
                        fullWidth
                        type="email"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6 col-12 col-12 ">
                  <FormLabel className="label_heading">
                    What services can we provide you?
                  </FormLabel>
                  <FormControl className="serv_div" fullWidth>
                    <Controller
                      name="services"
                      control={control}
                      render={({
                        field: { onChange, onBlur, value = [], ref },
                      }) => (
                        <Select
                          multiple
                          value={value}
                          onChange={(e) => onChange(e.target.value)}
                          inputRef={ref}
                          displayEmpty
                          renderValue={(selected) =>
                            selected ? selected : <em>Select a Service</em>
                          }
                          MenuProps={MenuProps}
                          error={!!errors.services}
                        >
                          {serviceOptions.map((name) => (
                            <MenuItem key={name} value={name}>
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />

                    <p className="error-text">{errors.services?.message}</p>
                  </FormControl>
                </div>
                <div className="col-lg-6 col-12 col-12  ">
                  <FormLabel className="label_heading">
                    What is your Budget?
                  </FormLabel>
                  <FormControl className="choos_div" fullWidth>
                    <Controller
                      name="budget"
                      control={control}
                      render={({ field }) => (
                        <Select {...field} displayEmpty error={!!errors.budget}>
                          <MenuItem value="">
                            <em>Select Budget</em>
                          </MenuItem>
                          <MenuItem value="500-1000">$500-$1000</MenuItem>
                          <MenuItem value="1000-2000">$1000-$2000</MenuItem>
                          <MenuItem value="2000-3000">$2000-$3000</MenuItem>
                          <MenuItem value="3000-5000">$3000-$5000</MenuItem>
                        </Select>
                      )}
                    />
                    <p className="error-text">{errors.budget?.message}</p>
                  </FormControl>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12 col-12 col-12">
                  <FormLabel className="label_heading">
                    How soon you want to start this project?
                  </FormLabel>
                  <Controller
                    name="start_date"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup {...field} className="start_div">
                        <FormControlLabel
                          value="Immediate"
                          control={<Radio />}
                          label="Immediate"
                        />
                        <FormControlLabel
                          value="Within a Week"
                          control={<Radio />}
                          label="Within a Week"
                        />
                        <FormControlLabel
                          value="Within 15 days"
                          control={<Radio />}
                          label="Within 15 days"
                        />
                        <FormControlLabel
                          value="Within a Month"
                          control={<Radio />}
                          label="Within a Month"
                        />
                      </RadioGroup>
                    )}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <label className="label_heading">Share Project Details</label>
                  <br />
                  <Controller
                    name="details"
                    control={control}
                    render={({ field }) => (
                      <TextareaAutosize
                        {...field}
                        minRows={5}
                        placeholder="Project details"
                        style={{ width: "100%", padding: "10px" }}
                        error={!!errors.details}
                      />
                    )}
                  />
                  <p className="error-text">{errors.details?.message}</p>{" "}
                </div>
              </div>
              <div className="sub_btn">
                <button>Sumbit</button>
              </div>
            </form>
          </div>

          <div className="col-lg-6  col-md-12 col-12 second-col">
            
            <div className="d-flex  ">
              {/* <img src={one} alt="img" className="img-fluid" /> */}
              <div className="svg">

              <FaRegArrowAltCircleLeft />
              </div>
              <div style={{paddingLeft:"10px"}}>
                <h2 className="heading ready_cont">
                  Ready to Dominate Your Market?
                </h2>
                <p className="paragraph">
                  Partner with Phanom Digital Marketing Agency and scale your
                  business.
                </p>
              </div>
            </div>

            <div className="d-flex  img_cont">
              {/* <img src={one} alt="img" className="img-fluid" /> */}
              <PiNumberCircleOneBold />
              <div>
                <h2 className="heading">Contact Us</h2>
                <p className="paragraph">
                  Fill out our brief contact form, and we’ll be in touch with
                  you soon to learn more about your business.
                </p>
              </div>
            </div>

            <div className="d-flex  img_cont">
              {/* <img src={two} alt="img" className="img-fluid" /> */}
              <PiNumberCircleTwoBold />
              <div>
                <h2 className="heading">Launch Targeted Campaigns</h2>
                <p className="paragraph">
                  Our digital marketing experts will work closely with you to
                  implement data-driven strategies that drive business growth
                </p>
              </div>
            </div>

            <div className="d-flex  img_cont">
              {/* <img src={three} alt="img" className="img-fluid" /> */}
              <PiNumberCircleThreeBold />
              <div>
                <h2 className="heading">Achieve Lasting Growth</h2>
                <p className="paragraph">
                  Solidify your digital presence, expand your brand reach and
                  see outstanding results month-over-month.{" "}
                </p>
              </div>
            </div>

            <div className="row mt-3 border-top">
              <div className="col-lg-4 col-6">
                <h5>Headquarters:</h5>
                <p className="paragraph">Chandigarh</p>
              </div>

              <div className="col-lg-4 col-6">
                <h5>Register Office:</h5>
                <p className="paragraph">
                Plot No. C-209/B, 1st Floor Phase 8B, Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 160055
                </p>
              </div>
              <div className="col-lg-4 col-6">
                <h5>Support:</h5>
                <a href="tel:9915452169"> +91 (628) 007-2655</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color: #13c9df;
  padding: 10px;
  .bg-color {
    background-color: ${primaryColor};
    margin-top: 20px;
  }
  .first-col {
    padding: 40px 0 40px 40px;
  }

  .form-div {
    background-color: #f3f3f3;
    border-radius: 30px;
    padding: 20px 30px;
    .colored-content {
      font-size: 35px;
      font-weight: bold;
      line-height: 1.3em;
      background: ${secGradient};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .black-content {
      font-size: 30px;
      font-weight: bold;
      line-height: 1.3em;
    }
    .paragraph {
      font-size: 13px;
      color: #6e6e6e;
      margin: 0px 0px 5px;
    }

    .field_div {
      gap: 10px;
    }
    input[type="text"] {
      border: 1px solid #dadada;
      height: 20px;
      width: 100%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
      &:hover {
        border: 1px solid #000000;
      }
    }

    input[type="number"] {
      border: 1px solid #dadada;
      height: 20px;
      width: 100%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
      &:hover {
        border: 1px solid #000000;
      }
    }

    input[type="email"] {
      border: 1px solid #dadada;
      height: 20px;
      width: 100%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
      &:hover {
        border: 1px solid #000000;
      }
    }

    .sec-input {
      margin-left: -22px;
    }

    ::placeholder {
      font-size: 16px;
      color: #6e6e6e;
      font-weight: 400;
    }

    label {
      font-size: 11px;
      color: #6e6e6e;
    }

    .start_div {
      display: flex;
      flex-direction:column;

      .sub_start_div {
        flex: 1;
        display: flex;
        gap: 6px;
        align-items: center;
        input {
          cursor: pointer;
        }
        label {
          cursor: pointer;
        }
      }
    }
    /* .rad_div{
      input{
        margin-top:10px;
      }
      label {
      font-size: 11px;
      color: #6e6e6e;
      margin:0 0 0 10px;
   
    }

    } */
    .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
      height: 40px;
    }
    .css-q8hpuo-MuiFormControl-root {
      height: 38px;
    }
    select {
      border: 1px solid #dadada;
      height: 20px;
      width: 100%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
      &:hover {
        border: 1px solid #000000;
      }
    }

    option {
      font-size: 14px;
      color: #6e6e6e;
      font-weight: 400;
    }

    textarea {
      background-color: #f3f3f3;
      border-radius: 10px;
      height: 95px !important;
      padding: 10px 0 0 10px;
      border: 1px solid #dadada;
    }

    .sub_btn {
      display: flex;
      justify-content: center;
      button {
        font-size: 14px;
        color: white;
        background-color: ${primaryColor};
        text-transform: uppercase;
        padding: 13px 81px;
        border: 0;
        letter-spacing: 3px;
        border-radius: 50px;
      }
    }
    .label_heading {
      font-size: 15px;
      color: #212529;
      font-weight: 600;
      margin-bottom: 7px;
    }
  }

  .second-col {
    padding: 40px;

    .heading {
      font-size: 28px;
      font-weight: bold;
      line-height: 1.3em;
      color: #fff;
    }

    .ready_cont {
      padding-top: 13px;
    }

    .svg {
      padding-top: 16px;
      svg{

        font-size: 40px;
        color: #fff;
      }
      /* margin: 16px 0 0 0; */
    }

    .paragraph {
      font-size: 13px;
      color: #ffffff;
      padding-right: 20px;
    }

    .border-top {
      border-top: 1px solid white;
      margin-left: 13px;
      width: 92%;
      padding-top: 30px;

      h5 {
        font-size: 15px;
        color: #fff;
        font-weight: 600;
        margin-bottom: 7px;
      }

      a {
        font-size: 13px;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }

  .img_cont {
    display: flex;
    padding-left: 14px;
    gap: 22px;
    svg {
      height: 45px;
      width: 45px;
      color: #ffffff;
      object-fit: cover;
    }
  }

  .css-vamk89-MuiFormControl-root {
    width: 88%;
    margin-top: 0;
  }

  .space_div {
    padding-left: 10px;
  }

  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    border: 1px solid #fffbfb !important;
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: #000000 !important;
  }

  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: #000000;
    padding: 10px;
  }
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    border: 1px solid #ffffff;
    padding: 10px;
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 10px;
  }
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    &:hover {
      border-color: #ffffff;
    }
  }

  .css-1869usk-MuiFormControl-root {
    width: 91%;
    margin: 0;
  }

  @media (max-width: 567px) {
    .container-fluid {
      padding: 0 10px !important;
    }
    .form-div .start_div {
      height: auto;
    }
    .first-col {
      padding: 10px 10px 0 10px;
    }
    .form-div {
      padding: 20px 15px 30px 15px;
      .sec-input {
        margin: 10px 0 0 0;
      }
      textarea {
        width: 95%;
      }
      button {
        margin: 15px 0 0 25px;
      }
      label {
        font-size: 10px;
      }
    }

    .second-col {
      padding: 20px 0 ;
      .svg {
        svg{

          transform: rotate(90deg);
        }
      }
      .heading {
        font-size: 18px;
      }

      .paragraph {
        font-size: 9px;
        color: #ffffff;
        padding-right: 20px;
      }
    }

    /* .row {
      margin-right: 0;
      margin-left:0;
    }  */

    .css-vamk89-MuiFormControl-root {
      width: 85%;
      margin-left: 8px !important;
    }

    .gap_cont {
      margin-left: 0;
    }

    .img_cont {
      gap: 10px;
    }
  }
@media(max-width: 1302px){
  .form-div .start_div {
      height: auto;
    }
}
  @media (min-width: 567px) and (max-width: 992px) {
    .form-div .css-q8hpuo-MuiFormControl-root {
      height: 40px;
    }
    .form-div .start_div {
      height: auto;
    }
    .css-vamk89-MuiFormControl-root {
      width: 88%;
      margin-left: 8px !important;
    }
    .first-col {
      padding: 10px 10px 0 10px;
      overflow: hidden;
    }
    .form-div {
      padding: 20px 30px ;
      .sec-input {
        margin: 10px 0 0 0;
      }
      textarea {
        width: 95%;
      }
      button {
        margin: 15px 0 0 10px;
      }
    }

    .second-col {
      padding: 20px 30px;
      .svg {
        padding-top: 10px;
        svg{

          transform: rotate(90deg);
        }
      }
      .paragraph {
        font-size: 17px;
      }

      .heading {
        padding-top: 13px;
      }
    }

  

    .gap_cont {
      margin-left: 0;
    }

    .img_cont {
      svg{
        margin-top: 10px;
      }
      padding-left: 31px;
    }
  }
`;
