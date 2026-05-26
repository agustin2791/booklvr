// services/appodeal.js
import Appodeal from '@/plugins/appodeal';
import { Capacitor } from '@capacitor/core';

export class AppodealService {
  constructor() {
    this.isInitialized = false;
    this.isNative = Capacitor.isNativePlatform();
  }

  async initialize(appKey) {
    if (this.isInitialized) return;

    if (this.isNative) {
      await Appodeal.initialize({ appKey });
    } else {
      // Web implementation
      window.Appodeal.initialize(appKey, {
        banner: true,
        interstitial: true,
        rewarded: true,
      });
    }

    this.isInitialized = true;
  }

  async showBanner(placement = 'top') {
    if (!this.isInitialized) return;

    if (this.isNative) {
      await Appodeal.showBanner({ placement });
    } else {
      window.Appodeal.show('banner', placement);
    }
  }

  async hideBanner() {
    if (!this.isInitialized) return;
    
    if (this.isNative) {
      await Appodeal.hideBanner();
    } else {
      window.Appodeal.hide('banner');
    }
  }

  async showInterstitial() {
    if (!this.isInitialized) return;

    if (this.isNative) {
      await Appodeal.showInterstitial();
    } else {
      window.Appodeal.show('interstitial');
    }
  }

  async showRewarded() {
    if (!this.isInitialized) return;

    if (this.isNative) {
      await Appodeal.showRewarded();
    } else {
      window.Appodeal.show('rewarded');
    }
  }

  async isLoaded(adType) {
    if (!this.isInitialized) return false;

    if (this.isNative) {
      const result = await Appodeal.isLoaded({ adType });
      return result.loaded;
    } else {
      return window.Appodeal.isLoaded(adType);
    }
  }
}

export const appodealService = new AppodealService();