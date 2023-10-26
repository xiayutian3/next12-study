import { useRouter } from "next/router";

export default function ProductId({ product }) {

  const router = useRouter()
  // //后备页面
  if(router.isFallback) {
    return <h1>加载中.....</h1>
  }

  return (
    <>
      <h1>product 详情页</h1>
      <h2>
        {product.id}--{product.title}
      </h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </>
  );
}

// 静态渲染
// 只在服务端运行。
// 只能用预预渲染，不能用于客户端数据获取
export async function getStaticProps(context) {
  // console.log('后台重新生成新的页面版本')
  const { params } = context;
  const res = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await res.json();
  // console.log("data: ", data);

  return {
    props: {
      product: data,
    },
    revalidate: 20  //isr  静态增量更新  //20秒后，刷新页面会重新生成，静态页面，在20内刷新页面不会变化，用的是缓存

  };
}

// 处理动态ssg
export async function getStaticPaths() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();

  // const paths = data.map((post) => ({
  //   params: { productId: post.id + "" },
  // }));

  // return {
  //   paths,
  //   fallback: false,
  // };




  // 硬编码的情况
  return {
    paths: [ //处理要渲染的路径
      {
        params: { productId: "1" },
      },
      // {
      //   params: { productId: "2" },
      // },
      // {
      //   params: { productId: "3" },
      // },
    ],
    fallback: true,
  };
}

  /**
   * 要点fallback = false
   * 
   * 1.从getStaticPaths返回的路径，会在构建通过getStaticProps渲染为html
   * 2.任何不是从这个getStaticPaths返回的路径都会导致返回404页面
   * 
   * 使用场景
   * 1.需要预渲染的路径较少
   * 2.不经常添加新页面
   * 例如，帖子并不多的博客站点
   * 
   * 
   * 
   * 要点fallback = true
   * 1.从getStaticPaths返回的路径，会在构建通过getStaticProps渲染为html
   * 2.构建时未能生成的页面在运行时并不会产生404页面，相反next会在第一次请求该路径的时候，返回页面的 fallback版本
   * 3.在后台，next会静态生成和请求路径相对应的html和json，包括运行 getStaticProps
   * 4.在完成后，浏览器会接收到相应路径的html和json，将用于渲染页面，从用户角度看，页面会从后备箱版本切换到完整的版本
   * 5.同时，next会跟踪已渲染的页面的新页面列表，对同一路径的后续请求将直接返回生成的页面，就像其他在构建时渲染的页面一样
   * 
   * 使用场景
   * 有大量的页面需要seo，静态生成部分其他的就动态生成
   * 
   * 
   * 
   * 
   * 要点fallback = blocking
   * 1.和fallback = true是相似的，只是看不到后备页面，出现空白，生成后再替换页面
   * 
   * 使用场景（建议都使用true）
   * 爬虫不支持 true的话，就设置 blocking
   */
