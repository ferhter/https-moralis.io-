
function jsonp(url, callback) {
  var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
  window[callbackName] = function(data) {
    try {
      delete window[callbackName];
    } catch (e) {

    }
    document.body.removeChild(script);
    callback(data);
  };

  var script = document.createElement('script');
  script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
  document.body.appendChild(script);
}

var SEARCH_URL = 'https://suggestqueries.google.com/complete/search?client=chrome'
var UTM_SUGGEST_LINK = 'utm_medium=link&utm_source=searcherbar&utm_campaign=searcherbar_suggest_link_all_device_&utm_content=searcherbar_link_searcherbar_suggest_link_all_device_'
var UTM_SEARCH_INPUT = 'utm_medium=link&utm_source=searcherbar&utm_campaign=searcherbar_search_input_all_device_&utm_content=searcherbar_link_searcherbar_search_input_all_device'

var isInputFocused = false;

var windowWidth = 0;
var windowHeight = 0;

var lastSuggestions = new Array(0)

function pageInit() {
  initErrorHandler()
  window.localization.translate();

  window.document.body.dir = window.localization.rtl ? 'rtl' : 'ltr';

  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  if(document.activeElement && document.activeElement.id === 'searchInput') {
    isInputFocused = true
    onFocusedChanged()
  }

  window.statistic.hit('app/searchbar/main_page_started', {
    title: document.title,
    referer: null,
  })

  // var $settingsBtn = document.getElementById('settingsBtn')
  // var $closeBtn = document.getElementById('closeBtn')
  var $form = document.getElementById('searchForm')
  var $searchInput = document.getElementById('searchInput')
  var $searchButton = document.getElementById('searchButton')
  var $settingsButton = document.getElementById('settingsButton')
  var $closeButton = document.getElementById('closeButton')

  $searchInput.addEventListener('change', changeInputHandler)
  $searchInput.addEventListener('keyup', changeInputHandler)
  $searchInput.addEventListener('focus', function() {
    isInputFocused = true
    onFocusedChanged()
  })
  $searchInput.addEventListener('blur', function(e) {
    isInputFocused = false
    setTimeout(onFocusedChanged, 200)
  })

  $form.addEventListener('submit', submitFormHandler)
  $searchButton.addEventListener('submit', submitFormHandler)
  $settingsButton.addEventListener('click', settingsHandler)
  $closeButton.addEventListener('click', closeHandler)
}

function closeHandler(e) {
  e.preventDefault()
  window.statistic.hit('app/searchbar/close_button_clicked', {
    title: document.title,
    referer: null,
    params: {}
  })

  var popup = WshShell.Popup(window.localization.templates.closeAppTitle, 0, '', 3);

  if(popup === 6) {
    window.statistic.hit('app/searchbar/application_closed', {
      title: document.title,
      referer: null,
      params: {},
      callback: function() {
        window.close();
      }
    })
  }
}

function changeInputHandler(e) {
  var $input = document.getElementById('searchInput')

  var value = $input.value;
  var searchUrl = SEARCH_URL + '&q=' + encodeURI(value);

  jsonp(searchUrl, function(data) {
    renderSuggestions(data)
  });
}

function submitFormHandler(e) {
  e.preventDefault();
  var $input = document.getElementById('searchInput')
  var value = $input.value;

  window.statistic.hit('app/searchbar/search_input_submitted', {
    title: document.title,
    referer: null,
    params: {
      query: value
    }
  })

  openWebPage(value, UTM_SEARCH_INPUT)
}

function settingsHandler(e) {
  window.statistic.hit('app/searchbar/settings_button_clicked', {
    title: document.title,
    referer: null,
    params: {}
  })

  var settingsProcess = WshShell.Exec('mshta.exe C:\\SearcherBar\\settings.hta')
  // var settingsProcess = WshShell.Exec('mshta.exe D:\\searcher-bar\\settings.hta')

  var $mask = document.getElementById('mask');
  $mask.style.display = 'block'

  function checkProcess () {
    if(settingsProcess.Status !== undefined && settingsProcess.Status === 1) {
      $mask.style.display = 'none'
    } else {
      setTimeout(checkProcess, 100)
    }
  }

  setTimeout(checkProcess, 2000)


  e.preventDefault()
}

function renderSuggestions(suggestions) {
  var $list = document.getElementById('suggestions')
  var $input = document.getElementById('searchInput')

  var searchText = $input.value;
  var offset = 0;
  $list.innerHTML = '';

  if(suggestions !== undefined && suggestions !== null) {
    lastSuggestions = suggestions
  }

  if(lastSuggestions[1]) {
    for (var i = 0; i < lastSuggestions[1].length; i++) {
      var $item = document.createElement('li')
      var suggest = lastSuggestions[1][i];
      $item.innerHTML = suggest.replace(searchText, '<b>' + searchText + '</b>')

      $list.appendChild($item)
      offset += $item.offsetHeight
      $item.addEventListener('click', (function (value) {
        return function (e) {
          window.statistic.hit('app/searchbar/suggestion_link_clicked', {
            title: document.title,
            referer: null,
            params: {
              query: value
            }
          })
          openWebPage(value, UTM_SUGGEST_LINK)
        }
      })(suggest))
    }
  }

  if(navigator.sayswho !== 'MSIE 8' && navigator.sayswho !== 'MSIE 7' && navigator.sayswho !== 'MSIE 6') {
    window.resizeTo(windowWidth, windowHeight + offset);
  }
}

function onFocusedChanged() {
  // var $input = document.getElementById('searchInput')

  // if(!isInputFocused) {
  //   $input.value = '';
  // }

  renderSuggestions([])
}

function openWebPage(value, utm) {
  var page = 'https://internet-start.net?q=' + encodeURI(value) + (utm ? '&' + utm : '')

  WshShell.Run('rundll32 url.dll,FileProtocolHandler ' + page)

  window.statistic.hit('app/searchbar/search_link_opened', {
    title: document.title,
    referer: null,
    params: {
      url: page
    }
  })
}
