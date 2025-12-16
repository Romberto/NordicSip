import { FaTelegram } from "react-icons/fa";
import React from "react"

type TelegramIconProps = {
  className?: string;
};

export function TelegramIcon(props: React.ComponentProps<typeof FaTelegram>) {
  return <FaTelegram {...props} />;
}
