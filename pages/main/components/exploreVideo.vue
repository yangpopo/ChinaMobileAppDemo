<template>
  <view class="main">
    <video class="video-dom" src="/assets/video/oceans.mp4" controls></video>
    <view class="video-member">
      <image class="head-portrait" src="/assets/image/home/head-portrait.webp" mode="widthFix"></image>
      <view class="member-info">
        <view class="title">您还不是会员</view>
        <view class="describe">开通会员享特权</view>
      </view>
      <view class="open-but">开通</view>
      <view class="ticket-info">
        <view class="title">通看券<text class="val">0</text>张</view>
        <view class="describe">立即订购<svg class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="138728">
            <path
              d="M427.52 87.808l353.28 336.384a120.0128 120.0128 0 0 1 0 175.616L427.52 936.192c-82.176 78.336-222.72 22.784-222.72-87.808V175.616c0-110.592 140.544-166.144 222.72-87.808z"
              p-id="138729"></path>
          </svg></view>
      </view>
    </view>

    <view class="referrals-area">
      <view class="area-item">
        <image class="icon" src="/assets/image/explore/referrals-area-icon-01.webp" mode="widthFix"></image>
        <view class="title">银发专区</view>
      </view>
      <view class="area-item">
        <image class="icon" src="/assets/image/explore/referrals-area-icon-02.webp" mode="widthFix"></image>
        <view class="title">CBA专区</view>
      </view>
      <view class="area-item">
        <image class="icon" src="/assets/image/explore/referrals-area-icon-03.webp" mode="widthFix"></image>
        <view class="title">布宫2</view>
      </view>
      <view class="area-item">
        <image class="icon" src="/assets/image/explore/referrals-area-icon-04.webp" mode="widthFix"></image>
        <view class="title">中超专区</view>
      </view>
      <view class="area-item">
        <image class="icon" src="/assets/image/explore/referrals-area-icon-05.webp" mode="widthFix"></image>
        <view class="title">农村专区</view>
      </view>
    </view>

    <view class="column-title">
      布达拉宫2•解密神秘之境
    </view>
    <view class="column-list">
      <view class="column-item" v-for="item in 2" :key="item">
        <view class="cover">
          <image class="cover-img" src="/assets/image/home/service-hall-cover.webp" mode="widthFix"></image>
        </view>
        <view class="title">@萨迦寺经书墙</view>
        <view class="subhead">世界上最大的书墙</view>
      </view>
    </view>


    <view class="column-title">
      赛事聚焦•省流看中超
    </view>
    <view class="column-list">
      <view class="column-item" v-for="item in 12" :key="item">
        <view class="cover">
          <image class="cover-img" src="/assets/image/home/service-hall-cover.webp" mode="widthFix"></image>
        </view>
        <view class="title">萨迦寺经书墙</view>
        <view class="subhead">世界上最大的书墙</view>
      </view>
    </view>


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
    background-color: #ffffff;

    .video-dom {
      width: 100%;
      height: 50vw;
      border-radius: 2vw;
      display: block;
    }

    .video-member {
      width: 100%;
      height: 21vw;
      background-image: url("/assets/image/explore/video-member-tag.webp");
      background-size: 100% 100%;
      box-sizing: border-box;
      position: relative;
      margin-bottom: 5vw;

      .head-portrait {
        position: absolute;
        top: 48%;
        transform: translateY(-50%);
        left: 2vw;
        width: 12vw;
        height: 12vw;
        border-radius: 50%;
      }

      .member-info {
        position: absolute;
        top: 48%;
        transform: translateY(-50%);
        left: 16vw;

        .title {
          font-size: 4.5vw;
          font-weight: bold;
          color: #967441;
          margin-bottom: 1.2vw;
        }

        .describe {
          font-size: 3.5vw;
          color: #b28e4b;
        }
      }

      .open-but {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 46.5vw;
        font-size: 3.8vw;
        font-weight: bold;
        color: #be915b;
        box-sizing: border-box;
        padding: 2vw 3vw;
        border-radius: 5vw;
        background-image: linear-gradient(0, #fdf6eb, #f7e1bb);
      }

      .ticket-info {
        position: absolute;
        top: 45%;
        transform: translateY(-50%);
        right: 3vw;

        .title {
          font-size: 4.5vw;
          font-weight: bold;
          color: #967441;
          margin-bottom: 1vw;

          .val {
            margin: 0 1vw;
            font-size: 6vw;
            color: #ac7733;
          }
        }

        .describe {
          font-size: 3.8vw;
          color: #b28e4b;

          .icon {
            width: 3.8vw;
            height: 3.8vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
            margin-left: 1vw;
            color: #c5964c;
          }
        }
      }
    }

    .referrals-area {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 5vw;

      .area-item {
        width: 20%;

        .icon {
          width: 12vw;
          height: 12vw;
          display: block;
          margin: 0 auto 2vw auto;
        }

        .title {
          width: 100%;
          font-size: 3.5vw;
          color: #848492;
          text-align: center;
        }
      }
    }

    .column-title {
      width: 100%;
      font-size: 4.5vw;
      font-weight: bold;
      color: #333333;
      margin: 3vw 0 3vw 0;
    }

    .column-list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .column-item {
        width: calc(50% - 1vw);
        margin-bottom: 3vw;

        .cover {
          width: 100%;
          height: 30vw;
          position: relative;
          overflow: hidden;
          border-radius: 2vw;
          margin-bottom: 1vw;

          .cover-img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        .title {
          width: 100%;
          box-sizing: border-box;
          padding: 0.5vw;
          font-size: 4vw;
          color: #000000;
          /* 设置宽度 */
          overflow: hidden;
          /* 隐藏超出部分 */
          text-overflow: ellipsis;
          /* 显示省略号 */
          white-space: nowrap;
        }

        .subhead {
          width: 100%;
          box-sizing: border-box;
          padding: 0.5vw;
          font-size: 3.5vw;
          color: #848492;
          /* 设置宽度 */
          overflow: hidden;
          /* 隐藏超出部分 */
          text-overflow: ellipsis;
          /* 显示省略号 */
          white-space: nowrap;
        }
      }
    }
  }
</style>