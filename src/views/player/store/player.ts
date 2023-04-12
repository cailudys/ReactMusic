import { createSlice } from '@reduxjs/toolkit'

interface IPlayerState {
  currentSong: any
}

const initialState: IPlayerState = {
  currentSong: {
    name: '温柔',
    id: 386538,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 13193,
        name: '五月天',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '600902000000534560',
    fee: 1,
    v: 77,
    crbt: null,
    cf: '',
    al: {
      id: 38285,
      name: '我们是五月天',
      picUrl:
        'https://p2.music.126.net/v4V40sXKnaqsG0ACyY0aDg==/109951164912221924.jpg',
      tns: [],
      pic_str: '109951164912221924',
      pic: 109951164912221920
    },
    dt: 269800,
    h: {
      br: 320000,
      fid: 0,
      size: 10794885,
      vd: -63963,
      sr: 44100
    },
    m: {
      br: 192000,
      fid: 0,
      size: 6476948,
      vd: -61380,
      sr: 44100
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4317980,
      vd: -59700,
      sr: 44100
    },
    sq: {
      br: 1053723,
      fid: 0,
      size: 35536822,
      vd: -63997,
      sr: 44100
    },
    hr: null,
    a: null,
    cd: '1',
    no: 2,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 8704,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 77,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mst: 9,
    cp: 684010,
    rtype: 0,
    rurl: null,
    mv: 10929721,
    publishTime: 1049126400000
  }
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {}
})

export default playerSlice.reducer
