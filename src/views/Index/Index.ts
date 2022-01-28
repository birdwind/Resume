import Component from "vue-class-component";
import { BaseVue } from "@/base/view/BaseVue";

@Component({
  components: {},
})
export default class Index extends BaseVue {
  copyRight = process.env.VUE_APP_CopyRight;
  opts = {
    start: 0,
    dir: "v",
    duration: 500,
    beforeChange: (prev: any, next: any) => {},
    afterChange: (prev: any, next: any) => {},
  };

  mounted() {}
}
