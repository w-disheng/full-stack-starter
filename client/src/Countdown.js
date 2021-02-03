import { useState } from "react";

function Countdown({ seconds }) {
  const [secondsRemaining, setSecondRemaining] = useState(0);

  function onStart() {
    const startTime = new Date();
    setSecondRemaining(seconds);

    const intervalId = setInterval(function () {
      const now = new Date();
      const timeElapsed = now.getTime() - startTime.getTime();
      const timeRemaining = Math.round(seconds - timeElapsed / 1000);
      if (timeRemaining <= 0) {
        clearInterval(intervalId);
        setSecondRemaining(0);
      } else {
        setSecondRemaining(timeRemaining);
      }
    }, 1000);
  }

  return (
    <div>
      <p> Countdown: {seconds} seconds</p>
      {!secondsRemaining && (
        <button type="button" onClick={onStart}>
          Start
        </button>
      )}
      {secondsRemaining > 0 && <div>{secondsRemaining} seconds remaining! </div>}
    </div>
  );
}

export default Countdown;
