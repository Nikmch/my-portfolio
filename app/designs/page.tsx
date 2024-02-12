import Image from "next/image";

export default function Designs() {
  return (
    <div className="body bg-zinc-900">
      <div className=" flex flex-col mx-auto w-full h-full  ">
        <main id="content" role="main">
          <div className="text-center justify-items-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="block text-2xl font-bold text-white sm:text-4xl pb-10">
              Ecommerce store concept design
            </h1>

            <div className="flex display flex justify-center">
              <Image
                width="956"
                height="750"
                src="/Matte iPhone Mockups.png"
                alt="Ecommerce store mockup"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
