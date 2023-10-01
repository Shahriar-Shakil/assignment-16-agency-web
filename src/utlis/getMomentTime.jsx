"use client";
import React from "react";
import Moment from "react-moment";

export default function GetMomentTime({ time, format }) {
  return <Moment format={format}>{time}</Moment>;
}
