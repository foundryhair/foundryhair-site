export default class InstagramFeed {
  constructor(selector) {
    this.selector = selector;
    this.domSelector = document.querySelector('#' + selector);
    this.instagramOptions = {
      target: this.selector,
      get: 'user',
      userId: '2150537699',
      accessToken: '2150537699.0859844.afc93a81b3bb4c0c9a3fa70de5740b9a',
      resolution: 'standard_resolution',
      sortBy: 'most-liked',
      template: '<div class="feed__image" style="background-image:url({{image}})"></div>'
    };

    if (window.matchMedia( "(max-width: 767px)" ).matches) {
      this.instagramOptions.limit = 20;
      this.instagramOptions.resolution = 'thumbnail';
    }

    this.initFeed();
  }
  initFeed() {
    let instagramFeed = new Instafeed(this.instagramOptions);
    instagramFeed.run();
  }
}