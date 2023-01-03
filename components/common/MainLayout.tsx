// react
import * as React from 'react';
// next
import Head from 'next/head';
// custom component
import Footer from '../section/Footer';
// type
import { Page } from '../../constants/pages';
interface MainLayoutProps {
  pageData?: Page;
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = (props) => {
  const {children, pageData, ...otherProps } = props;

  return (
    <>
      {pageData && (
        <Head>
          <title>{pageData.title ? pageData.title : 'No page title'}</title>
          {pageData.description && (
            <meta name="description" content={pageData.description} />
          )}
        </Head>
      )}
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
