import styled from "styled-components"

const Title = styled.h1`
  font-size:50px;
  color:${({theme})=>theme.colors.primary};
`

export default function Cssinjs() {
  return (
    // css in js 的一种方案
    // <h2 style={{color:'red'}}>hello</h2>


    // css in js 的另一种方案
    <Title>样式化的组件（styled components）</Title>
  )
}