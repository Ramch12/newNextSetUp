"use client";
import { useRef } from "react";

const GaanaPage = () => {
  const fileRef = useRef(null);
  const textInputRef = useRef(null);
  // console.log("input Value", textInputRef);
  console.log("Text Value", fileRef?.current?.value)
  const handleInputClick = () => {
      console.log("valaue", textInputRef?.current?.value)
  };
  return (
    <div className="text-black">
      this is a Gaana Page
      <div className="w-full">
        <div>
          <label htmlFor="">Enter Your Name</label>
          <input type="text" ref={textInputRef}/>
        </div>
        <div>
          <label htmlFor="">This is file input box</label>
          <input type="file" ref={fileRef}/>
        </div>
        <div>
          <button onClick={handleInputClick} className="p-2 bg-grey-500"> click to upload the file</button>
        </div>
        <input type="text" value={textInputRef?.current?.value}/>
      </div>
    </div>
  );
};

export default GaanaPage;
