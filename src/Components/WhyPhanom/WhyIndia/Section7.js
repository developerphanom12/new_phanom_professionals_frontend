import React from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { primaryColor } from "../../../Global/GlobalButton";

export default function Section7() {

  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 text">
            <h4 style={{marginLeft:"20px"}}>Ask a question </h4>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography >Is it difficult to communicate with Indian talent?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Only those who pass the AI-powered communication assessment—which measures reading comprehension, speech fluency, writing, pronunciation, and speaking speed—become members of our network.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography >Is a time zone difference anticipated?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Indian talent is incredibly adaptive and flexible, allowing them to work in various time zones. We have talent for the US, UK, and AU, among other time zones.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography >Can we still hire if we don't have a legal entity in India?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Yes, we do cover that section. In India, a company will not be required to have a legal entity. In compliance with Indian labor laws, there will be a contract between Phanom professionals and Talent in addition to an agreement between Phanom professionals and the company.
                </Typography>
              </AccordionDetails>
            </Accordion>


          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color:#dadada;
  padding:0 50px;


.MuiAccordionSummary-content.MuiAccordionSummary-contentGutters.css-eqpfi5-MuiAccordionSummary-content p{
    font-size:20px;
}

.MuiAccordionDetails-root.css-15v22id-MuiAccordionDetails-root p{
    font-size: 16px;
}

.css-eqpfi5-MuiAccordionSummary-content.Mui-expanded {
    margin: 10px 0 0px 0;
}

.css-15v22id-MuiAccordionDetails-root {
    padding: 0px 16px 16px;
}

.MuiAccordionSummary-expandIconWrapper.css-yw020d-MuiAccordionSummary-expandIconWrapper {
    color: ${primaryColor};
}



  .text {
    margin: 50px 0px;
    padding: 10px;
    background-color: #fff;
   
  }
  @media (max-width: 567px) {
    padding: 0 16px;

    .text {
      margin: 20px 0px;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0 16px;

    .text {
      margin: 20px 0px;
    }
  }
`;
