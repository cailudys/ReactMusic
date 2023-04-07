import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getRecommend } from '../service/recommend'

// 创建action  action里拿到数据 =>  修改state
export const fetchBannerDatatAction = createAsyncThunk(
  'banners',
  async (arg, { getState, dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))
  }
)

export const featchHotRecommendAction = createAsyncThunk(
  'hotRecommends',
  async (arg, { getState, dispatch }) => {
    const res = await getRecommend(8)
    dispatch(changeHotRecommendAction(res.result))
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    }
  }
})

export const { changeBannersAction, changeHotRecommendAction } =
  recommendSlice.actions
export default recommendSlice.reducer
