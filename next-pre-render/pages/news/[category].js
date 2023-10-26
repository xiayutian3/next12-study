
export default function Category({ category,articles}) {
  return (
    <>
      <h1>文章类型：{category}</h1>
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
export async function getServerSideProps(context) {
  const {params} = context;
  const {category} = params
  const res = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await res.json();
  // console.log("data: ", data);

  return {
    props: {
      articles: data,
      category
    },
  };
}
