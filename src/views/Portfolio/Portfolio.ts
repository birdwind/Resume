import Component from "vue-class-component";
import { BaseVue } from "@/base/view/BaseVue";
import { UUID } from "uuid-generator-ts";

@Component({})
export default class Portfolio extends BaseVue {
  private currentTab = 0;
  private portfolioCategoryList = [
    {
      id: "0",
      name: "JAVA後端",
    },
    {
      id: "1",
      name: "Android",
    },
    {
      id: "3",
      name: "WPF",
    },
    {
      id: "4",
      name: "PHP",
    },
    {
      id: "5",
      name: "C# MVC",
    },
  ];

  private portfolioList = Array();

  mounted() {
    this.portfolioList.push({
      id: new UUID().toString(),
      categoryId: "1",
      name: "BookFun商戶版/客戶版",
      description: "",
      image: "/images/bookfun365.png",
      link: "https://play.google.com/store/apps/details?id=com.bookfun365.member&hl=zh_TW&gl=US",
    });

    this.portfolioList.push({
      id: new UUID().toString(),
      categoryId: "0",
      name: "",
      description: "",
      image: "/images/temp.jpg",
      link: "https://github.com/birdwind/",
    });

    // this.portfolioCategoryList.forEach((item, index) => {
    //   if (index === 0) {
    //     this.portfolioList.push({
    //       id: new UUID().toString(),
    //       categoryId: item.id,
    //       name: "這是標題",
    //       description:
    //         "這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!",
    //       image: "/images/temp.jpg",
    //       link: "https://github.com/birdwind/",
    //     });
    //     this.portfolioList.push({
    //       id: new UUID().toString(),
    //       categoryId: item.id,
    //       name: "這是標題1",
    //       description: "這是內容!",
    //       image: "/images/temp.jpg",
    //       link: "https://github.com/birdwind/",
    //     });
    //   } else {
    //     this.portfolioList.push({
    //       id: new UUID().toString(),
    //       categoryId: item.id,
    //       name: "這是標題2",
    //       description:
    //         "這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!這是內容!",
    //       image: "/images/temp.jpg",
    //       link: "https://github.com/birdwind/",
    //     });
    //     this.portfolioList.push({
    //       id: new UUID().toString(),
    //       categoryId: item.id,
    //       name: "這是標題3",
    //       description: "這是內容!",
    //       image: "/images/temp.jpg",
    //       link: "https://github.com/birdwind/",
    //     });
    //     this.portfolioList.push({
    //       id: new UUID().toString(),
    //       categoryId: item.id,
    //       name: "這是標題4",
    //       description: "這是內容!",
    //       image: "/images/temp.jpg",
    //       link: "https://github.com/birdwind/",
    //     });
    //     this.portfolioList.push({
    //       id: new UUID().toString(),
    //       categoryId: item.id,
    //       name: "這是標題5",
    //       description: "這是內容!",
    //       image: "/images/temp.jpg",
    //       link: "https://github.com/birdwind/",
    //     });
    //     this.portfolioList.push({
    //       id: new UUID().toString(),
    //       categoryId: item.id,
    //       name: "這是標題5",
    //       description: "這是內容!",
    //       image: "/images/temp.jpg",
    //       link: "https://github.com/birdwind/",
    //     });
    //     this.portfolioList.push({
    //       id: new UUID().toString(),
    //       categoryId: item.id,
    //       name: "這是標題5",
    //       description: "這是內容!",
    //       image: "/images/temp.jpg",
    //       link: "https://github.com/birdwind/",
    //     });
    //     this.portfolioList.push({
    //       id: new UUID().toString(),
    //       categoryId: item.id,
    //       name: "這是標題5",
    //       description: "這是內容!",
    //       image: "/images/temp.jpg",
    //       link: "https://github.com/birdwind/",
    //     });
    //     this.portfolioList.push({
    //       id: new UUID().toString(),
    //       categoryId: item.id,
    //       name: "這是標題5",
    //       description: "這是內容!",
    //       image: "/images/temp.jpg",
    //       link: "https://github.com/birdwind/",
    //     });
    //     this.portfolioList.push({
    //       id: new UUID().toString(),
    //       categoryId: item.id,
    //       name: "這是標題5",
    //       description: "這是內容!",
    //       image: "/images/temp.jpg",
    //       link: "https://github.com/birdwind/",
    //     });
    //     this.portfolioList.push({
    //       id: new UUID().toString(),
    //       categoryId: item.id,
    //       name: "123",
    //       description: "這是內容!",
    //       image: "/images/temp.jpg",
    //       link: "https://github.com/birdwind/",
    //     });
    //   }
    // });
  }

  get portfolioCategoryItemList() {
    return this.portfolioList.filter((item) => {
      return item.categoryId === this.portfolioCategoryList[this.currentTab].id;
    });
  }
}
