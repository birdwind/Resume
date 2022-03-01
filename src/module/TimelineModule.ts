export class TimelineModule {
  icon!: string;
  title!: string;
  subTitle!: string;
  startDate!: Date | string;
  endDate!: Date | string;
  content!: string;

  constructor(
    icon: string = "",
    title: string = "",
    subTitle: string = "",
    startDate: Date | string = "",
    endDate: Date | string = "",
    content: string = ""
  ) {
    this.icon = icon;
    this.title = title;
    this.subTitle = subTitle;
    this.startDate = startDate;
    this.endDate = endDate;
    this.content = content;
  }
}
