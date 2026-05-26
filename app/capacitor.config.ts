import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ahgoose.bookluvr',
  appName: 'BookLuvr',
  webDir: 'dist',
  plugins: {
    Appodeal: {
      class: 'AppodealPlugin'
    }
  }
};

export default config;
