import React, { useEffect, useState } from "react";
import axios from "axios";

const PostRequest = () => {
  const [postFetch, setPostFetch] = useState({});
  const [postAxios, setPostAxios] = useState({});

  useEffect(() => {
    const postUsingFetch = async () => {
      try {
        const fetchPromise = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            body: JSON.stringify({
              userID: 1092,
              title: "Imran Munir POST Request using Fetch API",
              body: "Fetch api post requests",
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );

        const response = await fetchPromise.json();

        setPostFetch(response);
      } catch (error) {
        console.log(error);
      }
    };

    postUsingFetch();

    const postUsingAxios = async () => {
      try {
        const axiosPromise = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            body: JSON.stringify({
              userID: 1092,
              title: "Imran Munir POST Request using Axios API",
              body: "Axios api post requests",
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );

        const data = JSON.parse(axiosPromise.data.body);

        setPostAxios(data);
      } catch (err) {
        console.log(err);
      }
    };

    postUsingAxios();
  }, []);
  return (
    <div>
      <h1>POST Request to JSON Placeholder using Fetch API</h1>
      <div>
        Fetch Response
        <br />
        <div>
          <h4>{postFetch.id}</h4>
          <h3>{postFetch.title}</h3>
          <p>{postFetch.body}</p>
        </div>
      </div>
      <h1>POST Request to JSON Placeholder using Axios API</h1>
      <div>
        Axios Response
        <br />
        <div>
          <h4>{postAxios.id}</h4>
          <h3>{postAxios.title}</h3>
          <p>{postAxios.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostRequest;
