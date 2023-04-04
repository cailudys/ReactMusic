/// <reference types="react-scripts" />

declare namespace NodeJS {
  // 这里使用interface起到拓展的作用
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string
  }
}
