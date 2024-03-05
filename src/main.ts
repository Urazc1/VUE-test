import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import nprogress from 'nprogress'
import 'src/assets/nprogess.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
router.beforeEach((to, from,next) => {
    nprogress.start();
    next();
});

router.afterEach(() => {  
    // 在即将进入新的页面组件前，关闭掉进度条
    nprogress.done()
})
app.mount('#app')
