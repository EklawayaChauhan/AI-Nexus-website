import React, { useEffect, useState } from 'react';
import '../styles/Countdown.css';

function Countdown() {
  const eventDate = new Date('2025-10-29T00:00:00'); // change to your date
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <h2 className="time-over">TIME OVER!</h2>;

  return (
    <div className="countdown">
      <div><span>{timeLeft.days}</span><label>Days</label></div>
      <div><span>{timeLeft.hours}</span><label>Hours</label></div>
      <div><span>{timeLeft.minutes}</span><label>Minutes</label></div>
      <div><span>{timeLeft.seconds}</span><label>Seconds</label></div>
    </div>
  );
}

export default Countdown;
