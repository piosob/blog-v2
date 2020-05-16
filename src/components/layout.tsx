/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import styled from 'styled-components';
import useSiteMetadata from '../hooks/useSiteMetadata';

import Header from './header';
import './layout.css';

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout: React.FC = ({ children }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <Header siteTitle={siteMetadata && siteMetadata.title} />
      <FooterContainer>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </FooterContainer>
    </>
  );
};

export default Layout;
