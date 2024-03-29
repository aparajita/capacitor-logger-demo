import { Capacitor } from '@capacitor/core'
import { IonicVue } from '@ionic/vue'
import { createApp } from 'vue'
import App from './App.vue'
import logger from './logger'
import router from './router'
import { kAppName } from '@/constants'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css'

/* Theme variables */
import './theme/variables.css'
import './assets/css/styles.pcss'

logger.info(`Welcome to ${kAppName}!`)

const config: Record<string, unknown> = {}

if (!Capacitor.isNativePlatform()) {
  config.mode = 'ios'
}

const app = createApp(App).use(IonicVue, config).use(router)

router
  .isReady()
  .then(() => {
    app.mount('#app')
  })
  .catch((error) => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    console.error((error as Error).message)
  })
