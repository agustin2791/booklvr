// src/plugins/appodeal.ts
import { registerPlugin } from '@capacitor/core';
import { AppodealWeb } from './appodea.web';
export interface AppodealPlugin {
  initialize(options: { appKey: string }): Promise<void>;
  showBanner(options: { placement: string }): Promise<void>;
  hideBanner(): Promise<void>;
  showInterstitial(): Promise<void>;
  showRewarded(): Promise<void>;
  isLoaded(options: { adType: string }): Promise<{ loaded: boolean }>;
}

const Appodeal = registerPlugin<AppodealPlugin>('Appodeal', {
  web: () => new AppodealWeb(),
});

export default Appodeal;