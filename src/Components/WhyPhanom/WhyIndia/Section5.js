import React from "react";
import styled from "styled-components";
import logo1 from "../../../Images/logo1.png";
import logo2 from "../../../Images/logo2.png";
import logo3 from "../../../Images/logo3.png";
import logo4 from "../../../Images/logo4.png";

export default function Section5() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row pt-4">
          <div className="col-lg-3 col-md-6 col-6">
            <div>
              <img src={logo1} alt="img" />
              <p>Twenty percent of Microsoft’s engineers are Indian.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div>
              <img src={logo2} alt="img" />
              <p>
                Asian engineers make up about 30% of Google’s workforce, the
                majority of whom are Indian
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div>
              <img src={logo3} alt="img" />
              <p>
                There are 12,000 Indian employees at Facebook, both in the
                United States and virtually.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div>
              <img src={logo4} alt="img" />
              <p>
                At Apple, another massive tech company, one in three engineers
                is Indian.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color: rgb(21 19 21);
  padding: 40px 50px 60px 50px;
  
  p {
    padding: 10px 0px;
    color: white;
    font-size: 17px;
  }
  @media (max-width: 567px) {
    padding: 0 10px; 


  }

  @media (min-width: 567px) and (max-width: 992px){
    padding: 0 10px; 

  }
`;
