import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useContext, useEffect, useState } from "react";
import { EventForm } from "../EventForm/EventForm";
import { EventCardList } from "../EventCard/EventCard";
import { EventsContext } from "@/app/context/EventsContextProvider";
import { Event } from "../../../services/events";

export interface Day {
  day: number | null;
  month: number | null;
  year: number | null;
  currentDate: Date;
}
export const Cell = ({ day, month, year, currentDate }: Day) => {
  const [form, { open: openForm, close: closeForm }] = useDisclosure(false);
  const [event, { open: openEvent, close: closeEvent }] = useDisclosure(false);
  const { events } = useContext(EventsContext);
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);

  useEffect(() => {
    if (isValidDate) {
      setCurrentEvents(
        events.filter(
          (event: Event) =>
            event.startDate.getDate() == day &&
            event.startDate.getMonth() == month &&
            event.startDate.getFullYear() == year
        )
      );
    }
  }, [day, month, year, events]);

  const isValidDate = day !== null && month !== null && year !== null;
  const isCurrentDate =
    day == currentDate.getDate() &&
    month == currentDate.getMonth() &&
    year == currentDate.getFullYear();
  return (
    <>
      <div
        className={`aspect-square border  ${
          isCurrentDate ? "border-double border-8" : ""
        } border-sky-500 m-0 p-0 ${
          isValidDate ? "cursor-pointer" : "opacity-50"
        }`}
        onClick={openEvent}>
        <h4>{day}</h4>
        {currentEvents.length > 0 && <p>Events: {currentEvents.length}</p>}
      </div>
      {isValidDate && (
        <Modal opened={event} onClose={closeEvent} title="Event List" centered>
          <div className="flex flex-col gap-5">
            <EventCardList data={currentEvents} />
            <Button onClick={openForm}>New Event</Button>
          </div>
        </Modal>
      )}
      {isValidDate && (
        <Modal
          opened={form}
          onClose={closeForm}
          title={`Event on ${day}/${month + 1}/${year}`}
          centered>
          <EventForm
            day={day}
            month={month}
            year={year}
            closeForm={closeForm}
          />
        </Modal>
      )}
    </>
  );
};
