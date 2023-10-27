
// 动态 Api 路由

import { comments } from "../../../data/comments"

// http://localhost:3000/comments/1
export default function handler(req, res) {
  if(req.method == "GET"){
    const {commentId} = req.query
    const comment = comments.find(comment => parseInt(commentId) === comment.id)
    res.status(200).json(comment)
  }else if(req.method == "DELETE"){
    const {commentId} = req.query
    const commentOne = comments.find(comment => parseInt(commentId) === comment.id)
    const index = comments.findIndex(comment => parseInt(commentId) === comment.id)
    comments.splice(index, 1)

    res.status(200).json(commentOne)
  }
}