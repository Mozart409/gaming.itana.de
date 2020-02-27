import React from "react";
import { Helmet } from "react-helmet";
import ScrollToTop from "react-scroll-up";

import Header from "./header";
import Footer from "./footer";

import "typeface-montserrat-alternates";
import "typeface-montserrat";

import "../css/main.css";

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

      <div class="max-w-4xl mx-auto px-4 py-8 md:p-8 sm:px-6 lg:px-8 p-4">
        {children}
      </div>

      <ScrollToTop showUnder={140}>
        <div className="bg-indigo-600 text-white p-1 xs:p-1 sm:p-2 md:p-4 lg:p-6 xl:p-8 invisible sm:visible rounded hover:shadow-xl w-auto">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.7071 12.7071C14.3166 13.0976 13.6834 13.0976 13.2929 12.7071L10 9.41421L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071Z"
              fill="#fff"
            />
          </svg>
        </div>
      </ScrollToTop>

      <Footer />
    </div>
  );
}

export default Layout;
