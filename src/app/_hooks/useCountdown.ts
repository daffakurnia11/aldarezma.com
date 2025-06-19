import { useEffect, useState } from "react";

export const useCountdown = () => {
  const deadline = new Date("2025-06-30T23:59:00");

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = deadline.getTime() - now;

    if (distance < 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft); // use function for initial state

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { timeLeft };
};
