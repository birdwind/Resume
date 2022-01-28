import Component from "vue-class-component";
import { BaseVue } from "@/base/view/BaseVue";

@Component({
  components: {},
})
export default class Index extends BaseVue {
  currentTab = 0;

  copyRight = process.env.VUE_APP_CopyRight;
  options = {
    verticalCentered: true, // 定義每一頁的內容是否垂直居中
    afterLoad: this.afterLoadFullPage, // 滾動到某一屏後的回調函數
    scrollOverflow: true, // 內容超過滿屏後顯示滾動條
    controlArrows: true, // 是否通過箭頭控制slide幻燈片
    loopHorizontal: true, // slide幻燈片是否循環滾動
    scrollBar: true, // true則是一滾動就是一整屏
    onLeave: this.onLeaveFullPage, // 滾動前的回調函數，
  };

  mounted() {}

  afterLoadFullPage() {}

  onLeaveFullPage() {}
}
