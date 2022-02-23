import Component from "vue-class-component";
import { BaseVue } from "@/base/view/BaseVue";
import TimelineComponent from "@/components/Timeline/Timeline.component.vue";

@Component({
  components: {
    TimelineComponent,
  },
})
export default class Resume extends BaseVue {}
