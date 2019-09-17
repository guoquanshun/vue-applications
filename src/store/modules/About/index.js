export default {
    namespaced: true,
    state: {
        loginData: ['a', 'b', 'c']
    },
    mutations: {
        UPDATEDATA(state, data) {
            state.loginData = data;
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