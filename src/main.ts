/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins


// Router

import { registerLayouts } from './layouts/register'
import { registerPlugins } from '@/plugins'

const app = createApp(App)


registerPlugins(app)
registerLayouts(app)
app.mount('#app')
