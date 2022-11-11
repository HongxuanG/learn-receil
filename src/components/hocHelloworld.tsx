import React from 'react'
// 高阶组件
const WithHelloWorld = (Component) => {
  const extraProps = 'helloworld'
  const newComponent = (props) => {
    return <Component {...props} extraProps={extraProps}></Component>
  }
  return newComponent
}
export default WithHelloWorld
