import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import React from "react";
import { Button, Input, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { Event, Events } from "../../../services/events";

export interface Day {
  day: number;
  month: number;
  year: number;
}

export const EventForm = ({ day, month, year }: Day) => {
  const schema = yup.object().shape({
    name: yup.string().required("Cannot be blank"),
    startDate: yup.date().required(),
    endDate: yup
      .date()
      .required()
      .min(yup.ref("startDate"), "End date must be after start date"),
    location: yup.string().required("Cannot be blank"),
    label: yup.string().required("Cannot be blank"),
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      startDate: new Date(year, month, day),
      endDate: new Date(year, month, day),
      location: "",
      label: "",
    },
    validate: yupResolver(schema),
    enhanceGetInputProps: (payload) => ({
      disabled: payload.field === "startDate",
    }),
  });

  const formSubmit = async (data: Event) => {
    await Events.create(data)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  return (
    <form
      onSubmit={form.onSubmit((values) => formSubmit(values))}
      className="flex flex-col gap-5">
      <TextInput
        label="name"
        placeholder="Enter event name"
        key={form.key("name")}
        {...form.getInputProps("name")}
      />
      <TextInput
        label="location"
        placeholder="Enter event location"
        key={form.key("location")}
        {...form.getInputProps("location")}
      />
      <DatePickerInput
        label="Start Date"
        placeholder="Pick event start date"
        {...form.getInputProps("startDate")}
      />
      <DatePickerInput
        label="End Date"
        placeholder="Pick event end date"
        {...form.getInputProps("endDate")}
      />
      <Input.Wrapper label="Label">
        <Input
          component="select"
          key={form.key("label")}
          {...form.getInputProps("label")}>
          <option disabled></option>
          <option value="label1">label1</option>
          <option value="label2">label2</option>
          <option value="label3">label3</option>
        </Input>
      </Input.Wrapper>
      <Button type="submit">Submit</Button>
    </form>
  );
};
