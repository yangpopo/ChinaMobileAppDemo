<template>
  <view class="top-up-return-cash">
    <uni-nav-bar class="nav-bar" :border="false" backgroundColor="#fff">
      <view slot="left" @click="returnNextPage" class="left">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="59072">
          <path
            d="M753.28950857 874.92315429c0 14.83337143-11.86669714 28.18340571-23.23894857 39.55565714-11.86669714 11.86669714-37.08342857 37.08342857-63.28905143 11.86669714l-376.76763428-376.76763428c-8.90002286-8.90002286-19.77782857-22.74450286-19.77782858-37.57787429s10.87780571-28.67785143 19.77782858-37.57787429l376.76763428-376.76763428c10.38336-10.38336 21.75561143-13.35003429 34.11675429-8.90002286 9.39446857 3.46112 18.29449143 11.37225143 28.67785143 21.75561143 14.33892571 14.33892571 21.75561143 28.67785143 21.75561142 41.03899429 0 7.91113143-2.96667429 15.82226286-9.39446857 21.75561142L403.22194286 512l339.18976 339.18976c6.92224 7.41668571 10.87780571 15.32781714 10.87780571 23.73339429z"
            p-id="59073"></path>
        </svg>
      </view>
      <view class="title">20GB系列任你选</view>
      <view slot="right" class="right">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13884">
          <path
            d="M891.152 96H649.904a172.4 172.4 0 0 0-137.84 68.56A172.4 172.4 0 0 0 374.224 96H132.976C94.976 96 64 126.624 64 164.368v633.184c0 37.76 30.848 68.384 68.976 68.384h253.28a180.512 180.512 0 0 0 125.808 51.392 180.48 180.48 0 0 0 125.744-51.392h253.28c38.08 0 68.912-30.512 68.912-68.384V164.368C960.064 126.768 929.28 96 891.152 96z m0 701.552H622.88c-10.112 0-19.776 4.32-26.112 11.952-21.76 25.04-52.48 39.328-84.72 39.328-32.256 0-63.152-14.288-84.656-39.328a34.88 34.88 0 0 0-26.24-11.952H133.04V164.368h241.248c57.024 0 103.36 46.08 103.36 102.688v291.008c0 18.88 15.36 34.128 34.48 34.128a34.272 34.272 0 0 0 34.496-34.128V267.056c0-56.688 46.192-102.688 103.28-102.688H891.2l-0.064 633.184z"
            p-id="13885"></path>
        </svg>
        <svg @click="" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="44538">
          <path
            d="M848 384h-33.6C806.4 224 675.2 96 512 96s-294.4 128-302.4 288H176c-52.8 0-96 43.2-96 96v64c0 52.8 43.2 96 96 96h32c35.2 0 64-28.8 64-64V400c0-132.8 107.2-240 240-240s240 107.2 240 240v224c0 97.6-67.2 179.2-156.8 201.6-11.2-16-30.4-25.6-51.2-25.6h-64c-35.2 0-64 28.8-64 64s28.8 64 64 64h64c25.6 0 49.6-16 59.2-38.4C720 864 808 763.2 816 640h32c52.8 0 96-43.2 96-96v-64c0-52.8-43.2-96-96-96zM176 576c-17.6 0-32-14.4-32-32v-64c0-17.6 14.4-32 32-32h32v128h-32z m704-32c0 17.6-14.4 32-32 32h-32v-128h32c17.6 0 32 14.4 32 32v64z"
            p-id="44539"></path>
        </svg>
        <svg @click="openShareMenu" class="icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="45523">
          <path
            d="M928 480c-17.664 0-32 14.336-32 32l0 320c0 17.664-14.336 32-32 32L160 864c-17.664 0-32-14.336-32-32L128 288c0-17.664 14.336-32 32-32l224 0 0 0c0 0 0 0 0 0 17.664 0 32-14.336 32-32s-14.336-32-32-32c-1.024 0-1.888 0.48-2.88 0.576L160.384 192.576c-52.96 0-95.904 43.008-95.904 96.064l0 543.872c0 53.056 42.944 96.064 95.904 96.064l704.224 0c52.96 0 95.904-43.008 95.904-96.064L960.512 512 960 512C960 494.336 945.664 480 928 480zM402.688 620.768c-1.92 4.128-3.168 8.608-3.168 13.44 0 17.664 14.336 32 32 32 15.456 0 27.744-11.168 30.752-25.76l0.64 0c37.12-189.696 193.984-336.256 388.672-358.272l-67.776 67.776c-12.512 12.512-12.512 32.768 0 45.248 12.512 12.512 32.768 12.512 45.248 0l122.528-122.528c12.512-12.512 12.512-32.768 0-45.248l-122.528-122.528c-12.512-12.512-32.768-12.512-45.248 0-12.512 12.512-12.512 32.768 0 45.248l67.52 67.52C628.256 239.872 448.224 405.408 402.688 620.768z"
            p-id="45524"></path>
        </svg>
      </view>
    </uni-nav-bar>

    <scroll-view :scroll-y="true" :show-scrollbar="false" class="scroll-main">
      <view class="main">
        <image class="flow20gb-1yuan" src="/assets/image/activity/20gb-1yuan.png" mode="widthFix"></image>
      
      </view>
    </scroll-view>
    <!-- 分享菜单 -->
    <shareMenu />
  </view>
</template>

<script lang="ts" setup>
  import { ref, reactive, onMounted } from 'vue'
  import shareMenu from '../components/shareMenu.vue' // 分享菜单
  import { useShareMenuStore } from '@/stores/shareMenu' // 引入分享菜单状态

  const shareMenuStore = useShareMenuStore() // 引入分享菜单状态



  /**
     * 打开分享
    */
  const openShareMenu = () => {
    shareMenuStore.isShowShareMenu = true
  }



  const creationCalendar = reactive<any>({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  })

  const calendarData = reactive<any[]>([]) // 日历数据

  /**
   * 创建日历内容
  */
  const creationCalendarData = () => {
    let currentMonth = new Date().getMonth() + 1
    let currentYear = new Date().getFullYear()
    for (let i = 0; i < 12; i++) {
      if (currentMonth > 12) {
        currentMonth = 1
        currentYear++
      }
      calendarData.push({
        month: currentMonth,
        year: currentYear
      })
      currentMonth++
    }
    console.log(calendarData, '00000')
  }


  /**
    * 返回上一页
   */
  const returnNextPage = () => {
    uni.navigateBack({
      delta: 1
    })
  }

  onMounted(() => {
    creationCalendarData() // 创建日历数据
  })
</script>

<style lang="scss" scoped>
  .top-up-return-cash {
    width: 100vw;
    height: 100vh;
    position: relative;

    .nav-bar {
      width: 100%;
      position: relative;
      border-bottom: none;

      .left {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10vw;
        height: 10vw;
        top: 50%;
        left: 3vw;
        transform: translateY(-50%);
        color: #000000;

        .icon {
          width: 5vw;
          height: 5vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
        }
      }

      .title {
        position: absolute;
        top: 50%;
        left: 49%;
        transform: translate(-50%, -50%);
        width: 70vw;
        height: 8vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4vw;
        font-weight: bold;
        color: #000000;
      }

      .right {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 10vw;
        top: 50%;
        right: 3vw;
        transform: translateY(-50%);
        color: #000000;
        font-size: 3.8vw;

        .icon {
          width: 5vw;
          height: 5vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
          flex-shrink: 0;
          margin-left: 1.5vw;
        }
      }
    }

    .scroll-main {
      width: 100%;
      height: calc(100vh - 12.5vw);
      box-sizing: border-box;
      padding: 0vw;
      // background-color: #e0effd;

      .main {
        width: 100%;
        .flow20gb-1yuan {
          width: 100%;
        }







      }
    }
  }
</style>