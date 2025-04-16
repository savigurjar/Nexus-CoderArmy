import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "./Sclicer1";

export default function Counting() {
  const count = useSelector((state) => state.slice1.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter is: {count}</h1>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </>
  );
}
