import React, { useEffect, useState } from "react";
import axios from "axios";

const UserData = () => {
  const [fetchData, setFetchData] = useState({});
  const [axiosData, setAxiosData] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => setFetchData(data))
      .catch((error) => console.log(error));

    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => setAxiosData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Using JSON Placeholder API using Fetch API</h1>
      <p>
        <span>ID: {fetchData.id}</span>
        <br />
        <span>Title: {fetchData.title}</span>
      </p>
      <h1>Using JSON Placeholder API using Axios API</h1>
      <p>
        <span>ID: {axiosData.id}</span>
        <br />
        <span>Title: {axiosData.title}</span>
      </p>
    </div>
  );
};

export default UserData;
