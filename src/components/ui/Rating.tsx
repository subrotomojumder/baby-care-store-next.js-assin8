"use client";
import ReactStars from "react-stars";

const Rating = ({ rate }: { rate: number }) => {
  const firstExample = {
    size: 20,
    count: rate,
    edit: false,
    half: true,
    color1: "gold",
  };
  return <ReactStars {...firstExample} />;
};

export default Rating;
