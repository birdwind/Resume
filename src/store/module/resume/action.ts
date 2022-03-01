import { MyLogger } from "@/base/utils/MyLogger";
import { EDUCATION_UPDATE, RESUME_UPDATE } from "@/store/mutationConstant";

export default {
  async resumeUpdate(context: any, data: any): Promise<void> {
    try {
      await context.commit(RESUME_UPDATE, data);
    } catch (error) {
      MyLogger.log("Login Failed");
    }
  },
  async educationUpdate(context: any, data: any): Promise<void> {
    try {
      await context.commit(EDUCATION_UPDATE, data);
    } catch (error) {
      MyLogger.log("Login Failed");
    }
  },
};
