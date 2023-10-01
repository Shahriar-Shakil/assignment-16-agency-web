import GetMomentTime from "@/utlis/getMomentTime";
import Image from "next/image";
import React from "react";
async function getData() {
  const response = await fetch(process.env.BASE_URL + "api/AllService");
  if (!response.ok) {
    throw new Error("Error in AllService");
  }
  return response.json();
}
async function AllService() {
  const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
              <div className="text-center lg:text-left">
                <span className="text-green-600 font-bold">
                  Dolor sit amet consectutar
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                  All Service
                </h2>
              </div>
              <a
                className="hidden md:inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
                href="#"
              >
                View More Projects
              </a>
            </div>
            <div className="flex flex-wrap -mx-4 mb-4">
              {data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4"
                  >
                    <div className="group relative h-80 mb-5 mx-auto rounded-lg">
                      <div className="relative h-80 w-full">
                        <Image
                          className="  h-full rounded-lg object-cover"
                          src={item["image1"]}
                          alt=""
                          fill={true}
                        />
                      </div>

                      <div className=" hidden group-hover:block absolute inset-0 bg-gray-900 opacity-75 rounded-lg" />
                      <div className="hidden group-hover:flex absolute inset-0 p-6  flex-col items-start">
                        <span className="text-gray-400">
                          <GetMomentTime
                            time={item["updated_at"]}
                            format="YYYY"
                          />
                        </span>
                        <p className="mb-auto text-xl lg:text-2xl text-white font-bold">
                          {item["title"]}
                        </p>
                        <a
                          className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
                          href="#"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <a
                className="md:hidden inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
                href="#"
              >
                View More Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllService;
