import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// 类型
type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>

// 导出一个已经有类型注解的函数
// 本质是对useSelect的一个封装，封装的目的是添加入参的类型注解 （IRootState）
// 这路的IRootState是通过动态获取的。
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export default store
