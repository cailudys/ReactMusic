import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'

export const fetchCurrentSongAction = createAsyncThunk(
  'currentSong',
  // 获取歌曲数据
  (id: number, { dispatch }) => {
    // 1.获取歌曲信息
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return
      const song = res.songs[0]

      dispatch(changeCurrentSongAction(song))
    })
    // 2.获取歌词数据
    getSongLyric(id).then((res) => {
      console.log('歌词', res)
    })
  }
)

interface IPlayerState {
  currentSong: any
}

const initialState: IPlayerState = {
  currentSong: {}
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    }
  }
})

export const { changeCurrentSongAction } = playerSlice.actions
export default playerSlice.reducer
