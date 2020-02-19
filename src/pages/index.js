import React from "react";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Steps, Icon, Carousel } from "antd";

const { Step } = Steps;

export const query = graphql`
  query {
    
  site {
    host
    buildTime(fromNow: true)
    port
    siteMetadata {
      siteUrl
      title
    }
  }

  }
`;

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        keywords={[`Itana GmbH Gaming`]}
        description=""
      />
    
      <div>
       
      </div>
    </Layout>
  );
}

export default IndexPage;
