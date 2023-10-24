import { useRouter } from "next/router"
const Docs = () => {
  const router = useRouter()
  // http://localhost:3000/docs/*      下面的所有路径
  const {params= []} = router.query
  console.log('params: ', params);

  if (params.length === 2){
    return <h1>查看功能{params[0]}概念{params[1]}</h1>
  }else if (params.length === 1){
    return <h1>查看功能{params[0]}文档</h1>
  }else{
    return <h1>文档主页</h1>
  }
}
export default  Docs