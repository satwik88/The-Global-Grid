import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.satwik.globalgrid',
  appName: 'The Global Grid',
  webDir: 'public',
  server: {
    url: 'https://the-global-grid.vercel.app',
    cleartext: true,
    allowNavigation: [
      'the-global-grid.vercel.app',
      '*.vercel.app'
    ]
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
