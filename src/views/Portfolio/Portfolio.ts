import Component from "vue-class-component";
import { BaseVue } from "@/base/view/BaseVue";
import { UUID } from "uuid-generator-ts";

@Component({})
export default class Portfolio extends BaseVue {
  private currentTab = 0;
  private portfolioCategoryList = Array();

  private portfolioList = Array();

  mounted() {
    this.portfolioCategoryList.push({
      id: new UUID().toString(),
      name: "ERP系統",
    });
    this.portfolioCategoryList.push({
      id: new UUID().toString(),
      name: "響應式網站",
    });

    this.portfolioCategoryList.forEach((item, index) => {
      if (index === 0) {
        this.portfolioList.push({
          id: new UUID().toString(),
          categoryId: item.id,
          name: "這是標題",
          description:
            "這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!",
          image: "/images/temp.jpg",
          link: "https://github.com/birdwind/",
        });
        this.portfolioList.push({
          id: new UUID().toString(),
          categoryId: item.id,
          name: "這是標題1",
          description: "這是內容!",
          image: "/images/temp.jpg",
          link: "https://github.com/birdwind/",
        });
      } else {
        this.portfolioList.push({
          id: new UUID().toString(),
          categoryId: item.id,
          name: "這是標題2",
          description:
            "這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!",
          image: "/images/temp.jpg",
          link: "https://github.com/birdwind/",
        });
        this.portfolioList.push({
          id: new UUID().toString(),
          categoryId: item.id,
          name: "這是標題3",
          description: "這是內容!",
          image: "/images/temp.jpg",
          link: "https://github.com/birdwind/",
        });
        this.portfolioList.push({
          id: new UUID().toString(),
          categoryId: item.id,
          name: "這是標題4",
          description: "這是內容!",
          image: "/images/temp.jpg",
          link: "https://github.com/birdwind/",
        });
        this.portfolioList.push({
          id: new UUID().toString(),
          categoryId: item.id,
          name: "這是標題5",
          description: "這是內容!",
          image: "/images/temp.jpg",
          link: "https://github.com/birdwind/",
        });
        this.portfolioList.push({
          id: new UUID().toString(),
          categoryId: item.id,
          name: "這是標題5",
          description: "這是內容!",
          image: "/images/temp.jpg",
          link: "https://github.com/birdwind/",
        });
        this.portfolioList.push({
          id: new UUID().toString(),
          categoryId: item.id,
          name: "這是標題5",
          description: "這是內容!",
          image: "/images/temp.jpg",
          link: "https://github.com/birdwind/",
        });
        this.portfolioList.push({
          id: new UUID().toString(),
          categoryId: item.id,
          name: "這是標題5",
          description: "這是內容!",
          image: "/images/temp.jpg",
          link: "https://github.com/birdwind/",
        });
        this.portfolioList.push({
          id: new UUID().toString(),
          categoryId: item.id,
          name: "這是標題5",
          description: "這是內容!",
          image: "/images/temp.jpg",
          link: "https://github.com/birdwind/",
        });
        this.portfolioList.push({
          id: new UUID().toString(),
          categoryId: item.id,
          name: "這是標題5",
          description: "這是內容!",
          image: "/images/temp.jpg",
          link: "https://github.com/birdwind/",
        });
        this.portfolioList.push({
          id: new UUID().toString(),
          categoryId: item.id,
          name: "這是標題5",
          description: "這是內容!",
          image: "/images/temp.jpg",
          link: "https://github.com/birdwind/",
        });
      }
    });
  }

  get portfolioCategoryItemList() {
    return this.portfolioList.filter((item) => {
      return item.categoryId === this.portfolioCategoryList[this.currentTab].id;
    });
  }
}
