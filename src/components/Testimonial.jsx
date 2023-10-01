import Image from "next/image";
import React from "react";
async function getData() {
  const response = await fetch(process.env.BASE_URL + "api/TestimonialList");
  if (!response.ok) {
    throw new Error("Error in TestimonialList");
  }
  return response.json();
}
const Testimonial = async () => {
  const data = await getData();
  return (
    <>
      <section className="  pt-20 pb-12">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto mb-12 text-center">
            <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">
              Our Customers Very Happy With Our Services
            </h2>
            <p className="text-blueGray-400 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
          </div>
          <div className="flex flex-wrap">
            {data.map((item) => {
              return (
                <div key={item.id} className="w-full md:w-1/2 py-5 md:px-5">
                  <div
                    className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                    data-wow-delay=".1s"
                  >
                    <div className="flex items-center mb-4">
                      <div className="relative h-16 w-16">
                        <Image
                          className=" rounded-full object-cover"
                          src={item.image}
                          alt="Monst"
                          fill={true}
                        />
                      </div>

                      <div className="pl-4">
                        <strong className="mt-6 mb-2 text-md">
                          {item["name"]}
                        </strong>
                        <p className="text-gray-500 text-xs mt-3">
                          {item["designation"]}
                        </p>
                      </div>
                    </div>
                    <p className="leading-loose text-blueGray-400 mb-5">
                      {item["msg"]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
