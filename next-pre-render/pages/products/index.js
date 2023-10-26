
export default function Post({ products }) {
  return (
    <>
      <h1>list of products</h1>
      {products.map((item) => {
        return (
          <div key={item.id}>
              {item.id}----{item.title}=={item.price}
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
  // console.log('后台重新生成新的页面版本')
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();
  // console.log("data: ", data);

  return {
    props: {
      products: data,
    },
    revalidate: 20  //isr  静态增量更新  //20秒后，刷新页面会重新生成，静态页面，在20内刷新页面不会变化，用的是缓存
  };
}
