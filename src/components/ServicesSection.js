import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i can do" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="designing web app with unique user interface and best user experience."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I can also develop the websites with practice of modern technology."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Android App Dev"
            desc="developing Android mobile application with eye catching ui. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
