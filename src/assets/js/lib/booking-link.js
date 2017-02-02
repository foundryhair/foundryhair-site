export default class BookingLink {
  constructor(selector) {
    this.selector = selector
    this.el = document.querySelector(selector)

    this.setLink()
  }
  setLink() {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera

    switch(true) {
      case (/android/i.test(userAgent)):
        this.el.href = this.el.dataset['href-android']
        break
      case (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream):
        this.el.href = this.el.dataset['href-ios']
        break
      default:
        break
    }
  }
}