import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import TimezoneSelect from "react-timezone-select";
import * as Yup from "yup";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import { EXCHANGE_URLS_BUYER } from "../../Important/URLS";
import { FormLabel } from "react-bootstrap";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Helmet } from "react-helmet";
import { QuestionSection } from "./QuestionSection";
import { setBookingData } from "../../../redux/users/action";
import { useDispatch } from "react-redux";
import { Loader } from "../../../Loader/Loader";
import { toast } from "react-toastify";



const names = [
  // "WordPress Plugin",
  // "Custom Website Development",
  // "Ecommerce Website Development",
  // "Shopify Development",
  // "shopify custom app development ",
  // "shopify public app development ",
  // "Shopify API Development",
  // "Web Design",
  // "woocommerce developement",
  "Website Development",
  "Application Development",
  "Customer Software",
];

export const Apply = () => {

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is Required"),
    time_zone: Yup.string().required("Time Zone is Required"),
    date_time: Yup.string().required("Date and Time is Required"),
    services: Yup.array().min(1, "At least one service is required"),
    attendees: Yup.array()
      .of(
        Yup.object().shape({
          email: Yup.string()
            .trim()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format") 
            .required("Email is required"),
        })
      )
      .min(1, "At least one attendee is required"),
      mobile_number: Yup.string()
      .trim()
      .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits")
      .required("Phone Number is required"),
    comment: Yup.string().required("Details are Required"),
  });


  // const theme = useTheme();

  const [errors, setErrors] = useState({});
  const [personName, setPersonName] = React.useState([]);
  const [attendees, setAttendees] = useState([{ email: "" }]);
  const [subdata, setSubdata] = useState({});
  // const emails = attendees[0].email;
  const [inputData, setInputData] = useState({
    name: "",
    mobile_number: "",
    email: "",
    services: [],
    comment: "",
    time_zone: "Asia/Kolkata",
    date_time: "",
  });


  useEffect(() => {
    if (attendees.length > 0 && attendees[0].email) {
      setInputData((prev) => ({ ...prev, email: attendees[0].email }));
    }
  }, [attendees]);

  const handleAttendeeChange2 = async (index, e) => {
    const updatedAttendees = [...attendees];
    updatedAttendees[index].email = e.target.value.trim(); 
    setAttendees(updatedAttendees);

    try {
      await Yup.object({
        attendees: Yup.array().of(
          Yup.object().shape({
            email: Yup.string()
              .trim()
              .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
              .required("Email is required"),
          })
        ),
      }).validate({ attendees: updatedAttendees }, { abortEarly: false });

      setErrors({});
    } catch (validationErrors) {
      const newErrors = validationErrors.inner.reduce((acc, err) => {
        if (err.path.includes("[")) {
          const [parent, idx, child] = err.path.split(/[\[\].]+/);
          acc[parent] = acc[parent] || [];
          acc[parent][idx] = { [child]: err.message };
        } else {
          acc[err.path] = err.message;
        }
        return acc;
      }, {});

      setErrors(newErrors);
    }
  };

  useEffect(() => {
    if (attendees[0] && attendees[0].email) {
      setInputData((prevData) => ({
        ...prevData,
        email: attendees[0].email,
      }));
    }
  }, [attendees]);


  const [isSubmitted, setIsSubmitted] = useState(false);

  const [selectedTimezone, setSelectedTimezone] = useState(" ");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const detectTimezone = async () => {
      try {
        const browserTimezone =
          Intl.DateTimeFormat().resolvedOptions().timeZone;
        setSelectedTimezone(browserTimezone);

        setInputData((prevData) => ({
          ...prevData,
          time_zone: browserTimezone,
        }));

        const response = await axios.get("https://ipapi.co/json/");
        if (response.data && response.data.timezone) {
          setSelectedTimezone(response.data.timezone);
          setInputData((prevData) => ({
            ...prevData,
            time_zone: response.data.timezone,
          }));
        }
      } catch (error) {
        console.error("Error detecting timezone:", error);
      }
    };

    detectTimezone();
  }, []);

  const dispatch = useDispatch();

  const formatDate = (date) => {
    if (!date) return "";

    const formattedDate = new Date(date);
    if (isNaN(formattedDate.getTime())) {
      console.error("Invalid date:", date);
      return "Invalid Date";
    }

    let hours = formattedDate.getHours();
    const minutes = String(formattedDate.getMinutes()).padStart(2, "0");
    const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
    const day = String(formattedDate.getDate()).padStart(2, "0");
    const year = formattedDate.getFullYear();

    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${year}-${month}-${day} & ${hours}:${minutes} ${ampm}`;
  };


  const handleServiceChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setPersonName((prev) => [...prev, value]);
      setInputData((prevData) => ({
        ...prevData,
        services: [...prevData.services, value],
      }));
    } else {
      setPersonName((prev) => prev.filter((name) => name !== value));
      setInputData((prevData) => ({
        ...prevData,
        services: prevData.services.filter((service) => service !== value),
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const formattedInputData = {
        ...inputData,
        date_time: formatDate(inputData.date_time),
        attendees,
      };

      console.log("Formatted Input Data", formattedInputData);
      await validationSchema.validate(formattedInputData, { abortEarly: false });
      setSubdata(formattedInputData);

      await handleSubmit(e);

      const response = await axios.post(
        `${EXCHANGE_URLS_BUYER}/booking`,
        inputData
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        console.log("Book Id", response.data.data.id);
        const bookid = response.data.data.id;
        dispatch(setBookingData(bookid));
        setSubdata(formattedInputData);
        console.log(subdata, "subbbbbbb");
      }
    } catch (validationErrors) {
      const errors = validationErrors?.inner?.reduce((acc, currentError) => {
        // Handle array indices in path (e.g., "attendees[0].email")
        const path = currentError.path;
        if (path.includes('[')) {
          const [parent, index, child] = path.split(/[\[\].]+/);
          acc[parent] = acc[parent] || [];
          acc[parent][index] = { [child]: currentError.message };
        } else {
          acc[currentError.path] = currentError.message;
        }
        return acc;
      }, {});

      setErrors(errors);
      console.log(errors);
      toast.error("Invalid fields. Please check the form.");

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(subdata, "Updated subdata");
  }, [subdata]);

  const handleTimezoneChange = (timezone) => {
    setSelectedTimezone(timezone?.value);
    setInputData((prevData) => ({ ...prevData, time_zone: timezone?.value }));
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  };



  // const formatDateToISO = (dateString) => {
  //   return new Date(dateString).toISOString();
  // };
  console.log(attendees)
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch(
        "https://api-phanom.phanomprofessionals.com/create-event",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            startDate: formatDate(inputData.date_time),
            attendees,
            timeZone: inputData.time_zone || "Asia/Kolkata",
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("✅ Event created:", data);
      } else {
        const error = await response.text();
        console.error("❌ Error crezating event:", error);
      }
    } catch (error) {
      console.error("❌ Network error:", error);
    }
  };

  const handleCombinedSubmit = (event) => {
    event.preventDefault();
    if (handleSubmit) {
      handleSubmit(event);
    }
    if (handleFormSubmit) {
      handleFormSubmit(event);
    }
  };

  return (
    <Root>
      <Helmet>
        <title>Book Your Appointment</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10900846860"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10900846860');
          `}
        </script>
      </Helmet>

      <div id="form">
        <h2 className="first-content">
          Book
          <span style={{ color: "#0b66c2" }}> an </span> Appointment
        </h2>

        {!isSubmitted && (
          <form onSubmit={handleCombinedSubmit}>
            <div className="form_div">
              <div className="zone_date">
                <div className="cal_div">
                  <div className="select-wrapper">
                    <div className="time_zone_head">TimeZone</div>

                    <TimezoneSelect
                      value={selectedTimezone}
                      onChange={handleTimezoneChange}
                      name="time_zone"
                      placeholder="Select Timezone"
                      isClearable={true}
                    />

                    {errors?.time_zone && (<div className="error">  {errors.time_zone}  </div>)}

                  </div>
                </div>

                <div className="date_div">
                  <div className="sub_date_div">
                    <label>Pick Your Time</label>

                    <input
                      type="datetime-local"
                      value={inputData.date_time}
                      name="date_time"
                      onChange={(e) =>
                        setInputData((prev) => ({ ...prev, date_time: e.target.value }))
                      } />

                    {errors?.date_time && (<div className="error"> {errors.date_time}  </div>)}

                  </div>
                </div>

              </div>

              <div className="container-fluid">
                <div className="row fiel_div">
                  <div className="col-lg-6 col-md-12 col-12">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={inputData.name}
                      onChange={handleInputChange}

                    />

                    {errors?.name && (<div className="error"> {errors.name} </div>)}

                  </div>

                  <div className="col-lg-6 col-md-12 col-12">
                    <input
                      type="tel"
                      placeholder="Phone"
                      name="mobile_number"
                      value={inputData.mobile_number}
                      onChange={handleInputChange}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, ""); // Prevents non-numeric input
                      }}
                      maxLength={10}
                      pattern="[0-9]*"
                    />

                    {errors?.mobile_number && (
                      <div className="error"> {errors.mobile_number} </div>
                    )}

                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="row mail_div">
                      <div className="col-lg-12 col-md-12 col-12">
                        {attendees.map((attendee, index) => (
                          <div key={index}>
                            <input
                              type="email"
                              placeholder="Email Address"
                              name="email"
                              value={attendee.email}
                              onChange={(e) => handleAttendeeChange2(index, e)}
                            />
                            {errors?.attendees?.[index]?.email && (
                              <div className="error">{errors.attendees[index].email}</div>
                            )}

                          </div>
                        ))}
                      </div>
                    </div>


                    {/* {errors?.emails && (<div className="error">  {errors.emails}  </div>)} */}

                    <div className="row mt-3 show-hide">
                      <div className="col-lg-12 col-md-12 col-12">
                        <label className="label_heading">
                          Share Project Details
                        </label>
                        <textarea
                          name="comment"
                          rows="5"
                          cols="75"
                          value={inputData.comment}
                          onChange={handleInputChange}
                          placeholder="Share Project Details"

                        ></textarea>
                        {errors?.comment && (<div className="error">  {errors.comment} </div>)}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 col-12">
                    <FormLabel className="label_heading Service_div">
                      Services
                    </FormLabel>
                    <FormGroup>
                      {names.map((name) => (
                        <FormControlLabel
                          key={name}
                          control={
                            <Checkbox
                              value={name}
                              checked={personName.includes(name)}
                              onChange={handleServiceChange}
                            />
                          }
                          label={name}
                        />
                      ))}
                    </FormGroup>
                    {errors?.services && (<div className="error">   {errors.services} </div>)}
                  </div>
                </div>

                <div className="row mt-3 hide-show">
                  <div className="col-lg-12 col-md-12 col-12">
                    <label className="label_heading">
                      Share Project Details
                    </label>

                    <textarea
                      name="comment"
                      rows="5"
                      cols="75"
                      value={inputData.comment}
                      onChange={handleInputChange}
                      placeholder="Share Project Details"
                    ></textarea>

                    {errors?.comment && (<div className="error">  {errors.comment} </div>)}

                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className="sub_btn">
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}

        {isSubmitted && <QuestionSection subData={subdata} />}

        {loading && <Loader />}


      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 2% 10%;

    .error {
    color: red;
    font-size: 14px;
  }


  .mail_div {
    margin-top: 5px;
  }

  .zone_date {
    display: flex;
    gap: 25px;
    align-items: center;
    margin-bottom: 20px;

    .cal_div {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      flex: 1;

      .css-19bb58m {
        margin: unset;
        padding-bottom: unset;
        padding-top: unset;
      }

      .select-wrapper {
        width: 380px;
        border-radius: 5px;
      }

      .date_custom {
        ul.MuiList-root.MuiList-padding.MuiMultiSectionDigitalClockSection-root.css-1roo1oa-MuiList-root-MuiMultiSectionDigitalClockSection-root {
          width: 90px !important;
        }
      }

      input.cale_time {
        padding: 10px;
        border-radius: 5px;
        background-color: #f3f3f3;
        border: 1px solid #dadada;
        color: #334770;
      }

      .react-datepicker__current-month,
      .react-datepicker-time__header,
      .react-datepicker-year-header {
        color: #6b7996;
      }
      .react-datepicker__day--selected,
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--selected,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--selected,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--selected,
      .react-datepicker__year-text--in-selecting-range,
      .react-datepicker__year-text--in-range {
        border-radius: 0.3rem;
        background-color: #13c9df;
        color: #fff;
      }

      .css-1fdsijx-ValueContainer {
        padding: 5px 8px;
      }
      .css-13cymwt-control {
        margin-top: 1px;

        background-color: #f3f3f3;
      }

      .css-qbdosj-Input {
        color: #6b7996 !important;
      }

      .mon_head {
        font-size: 20px;
        font-weight: 500;
      }
      .main {
        width: 20rem;
        padding: 0.7rem;
        margin-left: 1rem;
        border: 1px solid #dadada;
      }
      .header {
        display: flex;
        margin-bottom: 0.7rem;
        justify-content: space-between;
        align-items: center;
      }
      .header button {
        font-size: 1.4rem;
        cursor: pointer;
        color: #13c9df !important;
        border: 1px solid transparent !important;
      }
      .body {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 5px;
      }
      .box {
        height: 2rem;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .box.empty {
        background-color: #e0e0e0;
        cursor: default;
      }
      .box.selected {
        background-color: #13c9df;
        color: white;
      }
    }

    .date_div {
      flex: 1;
      display: flex;
      gap: 20px;

      .sub_date_div {
        display: flex;
        flex-direction: column;
        input[type="datetime-local"] {
          background-color: #f3f3f3;
          border: 1px solid #dadada;
          height: 50px;
          padding: 0 10px;
          color: #334770;
          border-radius: 5px;
        }
      }
    }
  }

  .hide-show {
    display: none;
  }

  .css-hlgwow {
    padding: 0px 8px;
  }

  .MuiFormGroup-root {
    height: 253px;
    @media (max-width: 999px) {
      height: auto;
    }
  }

  .css-v0pjtz-MuiStack-root {
    padding-top: 0px;
    background-color: #f3f3f3;
  }

  .css-v0pjtz-MuiStack-root {
    overflow: unset;
  }

  .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
    height: 14px;
  }

  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500 !important;
    font-size: 1rem !important;
    line-height: 1.5 !important;
    letter-spacing: 0.00938em !important;
    color: #334770 !important;
    top: -4px;
  }

  .css-1dimb5e-singleValue {
    color: #334770;
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    color: #334770;
  }

  .first-content {
    font-size: 45px;
    font-weight: bold;
    line-height: 1.3em;
    margin-bottom: 20px;
    word-spacing: 5px;
    text-align: center;
  }

  .time_heading {
    display: flex;
    justify-content: center;
    span {
      font-size: 19px;
      font-weight: 600;
      line-height: 1.3em;
    }
  }

  .form_div {
    input[type="text"] {
      border: 1px solid #dadada;
      height: 50px;
      width: 100%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
      color:#334770;
    }

    input[type="text"] {
      border: 1px solid #dadada;
      height: 50px;
      width: 100%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
       color:#334770;
    }

    input[type="tel"] {
      border: 1px solid #dadada;
      height: 50px;
      width: 100%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
       color:#334770;
      &:hover {
        border: 1px solid #000000;
      }
    }

    input[type="number"] {
      border: 1px solid #dadada;
      height: 50px;
      width: 100%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
       color:#334770;
      &:hover {
        border: 1px solid #000000;
      }
    }

    input[type="email"] {
      border: 1px solid #dadada;
      height: 50px;
      width: 100%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
       color:#334770;
      &:hover {
        border: 1px solid #000000;
      }
    }

    textarea {
      width: 100%;
      background: #f3f3f3;
      padding: 7px 15px;
      border: 1px solid #dadada;
       color:#334770;
    }

    .sub_btn {
      display: flex;
      justify-content: center;
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

    .serv_div {
      width: 100%;
    }

    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
      background: #f3f3f3 !important;
    }
  }

  @media (max-width: 567px) {
    padding: 8% 5%;

      .zone_date .date_div .sub_date_div {
 
    width: 100%;
input[type="datetime-local"] {
   width: 100%;
}

}

    .css-b62m3t-container {
      width: 90vw;
    }

    .zone_date .cal_div .css-13cymwt-control {
      width: 90vw;
    }

    .zone_date {
      flex-direction: column;
      gap: 15px;

      .cal_div {
        .select-wrapper {
          width: 100%;
        }
      }
      .date_div {
        flex-direction: column;
        width: 100%;
        gap: 15px;
      }
    }

    .Service_div {
      margin-top: 20px;
    }

    .container-fluid {
      padding: 0px;
    }
    .show-hide {
      display: none;
    }
    .hide-show {
      display: block;
    }
    .first-content {
      font-size: 35px;
      text-align: center;
    }

    .fiel_div {
      display: flex;
      gap: 20px;
    }

    .cal_div {
      flex-direction: column;
    }

    .cal_div input.cale_time {
      width: 100%;
    }

    .react-datepicker-wrapper {
      width: 100%;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .MuiFormGroup-root {
      height: 253px;
    }
    .zone_date {
      flex-direction: column;
      gap: 10px;
      .cal_div {
        width: 100%;
        .select-wrapper {
          width: 100%;
        }
      }
      .date_div {
        width: 100%;
        .sub_date_div {
          width: 100%;
        }
      }
    }

    .Service_div {
      margin-top: 20px;
    }

    .fiel_div {
      display: flex;
      gap: 20px;
    }

    .show-hide {
      display: none;
    }

    .hide-show {
      display: block;
    }

    .container-fluid {
      padding: 0px;
    }
  }

  @media (min-width: 992px) and (max-width: 1024px) {
    padding: 2% 2%;
    .zone_date {
      gap: 30px;

      .zone_date .date_div .sub_date_div {
        width: 36%;
      }
    }
  }
`;

