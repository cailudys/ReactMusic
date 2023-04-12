import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'
import { ILyric, parseLyric } from '@/utils/parse-lyric'
import { IRootState } from '@/store'

export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>(
  'currentSong',
  // 获取歌曲数据
  (id, { dispatch, getState }) => {
    // 准备播放莫一首歌曲时，分成两种情况
    const playerSongList = getState().player.playSongList
    const findIndex = playerSongList.findIndex((item) => item.id === id)
    if (findIndex === -1) {
      // 1.获取歌曲信息
      getSongDetail(id).then((res) => {
        if (!res.songs.length) return
        // 1.获取song
        const song = res.songs[0]
        // 2.将song放到curretSongList
        const newPlaySongList = [...playerSongList]
        newPlaySongList.push(song)
        dispatch(changePlaySongListAction(newPlaySongList))
        dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))
        dispatch(changeCurrentSongAction(song))
      })
    } else {
      const song = playerSongList[findIndex]
      dispatch(changeCurrentSongAction(song))
      dispatch(changePlaySongIndexAction(findIndex))
    }

    // 2.获取歌词数据
    getSongLyric(id).then((res) => {
      // 1.获取歌词的字符串
      const lyricString = res.lrc.lyric

      // 2. 对歌词进行解析
      const lyrics = parseLyric(lyricString)
      // 3.将歌词放到state中
      dispatch(changeLyricsAction(lyrics))
    })
  }
)

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [],
  playSongIndex: -1
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaySongListAction,
  changePlaySongIndexAction
} = playerSlice.actions
export default playerSlice.reducer
