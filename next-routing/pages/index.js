import Link from "next/link"
import { useRouter } from "next/router"

const Home = () => {
  const router = useRouter()
  const handclick = () => {
      // 编程式导航
      router.push("/book")
      // router.replace("/book") //替换历史记录
  }

  return (
    <div>
      <h1>首页</h1>
      <Link href="/book">
        书籍
      </Link>
      <br/>
      <Link href="/blog">
      博客
      </Link>
      <br></br>
      <button onClick={handclick}>
        下单
      </button>
    </div>
  )
}
export default  Home