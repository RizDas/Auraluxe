import React from "react";
import styled from "styled-components";
import "./parts.css";

const TitleHeader = ({ title, sub }) => {
  return (
    <Cont>
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <Divi>{title}</Divi>
    </Cont>
  );
};

export default TitleHeader;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const Divi = styled.div`
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 2.25rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 1;
  }
`;
