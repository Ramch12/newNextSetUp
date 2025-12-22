"use client";
import { useCourseHook } from "../hooks/courseHook";
import UserTable from "../components/table/userTable/user-table";
import { ModalContext } from "../providers/ModalProvider";
import { useContext } from "react";
import CreateCourseForm from "../components/forms/createForm";

const ListCoursePage = () => {
  const { loading, courseList, listCourses, handleDelete, handleEdit } =
    useCourseHook();

  const { openModal, closeModal } = useContext(ModalContext);

  const handleCreate = () => {
    openModal(<CreateCourseForm />);
  };

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="w-full h-screen flex flex-col justify-between items-center p-3">
      <div className=" w-full h-[10%]">
        <div className=" w-full h-10 border border-solid border-black rounded-2xl">
          <h3 className="text-2xl text-center">List Course Page</h3>
        </div>
      </div>
      <div className="p-3 w-full">
        <div className="flex justify-end">
          <button
            type="button"
            className="p-4 bg-amber-300 border border-solid border-black rounded-2xl cursor-pointer"
            onClick={handleCreate}
          >
            Create Course
          </button>
        </div>
      </div>
      <div className="w-full border border-solid border-black h-auto rounded-2xl p-2 mt-2">
        <p className="text-2xl font-semibold text-center"></p>
        <UserTable
          data={courseList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default ListCoursePage;
