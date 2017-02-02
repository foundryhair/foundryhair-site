export default class BookingLink {
  constructor(selector) {
    this.selector = selector
    this.elArr = [...document.querySelectorAll(selector)]

    this.elArr.forEach((el)=>{
      this.setLink(el)
    })
  }
  setLink(el) {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera

    switch(true) {
      case (/android/i.test(userAgent)):
        el.href = el.dataset['href-android']
        break
      case (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream):
        el.href = el.dataset['href-ios']
        break
      default:
        break
    }
  }
}