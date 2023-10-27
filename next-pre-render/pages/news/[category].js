
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
  const {params,req, res,query} = context;
  // console.log('query: ', query);

  // console.log(req.headers.cookie)
  res.setHeader("Set-Cookie", ['name=lili'])

  const {category} = params
  const result = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await result.json();
  // console.log("data: ", data);

  return {
    props: {
      articles: data,
      category
    },
  };
}
