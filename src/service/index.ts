import { TIME_OUT } from './config'
import HYRequest from './request'
const BASE_URL = process.env.REACT_APP_BASE_URL

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default hyRequest
