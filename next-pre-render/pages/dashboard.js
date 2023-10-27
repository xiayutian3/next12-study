// 客户端渲染
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    async function fetchDashboard() {
      const res = await fetch("http://localhost:4000/dashboard");
      const data = await res.json();
      setDashboard(data);
      setIsLoading(false);
    }
    fetchDashboard();
  }, []);

  if (isLoading) {
    return <h2>加载中...</h2>;
  }

  return (
    <>
      <h1>posts:{dashboard.posts}</h1>
      <h1>likes:{dashboard.likes}</h1>
      <h1>followers:{dashboard.followers}</h1>
      <h1>following:{dashboard.following}</h1>
    </>
  );
}
