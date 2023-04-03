import { useState, useEffect } from "react";

export const Watch = () => {
  const [timer, setTimer] = useState("00:00:00");

  const dates = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`);
  };

  setInterval(dates, 1000);

  useEffect(dates, []);

  return <>{timer}</>;
};
