"use client";
import React from "react";

export interface Day {
  number: number | null;
}

export const Cell = ({ number }: Day) => {
  return (
    <div className="aspect-square border border-sky-500 m-0 p-0">
      <h4>{number}</h4>
    </div>
  );
};
