import Footer from "../components/layout/Footer"

export default function About() {
  //访问环境变量(通常在node 端才能访问)
  const user= process.env.DB_USER
  console.log('user: ', user);
  const pwd= process.env.DB_PASSWORD
  console.log('pwd: ', pwd);


  return (
    <div className="about">关于页面</div>
  )
}

// 自定义layout
About.getLayout = function PageLayout(page){
  // page 就是当前的page
  return (
    <>
    {page}
    <Footer></Footer>
    </>
  )
}