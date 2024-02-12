import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 mt-auto w-full w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto ">
      <div className="text-center">
        <div>
          <a
            className="flex-none text-xl font-semibold text-black dark:text-white"
            href="#"
            aria-label="Brand"
          ></a>
        </div>

        <div className="mt-3">
          <p className="text-gray-500">
            © Nikki McHenry. 2023. All rights reserved.
          </p>
        </div>

        <div className="mt-3 space-x-2">
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:nikimchenry@outlook.com"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h3.5" />
          </a>
          {/* <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" target='_blank'
                        rel='noopener noreferrer' href="#">
                        <FontAwesomeIcon icon={faTwitter} className="w-3.5 h3.5" />
                    </a> */}
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Nikmch"
          >
            <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5" />
          </a>
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/nicole-mchenry-75211118b/"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
