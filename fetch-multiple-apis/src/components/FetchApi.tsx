import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchApi = () => {
  const [batchedData, setBatchedData] = useState<String[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [post1, post2, post3] = await Promise.all([
          axios.get("https://jsonplaceholder.typicode.com/posts/1"),
          axios.get("https://jsonplaceholder.typicode.com/posts/2"),
          axios.get("https://jsonplaceholder.typicode.com/posts/3"),
          // Add more axios.get calls as needed
        ]);

        const responseData:any = [post1.data, post2.data, post3.data];
        setBatchedData(responseData);
        setError(null);
      } catch (error:any) {
        setError("Error fetching batched data: " + error.message);
      }
    };

    fetchData();

    // Cleanup function to clear resources if needed
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div>
      <h2>Batched API Calls Component</h2>
      {batchedData.length > 0 ? (
        <div>
          <p>Data fetched successfully:</p>
          <ul>
            {batchedData.map((data, index) => (
              <li key={index}>{JSON.stringify(data)}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default FetchApi;
