import React, { useContext } from "react";
import { Event } from "../../../services/events";
import { DateInput } from "@mantine/dates";
import { EventsContext } from "@/app/context/EventsContextProvider";

interface eventProps {
  data: Event[];
}

interface eventCardProps {
  data: Event;
}

export const EventCardList = ({ data }: eventProps) => {
  return (
    <>
      {data.map((event: Event, idx: number) => (
        <EventCard data={event} key={`eventCard` + idx} />
      ))}
    </>
  );
};

export const EventCard = ({ data }: eventCardProps) => {
  return (
    <div
      className="flex flex-col p-5 border border-gray-850/70 rounded-sm"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      }}>
      <h3>name: {data.name}</h3>
      <h4>location: {data.location}</h4>
      <DateInput label="Start Date:" value={data.startDate} disabled />
      <DateInput label="End Date:" value={data.endDate} disabled />
      <p>label: {data.label}</p>
    </div>
  );
};
