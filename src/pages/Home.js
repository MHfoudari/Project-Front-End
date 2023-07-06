import React, { useState, useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockData = [
        { id: 1, title: "Post 1", content: "This is the first post." },
        { id: 2, title: "Post 2", content: "This is the second post." },
        { id: 3, title: "Post 3", content: "This is the third post." },
      ];
      setData(mockData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div style={{ width: "100vw", height: "200vh", backgroundColor: "gray" }}>
      <h1>WHERE ALL THE FOODIES THRIVE</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Home;
