import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery, Link } from "gatsby";
import ScrollToTop from "react-scroll-up";
import { Icon } from "antd";

import Header from "./header";

import "typeface-montserrat-alternates";
import "typeface-montserrat";

import "../css/main.css";
import "antd/dist/antd.css";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="google-site-verification"
          content="y0fNm10Zw-mMjHsc7sW-SHicOMEldY3I6d2K4KGUBYY"
        />
      </Helmet>
      <Header />

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <ScrollToTop showUnder={140}>
        <span className="bg-itana-blue text-white p-1 xs:p-1 sm:p-2 md:p-4 lg:p-6 xl:p-8 invisible sm:visible rounded hover:shadow-xl">
          <Icon type="up" />
        </span>
      </ScrollToTop>

      <footer className="bg-gray-800">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-white">
            </p>
          <p className="text-white">
            <Link to="/impressum" className="font-bold no-underline text-white">
              Impressum
            </Link>
          </p>
          <p className="text-white">
            <Link
              to="/datenschutz"
              className="font-bold no-underline text-white"
            >
              Datenschutz
            </Link>
          </p>
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
