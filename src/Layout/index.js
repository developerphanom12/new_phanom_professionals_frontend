import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { TopNavbar } from "./TopNavbar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  // const token = localStorage.getItem("token");
  // const userDetails = useSelector((state) => state?.user);

  // const isLandingPage = location.pathname === "/hire-indian-talent";
  const isLandingPage = [
    "/hire-indian-talent",
    "/apply",
    "/thank-you",
  ].includes(location.pathname);

  return (
    <Root>
      {/* {isLandingPage &&(
         <div className="top_bar">
          {token ?
            ( 
             userDetails.role === "buyer" ? 
            (
              <NavBuyer/>
            ) : userDetails.role === "seller" ?
            (
              <NavSeller />
            ) : 
            (<CommonNavbar/>

            ) 
          ) : (
          <CommonNavbar/>
          )
          }
         </div>
      )} */}
      {/* {isLandingPage &&( */}
      <>
        {!isLandingPage && <TopNavbar />}

        <div className="main_body">{children}</div>
        {!isLandingPage && <Footer />}
      </>
      {/* )} */}
      {/* <Footer/> */}
    </Root>
  );
};

export default Layout;

const Root = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  max-width: 100vw;
  width: 100%;
  .top_bar {
    margin-bottom: 80px;
  }

  .main_bar {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .top_bar {
      background: #ffffff;
      display: flex;
      position: fixed;
      z-index: 1111;
      height: auto;
      background-image: linear-gradient(
        to bottom right,
        #c6a5ffc7,
        #c6a5ff63,
        #ffffff,
        #c6a5ff24
      );
      width: 100%;
    }
    .main_body {
      height: 100%;
      width: 100%;
    }
  }
`;
