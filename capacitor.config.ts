import type { CapacitorConfig } from '@capacitor/cli'

/* eslint-disable @typescript-eslint/naming-convention */
const config: CapacitorConfig = {
  appId: 'com.aparajita.capacitor.loggerdemo',
  appName: 'Logger demo',
  loggingBehavior: 'production',
  server: {
    androidScheme: 'http',
  },
  webDir: 'dist',
  plugins: {
    Logger: {
      level: 'debug',
      labels: {
        error: '☠️',
        warn: '👀',
        info: '💬',
        debug: '🪰',
      },
    },
  },
}

export default config
