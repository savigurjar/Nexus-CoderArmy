import React, { useState, useRef,useEffect } from "react";
import ReactDOM from "react-dom/client";
function Main() {
  const [time, settime] = useState(0);
  const intervalref = useRef(null);
  const [isrunning, setIsRunning] = useState(false);

  function start() {
    if (!isrunning) {
      intervalref.current = setInterval(() => {
        settime((time) => time + 1);
        console.log(time + 1);
      }, 1000);
      setIsRunning(true); // Moved inside if condition
    }
  }
  function stop() {
    if (isrunning) {
      clearInterval(intervalref.current);
      intervalref.current = null;
      setIsRunning(false);
    }
  }
  function reset() {
    if (isrunning) {
      clearInterval(intervalref.current);
      intervalref.current = null;
      setIsRunning(false);
    }
    settime(0);
  }

  // Cleanup interval when component unmounts
  useEffect(() => {
    return () => clearInterval(intervalref.current);
  }, []);

  return (
    <>
      <div>
        <h1>StopWatch: {time}</h1>
        <div>
          <button onClick={start} disabled={isrunning}>
            Start
          </button>
          <button onClick={stop} disabled={!isrunning}>
            Stop
          </button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
