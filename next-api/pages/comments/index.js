import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  const submitComment = async () => {
    const res = await fetch("/api/comments",{
      method: "POST",
      body: JSON.stringify({comment}),
      headers:{
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    console.log('data: ', data);
  };

  const deleteFn = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`,{
      method: "DELETE",
    });
    const data = await res.json();
    console.log('data: ', data);
    fetchComments() //重新请求数据
  }

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>commit Comment</button>
      <hr />
      <button onClick={fetchComments}>get Comments</button>
      <hr />
      {comments.map((item) => {
        return (
          <div key={item.id}>
            {item.id} --{item.text}--<button onClick={()=>deleteFn(item.id)}>delete</button>
          </div>
        );
      })}
    </>
  );
}
