import createClient from "../plugins/contentful";

export const state = () => ({
  page: null
});

export const mutations = {
  setPage(state, data) {
    state.page = data;
  }
};

export const actions = {
  async getPageByID({ commit }, id) {
    const contentfulClient = createClient();
    await Promise.all([
      contentfulClient.getEntries({
        content_type: "page",
        "sys.id": id,
        include: 3
      })
    ])
      .then(([entries]) => {
        const page = entries.items[0];
        commit("setPage", page);
        return page;
      })
      .catch(console.error);
  },
  async getPageBySlug({ commit }, slug) {
    const contentfulClient = createClient(
      {
        space: this.$config.CTF_SPACE_ID ,
        accessToken: this.$config.CTF_CDA_ACCESS_TOKEN ,
        environment: this.$config.CTF_ENVIRONMENT ,
      });
    const page = await Promise.all([
      contentfulClient.getEntries({
        content_type: "page",
        "fields.urlAlias[match]": slug,
        include: 3
      })
    ])
      .then(([entries]) => {
        return entries.items[0];
      })
      .catch(console.error);
      commit("setPage", page);
      return page;
  }
};

export default {
  state,
  mutations,
  actions
};
