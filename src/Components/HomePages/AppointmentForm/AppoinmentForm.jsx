import React, { useState } from 'react'
import styled from "styled-components";
import {
  GreyBorderButton,
  PurpleBackground,
} from "../../Global/GlobalButton";
import {
  InputLabel,
  InputTextarea,
  InputType,
  SelectBorder,
} from "../../Global/GlobalFormElement";
import TimezoneSelect from "react-timezone-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AppoinmentForm = () => {
     const [isScheduleVisible, setIsScheduleVisible] = useState(false);
    
      const [selectedTimezone, setSelectedTimezone] = useState({});
      const [startDate, setStartDate] = useState(new Date());
      const handleDateChange = (date) => {
        setStartDate(date);
      };
      const toggleScheduleVisibility = () => {
        setIsScheduleVisible(!isScheduleVisible);
      };
    
      const formatSchedule = () => {
        const formattedTimezone = selectedTimezone ? selectedTimezone.value : "";
        const formattedDate = startDate ? startDate.toLocaleString() : ""; // Adjust format if needed
        return `${formattedTimezone} - ${formattedDate}`;
      };
  return (
    <Root> 
        
<form>
    <div className="label_content">
      <InputLabel>Name</InputLabel>
      <InputType placeholder="This Kumar" />
    </div>

    <div className="label_content">
      <InputLabel>Email</InputLabel>
      <InputType placeholder="thiskumar@gmail.com" />
    </div>

    <div className="label_content">
      <InputLabel>Contact</InputLabel>
      <InputType placeholder="+91 0000 000000" />
    </div>

    <div className="label_content">
      <InputLabel>Schedule your Meeting</InputLabel>
      <InputType
        placeholder={isScheduleVisible ? "Select" : formatSchedule()}
        onClick={toggleScheduleVisibility}
      />

      {isScheduleVisible && (
        <div className="schedule_div">
          <div className="label_content">
            <InputLabel>Select Time Zone</InputLabel>

            <TimezoneSelect
              value={selectedTimezone}
              onChange={setSelectedTimezone}
            />
          </div>

          <div className="label_content">
            <InputLabel>Select Date & Time</InputLabel>
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              showTimeSelect
              dateFormat="Pp"
              className="cale_time"
              name="date_time"
              timeIntervals={15}
              timeFormat="HH:mm"
              timeCaption="Time"
              placeholderText="Select a date and time"
            />
          </div>
          <div
            className="time_date_btn"
            onClick={toggleScheduleVisibility}
          >
            <GreyBorderButton>Cancel</GreyBorderButton>
            <PurpleBackground>Submit</PurpleBackground>
          </div>
        </div>
      )}
    </div>

    <div className="label_content">
      <InputLabel>Select Service</InputLabel>
      <SelectBorder>
        <option value="">Select </option>
        <option>Optimization (SEO)</option>
        <option>Social Media</option>
        <option>Application Development</option>
        <option>Shopify API Development</option>

        <option value="">Web Design </option>
        <option>ECommerce Optimization</option>
        <option>Website Development</option>
        <option>WordPress Plugin</option>
        <option>Pay Per Click (PPC)</option>

        <option>Shopify Development</option>
        <option>Custom Website Development</option>
        <option>Ecommerce Website Development</option>
      </SelectBorder>
    </div>

    <div className="label_content">
      <InputLabel>Share Project Details(Optional)</InputLabel>
      <InputTextarea rows="4" className="text_area" />
    </div>

    <div className="submit_btn">
      <PurpleBackground>Submit</PurpleBackground>
    </div>
  </form>
  </Root>
  )
}

const Root = styled.section`
    
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .label_content {
          display: flex;
          flex-direction: column;
          gap: 10px;
          .schedule_div {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);

            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            border-radius: 10px;
            z-index: 111;
            position: absolute;
            background: #ffff;
            margin-top: 76px;
            min-width: 40%;
            .css-13cymwt-control {
              border: 1px solid #66666659;
              border-radius: 12px;
              padding: 5px;
              font-family: "Poppins", sans-serif;
              font-size: 13px;
              font-weight: 400;
              line-height: 24px;
              text-align: left;
              color: #333333;
            }

            .react-datepicker-wrapper {
              border: 1px solid #66666659;
              border-radius: 12px;
              padding: 0;
              font-family: "Poppins", sans-serif;
              font-size: 13px;
              font-weight: 400;
              line-height: 24px;
              text-align: left;
              color: #333333;
              overflow: hidden;
              input {
                width: 100%;
                padding: 12px;
                color: #777777;
                font-size: 13px;
                font-weight: 400;
                line-height: 24px;
              }
            }

            .time_date_btn {
              display: flex;
              justify-content: center;
              gap: 50px;
            }
          }
        }
        .submit_btn {
          display: flex;
          justify-content: center;
          button {
            padding: 15px 60px;
          }
        }
      }

      @media (max-width: 567px) {

        form .label_content .schedule_div {
          width: 70%;
          .time_date_btn {
            gap: 10px;
          }
        }
      }

`;