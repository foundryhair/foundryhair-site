export default class InstagramFeed {
  constructor(selector) {
    this.selector = selector;
    this.domSelector = document.querySelector('#' + selector);

    this.instagramOptions = {
      target: this.selector,
      get: 'user',
      userId: '2150537699',
      clientId: 'd6df1ba940414fbfbbc3c85dce7a0d06',
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