import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNpm,
  faCss3Alt,
  faHtml5,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

export default function Card() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid lg:grid-cols-1 gap-6">
        <div className="group  flex flex-col h-full  border border-gray-200 shadow-sm rounded-xl bg-neutral-800 border-gray-700 ">
          <div className="card  h-fit  flex flex-col justify-center items-center rounded-t-xl">
            <div className="mb-3 mt-3 mx-3 rounded-xl overflow-hidden">
              <Image
                width="576"
                height="350"
                src="/dennettsitepic.png"
                alt="Dennett Metal Fabrication"
              />
            </div>
          </div>
          <div className="p-4 md:p-6 ">
            <h3 className="text-xl font-semibold text-gray-300 hover:text-white">
              Dennett Metal Fabrication
            </h3>
            <p className="mt-3 mb-3 text-gray-500">
              A Headless CMS website built on NextJs using Typescript and
              TailwindCss and Sanity.io.
            </p>
            <div className="pt-3 space-x-5">
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                href="#"
              >
                <FontAwesomeIcon icon={faCss3Alt} className="w-5.5 h5.5" />
              </a>
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                href="#"
              >
                <FontAwesomeIcon icon={faHtml5} className="w-5.5 h5.5" />
              </a>
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                href="#"
              >
                <FontAwesomeIcon icon={faNpm} className="w-5.5 h5.5" />
              </a>
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                href="#"
              >
                <FontAwesomeIcon icon={faReact} className="w-5.5 h5.5" />
              </a>
            </div>
          </div>
          <div className="w-full py-3 px-4  justify-center items-center gap-2 rounded-bl-xl font-medium  text-white shadow-sm align-middle transition-all text-sm sm:p-4  hover:bg-purple-300 hover:text-zinc-900 ">
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.dennettmetal.com.au"
                className="text-center text-lg"
              >
                Go to site
              </a>
            </div>
          </div>
        </div>

        <div className="group flex flex-col h-full border border-gray-200 shadow-sm rounded-xl bg-neutral-800 border-gray-700 ">
          <div className="card w-auto h-fit flex flex-col justify-center items-center rounded-t-xl">
            <div className="mb-3 mt-3 mx-3 rounded-xl overflow-hidden">
              <Image
                width="576"
                height="350"
                src="/noteKeeper.png"
                alt="Note Keeper"
              />
            </div>
          </div>

          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"></span>
            <h3 className="text-xl font-semibold  text-gray-300 hover:text-white">
              Note Keeper App
            </h3>
            <p className="mt-3 mb-3 text-gray-500">
              A Crud Note Keeper app built on NextJs with MongoDB. Create, edit
              and delete your notes that are saved to the MongoDB database.
            </p>
            <div className="pt-3 space-x-5">
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                href="#"
              >
                <FontAwesomeIcon icon={faCss3Alt} className="w-5.5 h5.5" />
              </a>
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                href="#"
              >
                <FontAwesomeIcon icon={faHtml5} className="w-5.5 h5.5" />
              </a>
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                href="#"
              >
                <FontAwesomeIcon icon={faNpm} className="w-5.5 h5.5" />
              </a>
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                href="#"
              >
                <FontAwesomeIcon icon={faReact} className="w-5.5 h5.5" />
              </a>
            </div>
          </div>
          <div className="w-full py-3 px-4  justify-center items-center gap-2 rounded-bl-xl font-medium  text-white shadow-sm align-middle transition-all text-sm sm:p-4  hover:bg-purple-300 hover:text-zinc-900 ">
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://note-keeper-app-mocha.vercel.app/"
                className="text-center text-lg"
              >
                Go to site
              </a>
            </div>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="card w-auto h-fit flex flex-col justify-center items-center rounded-t-xl">
            <div className="mb-3 mt-3 mx-3 rounded-xl overflow-hidden">
              <Image
                width="576"
                height="350"
                src="/Matte iPhone Mockups grey.png"
                alt="Dennett Metal Fabrication"
              />
            </div>
          </div>

          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"></span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
              Ecommerce store concept
            </h3>
            <p className="mt-3 mb-3 text-gray-500">
              A design concept for a homewares ecommerce store. Design created
              using Figma
            </p>
            <div className="pt-3 space-x-5">
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                href="#"
              >
                <FontAwesomeIcon icon={faFigma} className="w-5.5 h5.5" />
              </a>
              {/* <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="#">
                  <FontAwesomeIcon icon={faHtml5} className="w-5.5 h5.5" />
                </a>
                <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="#">
                  <FontAwesomeIcon icon={faNpm} className="w-5.5 h5.5" />
                </a>
                <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="#">
                  <FontAwesomeIcon icon={faReact} className="w-5.5 h5.5" />
                </a> */}
            </div>
          </div>
          <div className="w-full py-3 px-4  justify-center items-center gap-2 rounded-bl-xl font-medium  text-white shadow-sm align-middle transition-all text-sm sm:p-4  hover:bg-purple-300 hover:text-zinc-900 ">
            <div>
              <a href="/designs" className="text-center text-lg">
                Go to design
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
