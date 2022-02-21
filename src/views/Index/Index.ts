import Component from "vue-class-component";
import { BaseVue } from "@/base/view/BaseVue";
import About from "@/views/About/About.vue";
import { MyLogger } from "@/base/utils/MyLogger";
import { Watch } from "vue-property-decorator";

@Component({
  components: {
    About,
  },
})
export default class Index extends BaseVue {
  $refs!: {
    fullpage: any;
  };
  currentTab = 0;
  screenWidth = 0;

  copyRight = process.env.VUE_APP_CopyRight;
  options = {
    verticalCentered: true, // 定義每一頁的內容是否垂直居中
    afterLoad: this.afterLoadFullPage, // 滾動到某一屏後的回調函數
    scrollOverflow: true, // 內容超過滿屏後顯示滾動條
    controlArrows: true, // 是否通過箭頭控制slide幻燈片
    loopHorizontal: true, // slide幻燈片是否循環滾動
    scrollBar: true, // true則是一滾動就是一整屏
    onLeave: this.onLeaveFullPage, // 滾動前的回調函數，
    menu: ".nav",
    anchors: ["About", "Portfolio", "Resume", "Contact"],
    responsiveWidth: 960,
  };

  created() {
    this.screenWidth = window.screen.width;
    window.addEventListener("resize", this.windowResizeHandler);
  }

  destroyed() {
    window.removeEventListener("resize", this.windowResizeHandler);
  }

  private windowResizeHandler(): void {
    this.screenWidth = window.screen.width;
    // MyLogger.log(window.screen.width);
    // MyLogger.log(window.screen.height);
  }

  // @Watch("screenWidth")
  // watchScreenWidth(val: number) {
  //   MyLogger.log(this.$refs.fullpage.api);
  //   if (val > 960) {
  //     this.$refs.fullpage.api.setAllowScrolling(true);
  //   } else {
  //     this.$refs.fullpage.api.setAllowScrolling(false);
  //   }
  // }

  afterLoadFullPage() {}

  onLeaveFullPage() {}
}
