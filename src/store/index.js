import { createStore } from 'vuex'

export default createStore({
  //全局的状态初始值
  state: {
    count:1,
  },
  //计算state,获取对应的值
  getters: {
  },
  //更新状态的方法,更关心state的唯一方法,commit mutations
  mutations: {
    setCount(state,num){
      state.count=num
    }
  },
  //可以异步操作,可以返回promise,更改数据还是传递到mutations中去更改
  actions: {
  },
  //数据较多时,分模块
  modules: {
  }
})
