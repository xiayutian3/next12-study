import { useRouter } from "next/router"
const ReviewDetail = () => {
  const router = useRouter()
  // http://localhost:3000/book/1/review/1
  const {bookId,reviewId} = router.query
  return (
    <h1>书籍{bookId}详情页的评论{reviewId}</h1>
  )
}
export default  ReviewDetail