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
            <span> Frequently</span>
            <span className="text"> Asked</span>
            <span> Questions</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              1. Why would you choose a professional Laravеl Dеvеlopеrs from
              Phantom Professionals?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              At Phanom Profеssionals, our employees incorporate thе qualities
              that set us apart. Our developers are known for their dedication,
              rigorous work еthic, unwavеring passion and strong lеadеrship
              abilitiеs. Choosing Phanom Professionals means having an
              above-average workforcе.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>2. Where can I find a Laravel specialist?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Many individual Laravel developers can work with you. However, you
              need to choose the one that offers the most returns. Phanom
              Profеssionals protect client and talent interests to pursue
              long-term marketing.
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
              3. What is the cost of choosing our top In-house expertise for
              Laravel developers?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our top In house team expertise with this Laravel developer will
              cost you around $1500 per month, depending on the skills and
              knowledge of the candidate.
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
              {" "}
              4. Is it possible to convert an existing PHP website into a
              Laravel PHP app?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Your database migration script will not work when migrating legacy
              PHP applications. Use the Laravel Migrations Generator module to
              create a migration script from an existing database.
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
              5. What is a great PHP framework for developing an app or website?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              When we talk about PHP frameworks, one common name that comes up
              is Laravel. It is a simple, straightforward, and scalable
              open-source MVC-based PHP web framework.
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
              6. What are the benefits of choosing Phanom Profеssionals
              developers?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hire Laravel developers from Phanom Profеssionals to provide a
              more efficient way to approach your business activities. Our
              talented curators do the foundational work, freeing you from
              time-consuming work and post-hire staff.
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
              7. Can I choose a Laravel developer to use Phantom Professionalsin
              less than 48 hours?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can hire a Laravel developer in less than 48 hours at
              Phanom Profеssionals. We have the right experts to help you get
              Laravel development with cost-effective solutions.
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
              8. Will the Laravel features I use work in my timeline?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, if you hire a Larvel developer from Phanom Profеssionals, you
              will get your timeline flexibility.
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
              9. What makes Phanom Profеssionals Laravel developers different?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our Phanom Profеssionals Laravel professionals provide
              high-quality Laravel programming services and we have the
              qualified team to do the tasks on time.
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
