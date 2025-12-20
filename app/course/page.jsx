"use client";
import { useCourseHook } from "../hooks/courseHook";

const ListCoursePage = () => {
  const { loading, courseList } = useCourseHook();
  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="w-full h-screen flex flex-col justify-between items-center p-3">
      <div className=" w-full h-[10%]">
        <div className=" w-full h-10 border border-solid border-black rounded-2xl">
          <h3 className="text-2xl text-center">List Course Page</h3>
        </div>
      </div>
      <div className="w-full border border-solid border-black h-[90%] rounded-2xl p-2">
        <p className="text-2xl font-semibold text-center">
          
        </p>
      </div>
    </div>
  );
};

export default ListCoursePage;
