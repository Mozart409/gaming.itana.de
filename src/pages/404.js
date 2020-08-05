import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404 Fehlerseite - Itana GmbH" description="404 Fehlerseite - Itana GmbH" />

      <div className="m-auto">
        <Link to="/">
          <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
            Diese Seite konnte nicht gefunden werden.
          </h2>
          <br></br>
          <button className="text-lg font-bold text-black bg-yellow-400 border-2 border-solid p-4 border-gray-900 w-full hover:shadow-xl">
            Startseite
          </button>
        </Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
