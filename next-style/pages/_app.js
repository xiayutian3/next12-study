import '../styles/globals.css'
//全局样式
import "bootstrap/dist/css/bootstrap.min.css"

// css in js 的另一种方案
import { ThemeProvider } from 'styled-components'
const theme = {
  colors:{
    primary:"#355c7d"
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
 
}

export default MyApp
