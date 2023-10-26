
export default function Post({ articles }) {
  return (
    <>
      <h1>list of articles</h1>
      {articles.map((item) => {
        return (
          <div key={item.id}>
              {item.id}----{item.title}=={item.category}
          </div>
        );
      })}
    </>
  );
}

//服务端渲染 ssr
//只在服务端运行。
export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();
  // console.log("data: ", data);

  return {
    props: {
      articles: data,
    },
  };
}