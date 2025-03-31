import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainWhiteContent, WhiteNumberHeading } from '../../../Global/GlobalText';

export const Section3 = () => {
  const [counts, setCounts] = useState({
    releaseCycle: 0,
    manualReduction: 0,
    reusability: 0,
    costOptimization: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        releaseCycle: Math.min(prev.releaseCycle + 1, 3),
        manualReduction: Math.min(prev.manualReduction + 2, 40),
        reusability: Math.min(prev.reusability + 3, 60),
        costOptimization: Math.min(prev.costOptimization + 2, 40),
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <Root>
      <div className='main_div'>
        <div className='sub_main_div'>
          <WhiteNumberHeading>{counts.releaseCycle}x</WhiteNumberHeading>
          <MainWhiteContent>Faster Release cycle</MainWhiteContent>
        </div>

        <div className='sub_main_div'>
          <WhiteNumberHeading>{counts.manualReduction}%</WhiteNumberHeading>
          <MainWhiteContent>Reduction in manual<br/> administration time</MainWhiteContent>
        </div>

        <div className='sub_main_div'>
          <WhiteNumberHeading>{counts.reusability}%</WhiteNumberHeading>
          <MainWhiteContent>Software Development<br/> Reusability</MainWhiteContent>
        </div>

        <div className='sub_main_div_two'>
          <WhiteNumberHeading>{counts.costOptimization}%</WhiteNumberHeading>
          <MainWhiteContent>Cost Optimization</MainWhiteContent>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  .main_div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background-color: #6C5FD4;
    padding: 20px 70px;

    .sub_main_div {
      border-right: 1px solid #ffffff;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px 0;
    }

    .sub_main_div_two {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px 0;
    }
  }

  @media (max-width: 567px) {
    display: none;
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    .main_div {
      padding: 20px 20px;
      justify-content: center;

      .sub_main_div {
        flex: unset;
        width: 47%;
      }

      .sub_main_div_two {
        border-right: 1px solid #ffffff;
        flex: unset;
        width: 47%;
      }
    }
  }
`;

export default Section3;
