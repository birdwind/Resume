import Component from "vue-class-component";
import { BaseVue } from "@/base/view/BaseVue";
import TimelineComponent from "@/components/Timeline/Timeline.component.vue";
import { TimelineModule } from "@/module/TimelineModule";

@Component({
  components: {
    TimelineComponent,
  },
})
export default class Resume extends BaseVue {
  private timeline: TimelineModule[] = [
    {
      icon: "",
      companyName: "BookFun365 樂訂",
      companyTitle: "Android工程師",
      startDate: "2019-02",
      endDate: "",
      content: "123456",
    },
    {
      icon: "",
      companyName: "BookFun365 樂訂",
      companyTitle: "Android工程師",
      startDate: "2019-02",
      endDate: "",
      content: "123456",
    },
    {
      icon: "",
      companyName: "BookFun365 樂訂",
      companyTitle: "Android工程師",
      startDate: "2019-02",
      endDate: "",
      content: "123456",
    },
    {
      icon: "",
      companyName: "BookFun365 樂訂",
      companyTitle: "Android工程師",
      startDate: "2019-02",
      endDate: "",
      content: "123456",
    },
    {
      icon: "",
      companyName: "BookFun365 樂訂",
      companyTitle: "Android工程師",
      startDate: "2019-02",
      endDate: "",
      content: "123456",
    },
    {
      icon: "",
      companyName: "BookFun365 樂訂",
      companyTitle: "Android工程師",
      startDate: "2019-02",
      endDate: "",
      content: "123456",
    },
    {
      icon: "",
      companyName: "BookFun365 樂訂",
      companyTitle: "Android工程師",
      startDate: "2019-02",
      endDate: "",
      content: "123456",
    },
    {
      icon: "",
      companyName: "BookFun365 樂訂",
      companyTitle: "Android工程師",
      startDate: "2019-02",
      endDate: "",
      content: "123456",
    },
  ];
  private timeline2: TimelineModule[] = [
    {
      icon: "",
      companyName: "BookFun365 樂訂",
      companyTitle: "Android工程師",
      startDate: "2019-02",
      endDate: "",
      content: "123456",
    },
    {
      icon: "",
      companyName: "BookFun365 樂訂",
      companyTitle: "Android工程師",
      startDate: "2019-02",
      endDate: "",
      content: "123456",
    },
  ];
}
