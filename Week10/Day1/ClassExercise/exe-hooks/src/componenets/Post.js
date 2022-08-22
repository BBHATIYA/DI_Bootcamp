import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = (props) => {
  const [post, setPost] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      {post.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "1px solid #000",
              padding: "25px",
              margin: "20px",
            }}
          >
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default Post;
