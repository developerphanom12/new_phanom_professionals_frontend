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
            <span>Frequently </span>
            <span className="text">Asked </span> <span>Questions</span>
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
              1. Why should I work with a Phanom Professionals Google Ads
              Expert?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hire Phanom Professionals’ Google Ads Expert to discover a more
              effective way to run your business. Our tech specialists handle
              the grunt work, relieving you of the tiresome hiring procedure and
              even post-hiring obligations.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>2. Is my PPC expert for AdWords certified?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, by earning leading industry certifications and consistently
              improving their skills, our knowledgeable AdWords PPC consultants
              show off their knowledge.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>3. What Do PPC AdWords Experts Do?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The planning, designing, implementing, and evaluating of
              pay-per-click advertising campaigns falls within the purview of a
              PPC specialist.
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
              4. How Can I Locate the Best Google AdWords Specialists?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It’s now simple to identify the top Google AdWords Experts because
              Phanom Professionals make up the top 3.5% of marketing
              professionals. You can hire and manage top talent remotely with
              the support of our team of talent success coaches.
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
              5. What is the impact of Ad Rank on cost per click (CPC)?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A profitable advertising campaign lowers your cost per click and
              maximizes your ad rank (more views). Your cost-per-click will
              decrease as your campaign’s results improve, and your ad rank will
              rise rapidly as your Quality Score rises.
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
              6. How Do You Go into a PPC Campaign with Expectations?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It’s equally crucial to control expectations before launching an
              SEO or PPC campaign. Understanding the client’s business is the
              first step, which is followed by the site’s flow and the
              competitive environment. Choosing the objectives that will help
              define the parameters for a PPC campaign is the next stage.
              Additionally, taking into account a variety of dependent variables
              will assist you in setting reasonable expectations.
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
  /* .que {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    button {
      background-color: transparent;
      color: #147888;
      border: none;
      svg {
        width: 25px;
        height: 25px;
      }
    }
  } */
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
