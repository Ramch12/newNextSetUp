import { default as axios } from "axios";
//https://jsonplaceholder.typicode.com/posts
const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  auth: true,
});

const usePostfetchHook = () => {
  const fetchPostById = async ({ blogId }) => {
    const { data } = await apiClient.get(`/posts/${blogId}`);
    return data;
  };
  return {
    fetchPostById,
  };
};

export { usePostfetchHook };
