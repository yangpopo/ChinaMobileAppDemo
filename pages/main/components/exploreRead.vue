<template>
  <view class="main">
    <swiper class="ad-swiper" :autoplay="true" :indicator-dots="true" indicator-color="rgba(255, 255, 255, 0.5)"
      indicator-active-color="rgba(255, 255, 255, 1)" :circular="true">
      <swiper-item v-for="item in 5" :key="item" @click="skipPage('/pages/activity/flow20gb-1yuan')">
        <image class="swiper-item-img" src="/assets/image/explore/read-ad.webp" mode="widthFix"></image>
      </swiper-item>
    </swiper>

    <!-- 栏目 -->
    <view class="column-box caesious-style">
      <view class="titel">主编</view>
      <view class="subhead">精彩好书,不容错过</view>
      <view class="book-list">
        <view class="book-item" v-for="item in 3" :key="item" @click="skipPage('/pages/activity/daysTicket')">
          <view class="cover">
            <image class="cover-img" src="/assets/image/explore/book-cover.webp" mode="widthFix"></image>
          </view>
          <view class="name">长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思</view>
          <view class="score">10.0分</view>
        </view>
      </view>
    </view>
    
    <view class="column-box umber-style">
      <view class="titel">影视原著</view>
      <view class="subhead">热播影视,畅看原著</view>
      <view class="book-list">
        <view class="book-item" v-for="item in 3" :key="item" @click="skipPage('/pages/activity/supercardGuard')">
          <view class="cover">
            <image class="cover-img" src="/assets/image/explore/book-cover.webp" mode="widthFix"></image>
          </view>
          <view class="name">长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思</view>
          <view class="score">10.0分</view>
        </view>
      </view>
    </view>
    
    <view class="column-box wathet-style">
      <view class="titel">成长知新</view>
      <view class="subhead">迎接外面世界的考研</view>
      <view class="book-list">
        <view class="book-item" v-for="item in 3" :key="item" @click="skipPage('/pages/activity/flow20gb-1yuan')">
          <view class="cover">
            <image class="cover-img" src="/assets/image/explore/book-cover.webp" mode="widthFix"></image>
          </view>
          <view class="name">长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思长相思</view>
          <view class="score">10.0分</view>
        </view>
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
  
    // 跳转页面
    const skipPage = (data: string) => {
      uni.navigateTo({
        url: data
      })
    }
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

    .column-box {
      width: 100%;
      box-sizing: border-box;
      padding: 3vw 3vw;
      border-radius: 2vw;
      background-color: var(--bg-color);
      margin-bottom: 3vw;

      &.caesious-style {
        --bg-color: #e7eae2;
        --titel-color: #583120;
        --subhead-color: #917b6d;
        --name-color: #583120;
        --score-color: #ed6c67;
      }
      &.umber-style {
        --bg-color: #efe8e1;
        --titel-color: #583120;
        --subhead-color: #947a6c;
        --name-color: #583120;
        --score-color: #ed6c67;
      }
      &.wathet-style {
        --bg-color: #dee4ec;
        --titel-color: #253339;
        --subhead-color: #6f7a80;
        --name-color: #253339;
        --score-color: #ed6c67;
      }

      .titel {
        width: 100%;
        font-size: 5vw;
        font-weight: bold;
        color: var(--titel-color);
        box-sizing: border-box;
        padding: 0vw 0vw 2vw 0vw;
      }

      .subhead {
        width: 100%;
        font-size: 3.5vw;
        color: var(--subhead-color);
        padding: 0vw 0vw 4vw 0vw;
      }

      .book-list {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .book-item {
          width: 31.5%;
          margin: 0 2vw 2vw 0;
          &:nth-child(3n) {
            margin-right: 0;
          }

          .cover {
            width: 100%;
            height: 36vw;
            overflow: hidden;
            position: relative;
            margin-bottom: 2vw;
            border: 1px solid #cfd1ca;
            border-radius: 2vw;

            .cover-img {
              width: 100%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }

          .name {
            width: 100%;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 3.5vw;
            font-weight: bold;
            color: var(--name-color);
            margin-bottom: 2vw;
          }

          .score {
            width: 100%;
            font-size: 4vw;
            color: var(--score-color);
            margin-bottom: 2vw;
          }
        }
      }
    }
  }
</style>