"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { Events } from "../../../services/events";

export const EventsContext = createContext<any>(null);

interface EventsContextProviderProps {
  children: ReactNode;
}

export const EventsContextProvider: React.FC<EventsContextProviderProps> = ({
  children,
}) => {
  const [events, setEvents] = useState<Events[]>([]);

  const fetchData = async () => {
    try {
      const data = await Events.get();
      setEvents(data);
    } catch (e) {
      console.error("Error fetching events:", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <EventsContext.Provider value={{ events, fetchData }}>
      {children}
    </EventsContext.Provider>
  );
};
