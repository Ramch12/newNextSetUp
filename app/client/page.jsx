"use client";

"use client";

import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts (Client Side – JS only)</h1>

      {posts.slice(0, 10).map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <small>User ID: {post.userId}</small>
        </div>
      ))}
    </div>
  );
}
