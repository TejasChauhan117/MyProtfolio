import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .footerbottom {
    background-color: var(--dark-bg);
    padding: 1rem 0;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Tejas Chauhan</h1>
          <PText>
            A freelance web designer and developer from Ahmedabad, Gujarat. I
            always make websites that have unique designs and also has a good
            performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91-6355114463',
                path: 'phone no:+91-6355114463',
              },
              {
                title: 'tejaschauhan1107@gmail.com',
                path: 'tejaschauhan1107@gmail.com',
              },
              {
                title: 'Bapunagar,Ahmedabad,Gujarat',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/tejas-chauhan-8856a8177/',
              },
              {
                title: 'Twitter',
                path:
                  'https://twitter.com/_Tejas_Chauhan?t=3E2FVA9idEZeHwXn69ABWg&s=08',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/TejasChauhan117',
              },
            ]}
          />
        </div>
      </div>
      <div className="footerbottom" />
    </FooterStyle>
  );
}
