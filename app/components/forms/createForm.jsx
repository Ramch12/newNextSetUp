import { useState } from "react";
const CreateCourseForm = () => {
  const [courseInfo, setCourseInfo] = useState({
    title: "",
    description: "",
    author: "",
    createAt: "",
  });

  const handleChange = (e) => {
    console.log("Event Name", e.target.name);
    console.log("Event value", e.target.value);
  };

  return (
    <div>
      <div className="p-2">
        <h3 className="text-center text-xl font-bold">Create Course</h3>
      </div>
      <div>
        <label htmlFor="title">Enter title</label>
        <input type="text" id="title" name="title" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="title">Enter Description</label>
        <input type="text" id="title" name="title" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="title">Enter Author</label>
        <input type="text" id="title" name="title" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="title">Created At</label>
        <input type="text" id="title" name="title" onChange={handleChange} />
      </div>
    </div>
  );
};

export default CreateCourseForm;
