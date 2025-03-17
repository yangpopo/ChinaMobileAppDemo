import { defineStore } from 'pinia';

export const useShareMenuStore = defineStore('ShareMenu', {
  state: () => {
    return { 
      isShowShareMenu: false, // 是否显示菜单
    };
  },
  actions: {
    /*
    * 切换显示菜单
    */
    switchShareMenu() {
      console.log('11111')
      this.isShowShareMenu = !this.isShowShareMenu
    },
  },
});