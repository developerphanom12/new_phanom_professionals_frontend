import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EXCHANGE_URLS_BUYER } from "../../Important/URLS";
import { toast } from "react-toastify";
import { HiEnvelopeOpen } from "react-icons/hi2";

export default function ThankyouPage() {
  const [bookingData, setBookingData] = useState("");
  const val = useSelector((state) => state.users.bookid);
  console.log("Booking ID from Redux in ThankYou:", val);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get(`${EXCHANGE_URLS_BUYER}/getBooking`, {
          params: {
            id: val,
          },
        });
        if (response.status === 200) {
          setBookingData(response.data.data[0]);
        }
      } catch (err) {
        console.error("Error fetching booking data:", err);
        toast.error("Failed to fetch booking data. Please try again.");
      }
    };

    fetchBookingData();
  });

  return (
    <Thank>
      <Helmet>
        <title>Thankyou for Booking </title>

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

        <script>
          {` gtag('event', 'conversion', {'send_to': 'AW-10900846860/j9DjCJKll-EZEIzy9s0o'});`}
        </script>
      </Helmet>

      <StyledDiv>
        <HiEnvelopeOpen />

        <h2 class="animate__animated animate__bounce animate__delay-1s">
          Thank You <span style={{ color: "#0b66c2" }}> for Booking</span> with
          Us!
        </h2>
        <p>Your Message has been sent!</p>

        {/* 
        <p>
          Dear <b>{bookingData?.name}</b>,
        </p>

        <p>
          Thank you for booking an appointment with <b>Phanom Professionals</b>!
          We're excited to assist you with your{" "}
          <b>
            {bookingData?.services?.map((service) => (
              <> {service?.name || service}.</>
            ))}
          </b>
        </p>

        <h4>Booking Details:</h4>

        <ul>
          <li>Name: {bookingData?.name} </li>
          <li>Email: {bookingData?.email} </li>
          <li>Phone: {bookingData?.mobile_number} </li>
          <li>
            Service:
            <ul style={{ listStyle: "none" }}>
              <li>
                {bookingData?.services?.map((service, index) => (
                  <div key={index}> {service?.name || service}</div>
                ))}
              </li>
            </ul>
          </li>

          <li>Date & Time: {bookingData.date_time}</li>
          <li>Time Zone: {bookingData.time_zone}</li>
          <li>Comments: {bookingData.comment}</li>
          
        </ul> */}

        <div className="back_button">
          <button
            onClick={() => {
              navigate("/hire-indian-talent");
            }}
          >
            Go Back
          </button>
        </div>
      </StyledDiv>
    </Thank>
  );
}

const Thank = styled.section`
  padding: 80px;
  text-align: center;

  

  svg {
    width:200px;
    height:80px;
    color: #0b66c2;
}



  h2{
    margin:0;
  }

  p{
    font-size: 20px;
    color: #6e6e6e;
    margin:0;

  }

  @media (min-width: 567px) and (max-width: 992px) {
      padding: 10px;
  }


  @media (max-width: 567px) {
    padding: 10px;
   
  }


  .back_button {
    display: flex;
    justify-content: center;
  }


`;

const StyledDiv = styled.section`
  padding:140px 30px;
  margin:auto;
  width:60vw;
  border:2px double #0586ceb3;
  border-radius:11px;
  display:flex;
  flex-direction:column;
  gap:20px;
  align-items: center;
  box-shadow: 0 10px 20px #0586ceb3;

  button {
    font-size: 16px;
    color: white;
    padding: 10px 25px;
    border: 0;
    border-radius: 50px;
    background-image: linear-gradient(101deg, #012d64, #06b0ff);
    box-shadow: 0 10px 20px #0586ceb3;
  }
  h2 {
    text-align: center;
    // background: linear-gradient(70deg, #cd1ce6, #13c9df, #9059e4);
    // -webkit-background-clip: text;
    // background-clip: text;
    // -webkit-text-fill-color: transparent;
  }
  ul {
    list-style-image: linear-gradient(70deg, #13c9df, #9059e4);
  }

  @media (min-width: 567px) and (max-width: 1024px) {
 
    margin-top: 50px;
    padding:80px 30px;


    .StyledDiv h2 {
      text-align: left;
    }
  }
  @media (max-width: 567px) {
    margin-top:50px;
    width:90vw;
    padding:60px 30px;

    h2 {
      text-align: center;
    }

  }
`;
