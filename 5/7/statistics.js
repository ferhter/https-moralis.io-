navigator.sayswho= (function(){
  var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
    tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE '+(tem[1] || '');
  }
  if(M[1]=== 'Chrome'){
    tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
    if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
  return M.join(' ');
})();

var PING_URL = 'http://ya.ru'
var isOnline = false;

function ping() {
  try {
    if (window.XMLHttpRequest) {
      //Firefox, Opera, IE7, and other browsers will use the native object
      var xhr = new XMLHttpRequest();
    } else {
      //IE 5 and 6 will use the ActiveX control
      var xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onload = function () {
      isOnline = true
    }

    xhr.onerror = function () {
      isOnline = false
    }

    xhr.open('GET', PING_URL, true)
    xhr.send(null)
  } catch (e) {
    // Fallback to IE6+
    setTimeout(function() {
      isOnline = true;
    }, 5000)
  }
}

var interval = null;

initMetrika()

function checkYaMetrikaIsLoaded(cb) {
  ping()
  if (window.Ya && window.Ya.Metrika2 && isOnline) {
    if(interval) {
      window.clearTimeout(interval)
    }

    cb(new window.Ya.Metrika2({
      id: 70105369, // Dev - 70007956, prod - 70105369
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true
    }))
  } else {
    interval = setTimeout(function () {
      checkYaMetrikaIsLoaded(cb)
    }, 200)
  }
}

function loadApp(cb) {
  var queue = {
    hit: []
  }

  window.statistic = {}
  window.statistic.hit = function() {
    var args = Array.prototype.slice.call(arguments, 0, arguments.length)

    if(args[1] && args[1].callback) {
      args[1].callback()
      delete args[1].callback
    }

    queue.hit.push(function bound() {
      window.statistic.hit.apply(this, args)
    })
  }

  function loadFormQueue() {
    var keys = Object.keys(queue)

    for(var i = 0; i < keys.length; i++) {
      var method = null;

      while (method = queue[keys[i]].shift()) {
        method()
      }
      queue[keys[i]] = [];
    }

  }

  checkYaMetrikaIsLoaded(function(counter) {
    window.statistic = counter

    var originalHit = window.statistic.hit
    window.statistic.hit = function() {
      var args = Array.prototype.slice.call(arguments, 0, arguments.length);
      args[0] = 'http://searcherbar.ws/' + args[0]

      return originalHit.apply(this, args)
    }

    loadFormQueue()
  })

  function overrideCb() {
    var version = '0.3_offline'
    var browser = {};
    var lang = {};
    browser[navigator.sayswho] = navigator.userAgent
    if(window.localization) {
      lang[window.localization.lang] = window.localization.originalLang
    }

    window.statistic.hit('app/searchbar/application_started', {
      title: document.title,
      referer: null,
      params: {
        browser: browser,
        application: {
          version: version,
          lang: lang
        }
      }
    })

    cb.call(window)
  }

  if(document.readyState === "complete" || document.readyState === "interactive") {
    overrideCb();
  } else {
    window.addEventListener('load', overrideCb)
  }
}
