function initErrorHandler() {
  window.onerror = function (msg, url, linenumber) {
    var shortUrl = url.split('/').slice(-1)[0]
    shortUrl = shortUrl.split('\\').slice(-1)[0]

    var params = {
      javascript_exception: {}
    };

    params['javascript_exception'][shortUrl] = {}
    params['javascript_exception'][shortUrl][linenumber] = msg

    window.statistic.hit('app/searchbar/javascript_exception', {
      title: document.title,
      referer: null,
      params: params
    })

    return false
  }
}
