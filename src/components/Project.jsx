import GetMomentTime from "@/utlis/getMomentTime";
import Image from "next/image";
import React from "react";

async function getData() {
  const response = await fetch(process.env.BASE_URL + "api/AllProject");
  if (!response.ok) {
    throw new Error("Error in AllProject");
  }
  return response.json();
}
const Project = async () => {
  const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
              <div className="text-center lg:text-left">
                <span className="text-green-600 font-bold">
                  Dolor sit amet consectutar
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                  All Projects
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
                    className="mb-8 w-full md:w-1/2 lg:w-1/3 px-4"
                  >
                    <div className="bg-white rounded">
                      <div className="relative h-96 w-full">
                        <Image
                          className="rounded-t object-cover "
                          src={item["image"]}
                          fill={true}
                          objectFit="cover"
                          alt=""
                        />
                        <span className="px-3 py-2 bg-green-600 rounded-bl-lg capitalize text-white font-medium text-xl absolute top-0 right-0">
                          {item["remark"]}
                        </span>
                      </div>

                      <div className="p-6">
                        <span className="text-gray-400">
                          {" "}
                          <GetMomentTime
                            time={item["updated_at"]}
                            format="YYYY"
                          />
                        </span>
                        <h3 className="mb-4 text-2xl font-bold font-heading">
                          {item["title"]}
                        </h3>
                        <a
                          className="flex text-green-600 hover:text-green-700 font-bold"
                          href={item["live"]}
                        >
                          <svg
                            className="mr-3 w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>View Case Study</span>
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
};

export default Project;
