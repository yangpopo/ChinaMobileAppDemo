import { defineStore } from 'pinia';

export const useUserSearchInfoNavStore = defineStore('counter', {
  state: () => {
    return { 
      isShowMenu: false, // 是否显示菜单
    };
  },
  actions: {
    /*
    * 切换显示菜单
    */
    switchMenu() {
      this.isShowMenu = !this.isShowMenu
    },
  },
});