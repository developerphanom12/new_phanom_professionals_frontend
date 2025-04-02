import React from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

const Section5 = () => {
  return (
    <Root>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div
            className="col-lg-8 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Frequently</span>
            <span className="text">Asked</span> <span>Questions</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>1. What is a PHP developer?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                        PHP is a dynamic programming language used by developers to make programs, websites, and apps. Web development and corporate applications are two areas where PHP is well-known. PHP developers are actually a specialized subset of the "Developer" position, depending on the job description.Websites are frequently created using PHP, and PHP developers usually work on user interfaces or in the background.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>2. How much does it cost to hire a PHP developer?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                      The starting monthly wage for our full-time PHP development position is $1500, contingent upon the candidate's experience and skill set.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>3. What Are the Best Ways to Hire PHP Developers?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            By assembling a pool of pre-screened PHP coders, our talent acquisition specialists can help you fill vacant PHP developer positions and save you time and effort in the process of selecting the right candidate.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>4. Why collaborate with devoted PHP programmers?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            You will have complete control over the development cycle if you decide to work with a professional PHP developer, which gives you an edge while looking for one.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
            5. How do I choose the finest business to work with when hiring a professional PHP programmer?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Both employment companies and independent PHP developers are abundant in their willingness to provide their services. But you have to find the one that would benefit you the most.
In order to accomplish this goal, we guarantee pleasure from both parties with Phanom Professionals and its intention to create a long-term association between the client & the talent.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
            6. Why not use freelancers instead of hiring committed PHP programmers from an agency?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Our pool of elite PHP developers at Phanom Professionals is rigorously screened, and we compensate our developers 1.5 times what they would be paid locally to guarantee better retention and superior quality. In addition, we go above and above by handling the administrative duties.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>

            7. Are you offering any upkeep and assistance?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Yes, Phanom Professionals frees you from pre- and post-hiring chores while assisting you in meeting your business needs head-on.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Root>
  );
};

const Root = styled.section`
  background-color: #ffffffd4;
  padding: 0 100px;

  .MuiAccordionSummary-content.MuiAccordionSummary-contentGutters.css-eqpfi5-MuiAccordionSummary-content
    p {
    font-size: 20px;
  }

  .MuiAccordionDetails-root.css-15v22id-MuiAccordionDetails-root p {
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

  .text_div {
    margin-bottom: 0.7em;
    padding: 30px;
    text-align: center;
    .text {
      background: ${secGradient};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
      font-size: 35px;
      line-height: 1.3em;
    }
    span {
      font-weight: bold;
      font-size: 35px;
      line-height: 1.3em;
    }
  }

  @media (max-width: 567px) {
    padding: 0;
    .text_div {
      padding: 0;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;
    .text_div {
      padding: 0;
    }
  }
`;

export default Section5;

