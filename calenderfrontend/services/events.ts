import instance from "./axios";

export interface Event {
  name: string;
  start: Date;
  end: Date;
  location: string;
  label: string;
}
