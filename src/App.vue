<template>
  <Auth>
    <router-view v-if="!isReload"></router-view>
  </Auth>
</template>

<style lang="scss">
@import "~@/assets/styles/Theme.scss";
</style>

<script lang="ts">
import { BaseVue } from "@/base/view/BaseVue";
import Component from "vue-class-component";
import { Authority } from "@/components/Authority";
import { MyLogger } from "@/base/utils/MyLogger";
import { Browser } from "@/base/utils/Browser";
import { Action, State } from "vuex-class";
import { EducationUpdate, ResumeUpdate } from "@/store/types";

@Component({
  components: { Auth: Authority },
})
export default class App extends BaseVue {
  @State("ElementUI/isReload")
  private isReload!: boolean;

  @Action("Resume/resumeUpdate")
  private resumeUpdate!: ResumeUpdate;

  @Action("Resume/educationUpdate")
  private educationUpdate!: EducationUpdate;

  private isReady = false;

  private json = require("/src/json/data.json");

  async mounted() {
    // wait vue to prepare the router...
    await this.$nextTick();
    try {
      this.resumeUpdate(this.json.resume);
      this.educationUpdate(this.json.education);
      const search = window.location.search;
      MyLogger.debug(`search: ${search}`);
      const query = Browser.getCurrentQueryString();

      // 一些共用資料先 load
      // await this.initApp();
      //
    } catch (error) {
      throw error;
    } finally {
      // fetch privileges, delay to improve ui experience
      this.isReady = true;
    }

    // await this.apis.reporterApi.reporterGetAll();
    // await this.apis.reporterApi.reporterGet("AB1200623046-009-13");
  }
}
</script>
