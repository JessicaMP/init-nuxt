import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'

const toast = function ({ title, message, type, timeout, cb }) {
  console.log(miniToastr, miniToastr[type])
  return miniToastr[type](message, title, timeout, cb)
}

// const toastTypes = {
//   success: 'success',
//   error: 'error',
//   info: 'info',
//   warn: 'warn'
// }

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)