"use client";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email";
import { FC } from "react";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className=" py-10 bg-zinc-800">
      <div className="text-center px-4 justify-center sm:px-6 lg:px-8">
        <div className="flex py-6 text-center text-4xl text-white justify-center">
          <h1>Get in touch</h1>
        </div>

        <p className="text-2xl py-3 text-white">You can email me at</p>
        <div className="flex justify-center gap-y-3 pt-3 text-white hover:text-violet-400 leading-relaxed text-l md:text-xl lg:text-xl mb-8 m-w-64">
          <a href={`mailto:nikimchenry@outlook.com`} className=" email ">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#f7f9fc" }}
              className="w-10 h-10"
            />
          </a>

          <div className="px-6 ">
            <a href="mailto:nikimchenry@outlook.com">nikimchenry@outlook.com</a>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
              Contact form
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                  {...register("message", { required: true })}
                ></textarea>
              </div>
              <div>
                <button className="lg:w-56 sm:w-8  text-center shadow-sm text-sm font-medium rounded-md bg-violet-300 py-3 px-8  hover:text-white hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
