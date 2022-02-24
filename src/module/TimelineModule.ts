export class TimelineModule {
  icon!: string;
  companyName!: string;
  companyTitle!: string;
  startDate!: Date | string;
  endDate!: Date | string;
  content!: string;

  constructor(
    icon: string = "",
    companyName: string = "",
    companyTitle: string = "",
    startDate: Date | string = "",
    endDate: Date | string = "",
    content: string = ""
  ) {
    this.icon = icon;
    this.companyName = companyName;
    this.companyTitle = companyTitle;
    this.startDate = startDate;
    this.endDate = endDate;
    this.content = content;
  }
}
