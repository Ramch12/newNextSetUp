"use client";
import { useEffect, useState } from "react";
import { usePostfetchHook } from "../../hooks";
import { useParams } from "next/navigation";

const BlogPostPage = ({ params }) => {
  const { blogId } = useParams();
  const { fetchPostById } = usePostfetchHook();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await fetchPostById({ blogId });
      setPost(data);
    };
    fetchPost();
  }, [blogId, fetchPostById]);

  return post ? (
    <div>
      <div className="border border-black text-center mx-3 rounded-xl bg-amber-200">
        <h3 className="text-2xl font-semibold p-3">
          {`You are seeing the details of blog page ${blogId}`}
        </h3>
      </div>
      <div>
        <p className="text-center text-2xl">{`Blog Details of ${blogId}`}</p>
      </div>
      <div
        className="border border-solid border-black font-semibold mx-3 rounded-xl p-3
      "
      >
        <ul>
          <li>{post.id}</li>
          <li>{post.title}</li>
          <li>{post.body}</li>
        </ul>
      </div>
    </div>
  ) : (
    <p>Loading</p>
  );
};

export default BlogPostPage;
