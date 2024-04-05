"use client";

import { TimerOff } from "lucide-react";
import Countdown from "react-countdown";
type TCountDownProps = {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

const TimeCountDown = ({ dateMillisecond }: { dateMillisecond: number }) => {
  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: TCountDownProps) => {
    if (completed) {
      return <span>You are good to go!</span>;
    } else {
      return (
        <div className="flex justify-start items-center gap-0.5 text-slate-600">
          <TimerOff className="animate-bounce mt-1.5"/>
          <span className="text-2xl md:text-3xl font-bold min-w-[8ch] text-center font-serif">
            {hours < 10 ? "0" + hours : hours} :{" "}
            {minutes < 10 ? "0" + minutes : minutes} :{" "}
            {seconds < 10 ? "0" + seconds : seconds}
          </span>
          <span className="text-sm lg:text-base text-green-500">Limit</span>
        </div>
      );
    }
  };
  return <Countdown date={Date.now() + dateMillisecond} renderer={renderer} />;
};

export default TimeCountDown;
