import React from "react";
import Layout from "../components/layout";

export default function Pagegaming() {
  return (
    <Layout>
      <h1 className="text-itana-green">
        Gaming. Glücksspiel innerhalb des gesetzlichen Rahmens.
      </h1>
      <p>
        Konformitätsprüfung von Geldspielgeräten und Sachverständigengutachten
        im gesamten Themenfeld Glücksspiel.
      </p>
      <p>
        Über den Rahmen der Konformitätsprüfung bzw. Gutachten hinaus einige der
        Schwerpunkte im Bereich „Gaming“:
      </p>
      <p>&nbsp;</p>
      <h3>Auftraggeber</h3>
      <ul className="list-disc text-gray-800">
        <li className="ml-4">Staatsanwaltschaften</li>
        <li className="ml-4">Gerichte</li>
        <li className="ml-4">Ordnungsämter</li>
        <li className="ml-4">Polizeibehörden</li>
      </ul>
      <h3>Inhalte</h3>
      <ul className="list-disc text-gray-800">
        <li className="ml-4">Geldspielgeräte</li>
        <li className="ml-4">Wettterminals</li>
        <li className="ml-4">Unterhaltungsgeräte</li>
        <li className="ml-4">Illegale Spielgeräte</li>
        <li className="ml-4">Online Gaming</li>
        <li className="ml-4">Kassenstreifen</li>
        <li className="ml-4">Geldtechnik allgemein</li>
      </ul>
      <h3>Tätigkeiten</h3>
      <ul className="list-disc text-gray-800">
        <li className="ml-4">Beratung</li>
        <li className="ml-4">Erstattung von Gutachten</li>
        <li className="ml-4">Beweissicherung</li>
        <li className="ml-4">Forensische Untersuchungen</li>
      </ul>
    </Layout>
  );
}
