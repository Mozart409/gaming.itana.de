import React from "react";
import { graphql, Link } from "gatsby";
import { List, Typography, Icon } from "antd";

import Layout from "../components/layout";
import SEO from "../components/seo";

import PDF from "../images/pruefantrag2017.pdf";

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
    file(extension: { eq: "pdf" }, name: { eq: "pruefantrag2017" }) {
      publicURL
    }
  }
`;

function CheckListAnmeldung() {
  const data = [
    "Geräte rechtzeitig anmelden (mindestens sechs Wochen vor deren Ablauf).",
    "Bei der Anmeldung den Auftraggeber, die Rechnungsadresse und alle Standorte und Gerätetypen nennen.",
    "Öffnungszeiten und Ruhetage der Lokalitäten benennen.",
    "Als Neukunde Gewerbenachweis übermitteln.",
    "Anmeldung per E-Mail oder Fax übermitteln  (nicht telefonisch, per SMS, WhatsApp etc.)."
  ];

  return (
    <List
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item className="inline-block align-baseline">
          <Icon type="minus-circle" /> <span>{item}</span>
        </List.Item>
      )}
    />
  );
}

function CheckListÜberprüfung() {
  const data = [
    'Stellen Sie sicher, dass auf allen Geräten eine zulässige Software installiert ist. (Im Zweifelsfall klicken Sie bitte auf den unten stehenden Button "Bauartzulassungen" und informieren sich bei der PTB ob Ihr Gerät über eine zulässige Software verfügt).',
    "Stellen Sie sicher, dass zur Überprüfung alle zum Gerät zugehörigen Schlüssel vor Ort sind.",
    "Stellen Sie sicher, dass die Geräte zum Termin eingeschaltet und unbespielt sind.",
    "Bitte halten Sie sich zum Termin telefonisch ereichbar."
  ];

  return (
    <List
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item className="inline-block align-baseline">
          <Icon type="minus-circle" /> <span>{item}</span>
        </List.Item>
      )}
    />
  );
}

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        keywords={[`Itana GmbH Gaming`]}
        description=""
      />

      <div>
        <h1>Überprüfung gemäß §7 SpielV</h1>

        <p>
          Jedes Geldspielgerät gemäß der seit 1.1.2006 geltenden Verordnung über
          Spielgeräte und andere Spiele mit Gewinnmöglichkeit erhält zunächst
          einen auf zwei Jahre begrenzten Aufstellzeitraum.
        </p>

        <p>
          Dieser Aufstellzeitraum eines Geldgewinnspielgerätes kann mittels
          einer Prüfung durch einen von einer IHK öffentlich bestellten und
          vereidigten Sachverständigen mit dem Bestellungsgebiet 530
          (Überprüfung von Geldspielgeräten) um weitere zwei Jahre verlängert
          werden.
        </p>

        <p>
          Aufgabe der Geräteüberprüfung ist es, die Konformität eines
          Nachbaugerätes mit der von der PTB zugelassenen Bauart sicher zu
          stellen. Eine darüber hinaus gehende technische Prüfung ist nicht
          Bestandteil dieser Prüfung.
        </p>

        <p>
          Um die Übereinstimmung des Spielgerätes mit dem Baumuster zu
          überprüfen wird ein Vergleich der vorgefundenen Software der
          Kontrolleinrichtung und Spielsteuerung, sowie relevanter Hardware mit
          den im Zulassungsschein veröffentlichten Komponenten durchgeführt.
          Hierbei werden relevante Nachträge berücksichtigt.
        </p>

        <p>
          Geldspielgeräte werden vorzugsweise am Aufstellort in Gaststätten,
          Spielhallen, oder in Ihrer Werkstatt durch den öffentlich bestellten
          und vereidigten Sachverständigen Jörg Weißleder* überprüft. Prüfungen
          ausserhalb der Geschäftszeiten (8:00-18:00) sind problemlos möglich
          und erfolgen nach individueller Vereinbarung.{" "}
        </p>

        <p>
          Um Ihnen diese Dienstleistung schnell und überregional anbieten zu
          können wird die Überprüfung ggfs. nicht durch Herrn Jörg Weißleder*,
          sondern durch einen anderen, ebenfalls öffentlich bestellten und
          vereidigten Sachverständigen durchgeführt. In diesem Fall wird Ihnen
          der Kollege vor der Durchführung der Überprüfung Ihrer Geräte
          namentlich benannt, und dessen Bestellungskörperschaft bekannt
          gegeben.
        </p>
        <p>
          *Öffentlich bestellte und vereidigte Sachverständige sind nach Maßgabe
          von § 36 GewO tätig. Jörg Weißleder wurde durch die Industrie- und
          Handelskammer (IHK) Region Stuttgart für das Sachgebiet Systeme und
          Anwendungen der Informationsverarbeitung; Überprüfung von
          Geldspielgeräten öffentlich bestellt und vereidigt. Er unterliegt den
          Bestimmungen der Sachverständigenordnung der Industrie- und
          Handelskammer (IHK) Region Stuttgart. Diese kann unter{" "}
          <a className="text-itana-blue" href="https://www.stuttgart.ihk24.de">
            https://www.stuttgart.ihk24.de
          </a>{" "}
          eingesehen werden.
        </p>
        <h2>Checkliste Anmeldung</h2>
        <CheckListAnmeldung />
        <button className="btn-itana w-full mt-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data.file.publicURL}
          >
            Anmeldeformular
          </a>
        </button>
        <h2>Checkliste Überprüfung</h2>
        <CheckListÜberprüfung />
        <button className="btn-itana w-full mt-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.ptb.de/cms/ptb/fachabteilungen/abt8/fb-85/ag-853/zulassungsdatenbank-853.html"
          >
            Bauartzulassungen
          </a>
        </button>
      </div>
    </Layout>
  );
}

export default IndexPage;
