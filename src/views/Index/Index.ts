import Component from "vue-class-component";
import { BaseVue } from "@/base/view/BaseVue";
import About from "@/views/About/About.vue";
import Portfolio from "@/views/Portfolio/Portfolio.vue";
import Resume from "@/views/Resume/Resume.vue";
import Contact from "@/views/Contact/Contact.vue";
import Skill from "@/views/Skill/Skill.vue";

@Component({
  components: {
    About,
    Portfolio,
    Resume,
    Contact,
    Skill,
  },
})
export default class Index extends BaseVue {
  $refs!: {
    fullpage: any;
  };
  protected currentTab = 0;
  protected screenWidth = 0;
  protected isShowMenu = false;

  protected copyRight = process.env.VUE_APP_CopyRight;
  protected options = {
    verticalCentered: true, // 定義每一頁的內容是否垂直居中
    afterLoad: this.afterLoadFullPage, // 滾動到某一屏後的回調函數
    scrollOverflow: true, // 內容超過滿屏後顯示滾動條
    controlArrows: true, // 是否通過箭頭控制slide幻燈片
    loopHorizontal: true, // slide幻燈片是否循環滾動
    scrollBar: true, // true則是一滾動就是一整屏
    onLeave: this.onLeaveFullPage, // 滾動前的回調函數，
    menu: ".nav",
    anchors: ["About", "Skill", "Portfolio", "Resume", "Contact", "Footer"],
    responsiveWidth: 960,
  };

  // created() {
  //   this.screenWidth = window.screen.width;
  //   window.addEventListener("resize", this.windowResizeHandler);
  // }
  //
  // destroyed() {
  //   window.removeEventListener("resize", this.windowResizeHandler);
  // }
  //
  // private windowResizeHandler(): void {
  //   this.screenWidth = window.screen.width;
  // }

  private showMenu(isShow: boolean = true) {
    this.isShowMenu = isShow;
  }

  private afterLoadFullPage() {}

  private onLeaveFullPage() {}
}
