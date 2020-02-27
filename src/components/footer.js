import React from "react";
import { Link } from "gatsby";

export default function footer() {
  return (
    <div class="bg-gray-800">
      <div class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
          <div class="px-5 py-2">
            <Link
              className="text-base leading-6 text-gray-300 hover:text-gray-900"
              to="/impressum"
            >
              Impressum
            </Link>
          </div>
          <div class="px-5 py-2">
            <Link
              className="text-base leading-6 text-gray-300 hover:text-gray-900"
              to="/datenschutz"
            >
              Datenschutz
            </Link>
          </div>
        </nav>
        <div class="mt-8 flex justify-center"></div>
        <div class="mt-8">
          <p class="text-center text-base leading-6 text-gray-300">
            &copy; 2020 Itana GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </div>
  );
}
