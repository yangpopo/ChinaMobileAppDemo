<template>
  <view class="main">
    <swiper class="main-swiper" :autoplay="false" :disable-touch="true" :touchable="false" :current="current">
      <swiper-item class="swiper-item">
        <view class="swiper-item uni-bg-red">
          <home />
        </view>
      </swiper-item>
      <swiper-item class="swiper-item">
        <view class="swiper-item uni-bg-red">
          <explore />
        </view>
      </swiper-item>
      <swiper-item class="swiper-item">
        <view class="swiper-item uni-bg-red">
          <equities />
        </view>
      </swiper-item>
      <swiper-item class="swiper-item">
        <view class="swiper-item uni-bg-red">
          <my />
        </view>
      </swiper-item>
    </swiper>
    <view class="nav">
      <view class="nav-item" @click="swiperNav(0)">
        <svg class="icon" v-if="current !== 0" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="8606">
          <path
            d="M49.617455 515.304727a34.909091 34.909091 0 0 1-23.645091-60.625454L488.378182 29.626182a34.978909 34.978909 0 0 1 47.336727 0.069818L995.444364 454.749091a34.909091 34.909091 0 1 1-47.406546 51.269818L511.930182 102.795636 73.239273 506.088727a34.769455 34.769455 0 0 1-23.621818 9.216zM827.275636 1001.844364H196.724364c-44.916364 0-81.454545-36.538182-81.454546-81.454546V541.858909a34.909091 34.909091 0 1 1 69.818182 0v378.530909a11.636364 11.636364 0 0 0 11.636364 11.636364h630.551272c6.4 0 11.636364-5.236364 11.636364-11.636364V541.858909a34.909091 34.909091 0 1 1 69.818182 0v378.530909c0 44.916364-36.538182 81.454545-81.454546 81.454546zM597.178182 1001.844364h-170.379637c-44.916364 0-81.454545-36.538182-81.454545-81.454546v-237.149091c0-44.916364 36.538182-81.454545 81.454545-81.454545h170.379637c44.916364 0 81.454545 36.538182 81.454545 81.454545v237.125818a81.547636 81.547636 0 0 1-81.454545 81.477819z m-170.379637-330.24a11.636364 11.636364 0 0 0-11.636363 11.636363v237.125818a11.636364 11.636364 0 0 0 11.636363 11.636364h170.379637c6.4 0 11.636364-5.236364 11.636363-11.636364V683.240727c0-6.4-5.236364-11.636364-11.636363-11.636363h-170.379637z"
            p-id="8607" fill="#626262"></path>
        </svg>
        <svg class="icon" :class="{'selected' : current == 0}" v-else viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="8498">
          <path
            d="M566.55497187 51.95428531a77.02857187 77.02857187 0 0 0-103.47428625 0L44.68068594 449.16571437a38.5828575 38.5828575 0 0 0 51.67999969 57.32571375l6.65142843-6.33142781V914.74285719A77.16571406 77.16571406 0 0 0 180.2235425 992h224.64V759.65714281a54.33142875 54.33142875 0 0 1 54.37714313-54.40000031h105.69142875a54.35428594 54.35428594 0 0 1 54.40000031 54.40000031V992h229.94285719a77.23428563 77.23428563 0 0 0 77.23428562-77.25714281V505.21142844c17.14285687 15.52000031 41.4628575 14.33142844 55.74857063-1.55428594a38.5828575 38.5828575 0 0 0-2.78857125-54.51428531L566.55497187 51.9771425z"
            fill="#007aff" p-id="8499"></path>
        </svg>
        <text class="title" :class="{'selected' : current == 0}">首页</text>
      </view>
      <view class="nav-item" @click="swiperNav(1)">
        <svg class="icon" v-if="current !== 1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="14885">
          <path
            d="M506.88 46.08a463.4624 463.4624 0 1 0 463.4624 463.4624A464.0256 464.0256 0 0 0 506.88 46.08z m0 865.28a402.0224 402.0224 0 1 1 402.0224-401.9712A402.4832 402.4832 0 0 1 506.88 911.36z"
            fill="#626262" p-id="14886"></path>
          <path
            d="M680.5504 454.6048l-212.8896-122.88a63.232 63.232 0 0 0-94.8736 54.784v245.76a63.1296 63.1296 0 0 0 94.8736 54.784l212.8896-122.88a63.232 63.232 0 0 0 0-109.5168z m-30.72 56.32l-212.8896 122.88a1.6384 1.6384 0 0 1-1.8432 0 1.5872 1.5872 0 0 1-0.8704-1.5872v-245.76a1.5872 1.5872 0 0 1 0.8704-1.5872 2.0992 2.0992 0 0 1 0.9728 0 2.1504 2.1504 0 0 1 0.8704 0l212.8896 122.88a1.5872 1.5872 0 0 1 0.8704 1.5872 1.536 1.536 0 0 1-0.8704 1.5872z"
            fill="#626262" p-id="14887"></path>
        </svg>
        <svg class="icon" :class="{'selected' : current == 0}" v-else viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="15477">
          <path
            d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m207.506-533.211C695.59 476.16 415.013 305.006 400.97 296.229a23.113 23.113 0 0 0-35.255 21.211v389.851a22.82 22.82 0 0 0 34.524 21.212c20.407-12.434 302.08-184.32 319.268-195.292a25.088 25.088 0 0 0 0-42.422z"
            fill="#007aff" p-id="15478"></path>
        </svg>
        <text class="title" :class="{'selected' : current == 1}">探索</text>
      </view>
      <view class="nav-ai-item">
        <image class="ai-head-portrait" src="/static/image/ai-head-portrait.png"></image>
      </view>
      <view class="nav-item" @click="swiperNav(2)">
        <svg class="icon" v-if="current !== 2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="16603">
          <path d="M426.688 330.688a32 32 0 0 0 0 64h170.624a32 32 0 0 0 0-64H426.624z" fill="#626262" p-id="16604">
          </path>
          <path
            d="M393.92 96c-32.384 0-54.08 0-74.88 5.12a174.72 174.72 0 0 0-27.52 9.152c-19.712 8.448-36.608 21.44-61.312 40.512l-4.416 3.328c-44.608 34.368-80 61.632-105.984 86.016-26.56 24.96-46.144 49.408-56.448 79.36a183.36 183.36 0 0 0-9.28 76.16c2.816 31.36 16.128 59.52 36.16 89.344 19.52 29.184 47.488 62.976 82.688 105.472l173.12 209.088c31.36 37.952 57.216 69.12 80.96 90.496 24.896 22.464 51.584 37.952 84.992 37.952s60.096-15.488 84.992-37.952c23.68-21.376 49.536-52.544 80.96-90.496l173.12-209.088c35.2-42.496 63.168-76.288 82.688-105.472 20.032-29.824 33.28-57.92 36.16-89.408a183.36 183.36 0 0 0-9.28-76.16c-10.24-29.888-29.888-54.4-56.448-79.296-25.984-24.384-61.44-51.648-106.048-86.016l-4.352-3.328c-24.768-19.072-41.6-32.064-61.312-40.512a174.656 174.656 0 0 0-27.52-9.216c-20.8-5.12-42.496-5.12-74.88-5.056h-236.16z m-59.712 67.2c12.416-3.008 25.92-3.2 63.552-3.2h228.48c37.632 0 51.2 0.192 63.552 3.2 6.016 1.536 11.84 3.456 17.472 5.888 11.392 4.864 21.632 12.48 50.56 34.688 46.272 35.648 79.104 60.992 102.592 83.008 23.104 21.76 34.24 37.76 39.68 53.44 5.568 16.128 7.616 32.96 6.08 49.664-1.472 16.192-8.32 33.792-25.6 59.52-17.472 26.112-43.328 57.408-79.936 101.568l-170.368 205.824c-33.408 40.32-56.32 67.84-76.16 85.76-19.008 17.152-30.976 21.44-42.112 21.44-11.136 0-23.104-4.288-42.176-21.44-19.84-17.92-42.688-45.44-76.16-85.76L223.36 550.976c-36.608-44.16-62.464-75.456-80-101.568-17.216-25.728-24.064-43.328-25.6-59.52-1.472-16.704 0.64-33.536 6.144-49.664 5.376-15.744 16.576-31.68 39.68-53.44 23.488-22.016 56.32-47.36 102.656-83.008 28.8-22.208 39.04-29.824 50.56-34.688a110.72 110.72 0 0 1 17.408-5.824z"
            fill="#626262" p-id="16605"></path>
        </svg>
        <svg class="icon" :class="{'selected' : current == 0}" v-else viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="16588">
          <path
            d="M397.76 96h-3.84c-32.384 0-54.08 0-74.88 5.12a174.72 174.72 0 0 0-27.52 9.152c-19.712 8.448-36.608 21.44-61.312 40.512l-3.008 2.304-1.408 1.024c-44.608 34.368-80 61.632-105.984 86.016-26.56 24.96-46.144 49.408-56.448 79.36a183.36 183.36 0 0 0-9.28 76.16c2.816 31.36 16.128 59.52 36.16 89.344 19.52 29.184 47.488 62.976 82.624 105.472l173.184 209.088c31.36 37.952 57.216 69.12 80.96 90.496 24.896 22.4 51.584 37.952 84.992 37.952s60.096-15.488 84.992-37.952c23.68-21.376 49.536-52.544 80.96-90.496l173.12-209.088c35.2-42.496 63.168-76.288 82.688-105.472 20.032-29.824 33.28-57.92 36.16-89.408a183.36 183.36 0 0 0-9.28-76.16c-10.24-29.888-29.888-54.4-56.448-79.296-25.984-24.384-61.44-51.648-105.984-86.016l-1.408-1.024-3.008-2.304c-24.768-19.072-41.6-32.064-61.312-40.512a174.848 174.848 0 0 0-27.52-9.216c-20.8-5.12-42.496-5.12-74.88-5.056h-232.32z m28.928 234.688h170.624a32 32 0 0 1 0 64H426.688a32 32 0 0 1 0-64z"
            fill="#007aff" p-id="16589"></path>
        </svg>
        <text class="title" :class="{'selected' : current == 2}">权益</text>
      </view>
      <view class="nav-item" @click="swiperNav(3)">
        <svg class="icon" v-if="current !== 3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="17714">
          <path
            d="M512 527.424c-141.184 0-256-114.816-256-256s114.816-256 256-256 256 114.816 256 256-114.816 256-256 256z m0-448c-105.856 0-192 86.144-192 192s86.144 192 192 192 192-86.144 192-192-86.144-192-192-192zM867.712 1008.576H156.352A108.416 108.416 0 0 1 48 900.288c0-188.288 151.36-339.712 337.344-339.712h253.312a337.792 337.792 0 0 1 337.344 337.344c0 62.08-48.576 110.656-108.288 110.656z m-482.368-384A273.664 273.664 0 0 0 112 897.92c0 26.752 19.904 46.656 44.352 46.656h711.36a44.352 44.352 0 0 0 44.288-44.288c0-153.088-122.624-275.712-273.344-275.712H385.344z"
            fill="#626262" p-id="17715"></path>
        </svg>
        <svg class="icon" :class="{'selected' : current == 3}" v-else viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="17559">
          <path
            d="M761.6 633.6c-64 57.6-147.2 96-243.2 96-96 0-179.2-38.4-249.6-96C108.8 716.8 0 825.6 0 1024l1024 0C1024 825.6 915.2 723.2 761.6 633.6zM512 652.8c160 0 288-134.4 288-294.4 0-160-128-294.4-288-294.4S224 198.4 224 358.4C224 524.8 358.4 652.8 512 652.8z"
            fill="#007aff" p-id="17560"></path>
        </svg>
        <text class="title" :class="{'selected' : current == 3}">我的</text>
      </view>
    </view>
    <!-- 分享菜单 -->
    <shareMenu />
  </view>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import home from './home.vue'; // 首页
  import explore from './explore.vue'; // 探索
  import equities from './equities.vue'; // 权益
  import my from './my.vue'; // 我的
  import shareMenu from '../components/shareMenu.vue'; // 分享菜单
  
  import { useUserSearchInfoNavStore } from '@/stores/userSearchInfoNav' // 引入用户搜索信息状态
  
  const userSearchInfoNavState = useUserSearchInfoNavStore()
  
  
  
  const title = ref('Hello');
  const current = ref(0);

  const swiperNav = (index : number) => {
    if (userSearchInfoNavState.isShowMenu) {
      // 关闭-->用户搜索信息状态
      userSearchInfoNavState.isShowMenu = false
    }
    if (userSearchInfoNavState.isShowUserMenu) {
      // 关闭-->用户搜索信息状态
      userSearchInfoNavState.isShowUserMenu = false
    }
    current.value = index
  }
</script>

<style lang="scss" scoped>
  .main {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    position: relative;

    .main-swiper {
      display: block;
      width: 100vw;
      height: 100vh;

      .swiper-item {
        position: relative;
      }
    }

    .nav {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 20vw;
      box-sizing: border-box;
      padding: 2vw 2vw 5vw 2vw;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 2vw #dbdbdb;

      .nav-item {
        width: 18vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon {
          width: 6.5vw;
          height: 6.5vw;
          margin-bottom: 1vw;

          &.selected {
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          }
        }

        .title {
          width: 100%;
          text-align: center;
          font-size: 2.5vw;
          color: #626262;

          &.selected {
            color: #007aff;
          }
        }
      }

      .nav-ai-item {
        width: 14vw;
        height: 14vw;
        border-radius: 50%;
        border: 1vw solid #fff;
        background-color: #fff;
        overflow: hidden;
        position: relative;
        box-shadow: 0 0 2vw #dbdbdb;
        margin-top: -6vw;
        position: relative;

        .ai-head-portrait {
          width: 15vw;
          height: 15vw;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
</style>