import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
  name: string
  age: number
}

// 组件的类型是： React.FunctionComponent<T>  T其实代表的是props的类型约束。
// React.FunctionComponent<T> 同 React.FC<T>
const Download: React.FC<Iprops> = (props) => {
  return (
    <>
      <div>name: {props.name}</div>
      <div>name: {props.age}</div>
    </>
  )
}

// 这种导出性能不高？？？
export default memo(Download)
