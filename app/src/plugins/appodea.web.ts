// src/plugins/appodeal.web.ts
import { WebPlugin } from '@capacitor/core';
import type { AppodealPlugin } from './appodeal';

export class AppodealWeb extends WebPlugin implements AppodealPlugin {
  async initialize(options: { appKey: string }): Promise<void> {
    console.log('Web Appodeal initialize:', options);
    // Implement web version here if needed
  }

  async showBanner(options: { placement: string }): Promise<void> {
    console.log('Web Appodeal showBanner:', options);
  }

  async hideBanner(): Promise<void> {
    console.log('Web Appodeal hideBanner');
  }

  async showInterstitial(): Promise<void> {
    console.log('Web Appodeal showInterstitial');
  }

  async showRewarded(): Promise<void> {
    console.log('Web Appodeal showRewarded');
  }

  async isLoaded(options: { adType: string }): Promise<{ loaded: boolean }> {
    console.log('Web Appodeal isLoaded:', options);
    return { loaded: false };
  }
}