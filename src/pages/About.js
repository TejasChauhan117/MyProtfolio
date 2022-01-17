import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.JPG';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Tejas Chauhan</span>
              </p>
              <h2 className="about__heading"> FrontEnd developer</h2>
              <div className="about__info">
                <PText>
                  I am a frontend designer and developer from Ahmedabad,Gujarat.
                  I love art and always try to show unique design to the my
                  audience.
                  <br /> <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam aliquam sit amet diam et mattis. Sed blandit, ligula
                  ut sagittis hendrerit, tellus quam congue dui, ac accumsan dui
                  quam id velit. Fusce enim lorem, auctor nec dolor in, faucibus
                  lacinia leo. Maecenas efficitur tincidunt ullamcorper. Morbi
                  vel lectus est. Vivamus id convallis neque.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam aliquam sit amet diam et mattis. Sed blandit, ligula
                  ut sagittis hendrerit, tellus quam congue dui, ac accumsan dui
                  quam id velit. Fusce enim lorem, auctor nec dolor in, faucibus
                  lacinia leo. Maecenas efficitur tincidunt ullamcorper. Morbi
                  vel lectus est. Vivamus id convallis neque.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem title="Collage" items={['Ahmedabad University']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem title="BackEnd" items={['Python', 'Java']} />
              <AboutInfoItem
                title="Frameworks"
                items={['Django', 'Flask', 'Flutter']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'After Effects', 'Figma']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="7/2021-11/2021"
                items={['Software developer at Shrine Software']}
              />
              <AboutInfoItem
                title="7/2012-10/2016"
                items={[
                  'Research Intern under UG Research Program at Ahmedabad University ',
                ]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
