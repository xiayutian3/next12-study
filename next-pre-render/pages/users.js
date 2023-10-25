import User from "../component/user";

export default function Users({ users }) {
  return (
    <>
      <h1>用户</h1>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <User item={item}></User>
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
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // console.log("data: ", data);

  return {
    props: {
      users: data,
    },
  };
}
