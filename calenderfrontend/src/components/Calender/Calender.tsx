"use client";

import React, { useState } from "react";
import { Cell } from "../Square/Cell";
import { DropMenu } from "../DropMenu/DropMenu";
import leftArrow from "./arrow-big-left-line.svg";
import rightArrow from "./arrow-big-right-line.svg";
import Image from "next/image";

export interface monthYear {
  year: number;
  month: number;
}

export const getMonthName = (month: number) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[month];
};

export const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState({ year: 2024, month: 0 });

  const nextMonth = () => {
    if (currentMonth.month == 11) {
      setCurrentMonth({ year: currentMonth.year + 1, month: 0 });
    } else {
      setCurrentMonth({
        year: currentMonth.year,
        month: currentMonth.month + 1,
      });
    }
  };

  const prevMonth = () => {
    if (currentMonth.month == 0) {
      setCurrentMonth({ year: currentMonth.year - 1, month: 11 });
    } else {
      setCurrentMonth({
        year: currentMonth.year,
        month: currentMonth.month - 1,
      });
    }
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <div className="flex gap-5 font-bold text-3xl">
        <Image
          className="cursor-pointer"
          src={leftArrow}
          alt="leftArrow"
          onClick={prevMonth}
        />
        <DropMenu
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
        <Image
          className="cursor-pointer"
          src={rightArrow}
          alt="rightArrow"
          onClick={nextMonth}
        />
      </div>
      <div className="grid grid-cols-7 w-1/2 gap-0">
        {weekDays.map((day) => (
          <h1 className="text-center" key={day}>
            {day}
          </h1>
        ))}
        {createCalender(currentMonth).map((day, idx) => (
          <Cell number={day} key={idx + "cell"} />
        ))}
      </div>
    </div>
  );
};

const createCalender = ({ year, month }: monthYear) => {
  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const getDaysInMonth = (year: number, month: number) => {
    const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 1 && isLeapYear(year)) {
      return 29;
    }
    return daysInMonths[month];
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    if (month < 2) {
      month += 12;
      year -= 1;
    }
    // using zeller formula
    const zeller =
      (1 +
        Math.floor((13 * (month + 2)) / 5) +
        (year % 100) +
        Math.floor((year % 100) / 4) +
        Math.floor(Math.floor(year / 100) / 4) -
        2 * Math.floor(year / 100)) %
      7;

    return (zeller + 6) % 7;
  };

  const firstDay: number = getFirstDayOfMonth(year, month);
  const daysInThisMonth: number = getDaysInMonth(year, month);
  const calendar: (number | null)[] = Array(42).fill(null);
  for (let day = 1; day <= daysInThisMonth; day++) {
    calendar[firstDay + day - 1] = day;
  }

  return calendar;
};
