import React from "react";
import styled from "styled-components";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section7() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>

          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>What Do Our </span> <span className="text"> Experts</span>
            <span> in PPC Do?</span>{" "}
            <p className="mt-3">
              From the beginning to the end, PPC specialists and consultants
              oversee every facet of pay-per-click advertising campaigns. Their
              primary responsibilities are:
            </p>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Keyword Research:</p>
              <span>
                The PPC campaign's whole structure is built upon the results of
                this process. PPC experts create a strong keyword list for the
                client using resources and knowledge. For every keyword, they
                examine the monthly search volume, competition, suggested bids,
                and other factors. The final keyword list strikes a balance
                between more targeted phrases and high-funnel broad match terms.
              </span>

            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Setting Up a Campaign:</p>

              <span>
                PPC specialists create new campaigns, ad groups, and ads on
                websites like Google Ads after completing keyword research. A
                proficient Google AdWords specialist can effectively oversee
                various campaign kinds. PPC experts organize campaigns according
                to goods, services, intended audience, or other criteria. Each
                ad group has a single themed keyword to maintain focus.
                Successful continuous optimization depends on this degree of
                organization.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p> Bid Management:</p>
              <span>
                Budgets and starting bids for every keyword and ad group must be
                determined by the PPC specialist. PPC experts set bids by
                applying their knowledge of auctions. The bids take into account
                cost per click, traffic volume, and ad rank. Real-time bid
                adjustments are made based on daily performance and the intended
                results. More sophisticated smart bidding techniques may be used
                as an account gets older.
              </span>
             
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Copywriting for advertisements:</p>
              <span>
                Creating clicks and traffic requires well-written display ads,
                descriptions, and ad titles. PPC experts employ copywriting
                strategies that appeal to the target audience's emotions. To
                increase click-through rates, they compare various ad copy
                versions to the control group.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Landing Page Optimization:</p>
              <span>
                PPC specialists make sure landing pages correspond with the tone
                and purpose of related advertisements. Landing pages that
                optimize calls to action, have clear value, and are easy to
                navigate will increase conversion rates.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Reporting and Interpretation:</p>
              <span>
                Performance understanding is the key to optimization. PPC
                experts examine important PPC metrics in order to identify
                opportunities and determine the true return. Impressions per
                sale, click through rate, conversion rate, ROI, and other
                metrics are important.
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p> Budgeting: </p>
              <span>
              The key to success is effectively managing daily and monthly spending across campaigns. PPC experts adjust budgets in accordance with CPA targets, conversion volume, and seasons. They also modify the goals of campaigns. The distribution of spending throughout the month is guaranteed by budget pacing.

              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p> Organization of Accounts:</p>
              <span>
              Ad groups, keywords, and campaigns that are arranged well make accounts easy to use and optimize. PPC specialists audit the structure of accounts, shrink oversized ad groups, and apply new labels as needed.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Split Testing:</p>
              <span>
              To improve campaign performance, the best PPC advisors test and optimize. They test a variety of factors, including ad copy, landing pages, bids, targeting, placements, and more, using A/B and multivariate testing techniques. To determine the real impact, it is important to test just one variable.
              </span>
              <span>Leading PPC experts provide strategic guidance in addition to their core responsibilities by utilizing their experience managing successful PPC accounts across a variety of industries. They are aware of the client's particular industry, offerings, and target market. This enables them to provide insightful recommendations and astute optimizations regarding the platforms, landing pages, bids, campaign structure, and other aspects.
              </span>
            </div>
          </div>
        </div>

        <div class="cont_sub_btn mt-3 mb-5">
          <a href="/contact-us"> Ready to hire? </a>
        </div>



      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 0 50px;

  .text_area {
    margin-bottom: 30px;
    padding: 0 50px;
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
    p {
      text-align: center;
      color: #6e6e6e;
      padding: 20px;
      word-spacing: 1px;
    }
  }
  .block_main {
    margin-bottom: 20px;
    display: flex;
    flex: 1;
    span {
      color: #6e6e6e;
    }
    .block_div {
      padding: 50px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      border: 1px solid #dadada;
      border-radius: 30px;
      &:hover {
        background-color: #dadada4f;
      }
      p {
        font-size: 25px;
        font-weight: bold;
        margin: 0;
      }
      .mini_block {
        display: flex;
        .border-bottom {
          padding-bottom: 30px;
          border-bottom: 1px solid #dadada;
        }
        svg {
          color: ${primaryColor};
          width: 20px;
          height: 20px;
          font-weight: 600;
          margin: 10px;
        }
      }
    }
  }

  .cont_sub_btn {
    display: flex;
    justify-content: center;
 a {
    font-size:14px;
    color:white;
    background-color:#13c9df;
    padding:19px 31px;
    border:0;
    letter-spacing:3px;
    border-radius: 50px;
    transition: 0.2s;
    font-weight: 600;
    &:hover{
      background-color:#ececec;
      color:#13c9df;
    }
}
}

  @media (max-width: 567px) {
    padding: 0;
    .text_area {
      margin-bottom: 0;
      padding: 0;
    }
    .block_main {
      margin-bottom: unset;
      margin-top: 20px;
      flex: unset;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;
    .text_area {
      margin-bottom: 0;
      padding: 0;
    }

    .block_main {
      margin-bottom: unset;
      margin-top: 20px;
      flex: unset;
    }
  }
`;
