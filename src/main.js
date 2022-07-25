import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import math, { exNumber } from './utils'
import http from './request/index'
import './assets/styles/reset.less'
import './assets/styles/element.less'
import './assets/styles/utility.less'
import 'element-ui/lib/theme-chalk/index.css'

import {
  Card,
  Button,
  Message,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Select,
  Option,
  Input,
  Container,
  Row,
  Col,
  ButtonGroup,
} from 'element-ui'

Vue.use(Card)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Container);
Vue.use(Row);
Vue.use(Col);
Vue.use(ButtonGroup);

Vue.config.productionTip = false
Vue.prototype.$math = math;
Vue.prototype.$exNumber = exNumber;
Vue.prototype.$http = http;
Vue.prototype.$message = Message;
Vue.prototype.$store = store;

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
