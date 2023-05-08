import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as Icons from '@ant-design/icons-vue';

import Axios from 'axios';

Axios.defaults.baseURL=process.env.VUE_APP_SERVER;

const app = createApp(App);
app.use(store).use(Antd).use(router).mount('#app');

// 全局使用图标
const icons: any = Icons;
for (const i in icons) {
    app.component(i, icons[i]);
}

/**
 * axios拦截器
 */
Axios.interceptors.request.use(function (config) {
    console.log('请求参数：', config);
    return config;
}, error => {
    return Promise.reject(error);
});
Axios.interceptors.response.use(function (response) {
    console.log('返回结果：', response);
    return response;
}, error => {
    console.log('返回错误：', error);
    return Promise.reject(error);
});