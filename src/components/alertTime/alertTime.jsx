import React, { useState, useEffect } from 'react';
import './alertTime.css';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date('2024-01-22T23:59:00Z');
  let intervalId; 

  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    } else {
      setCountdown({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval(intervalId);
    }
  };

  useEffect(() => {
    calculateTimeRemaining();
    intervalId = setInterval(calculateTimeRemaining, 1000);


    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className='container-timer'>
        <marquee>
        <div>
        <b>Inscripciones hasta el 22 de enero: </b>
            <span>⌛ {countdown.days} </span> días
            <span> {countdown.hours} </span> horas
            <span> {countdown.minutes} </span> m
            <span> {countdown.seconds} </span> s⌛
        </div>
      </marquee>
    </div>
  );
};

export default CountdownTimer;
