import { Menu } from "@mantine/core";
import React from "react";
import { getMonthName, monthYear } from "../Calender/Calender";
import arrowUp from "./arrow-up.svg";
import arrowDown from "./arrow-down.svg";
import Image from "next/image";

interface DropMenuProps {
  currentMonth: monthYear;
  setCurrentMonth: any;
}

export const DropMenu = ({ currentMonth, setCurrentMonth }: DropMenuProps) => {
  return (
    <div className="flex gap-5 font-bold text-3xl">
      <MonthDropMenu
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />
      <YearDropMenu
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />
    </div>
  );
};

const MonthDropMenu = ({ currentMonth, setCurrentMonth }: DropMenuProps) => {
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
  return (
    <Menu>
      <Menu.Target>
        <h2 className="cursor-pointer">{getMonthName(currentMonth.month)}</h2>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Month</Menu.Label>
        {months.map((month, idx) => (
          <Menu.Item
            onClick={() =>
              setCurrentMonth({ month: idx, year: currentMonth.year })
            }
            key={`monthMenuItem${month}`}>
            {month}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

const YearDropMenu = ({ currentMonth, setCurrentMonth }: DropMenuProps) => {
  return (
    <Menu>
      <Menu.Target>
        <h2 className="cursor-pointer">{currentMonth.year}</h2>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Year</Menu.Label>
        <Menu.Item
          onClick={() =>
            setCurrentMonth({
              month: currentMonth.month,
              year: currentMonth.year + 1,
            })
          }>
          <Image src={arrowUp} alt="arrowUp" />
        </Menu.Item>
        <Menu.Item
          onClick={() =>
            setCurrentMonth({
              month: currentMonth.month,
              year: currentMonth.year - 1,
            })
          }>
          <Image src={arrowDown} alt="arrowDown" />
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
