import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { init_store } from './stores'

const init = async (): Promise<void> => {
    await init_store()

    const app = createApp(App)

    app.use(router)

    app.mount('#app')
}

init();