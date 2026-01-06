"use client";
import { useCallback, useState } from "react";
import Rerend from "../components/rerenderComp";

const page = () => {
  const [count, setCount] = useState(0);
  const testFunction = useCallback(() => {}, []);

  const handleCount = () => {
    setCount((pre) => pre + 1);
  };

  return (
    <div>
      <p>This is Design component</p>
      <div>
        <Rerend fn={testFunction} />
      </div>
      <p>Count {count}</p>
      <button
        className="p-2 border bg-gray-200 cursor-pointer"
        onClick={handleCount}
      >
        Increment
      </button>
    </div>
  );
};

export default page;
