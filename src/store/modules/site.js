import types from '../types'
import menu from '../../menu'
import _ from 'lodash'
import http from '../../http'

export default {
  state: {
    name: 'REST ADMIN',
    url: '',
    description: `<ul><li style= "text-align:left">物流大数据平台可以帮你找到潜在客户</li><li style= "text-align:left">实时追踪你的物流订单信息</li><li style= "text-align:left">简化你的货运线下繁琐流程，线上报关</li></ul>`,
    menu: menu,
    footer: `<span><a href="https://github.com/wxs77577/rest-admin">REST ADMIN</a> &copy; ${new Date().getFullYear()} </span>
    <span class="ml-auto">
      Powered by <a href="https://github.com/wxs77577/rest-admin">REST ADMIN</a>
    </span>`,
    logo: require('@/assets/img/logo.png'),
    locale: 'zh-CN',
    locale_switcher: false,
  },
  mutations: {
    [types.SET_SITE](state, data) {
      for (let k in data) {
        const value = data[k]
        if (typeof value === 'undefined') {
          continue
        }
        state[k] = value
      }
    },
  },
  getters: {
    currentMenu(state, getters, rootState) {
      const item = _.find(state.menu, { url: '/rest/' + rootState.route.params.resource }) || {}
      return item
    }
  },
  actions: {
    [types.FETCH_SITE]({ commit }) {
      http.get('site').then(({ data }) => {
        commit(types.SET_SITE, data)
        if (data.locale) {
          commit(types.SET_LOCALE, data.locale)
        }
      })
    }
  }
}