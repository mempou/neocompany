export class MixpanelTracking {
  static _instance = null;

  static getInstance() {
    if (MixpanelTracking._instance === null) {
      MixpanelTracking._instance = new MixpanelTracking();
    }
    return MixpanelTracking._instance;
  }

  constructor() {
    if (MixpanelTracking._instance) {
      throw new Error(
        'Error: Instance of MixpanelTracking already exists. Use MixpanelTracking.getInstance() instead.'
      );
    }
    mixpanel.init()
  }
}