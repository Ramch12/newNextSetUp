import { apiClient } from "./index";
import { useState, useEffect } from "react";

const useCourseHook = () => {
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllCourse = async () => {
    try {
      setLoading(true);
      const { data } = await apiClient("/api/v1/course");
      setCourseList(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (courseId) => {
    try {
      await apiClient.delete(`/course/${courseId}`);
      await fetchAllCourse();
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleEdit = (courseId) => {
    console.log("courseId", courseId);
  };

  useEffect(() => {
    fetchAllCourse();
  }, []);

  return {
    courseList,
    loading,
    handleDelete,
    handleEdit,
  };
};

export { useCourseHook, listCourses };
