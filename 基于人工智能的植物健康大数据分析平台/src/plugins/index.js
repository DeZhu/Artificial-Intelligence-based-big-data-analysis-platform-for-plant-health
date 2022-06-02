import {
  Upload,
  Dialog,
  Loading,
  Message
} from 'element-ui'

const element = {
  install: function(Vue) {
    Vue.use(Upload)
    Vue.use(Dialog)
    Vue.prototype.$message = Message
    Vue.prototype.$loading = Loading.service
  }
}

export default element
