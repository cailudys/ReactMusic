import React, { PureComponent } from 'react'

interface IProps {
  name: string
  age?: number
}

interface IState {
  message: string
  counter: number
}

// 如何对类组件进行类型注解
class Demo2 extends PureComponent<IProps, IState> {
  state = {
    message: 'message',
    counter: 0
  }

  // 构造函数可以省略
  constructor(props: IProps) {
    super(props)

    // this.state = {
    //   message: 'message',
    //   counter: 0
    // }
  }

  render(): React.ReactNode {
    return (
      <div>
        <div>name:{this.props.name}</div>
        <div>counter: {this.state.counter}</div>
      </div>
    )
  }
}

export default Demo2
