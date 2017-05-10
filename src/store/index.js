import Vue from 'vue'
import Vuex from 'vuex'

import { fetchData } from './api'
import { classroomURL } from '../config'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    itemList: [],
    isLoading: true,
    itemListDay: 0,             // 默认为今天
    itemListType: 1             // 默认为文字类型，即获取 time 类型的数据
  },

  actions: {
    FETCH_LIST_DATA: async ({ commit, dispatch, state }, { day, byName }) => {
      commit('SET_LIST_DAY', { day })
      commit('SET_LIST_TYPE', { byName })
      commit('SET_LOADING', { isLoading: true })

      try {
        commit('SET_LIST_DATA', {
          list: await fetchData(classroomURL, day, byName)
        })
        commit('SET_LOADING', { isLoading: false })
      } catch (e) {
        throw new Error(e)
      }
    }
  },

  mutations: {
    SET_LIST_DATA: (state, { list }) => {
      state.itemList = list
    },
    SET_LIST_TYPE: (state, { type }) => {
      state.itemListType = type
    },
    SET_LIST_DAY: (state, { day }) => {
      state.itemListDay = day
    },
    SET_LOADING: (state, { isLoading }) => {
      state.isLoading = isLoading
    }
  },

  getters: {
    getDay (state) {
      let day = ['日', '一', '二', '三', '四', '五', '六']
      return '周' + day[(new Date().getDay() + state.itemListDay) % 7]
    }
  }
})

export default store
