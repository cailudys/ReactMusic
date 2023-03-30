const path = require('path')

const resolve = (dir)=> path.resolve(__dirname, dir)

module.exports = {
    // 使用craco 实现修改使用create-react-app框架中的默认webpack配置。
    webpack: {
        alias: {
            '@': resolve('src')
        }
    }
}