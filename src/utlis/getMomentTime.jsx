"use client";
import React from "react";
import Moment from "react-moment";

export default function GetMomentTime({ time, format }) {
  const dateToFormat = "1976-04-19T12:59-0500";

  return <Moment format={format}>{time}</Moment>;
}
