"use client";

import { useMantineColorScheme, MantineColorScheme, Text } from "@mantine/core";
import light from "./light.svg";
import dark from "./dark.svg";
import auto from "./auto.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const schemes: MantineColorScheme[] = ["light", "dark", "auto"];

  // State to check if the component has mounted on the client
  const [mounted, setMounted] = useState(false);

  // Ensures that client-side logic runs only after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const nextScheme =
      schemes[(schemes.indexOf(colorScheme) + 1) % schemes.length];
    setColorScheme(nextScheme);
  };

  const getIcon = () => {
    switch (colorScheme) {
      case "light":
        return light;
      case "dark":
        return dark;
      case "auto":
      default:
        return auto;
    }
  };

  // Render nothing on the server side to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={handleToggle}>
      <Image
        src={getIcon()}
        alt={`${colorScheme} mode icon`}
        style={{ width: 20, height: 20 }}
      />
      <Text size="xs">{colorScheme}</Text>
    </div>
  );
}
