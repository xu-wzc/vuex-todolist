// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
Vue.config.productionTip = false
// 1. 导入 ant-design-vue 组件库
import Antd from 'ant-design-vue'
// 2. 导入组件库的样式表
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
// 3. 安装组件库
Vue.use(Antd)
/* eslint-disable no-new */
// new Vue({
//   render: h => h(App),
//   store,
//   components:('#app')
// })
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
