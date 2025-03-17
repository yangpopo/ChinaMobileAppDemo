<template>
  <view class="voucher-center">
    <uni-nav-bar class="nav-bar" :border="false">
      <view slot="left" @click="returnNextPage" class="left">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="59072">
          <path
            d="M753.28950857 874.92315429c0 14.83337143-11.86669714 28.18340571-23.23894857 39.55565714-11.86669714 11.86669714-37.08342857 37.08342857-63.28905143 11.86669714l-376.76763428-376.76763428c-8.90002286-8.90002286-19.77782857-22.74450286-19.77782858-37.57787429s10.87780571-28.67785143 19.77782858-37.57787429l376.76763428-376.76763428c10.38336-10.38336 21.75561143-13.35003429 34.11675429-8.90002286 9.39446857 3.46112 18.29449143 11.37225143 28.67785143 21.75561143 14.33892571 14.33892571 21.75561143 28.67785143 21.75561142 41.03899429 0 7.91113143-2.96667429 15.82226286-9.39446857 21.75561142L403.22194286 512l339.18976 339.18976c6.92224 7.41668571 10.87780571 15.32781714 10.87780571 23.73339429z"
            p-id="59073"></path>
        </svg>
      </view>
      <view class="title">充值中心</view>
      <view slot="right" class="right">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="41752"><path d="M865.745455 102.4C865.745455 102.4 865.745455 102.4 865.745455 102.4 865.745455 99.29697 865.745455 99.29697 865.745455 102.4c-18.618182-24.824242-46.545455-40.339394-77.575758-40.339394l-574.060606 0c-55.854545 0-99.29697 43.442424-99.29697 99.29697l0 698.181818c0 55.854545 43.442424 99.29697 99.29697 99.29697l574.060606 0c55.854545 0 99.29697-43.442424 99.29697-99.29697l0-698.181818C887.466667 139.636364 881.260606 117.915152 865.745455 102.4zM788.169697 111.709091c3.10303 0 9.309091 0 12.412121 3.10303l-291.684848 186.181818-313.406061-186.181818c6.206061-3.10303 12.412121-3.10303 18.618182-3.10303L788.169697 111.709091zM837.818182 862.642424c0 27.927273-21.721212 49.648485-49.648485 49.648485l-574.060606 0c-27.927273 0-49.648485-21.721212-49.648485-49.648485l0-698.181818c0-3.10303 0-3.10303 0-6.206061l332.024242 195.490909c9.309091 6.206061 18.618182 3.10303 24.824242 0l316.509091-201.69697c0 3.10303 3.10303 9.309091 3.10303 12.412121L840.921212 862.642424zM639.224242 561.648485c12.412121 0 24.824242-12.412121 24.824242-24.824242 0-12.412121-12.412121-24.824242-24.824242-24.824242l-83.781818 0 71.369697-71.369697c9.309091-9.309091 9.309091-24.824242 0-34.133333-9.309091-9.309091-24.824242-9.309091-34.133333 0l-80.678788 80.678788c0 0-3.10303 0-3.10303 0 0 0 0 0 0 0l-77.575758-77.575758c-9.309091-9.309091-24.824242-9.309091-34.133333 0-9.309091 9.309091-9.309091 24.824242 0 34.133333l68.266667 68.266667-74.472727 0c-12.412121 0-24.824242 12.412121-24.824242 24.824242 0 12.412121 12.412121 24.824242 24.824242 24.824242l93.090909 0 0 74.472727-93.090909 0c-12.412121 0-24.824242 12.412121-24.824242 24.824242 0 12.412121 12.412121 24.824242 24.824242 24.824242l93.090909 0 0 89.987879c0 12.412121 12.412121 24.824242 24.824242 24.824242 12.412121 0 24.824242-12.412121 24.824242-24.824242l0-89.987879 108.606061 0c12.412121 0 24.824242-12.412121 24.824242-24.824242 0-12.412121-12.412121-24.824242-24.824242-24.824242l-108.606061 0 0-74.472727L639.224242 561.648485z" p-id="41753"></path></svg>
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44538"><path d="M848 384h-33.6C806.4 224 675.2 96 512 96s-294.4 128-302.4 288H176c-52.8 0-96 43.2-96 96v64c0 52.8 43.2 96 96 96h32c35.2 0 64-28.8 64-64V400c0-132.8 107.2-240 240-240s240 107.2 240 240v224c0 97.6-67.2 179.2-156.8 201.6-11.2-16-30.4-25.6-51.2-25.6h-64c-35.2 0-64 28.8-64 64s28.8 64 64 64h64c25.6 0 49.6-16 59.2-38.4C720 864 808 763.2 816 640h32c52.8 0 96-43.2 96-96v-64c0-52.8-43.2-96-96-96zM176 576c-17.6 0-32-14.4-32-32v-64c0-17.6 14.4-32 32-32h32v128h-32z m704-32c0 17.6-14.4 32-32 32h-32v-128h32c17.6 0 32 14.4 32 32v64z" p-id="44539"></path></svg>
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="45523"><path d="M928 480c-17.664 0-32 14.336-32 32l0 320c0 17.664-14.336 32-32 32L160 864c-17.664 0-32-14.336-32-32L128 288c0-17.664 14.336-32 32-32l224 0 0 0c0 0 0 0 0 0 17.664 0 32-14.336 32-32s-14.336-32-32-32c-1.024 0-1.888 0.48-2.88 0.576L160.384 192.576c-52.96 0-95.904 43.008-95.904 96.064l0 543.872c0 53.056 42.944 96.064 95.904 96.064l704.224 0c52.96 0 95.904-43.008 95.904-96.064L960.512 512 960 512C960 494.336 945.664 480 928 480zM402.688 620.768c-1.92 4.128-3.168 8.608-3.168 13.44 0 17.664 14.336 32 32 32 15.456 0 27.744-11.168 30.752-25.76l0.64 0c37.12-189.696 193.984-336.256 388.672-358.272l-67.776 67.776c-12.512 12.512-12.512 32.768 0 45.248 12.512 12.512 32.768 12.512 45.248 0l122.528-122.528c12.512-12.512 12.512-32.768 0-45.248l-122.528-122.528c-12.512-12.512-32.768-12.512-45.248 0-12.512 12.512-12.512 32.768 0 45.248l67.52 67.52C628.256 239.872 448.224 405.408 402.688 620.768z" p-id="45524"></path></svg>
      </view>
    </uni-nav-bar>

    <scroll-view :scroll-y="true" :show-scrollbar="false" class="scroll-main">
      <view class="main">
        <view class="menu-class">
          <view class="menu-item" :class="{'selected': currentMenu == 'telephoneCharge'}" @click="switchMenu('telephoneCharge')">
            话费
          </view>
          <view class="menu-item" :class="{'selected': currentMenu == 'flow'}" @click="switchMenu('flow')">
            流量
          </view>
          <view class="menu-item" :class="{'selected': currentMenu == 'alimony'}" @click="switchMenu('alimony')">
            生活缴费
          </view>
          <view class="menu-item" :class="{'selected': currentMenu == 'recharge'}" @click="switchMenu('recharge')">
            充公交
          </view>
        </view>
        
        <topUpMobilePhone v-if="currentMenu == 'telephoneCharge'" />
        <topUpFlow v-else-if="currentMenu == 'flow'" />
        
        
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import topUpMobilePhone from './components/topUpMobilePhone' // 充值手机
  import topUpFlow from './components/topUpFlow' // 充值流量


const currentMenu = ref('telephoneCharge') // 当前菜单
/**
 * 切换菜单
*/
const switchMenu = (val: string) => {
  currentMenu.value = val
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
  })
</script>

<style lang="scss" scoped>
  .voucher-center {
    width: 100vw;
    height: 100vh;
    position: relative;


    .nav-bar {
      width: 100%;
      position: relative;
      border-bottom: 1px solid #eff0f1;

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
      padding:0vw;
      background-color: #f4f7f9;
      .main {
        width: 100%;
        .menu-class {
          width: 100%;
          background-color: #fff;
          box-sizing: border-box;
          padding: 3vw 3vw 5vw 3vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
          .menu-item {
            width: 25%;
            font-size: 3.8vw;
            color: #333333;
            text-align: center;
            &.selected {
              font-weight: bold;
              position: relative;
              &:before {
                content: '';
                position: absolute;
                width: 6vw;
                height: 1vw;
                background-color: #489ae5;
                border-radius: 2vw;
                bottom: -3vw;
                left: 50%;
                transform: translateX(-50%);
                
              }
            }
          }
        }
        
      }

 



    }
  }
</style>