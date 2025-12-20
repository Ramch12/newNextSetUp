import { apiClient } from "./index";
import { useState, useEffect } from "react";

const useCourseHook = () => {
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const listCourses = async () => {
    const { data } = await apiClient("/api/v1/course");
    return data;
  };

  useEffect(() => {
    const fetchAllCourse = async () => {
      try {
        setLoading(true);
        const data = await listCourses();
        setCourseList(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchAllCourse();
  }, []);
  return {
    courseList,
    loading
  };
};

export { useCourseHook };
