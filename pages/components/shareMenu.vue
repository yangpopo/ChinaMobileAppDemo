<template>
  <Transition name="menu-fade">
    <view class="share-menu" @click.stop v-if="shareMenuStore.isShowShareMenu">
      <view class="box">
        <view class="title">分享至</view>
        <view class="share-channel">
          <view class="channel-item" @click="goShare">
            <svg class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3004">
              <path
                d="M338.895 385.219c17.067 0 29.257-12.19 29.257-30.476s-12.19-29.257-29.257-29.257-35.352 12.19-35.352 29.257c0 18.286 17.067 30.476 35.352 30.476z m164.572-59.733c-17.067 0-35.353 12.19-35.353 29.257 0 18.286 18.286 30.476 35.353 30.476 18.285 0 29.257-12.19 29.257-30.476 0-17.067-10.972-29.257-29.257-29.257z m206.019 221.866c18.285 0 29.257-12.19 29.257-24.38s-12.19-24.382-29.257-24.382c-12.19 0-23.162 12.191-23.162 24.381s12.19 24.381 23.162 24.381z m-129.22 0c18.286 0 29.258-12.19 29.258-24.38s-12.19-24.382-29.257-24.382c-12.19 0-23.162 12.191-23.162 24.381s10.971 24.381 23.162 24.381zM1.22 512c0 282.819 229.181 512 512 512s512-229.181 512-512S794.819 0 512 0C230.4 0 1.219 229.181 1.219 512z m629.029-121.905c-112.153 0-199.924 85.334-199.924 188.953 0 17.066 2.438 34.133 7.314 49.98-7.314 1.22-14.628 1.22-21.943 1.22-29.257 0-53.638-6.096-82.895-12.19l-82.895 41.447 23.162-71.924c-58.515-41.448-93.867-95.086-93.867-160.914 0-113.372 106.057-203.581 235.276-203.581 115.81 0 216.99 71.924 237.714 168.228-6.095 0-14.628-1.219-21.942-1.219zM846.019 576.61c0 53.638-35.352 101.18-82.895 137.752l18.286 59.733-64.61-35.352c-23.162 6.095-47.543 12.19-70.705 12.19-112.152 0-201.143-78.019-201.143-173.104 0-95.086 88.99-173.105 201.143-173.105 104.838-1.22 199.924 76.8 199.924 171.886z"
                fill="#4ec768" p-id="3005"></path>
            </svg>
            <view class="name">微信好友</view>
          </view>
          <view class="channel-item" @click="goShare">
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3507">
              <path
                d="M511.36 20.096c-271.744 0-492.032 220.288-492.032 492.032s220.288 492.032 492.032 492.032 492.032-220.288 492.032-492.032S783.104 20.096 511.36 20.096z m117.248 244.352s39.552 13.824 80.512 52.608 57.216 74.752 57.216 74.752L627.2 523.52l1.408-259.072z m-117.248-30.592c55.808 0 92.672 14.976 92.672 14.976v190.848L418.688 251.008s36.864-17.152 92.672-17.152z m-192.256 83.84c40.448-38.144 77.952-53.248 77.952-53.248l137.472 129.536-270.464-1.28s14.464-36.864 55.04-75.008z m-85.888 190.592c0-55.04 15.232-91.52 15.232-91.52h193.408L250.624 599.68s-17.408-36.352-17.408-91.392z m168.576 251.52S362.24 745.984 321.28 707.2s-57.088-74.752-57.216-74.752l139.136-131.84-1.408 259.2z m109.568 30.464c-55.808 0-92.672-14.976-92.672-14.976V584.448L604.032 773.12s-36.864 17.152-92.672 17.152zM711.424 706.56c-40.448 38.144-77.952 53.248-77.952 53.248L495.872 630.272l270.464 1.28s-14.464 36.736-54.912 75.008z m62.848-108.032H582.144l189.952-181.632s17.28 36.224 17.408 90.88c-0.128 54.656-15.232 90.752-15.232 90.752z"
                fill="#4ec768" p-id="3508"></path>
            </svg>
            <view class="name">微信朋友圈</view>
          </view>
          <view class="channel-item" @click="goShare">
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7087">
              <path
                d="M413.422 603.35c-20.053 0-38.503 16.509-38.813 34.706-0.253 15.525 12.797 27.338 30.291 27.338 20.813 0.028 38.222-15.638 38.362-34.481 0.141-16.059-12.403-27.563-29.841-27.563z m49.894-13.837c-5.962 2.925-11.7 7.228-15.806 12.431-0.872 1.125 5.231 7.763 10.181 14.878 6.356-6.975 12.094-10.997 14.203-16.425 0.928-2.334-7.594-11.391-8.578-10.884zM589.259 510.622c-9.675-6.047-20.081-11.109-30.712-15.412-35.578-14.231-72.9-18.45-110.841-15.131-57.375 4.978-110.362 21.881-151.566 64.434-47.784 49.303-41.316 111.712 14.934 150.834 38.081 26.438 81.309 35.522 126.984 34.425 8.297 0 16.622 0.647 24.863-0.113 52.003-4.978 99.9-20.756 139.584-55.941 57.994-51.328 52.172-122.006-13.247-163.097z m-64.35 144.928c-19.744 29.925-54.703 48.094-92.672 48.291-47.869 0.309-83.784-26.578-90.141-68.4-1.406-8.55-1.013-17.944 0.928-26.325 9.647-41.034 38.053-63.956 76.725-74.306 38.194-10.125 73.716-3.516 101.503 26.831 23.006 25.116 23.934 63.394 3.656 93.909zM512.028 62C263.487 62 62 263.487 62 512s201.487 450 450 450c248.512 0 450-201.487 450-450 0-248.512-201.459-450-449.972-450z m214.594 584.353c-38.447 59.147-97.509 88.481-163.491 104.653-31.922 7.875-65.25 10.294-82.575 12.938-81.816-2.025-145.097-14.119-202.162-49.584-71.916-44.691-92.869-111.656-55.266-187.594 40.387-81.45 103.219-141.694 185.681-180.422 15.3-7.172 32.709-11.25 49.5-13.331 34.594-4.303 54.787 15.328 53.916 50.147-0.197 7.622-1.913 15.131-2.362 22.809-0.337 6.553 0.141 13.219 0.309 19.8 6.722-1.097 13.5-1.8 20.081-3.263 26.663-5.709 53.044-15.244 79.903-16.678 46.631-2.475 67.528 25.763 53.353 70.059-6.103 18.872-1.547 25.228 16.088 31.556 66.319 23.906 85.416 79.903 47.025 138.909z m-34.791-248.316c-10.969-13.95-35.859-17.184-43.734-17.269-11.644-0.084-21.037-9.619-20.925-21.234 0.084-11.588 9.506-20.897 21.037-20.897h0.169c5.147 0 51.3 1.322 76.556 33.328 10.013 12.684 20.278 35.241 12.15 70.341-2.25 9.788-10.941 16.369-20.531 16.369a19.75 19.75 0 0 1-4.725-0.591c-11.363-2.616-18.422-13.95-15.806-25.256 3.544-15.356 2.166-26.747-4.191-34.791zM815.834 467c-1.659 10.35-10.575 17.831-20.813 17.831-1.041 0-2.194-0.141-3.291-0.309-11.475-1.772-19.322-12.572-17.55-24.075 7.819-49.753-0.141-88.453-23.766-114.891-41.119-46.069-116.494-43.341-117.253-43.341-11.756 0.478-21.487-8.522-21.994-20.109-0.478-11.616 8.578-21.459 20.166-21.994 3.909-0.141 96.188-3.375 150.525 57.347 32.4 36.366 43.819 86.681 33.975 149.541z"
                fill="#e5524b" p-id="7088"></path>
            </svg>
            <view class="name">新浪微博</view>
          </view>
          <view class="channel-item" @click="goShare">
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9879">
              <path
                d="M511.1 65.2c-247.4 0-448 200.6-448 448s200.6 448 448 448 448-200.6 448-448-200.6-448-448-448z m195.1 555.4s-14 38.2-39.5 72.4c0 0 45.7 15.5 41.8 56 0 0 1.5 45.2-97.6 42 0 0-69.7-5.5-90.6-35h-18.5c-20.9 29.6-90.6 35-90.6 35-99.1 3.1-97.6-42-97.6-42-3.9-40.4 41.8-56 41.8-56-25.5-34.2-39.5-72.4-39.5-72.4-61.9 100.4-55.7-14-55.7-14 11.7-67.7 60.4-112.1 60.4-112.1-7-61.6 18.5-72.4 18.5-72.4 5.4-190.2 168.4-186.9 171.9-186.8 3.4-0.1 166.5-3.4 171.9 186.8 0 0 25.5 10.9 18.5 72.4 0 0 48.7 44.3 60.4 112 0.2 0.1 6.3 114.5-55.6 14.1z"
                fill="#4bb9f8" p-id="9880"></path>
            </svg>
            <view class="name">QQ</view>
          </view>
          <view class="channel-item" @click="goShare">
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16866">
              <path d="M8.288 513.739a505.27 504.981 0 1 0 1010.539 0 505.27 504.981 0 1 0-1010.539 0z" fill="#5adf50"
                p-id="16867"></path>
              <path
                d="M232.864 504.395c0-124.982 127.061-226.326 294.07-226.326 132.949 0 267.338 101.344 267.338 226.326 0 124.992-104.928 226.304-267.339 226.304-23.872 0-73.674-2.432-95.893-6.55l-91.243 54.198V693.92c-65.205-47.136-106.933-110.112-106.933-189.525z"
                fill="#FFFFFF" p-id="16868"></path>
            </svg>
            <view class="name">短信</view>
          </view>
          <view class="channel-item" @click="goShare">
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28467">
              <path
                d="M274.432 274.432h158.208v158.208H274.432zM591.36 274.432h158.208v158.208h-158.208zM274.432 591.36h158.208v158.208H274.432zM512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0z m-26.624 775.68c0 14.336-11.776 26.624-26.624 26.624H248.32c-14.336 0-26.624-11.776-26.624-26.624v-210.944c0-14.336 11.776-26.624 26.624-26.624h210.944c14.336 0 26.624 11.776 26.624 26.624v210.944z m0-316.416c0 14.336-11.776 26.624-26.624 26.624H248.32c-14.336 0-26.624-11.776-26.624-26.624V248.32c0-14.336 11.776-26.624 26.624-26.624h210.944c14.336 0 26.624 11.776 26.624 26.624v210.944z m79.36 132.096c-14.336 0-26.624-11.776-26.624-26.624s11.776-26.624 26.624-26.624h184.832c14.336 0 26.624 11.776 26.624 26.624s-11.776 26.624-26.624 26.624h-184.832z m158.208 78.848c0 14.336-11.776 26.624-26.624 26.624h-52.736c-14.336 0-26.624-11.776-26.624-26.624s11.776-26.624 26.624-26.624H696.32c14.848 0.512 26.624 12.288 26.624 26.624z m-131.584 105.472c0 14.336-11.776 26.624-26.624 26.624s-26.624-11.776-26.624-26.624v-52.736c0-14.336 11.776-26.624 26.624-26.624s26.624 11.776 26.624 26.624v52.736z m210.944 0c0 14.336-11.776 26.624-26.624 26.624h-132.096c-14.336 0-26.624-11.776-26.624-26.624s11.776-26.624 26.624-26.624h105.472v-79.36c0-14.336 11.776-26.624 26.624-26.624s26.624 11.776 26.624 26.624v105.984z m0-316.416c0 14.336-11.776 26.624-26.624 26.624h-210.944c-14.336 0-26.624-11.776-26.624-26.624V248.32c0-14.336 11.776-26.624 26.624-26.624h210.944c14.336 0 26.624 11.776 26.624 26.624v210.944z"
                fill="#8b8b8b" p-id="28468"></path>
            </svg>
            <view class="name">二维码</view>
          </view>
        </view>
        <view class="cancel-but" @click="shareMenuStore.isShowShareMenu = false">取消</view>
      </view>
    </view>
  </Transition>

</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useShareMenuStore } from '@/stores/shareMenu.ts' // 引入菜单专题

  const shareMenuStore = useShareMenuStore()
  
  /**
   * 去分享
*/
  const goShare = () => {
    // #ifdef H5
    uni.showToast({
      title: '仅支持在app或小程序中调用分享',
      icon: 'none'
    })
    // #endif
    // #ifndef H5
    uni.share({
      provider: 'weixin'
    })
    // #endif
    console.log(shareMenuStore, '2222')
    shareMenuStore.switchShareMenu()
  }
  
  
  
</script>

<style lang="scss" scoped>
  .share-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;

    .box {
      width: 100%;
      box-sizing: border-box;
      background-color: #ffffff;
      position: absolute;
      left: 0%;
      bottom: 0;
      border-radius: 3vw 3vw 0 0;
      padding: 3vw 3vw 10vw 3vw;

      .title {
        width: 100%;
        font-size: 4vw;
        font-weight: bold;
        text-align: center;
        margin-bottom: 5vw;
      }

      .share-channel {
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 5vw;
        display: flex;
        flex-wrap: wrap;

        .channel-item {
          width: 20%;
          margin-bottom: 5vw;

          .icon {
            width: 9vw;
            height: 9vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
            display: block;
            margin: 0 auto 1vw auto;
          }

          .name {
            width: 100%;
            font-size: 3.2vw;
            text-align: center;
          }
        }
      }
    }

    .cancel-but {
      width: 100%;
      box-sizing: border-box;
      background-color: #f6f6f6;
      font-size: 4vw;
      font-weight: bold;
      color: #262626;
      text-align: center;
      padding: 3vw 2vw;
      border-radius: 5vw;
    }

  }

  .menu-fade-enter-active,
  .menu-fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .menu-fade-enter-from,
  .menu-fade-leave-to {
    opacity: 0;
  }
</style>