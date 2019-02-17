import Cookies from 'js-cookie'
import * as types from '../mutation-types'

const collspan = null
// state
export const state = {
  collspan: Cookies.get('collspan')
}

// getters
export const getters = {
  collspan: state => state.collspan
}


// mutations
export const mutations = {
  [types.Collspan_Toogle] (state, data) {
    Cookies.set('collspan', data, { expires: 365 })
    state.collspan = data
  }
}

// actions
export const actions = {
  Collspan_Toogle ({ commit, state }) {
    const collspan = state.collspan
    commit(types.Collspan_Toogle, collspan)
    Cookies.set('collspan', collspan, { expires: 365 })
  }
}
