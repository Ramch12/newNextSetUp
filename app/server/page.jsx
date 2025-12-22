const serverSideUsersPage = async () => {
  const data = await (
    await fetch("https://api.vercel.app/blog", { cache: "no-store" })
  ).json();
  console.log("data", data);
  return (
    <div>
      <h3 className="text-2xl text-center font-semibold p-3">
        This is my server side page
      </h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Author</th>
              <th>Date</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.author}</td>
                <td>{}item.date</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default serverSideUsersPage;
