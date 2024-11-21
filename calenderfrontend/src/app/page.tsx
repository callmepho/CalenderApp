import Image from "next/image";
import { Calender } from "../components/Calender/Calender";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { ModalTest } from "@/components/ModalTest/ModalTest";
import { EventsContextProvider } from "./context/EventsContextProvider";

export default function Home() {
  return (
    <EventsContextProvider>
      <div>
        <ColorSchemeToggle />
        <Calender />
      </div>
    </EventsContextProvider>
  );
}
