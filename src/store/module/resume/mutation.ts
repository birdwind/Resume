import * as types from "@/store/mutationConstant";
import { ResumeState } from "@/store/module/resume/state";

export default {
  [types.RESUME_UPDATE](state: ResumeState, data: any): void {
    state.resume = data;
  },
  [types.EDUCATION_UPDATE](state: ResumeState, data: any): void {
    state.education = data;
  },
};
