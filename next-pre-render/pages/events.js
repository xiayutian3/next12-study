// 预渲染+客户端数据获取

import { useState } from "react";
import {useRouter} from 'next/router'

export default function EventList({ eventList }) {

  const [events, setEvents] = useState(eventList)
  const router = useRouter()

  const fetchData = async () => {
    const res = await fetch("http://localhost:4000/events?category=math");
    const data = await res.json();
    setEvents(data);

    //实现浅路由
    router.push('/events?category=math',undefined,{shallow:true});
  }

  return (
    <>
      <button onClick={fetchData}>过滤数据</button>
      <h1>list of eventList</h1>
      {events.map((item) => {
        return (
          <div key={item.id}>
              {item.id}----{item.title}=={item.description}
          </div>
        );
      })}
    </>
  );
}

//服务端渲染 ssr
//只在服务端运行。
export async function getServerSideProps(context) {
  // 用于处理浅路由
  const {query} = context
  const {category} = query
  const queryString =  category? 'category=math':''


  const res = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await res.json();
  // console.log("data: ", data);

  return {
    props: {
      eventList: data,
    },
  };
}