import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getNewAlbum, getRecommend } from '../service/recommend'

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

export const fetchNewAlbumAction = createAsyncThunk(
  'newAlbum',
  async (arg, { getState, dispatch }) => {
    const res = await getNewAlbum()
    dispatch(changeNewAlbumAction(res.albums))
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbum: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbum: []
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
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction
} = recommendSlice.actions
export default recommendSlice.reducer
