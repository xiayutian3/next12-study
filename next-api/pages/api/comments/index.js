import { comments } from "../../../data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    // console.log('comment: ', comment);
    const newomment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newomment);
    res.status(201).json(newomment);
  }
}
