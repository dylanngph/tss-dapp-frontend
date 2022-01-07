import callApiProject from "../middleware/apiProject";

const projectApi = {
  getInfoProject(args) {
    return callApiProject("get", "/project/active/all", args);
  },
};

export default projectApi;
