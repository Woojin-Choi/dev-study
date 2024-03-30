import React, { useState } from "react";

// 어떤 함수 컴포넌트에서든 카운터 기능을 쉽게 사용할 수 있음!
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

  return [count, increaseCount, decreaseCount];
}
export default useCounter;
