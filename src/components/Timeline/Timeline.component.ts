import Component from "vue-class-component";
import { BaseVue } from "@/base/view/BaseVue";
import { Prop } from "vue-property-decorator";
import { TimelineModule } from "@/module/TimelineModule";

@Component({})
export default class TimelineComponent extends BaseVue {
  @Prop()
  private TimelineHeader!: string;

  @Prop()
  private TimelineIcon!: string;

  @Prop()
  private Timeline!: TimelineModule[];

  mounted() {}
}
