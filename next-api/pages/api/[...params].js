
// 守卫路由 catch all   [...params].js
// 可选的守卫路由 catch all     [[...params]].js  如果没有api下面的index。js的话，[[...params]].js 就不会出现404页面

export default function handler(req, res) {
  // params 参数与文件名相对应
 const params = req.query.params
 console.log('params: ', params);
 res.status(200).json(params)
} 