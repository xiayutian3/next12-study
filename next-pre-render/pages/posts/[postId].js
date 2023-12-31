import { useRouter } from "next/router";

export default function PostId({ post }) {

  const router = useRouter()
  //后备页面
  if(router.isFallback) {
    return <h1>加载中.....</h1>
  }

  return (
    <>
      <h1>PostId 详情页</h1>
      <h2>
        {post.id}--{post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

// 静态渲染
// 只在服务端运行。
// 只能用预预渲染，不能用于客户端数据获取
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  // console.log("data: ", data);

  //如果data中不存在id ，id 1-100，结果来个 输入 id 120
  // 会返回 404页面
  if(!data.id){
    return {
      notFound: true
    }
  }

  return {
    props: {
      post: data,
    },
  };
}

// 处理动态ssg
export async function getStaticPaths() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();

  // const paths = data.map((post) => ({
  //   params: { postId: post.id + "" },
  // }));

  // return {
  //   paths,
  //   fallback: false,
  // };




  // 硬编码的情况
  return {
    paths: [ //处理要渲染的路径
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
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
