import instance from "./axios";

export interface Event {
  name: string;
  start: Date;
  end: Date;
  location: string;
  label: string;
}

export class Events {
  public static async get(): Promise<Event[]> {
    const events = await instance.get("/events");
    console.log(events);
    return events.data;
  }

  public static async create(data: Event): Promise<any> {
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
