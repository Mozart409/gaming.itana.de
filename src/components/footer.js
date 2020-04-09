import React from "react";

export default function footer() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-6 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          <div className="px-5">
            <a
              className="text-base leading-6 text-gray-300 hover:text-white"
              href="https://itana.de/impressum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Impressum
            </a>
          </div>
          <div className="px-5">
            <a
              className="text-base leading-6 text-gray-300 hover:text-white"
              href="https://itana.de/datenschutz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutz
            </a>
          </div>
        </nav>

        <div className="mt-6">
          <p className="text-center text-base leading-6 text-gray-300">
            &copy; 2020 Itana GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </div>
  );
}
