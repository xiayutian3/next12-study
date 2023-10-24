import { useRouter } from "next/router"
const BookDetail = () => {
  const router = useRouter()
  // http://localhost:3000/book/1
  // 优先匹配静态路径，在匹配动态路径
  const bookId = router.query.bookId
  return (
    <h1>书籍{bookId}详情页</h1>
  )
}
export default  BookDetail