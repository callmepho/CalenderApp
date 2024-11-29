import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import React, { useContext, useState } from "react";
import { Button, Input, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { Event, EventCreateDTO, Events } from "../../../services/events";
import { EventsContext } from "@/app/context/EventsContextProvider";
import { AxiosError } from "axios";
import { Label } from "../../../services/labels";

export interface Day {
  day: number;
  month: number;
  year: number;
  closeForm: () => void;
}

export const EventForm = ({ day, month, year, closeForm }: Day) => {
  const { fetchData, labels } = useContext(EventsContext);
  const [error, setError] = useState<AxiosError | null>(null);
  const schema = yup.object().shape({
    name: yup.string().required("Cannot be blank"),
    startDate: yup.date().required(),
    endDate: yup
      .date()
      .required()
      .min(yup.ref("startDate"), "End date must be after start date"),
    location: yup.string().required("Cannot be blank"),
    labelId: yup
      .number()
      .required("Cannot be blank")
      .notOneOf([0], "Please select a valid label"),
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      startDate: new Date(year, month, day),
      endDate: new Date(year, month, day),
      location: "",
      labelId: 0,
    },
    validate: yupResolver(schema),
    enhanceGetInputProps: (payload) => ({
      disabled: payload.field === "startDate",
    }),
  });

  const formSubmit = async (data: EventCreateDTO) => {
    await Events.create(data)
      .then(() => {
        fetchData();
        closeForm();
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      });
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
          key={form.key("labelId")}
          error={form.errors.labelId}
          {...form.getInputProps("labelId")}>
          <option disabled value={0}></option>
          {labels.map((label: Label, idx: number) => (
            <option key={`label${idx}`} value={label.id}>
              {label.name}
            </option>
          ))}
        </Input>
      </Input.Wrapper>
      <Button type="submit">Submit</Button>
      <p className="text-red-500">{error && `Error: ${error.message}`}</p>
    </form>
  );
};
