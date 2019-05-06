export const state = () => ({
  date: new Date()
})

export const getters = {
  date: state => state.date,
  dateInterval: state => {
    const today = new Date()

    return ~~((today - state.date) / (24 * 60 * 60 * 1000))
  }
}

export const mutations = {
  setDate(state, { dateStr }) {
    state.date = new Date(dateStr)
  }
}

export const actions = {
  setDate({ commit }, e) {
    commit('setDate', { dateStr: e.target.value })
  }
}
