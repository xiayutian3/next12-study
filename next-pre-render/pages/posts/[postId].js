export default function PostId({ post }) {
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

  return {
    props: {
      post: data,
    },
  };
}

// 处理动态ssg
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => ({
    params: { postId: post.id + "" },
  }));

  return {
    paths,
    fallback: false,
  };

  // 硬编码的情况
  // return {
  //   paths: [ //处理要渲染的路径
  //     {
  //       params: { postId: "1" },
  //     },
  //     {
  //       params: { postId: "2" },
  //     },
  //     {
  //       params: { postId: "3" },
  //     },
  //   ],
  //   fallback: false,
  // };
}
