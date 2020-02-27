import React from "react";
import { graphql } from "gatsby";
import { List, Icon } from "antd";

import Layout from "../components/layout";
import SEO from "../components/seo";

import PDF from "../images/pruefantrag2017.pdf";

export const query = graphql`
  query {
    file(extension: { eq: "pdf" }, name: { eq: "pruefantrag2017" }) {
      publicURL
    }
  }
`;

const MinusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="#4A5568"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
function Anmeldungsliste() {
  const items = [
    {
      value:
        "Geräte rechtzeitig anmelden (mindestens sechs Wochen vor deren Ablauf)."
    },
    {
      value:
        "Bei der Anmeldung den Auftraggeber, die Rechnungsadresse und alle Standorte und Gerätetypen nennen."
    },
    { value: "Öffnungszeiten und Ruhetage der Lokalitäten benennen." },
    { value: "Als Neukunde Gewerbenachweis übermitteln." },
    {
      value:
        "Anmeldung per E-Mail oder Fax übermitteln  (nicht telefonisch, per SMS, WhatsApp etc.)."
    }
  ];

  return (
    <div className="bg-white shadow overflow-hidden  sm:rounded-lg">
      <div className="px-4 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-itana-green">
          Checkliste Anmeldung
        </h3>
      </div>

      <div className="flex flex-col">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <tbody>
                {items.map(item => (
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      {item.value}
                    </td>
                  </tr>
                ))}

                <tr className="bg-gray-50 flex justify-center">
                  <td className="px-6 py-4 text-sm leading-5 font-medium text-gray-900">
                    <a
                      href={PDF}
                      className="font-medium text-itana-green hover:text-indigo-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        class="flex-shrink-0 h-5 w-5 mx-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function ÜberprüfungListe() {
  const items = [
    {
      value:
        "Stellen Sie sicher, dass auf allen Geräten eine zulässige Software installiert ist. (Im Zweifelsfall klicken Sie bitte auf den unten stehenden Button bei „Bauartzulassungen“ und informieren sich bei der PTB, ob Ihr Gerät über eine zulässige Software verfügt)."
    },
    {
      value:
        "BeStellen Sie sicher, dass die Geräte zum Termin eingeschaltet und unbespielt sind."
    },
    {
      value:
        "Stellen Sie sicher, dass zur Überprüfung alle zum Gerät zugehörigen Schlüssel vor Ort sind."
    },
    { value: "Bitte halten Sie sich zum Termin telefonisch ereichbar." }
  ];

  return (
    <div className="bg-white shadow overflow-hidden  sm:rounded-lg">
      <div className="px-4 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-itana-blue">
          Checkliste Anmeldung
        </h3>
      </div>

      <div className="flex flex-col">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <tbody>
                {items.map(item => (
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      {item.value}
                    </td>
                  </tr>
                ))}

<tr className="bg-gray-50 flex justify-center">
                  <td className="px-6 py-4 text-sm leading-5 font-medium text-gray-900">
                    <a
                      href={PDF}
                      className="font-medium text-itana-green hover:text-indigo-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        class="flex-shrink-0 h-5 w-5 mx-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChecklistÜberprüfung() {
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
      <SEO title="Index" keywords={[`Itana GmbH Gaming`]} description="" />

      <div>
        <Anmeldungsliste />
        <ÜberprüfungListe />
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
        <ChecklistÜberprüfung />
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
