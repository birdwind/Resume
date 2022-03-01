import Component from "vue-class-component";
import { BaseVue } from "@/base/view/BaseVue";
import TimelineComponent from "@/components/Timeline/Timeline.component.vue";
import { TimelineModule } from "@/module/TimelineModule";
import { Getter } from "vuex-class";

@Component({
  components: {
    TimelineComponent,
  },
})
export default class Resume extends BaseVue {
  @Getter("Resume/resume")
  private resume!: any;
  @Getter("Resume/education")
  private education!: any;

  private workTimeline: TimelineModule[] = Array();
  private educationTimeline: TimelineModule[] = Array();

  mounted() {
    this.workTimeline = [];
    this.educationTimeline = [];
    if (this.resume) {
      this.resume.forEach((item: any) => {
        this.workTimeline.push({
          title: item.companyName,
          subTitle: item.companyTitle,
          startDate: item.startDate,
          endDate: item.endDate,
          content: item.content,
          icon: item.icon,
        });
      });
    }

    if (this.education) {
      this.education.forEach((item: any) => {
        this.educationTimeline.push({
          title: item.schoolName,
          subTitle: item.majoring,
          startDate: item.startDate,
          endDate: item.endDate,
          content: item.content,
          icon: item.icon,
        });
      });
    }
  }
}
