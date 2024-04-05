"use client";
import ReactStars from "react-stars";

const Rating = ({ rate, size }: { rate: number; size?: number }) => {
  const firstExample = {
    size: size || 20,
    count: Number(rate),
    edit: false,
    half: true,
    color1: "gold",
  };
  return <ReactStars {...firstExample} />;
};

export default Rating;
