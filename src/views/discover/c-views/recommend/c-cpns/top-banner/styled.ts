import styled from 'styled-components'

export const BannerWrapper = styled.div`
  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  position: relative;
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }

  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    > li {
      margin: 0 2px;

      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${require('@/assets/img/banner_sprite.png')}) 3px -343px;
        cursor: pointer;

        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`
// 这段代码使用了 styled-components 库，其中 styled.a 表示创建了一个样式化的 a 标签组件。attrs 是 styled-components 提供的一个函数，用于设置组件的属性。在这个例子中，通过 attrs 设置了组件的 href 和 target 属性，分别指向网易云音乐的下载页面并在新窗口打开。这样，当使用这个样式化的 a 组件时，会自动带上这两个属性。
export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  width: 250px;
  height: 270px;
  background: url(${require('@/assets/img/download.png')});
`

export const BannerControl = styled.div`
  //这三个属性组合在一起会使元素定位为绝对定位，左侧和右侧各紧贴其相对定位的父元素（如果有的话）。在水平方向上，元素将占据其父元素的全部宽度。
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 63px;

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
