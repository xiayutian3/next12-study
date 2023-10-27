// 客户端渲染 另一种方式 useSWR   有自动更新页面数据功能

import useSWR from "swr"

const fetchData = async () => {
  const res = await fetch("http://localhost:4000/dashboard");
  const data = await res.json();
  return data
}

export default function Dashboard() {
  const {data,error} = useSWR("dashboard",fetchData)
  if (error) return '出错了'
  if(!data) return '加载中'

  return (
    <>
      <h1>posts:{data.posts}</h1>
      <h1>likes:{data.likes}</h1>
      <h1>followers:{data.followers}</h1>
      <h1>following:{data.following}</h1>
    </>
  );
}

