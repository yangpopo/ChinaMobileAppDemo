<template>
  <view class="bill">
    <uni-nav-bar class="nav-bar" :border="false" backgroundColor="#e0effd">
      <view slot="left" @click="returnNextPage" class="left">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="59072">
          <path
            d="M753.28950857 874.92315429c0 14.83337143-11.86669714 28.18340571-23.23894857 39.55565714-11.86669714 11.86669714-37.08342857 37.08342857-63.28905143 11.86669714l-376.76763428-376.76763428c-8.90002286-8.90002286-19.77782857-22.74450286-19.77782858-37.57787429s10.87780571-28.67785143 19.77782858-37.57787429l376.76763428-376.76763428c10.38336-10.38336 21.75561143-13.35003429 34.11675429-8.90002286 9.39446857 3.46112 18.29449143 11.37225143 28.67785143 21.75561143 14.33892571 14.33892571 21.75561143 28.67785143 21.75561142 41.03899429 0 7.91113143-2.96667429 15.82226286-9.39446857 21.75561142L403.22194286 512l339.18976 339.18976c6.92224 7.41668571 10.87780571 15.32781714 10.87780571 23.73339429z"
            p-id="59073"></path>
        </svg>
      </view>
      <view class="title">话费账单</view>
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
        <image class="bill-home-ad" src="/assets/image/bill/bill-home-ad.png" mode="widthFix"></image>
        <view class="user-box">
          <view class="left">
            <view class="user">
              <text class="number">158****1234</text>
              <text class="name">陈**</text>
            </view>
            <view class="grade">
              <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17771">
                <path
                  d="M511.999488 67.472717c-245.505483 0-444.526259 199.021799-444.526259 444.527283s199.020776 444.526259 444.526259 444.526259S956.525748 757.505483 956.525748 512 757.504972 67.472717 511.999488 67.472717zM720.358957 798.782585 511.999488 647.400806 303.638997 798.782585l79.586616-244.941642L174.865121 402.458141l257.547751 0 79.586616-244.941642 79.585593 244.941642 257.548774 0L640.773364 553.840944 720.358957 798.782585z"
                  fill="#737384" p-id="17772"></path>
              </svg>
              <text class="grade-title">2星用户</text>
            </view>
          </view>
          <view class="right">
            关怀版<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18195">
              <path
                d="M779.180132 473.232045 322.354755 16.406668c-21.413706-21.413706-56.121182-21.413706-77.534887 0-21.413706 21.413706-21.413706 56.122205 0 77.534887l418.057421 418.057421L244.819868 930.057421c-21.413706 21.413706-21.413706 56.122205 0 77.534887 10.706853 10.706853 24.759917 16.059767 38.767955 16.059767s28.061103-5.353938 38.767955-16.059767L779.180132 550.767955C800.593837 529.35425 800.593837 494.64575 779.180132 473.232045z"
                p-id="18196"></path>
            </svg>
          </view>
        </view>

        <view class="calendar-box">
          <view class="calendar">
            <scroll-view class="scroll-calendar" :scroll-x="true" :show-scrollbar="false">
              <view class="scroll-container">
                <view class="calendar-month"
                  :class="{'selected': creationCalendar.month == item.month && creationCalendar.year == item.year}"
                  v-for="item in calendarData" :key="item.month + item.year">
                  <view class="month">{{item.month}}月</view>
                  <view class="year">{{item.year}}</view>
                </view>
              </view>
            </scroll-view>
            <view class="calendar">
              <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19462">
                <path
                  d="M829.568 945.984H194.432A129.856 129.856 0 0 1 64 816.96v-40h59.712v40c0 38.208 31.68 69.248 70.72 69.248h635.136c38.976 0 70.72-31.04 70.72-69.248V256.448c0-38.208-31.68-69.248-70.72-69.248H194.432c-38.976 0-70.72 31.04-70.72 69.248v374.848H64V256.448c0-71.104 58.496-128.96 130.432-128.96h635.136c71.936 0 130.432 57.856 130.432 128.96v560.512a129.856 129.856 0 0 1-130.432 129.024zM124.864 358.72h780.288v61.376H124.864zM465.152 533.696h298.88v53.76h-298.88zM245.888 665.92h518.208v53.76H245.888zM316.992 78.016h60.352v158.656h-60.352zM673.92 78.016h60.352v158.656h-60.352z"
                  p-id="19463"></path>
              </svg>
            </view>
          </view>

          <view class="month-bill">
            <view class="current-bill">
              <view class="total">
                您本月共消费(元):<text class="val">49.00</text>
              </view>
              <view class="actual-payment">
                <view class="title">实际应付(元)</view>
                <view class="val">47.00</view>
              </view>
              <view class="order-illustration">账单阅读指南<svg class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="18195">
                  <path
                    d="M779.180132 473.232045 322.354755 16.406668c-21.413706-21.413706-56.121182-21.413706-77.534887 0-21.413706 21.413706-21.413706 56.122205 0 77.534887l418.057421 418.057421L244.819868 930.057421c-21.413706 21.413706-21.413706 56.122205 0 77.534887 10.706853 10.706853 24.759917 16.059767 38.767955 16.059767s28.061103-5.353938 38.767955-16.059767L779.180132 550.767955C800.593837 529.35425 800.593837 494.64575 779.180132 473.232045z"
                    p-id="18196"></path>
                </svg></view>
            </view>
            <view class="remaining-sum">
              <view class="left">
                当前余额(元): <text class="val">205.45</text>
              </view>
              <view class="right">充值</view>
            </view>
          </view>

          <view class="hot-activity">
            <image class="activity-icon" src="/assets/image/bill/bill-home-icno-01.png" mode="widthFix"></image>
            <image class="activity-icon" src="/assets/image/bill/bill-home-icno-02.png" mode="widthFix"></image>
            <image class="activity-icon" src="/assets/image/bill/bill-home-icno-03.png" mode="widthFix"></image>
          </view>

          <view class="billing-details">
            <view class="billing-title">
              账单明细
              <view class="warn">账单提醒
                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18195">
                  <path
                    d="M779.180132 473.232045 322.354755 16.406668c-21.413706-21.413706-56.121182-21.413706-77.534887 0-21.413706 21.413706-21.413706 56.122205 0 77.534887l418.057421 418.057421L244.819868 930.057421c-21.413706 21.413706-21.413706 56.122205 0 77.534887 10.706853 10.706853 24.759917 16.059767 38.767955 16.059767s28.061103-5.353938 38.767955-16.059767L779.180132 550.767955C800.593837 529.35425 800.593837 494.64575 779.180132 473.232045z"
                    p-id="18196"></path>
                </svg>
              </view>
            </view>

            <view class="table-name">
              <view class="left">
                2025年3月1日-2025年3月18日
              </view>
              <view class="right">单位:元</view>
            </view>

            <view class="header">
              <view class="title">消费项目</view>
              <view class="title">原价</view>
              <view class="title">减免</view>
              <view class="title">实际消费</view>
            </view>

            <view class="bill-item">
              <view class="td">套餐及固定费</view>
              <view class="td">49.00</view>
              <view class="td"></view>
              <view class="td">49.00</view>
            </view>
            <view class="bill-item">
              <view class="td">1元换购18元档_海量版</view>
              <view class="td">1.00</view>
              <view class="td"></view>
              <view class="td">1.00</view>
            </view>
            <view class="bill-item">
              <view class="td">4G新飞享套餐(2018年版)18元档</view>
              <view class="td">18.00</view>
              <view class="td"></view>
              <view class="td">18.00</view>
            </view>
            <view class="bill-item">
              <view class="td">数字家庭宽带2023-30元档</view>
              <view class="td">30.00</view>
              <view class="td"></view>
              <view class="td">30.00</view>
            </view>
            <view class="total">
              <view class="td">合计</view>
              <view class="td">49.00</view>
              <view class="td"></view>
              <view class="td">49.00</view>
            </view>

            <view class="explain">
              实时费用仅供参考,请以月末结账后月账单为准
            </view>
          </view>
        </view>

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
  .bill {
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
      background-color: #e0effd;

      .main {
        width: 100%;

        .bill-home-ad {
          width: calc(100% - 6vw);
          display: block;
          margin: 0 auto 5vw auto;
        }

        .user-box {
          width: calc(100% - 6vw);
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto 3vw auto;

          .left {
            .user {
              display: flex;
              align-items: center;
              margin-bottom: 1vw;

              .number {
                font-size: 4vw;
                font-weight: bold;
              }

              .name {
                font-size: 3.8vw;
                margin-left: 1.5vw;
              }
            }

            .grade {
              width: max-content;
              display: flex;
              align-items: center;
              background-color: #eef6fe;
              border: 1px solid #ffffff;
              position: relative;
              padding: 0.5vw 2vw 0.5vw 5vw;
              border-radius: 5vw;

              .icon {
                width: 5vw;
                height: 5vw;
                vertical-align: middle;
                fill: currentColor;
                overflow: hidden;
                position: absolute;
                top: 50%;
                left: -1vw;
                transform: translateY(-50%);
              }

              .grade-title {
                font-size: 3vw;
                color: #000000;
              }
            }
          }

          .right {
            background-color: #f7fbfe;
            border: 1px solid #ffffff;
            box-sizing: border-box;
            padding: 1vw 2vw;
            border-radius: 5vw;
            font-size: 3.5vw;
            color: #333333;
            display: flex;
            align-items: center;

            .icon {
              width: 3.5vw;
              height: 3.5vw;
              vertical-align: middle;
              fill: currentColor;
              overflow: hidden;
            }
          }
        }

        .calendar-box {
          width: 100%;
          box-sizing: border-box;
          background-image: linear-gradient(-180deg, #fff 30%, #e0effd 100%);
          padding: 3vw 4vw;
          border-radius: 3vw 3vw 0 0;

          .calendar {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 3vw;

            .scroll-calendar {
              width: calc(100% - 12vw);
              height: 14vw;

              .scroll-container {
                display: flex;
                align-items: center;

                .calendar-month {
                  width: 13vw;
                  height: 14vw;
                  box-sizing: border-box;
                  padding: 2vw;
                  border-radius: 2vw;
                  border-radius: 1.5vw;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  flex-shrink: 0;

                  &.selected {
                    border: 1px solid #4c92f7;
                    background-image: linear-gradient(180deg, #f4f8fe, #fffffe);
                  }

                  .month {
                    font-size: 3.8vw;
                    font-weight: bold;
                    color: #000000;
                    margin-bottom: 1vw;
                  }

                  .year {
                    font-size: 3vw;
                    color: #424242;
                  }
                }
              }
            }

            .calendar {
              width: 12vw;
              height: 14vw;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #fff;

              .icon {
                width: 6vw;
                height: 6vw;
                vertical-align: middle;
                fill: currentColor;
                overflow: hidden;
                color: #323232;
              }
            }
          }

          .month-bill {
            width: 100%;
            background-color: #fff;
            border-radius: 3vw;
            margin-bottom: 3vw;

            .current-bill {
              width: 100%;
              box-sizing: border-box;
              background-color: #559cf8;
              padding: 3.5vw 3vw;
              border-radius: 3vw;

              .total {
                width: 100%;
                font-size: 3vw;
                color: #ffffff;

                .val {
                  font-size: 4vw;
                  font-weight: bold;
                }
              }

              .actual-payment {
                box-sizing: border-box;
                padding: 3vw;
                color: #fff;

                .title {
                  width: 100%;
                  text-align: center;
                  font-size: 3vw;
                }

                .val {
                  width: 100%;
                  text-align: center;
                  font-size: 7vw;
                  font-weight: bold;
                }
              }

              .order-illustration {
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: 3vw;
                color: #fff;

                .icon {
                  width: 3vw;
                  height: 3vw;
                  vertical-align: middle;
                  fill: currentColor;
                  overflow: hidden;
                  margin-left: 1vw;
                }
              }
            }

            .remaining-sum {
              width: 100%;
              box-sizing: border-box;
              padding: 3vw;
              display: flex;
              justify-content: space-between;
              align-items: center;

              .left {
                font-size: 3vw;
                color: #666666;

                .val {
                  font-size: 4vw;
                  font-weight: bold;
                  color: #000000;
                }
              }

              .right {
                box-sizing: border-box;
                padding: 1.5vw 4vw;
                font-size: 3.8vw;
                font-weight: bold;
                color: #4a90f7;
                background-color: #eff6fe;
                border-radius: 5vw;
              }
            }
          }

          .hot-activity {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto 3vw auto;

            .activity-icon {
              width: 32%;
            }
          }

          .billing-details {
            width: 100%;
            margin: 0 auto 3vw auto;
            box-sizing: border-box;
            padding: 3vw;
            background-color: #fff;
            border-radius: 3vw;

            .billing-title {
              width: 100%;
              position: relative;
              text-align: center;
              font-size: 4.5vw;
              font-weight: bold;
              padding-bottom: 3vw;
              margin-bottom: 3vw;
              border-bottom: 1px dashed #e5e5e5;

              .warn {
                position: absolute;
                top: 15%;
                right: 1vw;
                font-size: 3vw;
                font-weight: normal;
                color: #666666;
                display: flex;
                align-items: center;

                .icon {
                  width: 3vw;
                  height: 3vw;
                  vertical-align: middle;
                  fill: currentColor;
                  overflow: hidden;
                  margin-left: 1vw;
                  color: #999999;
                }
              }
            }

            .table-name {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              box-sizing: border-box;
              padding: 3vw 2vw;

              .left {
                font-size: 3.2vw;
                color: #666666;
              }

              .right {
                font-size: 3vw;
                color: #999999;
              }
            }

            .header {
              width: 100%;
              display: flex;
              align-items: center;
              box-sizing: border-box;
              padding: 3vw 2vw;
              background-color: #f8fbff;
              border-top: 1px solid #e7f2fe;
              border-bottom: 1px solid #e7f2fe;
              font-size: 3.5vw;
              font-weight: bold;

              .title {
                &:nth-child(1) {
                  width: 40%;
                  text-align: left;
                }

                &:nth-child(2) {
                  width: 25%;
                  text-align: left;
                }

                &:nth-child(3) {
                  width: 15%;
                  text-align: left;
                }

                &:nth-child(4) {
                  width: 20%;
                  text-align: right;
                }
              }
            }

            .bill-item {
              font-size: 3vw;
              color: #676767;
              display: flex;
              box-sizing: border-box;
              padding: 3vw 2vw;

              .td {
                &:nth-child(1) {
                  width: 40%;
                  text-align: left;
                }

                &:nth-child(2) {
                  width: 25%;
                  text-align: left;
                }

                &:nth-child(3) {
                  width: 15%;
                  text-align: left;
                }

                &:nth-child(4) {
                  width: 20%;
                  text-align: right;
                }
              }
            }

            .total {
              width: 100%;
              display: flex;
              align-items: center;
              box-sizing: border-box;
              padding: 3vw 2vw;
              background-color: #f8fbff;
              border-top: 1px solid #e7f2fe;
              border-bottom: 1px solid #e7f2fe;
              font-size: 3.5vw;
              font-weight: bold;

              .td {
                &:nth-child(1) {
                  width: 40%;
                  text-align: left;
                }

                &:nth-child(2) {
                  width: 25%;
                  text-align: left;
                }

                &:nth-child(3) {
                  width: 15%;
                  text-align: left;
                }

                &:nth-child(4) {
                  width: 20%;
                  text-align: right;
                }
              }
            }

            .explain {
              width: 100%;
              box-sizing: border-box;
              padding: 4vw 3vw;
              text-align: center;
              font-size: 3vw;
              color: #999999;
            }

          }




        }








      }
    }
  }
</style>