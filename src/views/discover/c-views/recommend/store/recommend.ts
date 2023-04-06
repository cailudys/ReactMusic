import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../service/recommend'

// 创建action  action里拿到数据 =>  修改state
export const fetchBannerDatatAction = createAsyncThunk(
  'banners',
  async (arg, { getState, dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))
  }
)

interface IRecommendState {
  banners: any[]
}

const initialState: IRecommendState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
})

export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
