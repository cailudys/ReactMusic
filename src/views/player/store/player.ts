import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'
import { ILyric, parseLyric } from '@/utils/parse-lyric'
import { IRootState } from '@/store'

interface IThunkState {
  state: IRootState
}

export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  IThunkState
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

export const changeMusicAction = createAsyncThunk<void, boolean, IThunkState>(
  'changeMusic',
  (isNext, { dispatch, getState }) => {
    // 1. 获取state中的模式
    const player = getState().player
    const playMode = player.playMode
    const songIndex = player.playSongIndex
    const songList = player.playSongList

    // 2. 根据不同的模式计算下一首歌曲的index
    let newIndex = songIndex
    if (playMode === 1) {
      //随机播放
      newIndex = Math.floor(Math.random() * songList.length)
    } else {
      // 单曲循环和顺序播放
      newIndex = isNext ? songIndex + 1 : songIndex - 1
      if (newIndex > songList.length - 1) newIndex = 0
      if (newIndex < 0) newIndex = songList.length - 1
    }

    //3.获取当前的歌曲
    const song = songList[newIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(newIndex))

    //4.切换歌词
    getSongLyric(song.id).then((res) => {
      const lyricString = res.lrc.lyric
      const lyrics = parseLyric(lyricString)
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
  playMode: number
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [],
  playSongIndex: -1,
  playMode: 0 // 0:顺序播放 1：随机播放 2：单曲循环
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
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaySongListAction,
  changePlaySongIndexAction,
  changePlayModeAction
} = playerSlice.actions
export default playerSlice.reducer
