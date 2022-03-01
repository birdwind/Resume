import { ResumeState } from "@/store/module/resume/state";

export default {
  resume: (state: ResumeState): any[] => state.resume,
  education: (state: ResumeState): any[] => state.education,
};
