"use client";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { EventForm } from "../EventForm/EventForm";

export const ModalTest = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        <EventForm day={0} month={0} year={0} />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
};
