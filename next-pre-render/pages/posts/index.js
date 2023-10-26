import Link from "next/link";

export default function Post({ posts }) {
  return (
    <>
      <h1>帖子</h1>
      {posts.map((item) => {
        return (
          <div key={item.id}>
            <Link href={`/posts/${item.id}`}>
              {item.id}----{item.title}
            </Link>
          </div>
        );
      })}
    </>
  );
}

// 静态渲染
// 只在服务端运行。
// 只能用预预渲染，不能用于客户端数据获取
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  // console.log("data: ", data);

  return {
    props: {
      posts: data.slice(0,3),
    },
  };
}
