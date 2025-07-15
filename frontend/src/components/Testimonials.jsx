import React from "react";
import TitleHeader from "../parts/TitleHeader";
import GlowCard from "../parts/GlowCard";
import { testimonials } from "../parts";
import styled from "styled-components";
import "../parts/parts.css";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <Cont>
        <TitleHeader
          title="What People Say About Us?"
          sub="Client Feedback Highlights"
        />

        <Content>
          {testimonials.map(({ imgPath, name, mentions, review }) => (
            <GlowCard card={{ review }}>
              <Card className="flex items-center gap-3">
                <div>
                  <img src={imgPath} alt={name} />
                </div>
                <div>
                  <h5>{name}</h5>
                  <p className="text-white-50">{mentions}</p>
                </div>
              </Card>
            </GlowCard>
          ))}
        </Content>
      </Cont>
    </section>
  );
};

const Cont = styled.div`
  columns: 1;
  margin-top: 4rem;

  @media (min-width: 768px) {
    columns: 2;
  }

  @media (min-width: 1024px) {
    columns: 3;
  }
`;

const Content = styled.div`
  columns: 1;
  margin-top: 4rem;

  @media (min-width: 768px) {
    columns: 2;
  }

  @media (min-width: 1024px) {
    columns: 3;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export default Testimonials;
