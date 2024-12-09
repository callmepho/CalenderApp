import instance from "./axios";

export interface Label {
  id: number;
  name: string;
}

export interface CreateLabelDTO {
  name: string;
}

export class Labels {
  public static async get(): Promise<Label[]> {
    const response = await instance.get("/labels");
    console.log(response);
    return response.data;
  }

  public static async create(data: string): Promise<any> {
    const label = await instance.post("/labels", { name: data });
    console.log(label);
    return label;
  }

  public static async find(id: number): Promise<Label> {
    const label = await instance.get(`/labels/${id}`);
    console.log(label);
    return label.data;
  }

  public static async findByName(name: string): Promise<Label> {
    const label = await instance.get(`/labels/by-name?name=${name}`);
    console.log(label);
    return label.data;
  }
}
