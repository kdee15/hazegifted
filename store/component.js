import createClient from '../plugins/contentful';

export const state = () => ({
  components: []
});

export const mutations = {
  setComponent(state, data) {
    state.components[data.sys.id] = data;
  }
};

export const actions = {
  async getComponentByID({commit}, id) {
    const contentfulClient = createClient(this.$config);
    return await Promise.all([
      contentfulClient.getEntry(id),
    ])
      .then((entry) => {
        commit('setComponent', entry[0]);
        return entry[0];
      })
      .catch(console.error);
  } ,
};

export default {
  state,
  mutations,
  actions,
};
