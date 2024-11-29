"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { Events } from "../../../services/events";
import { AxiosError } from "axios";
import { Labels } from "../../../services/labels";

export const EventsContext = createContext<any>(null);

interface EventsContextProviderProps {
  children: ReactNode;
}

export const EventsContextProvider: React.FC<EventsContextProviderProps> = ({
  children,
}) => {
  const [events, setEvents] = useState<Events[]>([]);
  const [labels, setLabels] = useState<Labels[]>([]);
  const [dataError, setDataError] = useState<AxiosError | null>(null);

  const fetchData = async () => {
    await Events.get()
      .then((data) => setEvents(data))
      .catch((e) => setDataError(e));
    await Labels.get()
      .then((data) => setLabels(data))
      .catch((e) => setDataError(e));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <EventsContext.Provider value={{ events, labels, fetchData, dataError }}>
      {children}
    </EventsContext.Provider>
  );
};
