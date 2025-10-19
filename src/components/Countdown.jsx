import React, { useEffect, useState } from 'react';
import '../styles/Countdown.css';

// The target date for the countdown
const EVENT_DATE = new Date('2025-11-01T00:00:00');

// Helper function to calculate the time difference
const calculateTimeLeft = () => {
  const now = new Date();
  const difference = EVENT_DATE - now;

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

function Countdown() {
  const eventDate = new Date('2025-10-29T00:00:00'); // change to your date
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    if (timeLeft === null) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  if (timeLeft === null) {
    return <h2 className="time-over">TIME OVER!</h2>;
  }

  const formatTime = (value) => String(value).padStart(2, '0');

  return (
    <div className="countdown">
      <div><span>{formatTime(timeLeft.days)}</span><label>Days</label></div>
      <span className="separator">:</span>
      <div><span>{formatTime(timeLeft.hours)}</span><label>Hours</label></div>
      <span className="separator">:</span>
      <div><span>{formatTime(timeLeft.minutes)}</span><label>Minutes</label></div>
      <span className="separator">:</span>
      <div><span>{formatTime(timeLeft.seconds)}</span><label>Seconds</label></div>
    </div>
  );
}

export default Countdown;