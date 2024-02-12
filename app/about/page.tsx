import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNpm,
  faCss3Alt,
  faHtml5,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <div className="body bg-zinc-900">
      <div className="flex flex-col mx-auto w-full h-full ">
        <main id="content" role="main">
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <div className="flex py-10 bg-gray-400 opacity-80 rounded">
              <div className="grid grid-col place-content-center w-1/2">
                <div className="mt-3 text-2xl text-gray-900 text-left">
                  <p>Hi my name is Nicole. I'm a website developer, </p>
                  <div className="flex">
                    <p>currently working with..</p>
                  </div>
                </div>
              </div>

              <div className="flex inline-flex pl-20">
                {/* <div className="flex flex-col-2"> */}
                <div className="flex inline-flex w-1/2">
                  <ul className=" text-lg  text-left mt-3 text-gray-900">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>React</li>
                    <li>NextJs</li>
                    <li>Bootstrap5 and TailwindCss</li>
                    <li>NodeJs</li>
                    <li>MongoDB</li>
                  </ul>
                </div>

                <div className="flex grid grid-col place-content-center ">
                  <div className="flex py-12 pl-10 space-x-5">
                    <a
                      className="inline-flex py-6 justify-center items-center w-10 h-10 text-center text-gray-900 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                      href="#"
                    >
                      <FontAwesomeIcon
                        icon={faCss3Alt}
                        className="w-5.5 h5.5"
                      />
                    </a>
                    <a
                      className="inline-flex py-6 justify-center items-center w-10 h-10 text-center text-gray-900 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                      href="#"
                    >
                      <FontAwesomeIcon icon={faHtml5} className="w-5.5 h5.5" />
                    </a>
                    <a
                      className="inline-flex  py-6 justify-center items-center w-10 h-10 text-center text-gray-900 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                      href="#"
                    >
                      <FontAwesomeIcon icon={faNpm} className="w-5.5 h5.5" />
                    </a>
                    <a
                      className="inline-flex py-6 justify-center items-center w-10 h-10 text-center text-gray-900 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                      href="#"
                    >
                      <FontAwesomeIcon icon={faReact} className="w-5.5 h5.5" />
                    </a>
                    <a
                      className="inline-flex py-6 justify-center items-center w-10 h-10 text-center text-gray-900 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                      href="#"
                    >
                      <FontAwesomeIcon icon={faFigma} className="w-5.5 h5.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mt-3 pb-3 pt-9 text-2xl text-gray-300">
                {" "}
                My hobbies include{" "}
              </p>
              <ul className="text-lg pb-6 text-center mt-3 text-gray-300">
                <li>Yoga</li>
                <li>Drawing</li>
                <li>Skateboarding</li>
              </ul>
            </div>

            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <a
                className="gitHubButton lg:w-64 sm:w-8 inline-flex justify-center items-center gap-x-3.5 text-center shadow-sm text-sm font-medium rounded-md hover:text-white hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition py-3 px-4"
                href="https://github.com/Nikmch"
                target="_blank"
              >
                <svg
                  className="w-4 h-4 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                Check out my GitHub.
              </a>

              {/* <a className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center border border-2 border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-300 hover:text-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-4" href="../examples.html">
                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Back to examples
                  </a> */}
            </div>
          </div>
        </main>

        {/* <div className="container cover">
      <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="border"></div>
          <div className="border"></div>
    </div>
    <svg>
      <defs>
        <filter id="goo">
          <feGaussianBlur in="sourceGraphic" stdDeviation="10" />
          <feColorMatrix in="name" mode="matrix" 
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 30 -15" />
                  <feBlend in="sourceGraphic" />
        </filter>
      </defs>
    </svg> */}
      </div>
    </div>
  );
}
