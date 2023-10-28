/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // redirects: async () =>{ //重定向
  //   return [
  //     {
  //       source:'/about',
  //       destination:"/",
  //       permanent: true,//重定向是临时还是永久
  //     }
  //   ]
  // }
}

module.exports = nextConfig
