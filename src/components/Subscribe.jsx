"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Subscribe() {
  const [email, setEmail] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    if (!email.length) {
      toast.error("Email is not valid");
      return;
    }
    const res = await fetch("/api/subscribe", { method: "POST" });
    if (!res.ok) {
      toast.error("Something bad happen");
    }
    toast.success("Successfully Subscribe");
  };
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <a
                className="mb-6 inline-block text-3xl font-bold leading-none"
                href="#"
              >
                <img
                  className="h-12"
                  src="atis-assets/logo/atis/atis-mono-sign.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                So much more than a business analytics tool
              </h2>
              <p className="mb-8 text-gray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur nisl sodales egestas lobortis.
              </p>
              <form className="mx-auto" action="">
                <div className="max-w-md mx-auto flex flex-wrap items-center">
                  <input
                    className="flex-grow py-3 px-4 mr-4 text-xs rounded leading-loose"
                    type="email"
                    placeholder="example@shuffle.dev"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    onClick={handleClick}
                    className="w-auto py-2 px-6 rounded-t-xl rounded-l-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Toaster />
      </section>
    </>
  );
}

export default Subscribe;
