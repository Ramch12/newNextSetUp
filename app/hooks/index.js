import { default as axios } from "axios";
import { useEffect, useState } from "react";
//https://jsonplaceholder.typicode.com/posts
const apiClient = axios.create({
  baseURL: "https://694603e0ed253f51719cd8c1.mockapi.io",
  auth: true,
});

const usePostfetchHook = () => {
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false)
  const fetchPostById = async ({ blogId }) => {
    setLoading(true)
    const { data } = await apiClient.get(`/posts/${blogId}`);
    setLoading(false)
    return data;
  };


  return {
    fetchPostById,
    courseList
  };
};

export { usePostfetchHook, apiClient };
