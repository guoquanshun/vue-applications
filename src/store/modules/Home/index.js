export default {
    namespaced: true,
    state: {
        homeData: [1,2,3]
    },
    mutations: {
        UPDATEDATA(state, data) {
            state.homeData = data;
        }
    },
    actions: {
        updateData({commit}, data=['one', 'two', 'three']) {
            commit('UPDATEDATA', data);
        }
    },
    getters: {

    }
}