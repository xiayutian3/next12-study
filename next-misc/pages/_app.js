import Footer from 'components/layout/Footer' //在jsconfig设置别名了 
import Header from '@/layout/Header'  //在jsconfig设置别名了 
import '../styles/globals.css'
import '../styles/layout.scss'

function MyApp({ Component, pageProps }) {
  //处理不需要改定义的 特定的header footer 的页面，自定义自己的layout
  if(Component.getLayout){
    return Component.getLayout(   <Component {...pageProps} />)
  }

  return (
    <>
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
    </>
  )
  
}

export default MyApp
