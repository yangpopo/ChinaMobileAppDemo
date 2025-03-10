<template>
  <view class="main">
    <swiper class="ad-swiper" :autoplay="true" :indicator-dots="true" indicator-color="rgba(255, 255, 255, 0.5)"
      indicator-active-color="rgba(255, 255, 255, 1)" :circular="true">
      <swiper-item>
        <image class="swiper-item-img" src="/assets/image/home/mobile-phone-ad.png" mode="widthFix"></image>
      </swiper-item>
      <swiper-item>
        <image class="swiper-item-img" src="/assets/image/home/mobile-phone-ad.png" mode="widthFix"></image>
      </swiper-item>
      <swiper-item>
        <image class="swiper-item-img" src="/assets/image/home/mobile-phone-ad.png" mode="widthFix"></image>
      </swiper-item>
    </swiper>

    <view class="menu-list">
      <view class="menu-item">
        <image class="icon" src="/assets/image/explore/game-menu-icon-01.png" mode="widthFix"></image>
        <view class="name">网易</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/explore/game-menu-icon-02.png" mode="widthFix"></image>
        <view class="name">咪咕掼蛋</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/explore/game-menu-icon-03.png" mode="widthFix"></image>
        <view class="name">益智健康</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/explore/game-menu-icon-04.png" mode="widthFix"></image>
        <view class="name">视频</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/explore/game-menu-icon-05.png" mode="widthFix"></image>
        <view class="name">全部游戏</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/explore/game-menu-icon-06.png" mode="widthFix"></image>
        <view class="name">聚宝盆</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/explore/game-menu-icon-07.png" mode="widthFix"></image>
        <view class="name">领时长</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/explore/game-menu-icon-08.png" mode="widthFix"></image>
        <view class="name">会员</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/explore/game-menu-icon-09.png" mode="widthFix"></image>
        <view class="name">活动</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/explore/game-menu-icon-10.png" mode="widthFix"></image>
        <view class="name">免费流量</view>
      </view>
    </view>

    <view class="column-title">精选游戏</view>
    <image class="choiceness-game-ad" src="/assets/image/explore/game-ad.png" mode="widthFix"></image>
    <scroll-view class="choiceness-game-list" :scroll-x="true" :show-scrollbar="false">
      <view class="choiceness-game-box">
        <view class="choiceness-game-item" v-for="item in 10" :key="item">
          <view class="cover">
            <image class="cover-img" src="/assets/image/home/head-portrait.png" mode="widthFix"></image>
          </view>
          <view class="title">方块萌消</view>
          <view class="hot-tag">休闲益智•闯关•可爱</view>
        </view>
      </view>
    </scroll-view>

    <image class="leading-ad" src="/assets/image/explore/leading-ad.png" mode="widthFix"></image>

    <view class="column-title">
      <view class="title">棋牌逗乐</view>
      <view class="more-but">更多<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="139255"><path d="M261.12 41.7792c-15.5648 15.7696-15.5648 41.3696 0.2048 56.9344L677.888 511.5904 263.168 930.2016c-15.7696 15.7696-15.5648 41.3696 0.2048 56.9344 15.7696 15.7696 41.3696 15.5648 56.9344-0.2048l440.7296-444.8256c0.6144-0.6144 0.8192-1.6384 1.4336-2.2528 0.2048-0.2048 0.4096-0.2048 0.6144-0.4096 7.7824-7.7824 11.6736-18.2272 11.6736-28.4672 0-10.4448-3.8912-20.6848-11.8784-28.672L318.0544 41.5744c-15.7696-15.5648-41.1648-15.5648-56.9344 0.2048z" p-id="139256"></path></svg></view>
    </view>
    
    <scroll-view class="game-list" :scroll-x="true" :show-scrollbar="false">
      <view class="game-list-box">
        <view class="game-item" v-for="item in 10" :key="item">
          <image class="cover" src="/assets/image/explore/game-menu-icon-07.png" mode="widthFix"></image>
          <view class="title">同城斗地主</view>
          <view class="start-game">秒玩</view>
        </view>
      </view>
    </scroll-view>

  </view>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'


  // const menuClass = ref('fineFood') // 菜单类型
  // const switchMenuClass = (val : string) => {
  //   menuClass.value = val
  // }

  // const scheduleType = ref('hotFilm') // 影片类型
  // const switchScheduleType = (val : string) => {
  //   scheduleType.value = val
  // }
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    min-height: 100vh;
    position: relative;
    box-sizing: border-box;
    padding: 3vw;
    background-color: #f6f6f4;

    .ad-swiper {
      width: 100%;
      height: 35.2vw;
      margin-bottom: 3vw;

      .swiper-item-img {
        width: 100%;
      }
    }

    .menu-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .menu-item {
        width: 20%;
        margin-bottom: 3vw;

        .icon {
          display: block;
          width: 10vw;
          height: 10vw;
          margin: 0 auto 1vw auto;
        }

        .name {
          font-size: 3.5vw;
          width: 100%;
          text-align: center;
          color: #56555a;
        }
      }
    }

    >.column-title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 4.5vw;
      font-weight: bold;
      color: #1f1f1d;
      margin: 5vw 0 3vw 0;
      .title{
        font-size: 4.5vw;
        font-weight: bold;
        color: #1f1f1d;
      }
      .more-but {
        font-size: 3.5vw;
        color: #8d919d;
        display: flex;
        align-items: center;
        font-weight: normal;
        .icon {
          width: 3vw;
          height: 3vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
          margin-left: 1vw;
          color: #8f95a6;
        }
      }
    }

    .choiceness-game-ad {
      width: 100%;
      margin-bottom: 3vw;
    }

    .choiceness-game-list {
      width: 100%;
      height: 50vw;

      .choiceness-game-box {
        width: auto;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
      }

      .choiceness-game-item {
        flex-shrink: 0;
        width: 42vw;
        box-sizing: border-box;
        overflow: hidden;
        border-radius: 2vw;
        background-color: #fff;
        box-shadow: 0 0.5vw 1vw #dadcdf;
        margin-right: 3vw;
        padding: 0 0 2vw 0;

        .cover {
          width: 100%;
          height: 30vw;
          position: relative;
          border-radius: 2vw 2vw 0 0;
          overflow: hidden;
          margin-bottom: 2vw;

          .cover-img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        .title {
          width: 100%;
          box-sizing: border-box;
          padding: 0vw 2vw;
          font-size: 4vw;
          color: #1c1c1c;
        }

        .hot-tag {
          width: 100%;
          box-sizing: border-box;
          padding: 1vw 2vw;
          font-size: 3.5vw;
          color: #9298a8;
        }
      }
    }

    .leading-ad {
      width: 100%;
      margin-bottom: 3vw;
    }
    .game-list{
      width: 100%;
      margin-right: 3vw;
      .game-list-box {
        width: auto;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .game-item {
          width: 25vw;
          margin-right: 3vw;
          .cover {
            width: 20vw;
            height: 20vw;
            display: block;
            margin: 0 auto 1vw auto;
          }
          .title {
            width: 100%;
            font-size: 3.5vw;
            font-weight: bold;
            color: #3d3d3d;
            text-align: center;
            /* 设置宽度 */
            overflow: hidden;
            /* 隐藏超出部分 */
            text-overflow: ellipsis;
            /* 显示省略号 */
            white-space: nowrap;
            margin-bottom: 2vw;
          }
          .start-game {
            width: 80%;
            background-color: #afd7f9;
            box-sizing: border-box;
            text-align: center;
            font-size: 3.5vw;
            font-weight: bold;
            color: #67a4f6;
            border-radius: 5vw;
            padding: 1.5vw 2vw;
            margin: 0 auto;
          }
        }
      }
    }
  }
</style>