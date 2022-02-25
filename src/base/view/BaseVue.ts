import Vue from "vue";
import { MessageType } from "element-ui/types/message";
import { NotificationPosition } from "element-ui/types/notification";
import { Action } from "vuex-class";
import { AddHistoryMessage, Reload, ShowLoading } from "@/store/types";
import download from "downloadjs";

export class BaseVue extends Vue {
  @Action("ElementUI/reload")
  public reload!: Reload;

  @Action(`ElementUI/addHistoryMessage`)
  public addHistoryMessage!: AddHistoryMessage;

  @Action(`ElementUI/showLoading`)
  public showLoading!: ShowLoading;

  showInfo(msg: string, title: string = "訊息") {
    this.showMessage(msg, title, "info");
  }

  showError(msg: string, title: string = "訊息") {
    this.showMessage(msg, title, "error");
  }

  showWarning(msg: string, title: string = "訊息") {
    this.showMessage(msg, title, "warning");
  }

  showSuccess(msg: string, title: string = "訊息") {
    this.showMessage(msg, title, "success");
  }

  showMessage(msg: string, title: string = "訊息", type: MessageType) {
    //
    const data = {
      type: type as MessageType,
      title,
      message: msg,
      position: "bottom-right" as NotificationPosition,
    };

    this.$notify(data);
  }

  startLoading() {
    this.showLoading(true);
  }

  stopLoading() {
    this.showLoading(false);
  }

  reloadPage() {
    this.reload(true);
    this.$nextTick(() => {
      this.reload(false);
    });
  }

  routerLink(path: string) {
    if (this.$route.fullPath !== path) {
      this.$router.push(path);
    }
  }

  downloadResume() {
    download("/resume.pdf");
  }
}
