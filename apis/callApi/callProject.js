import callApiProject from "../middleware/apiProject";

const projectApi = {
  getInfoProject(args) {
    return callApiProject("get", "/project/info", args);
  },
};

export default projectApi;
