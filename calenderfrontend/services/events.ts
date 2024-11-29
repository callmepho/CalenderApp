import instance from "./axios";
import { Label } from "./labels";

export interface Event {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  location: string;
  label: Label;
}

export interface EventCreateDTO {
  name: string;
  startDate: Date;
  endDate: Date;
  location: string;
  labelId: number;
}

export class Events {
  public static async get(): Promise<Event[]> {
    const response = await instance.get("/events");
    const events = response.data.map((event: any) => ({
      ...event,
      startDate: new Date(event.startDate),
      endDate: new Date(event.endDate),
    }));
    console.log(events);
    return events;
  }

  public static async create(data: EventCreateDTO): Promise<any> {
    const event = await instance.post("/events", data);
    console.log(event);
    return event.status;
  }

  public static async find(id: number): Promise<Event> {
    const event = await instance.get(`/events/${id}`);
    console.log(event);
    return event.data;
  }
}
