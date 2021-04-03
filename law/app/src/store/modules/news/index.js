import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const news = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

export default news;
