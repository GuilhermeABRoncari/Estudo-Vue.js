/** @format */

export default {
  state: {
    clubName: "Hcode Treinamentos",
  },
  getters: {
    getClubName(state) {
      return state.clubName;
    },
  },
  mutations: {
    setClubName(state, newName) {
      state.clubName = newName;
    },
  },
  actions: {
    updateClubName(context, newName) {
      context.commit("setClubName", newName);
    },
  },
};
