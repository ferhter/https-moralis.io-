<!DOCTYPE HTML>
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" xmlns:schema="http://schema.org/" class="es" lang="es" geo="MX">
<head>
<link rel="dns-prefetch" href="https://i-invdn-com.investing.com" />
<link rel="dns-prefetch" href="https://a-invdn-com.investing.com" />
<link rel="preconnect" href="https://securepubads.g.doubleclick.net" />
<link rel="dns-prefetch" href="https://securepubads.g.doubleclick.net" />
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>

<script>
    window.dataLayer = window.dataLayer || [];
    window.dataLayerPopulatorInput = {"smd":"5cf363f0e96252259aabb67b8f2df346-1678227771","udid":"5cf363f0e96252259aabb67b8f2df346","userID":246932896,"isLoggedIn":1,"event":"GTM page to GA","object":"screen","first_level":"Members Admin","page_pattern_name":"Members Admin","page_type":"MMT","client_name":"legacy-desktop","edition":4,"service_version":"1.2.6"} || [] ;
    let dataLayerPopulatorAlive = window.dataLayerPopulatorInput.service_version || false;
    let oldDataLayerPopulatorAlive = window.dataLayerPopulatorInput.server_info || false;
    if(dataLayerPopulatorAlive !== false) {
        dataLayer.push(window.dataLayerPopulatorInput);

        // Legacy push
        dataLayer.push({'event': 'client-ready'});
    }
    else if (oldDataLayerPopulatorAlive !== false) { // old version
        dataLayer.push(
            {
                "event": window.dataLayerPopulatorInput.event_meta_data.name || '',
                "object": window.dataLayerPopulatorInput.event_meta_data.object || '',
                "client_name": window.dataLayerPopulatorInput.server_info.client_name || '',
                "environment": window.dataLayerPopulatorInput.server_info.environment || '',
                "service_version": window.dataLayerPopulatorInput.server_info.service_version || '',
                "edition": window.dataLayerPopulatorInput.server_info.edition || '',
            });
        // Legacy push
        dataLayer.push({'event': 'client-ready'});
    }

    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PGT3R3D');
</script>

<script>
        // Load ToolSet hardcoded instead of from file
        /**
         * ToolSet (Investing Lib for DFP)
         */
        (()=>{
            let lcl = console.log,
                defineSlot = ({ defineSlot, sizes, adSlotDivID, middleDefinition, collapseDiv }, slotHolder) => {
                    let slot = window.googletag.defineSlot(defineSlot, sizes, adSlotDivID).addService(window.googletag.pubads());
                    if (!slotHolder.slots) {
                        slotHolder.slots = {};
                    }
                    if (collapseDiv && slot) {
                        slot.setCollapseEmptyDiv(...collapseDiv);
                    }
                    if (middleDefinition && slot) {
                        slot.defineSizeMapping(middleDefinition.reduce((acc, item) => acc.addSize(...item), window.googletag.sizeMapping()).build());
                    }
                                            if(!window.headerBidding) {
                            slot.setTargeting('refresh_counter', '0');
                        }
                                        slotHolder.slots[defineSlot] = slot;

                    window.googletag.pubads().addEventListener('slotRenderEnded',
                        function(event) {
                            var element = document.getElementById(event.slot.getSlotElementId());
                            element.style.backgroundColor = null;
                        });
                },
                displaySlot = (containerId) => {
                    window.dfpSlots = window.dfpSlots || [];
                    window.dfpSlotFlag = window.dfpSlotFlag || [];
                    if(typeof window.dfpFlag !== 'undefined') {
                        window.googletag.cmd.push(() => window.googletag.display(containerId))
                    }
                    else {
                        window.dfpSlotFlag[containerId] = setInterval(() => {
                            if( typeof window.dfpFlag !== 'undefined') {
                                window.googletag.cmd.push(() => window.googletag.display(containerId))
                                clearInterval(window.dfpSlotFlag[containerId]);
                            }
                        }, 50);
                    }
                };


            window._ = {
                ADVERTISEMENT_HEIGHT: 25,
                MIN_AD_HEIGHT_CLOSE_BUTTON: 200,
                each: (obj, iterator) => {
                    if (typeof(obj) === 'object') {
                        for (let key in obj) {
                            iterator(obj[key], key);
                        }
                    } else {
                        obj.forEach(iterator);
                    }
                },
                setTargeting: (key, value) => {
                    window.googletag.pubads().setTargeting(key, value);
                },
                defineSlotPB: (settings) => defineSlot(settings, window.pbjs), // Both of these methods must be called
                defineSlot: (settings) => defineSlot(settings, window.googletag), // when globals are already available
                displaySlot,
                manageAd: (event) => {
                    if(_.isShowAdvertisementPrefix(event)){
                        _.showAdvertisementPrefix(event);
                    }
                    _.resizeContainer(event);
                    if(_.isShowCloseButton(event)){
                        _.showCloseElement(event);
                    }
                    if(event.slot.getSlotElementId() === 'div-gpt-ad-000000001-0' && !event.isEmpty){
                        document.querySelector(".js-sticky-footer-close").classList.remove("displayNoneImp");
                    }
                    //TODO: we need to find a better solution (use adunits.phpparent attrs) for sepcific ads
                    if (event.slot.getSlotElementId() === "div-gpt-ad-1541684394813-0") {
                        let buySellDiv = document.querySelector('.overViewBox .buySellDiv');
                        let hasVideoEl = document.querySelector('.overViewBox .has-video');
                        if (event.isEmpty) {
                            if(buySellDiv) {
                                buySellDiv.classList.add("displayNone");
                            }
                            if(hasVideoEl) {
                                hasVideoEl.classList.add('no-ad-loaded');
                            }
                        } else {
                            if(buySellDiv) {
                                buySellDiv.classList.remove('displayNone');
                            }
                            if(hasVideoEl) {
                                hasVideoEl.classList.remove('no-ad-loaded');
                            }
                        }
                    }
                    //remove adFree sales popup if no DFP content
                    if(event.slot.getSlotElementId() === 'dfpWrapper' && event.isEmpty){
                        document.querySelector('#adFreeSalePopup').remove();
                    }
                },
                showCloseElement: (event) => {
                    document.getElementById(event.slot.getSlotElementId()).nextElementSibling.classList.remove('opacityNone');
                },
                showAdvertisementPrefix: (event) => {
                    let dfpElement 			 = document.getElementById(event.slot.getSlotElementId());
                    let advertisementDiv = _.createAdvertisementPrefix(dfpElement.getAttribute('advertisementText'));
                    dfpElement.prepend(advertisementDiv);
                },
                createAdvertisementPrefix: (text) => {
                    let advertisementDiv     		= document.createElement('div');
                    let advertisementText 			= document.createElement('span');
                    advertisementDiv.className 		= "advertisement-header";
                    advertisementText.className 	= "text";
                    advertisementText.textContent 	= text;
                    advertisementDiv.append(advertisementText);
                    return advertisementDiv;
                },
                resizeContainer: (event) => {
                    if(event.isEmpty) {
                        return;
                    }
                    let el = document.getElementById(event.slot.getSlotElementId());
                    console.log('full event');
                    console.log(JSON.stringify(event));
                    if(!event.isEmpty && parseInt(el.getAttribute('resize'))){
                        let advertisementHeight = 0;
                        if (_.isShowAdvertisementPrefix(event)) {
                            el.querySelector('.advertisement-header').style.width = event.size[0];
                            advertisementHeight = _.ADVERTISEMENT_HEIGHT;
                        }

                        // Sometimes, prebid send us size of [1,1] for the billboard, so we get the height of the banner manually from the div generated from the child (google div).
                        let billboardPrebidException = (event.slot.getSlotElementId() === "Billboard_Default" && event.size[1] === 1 && el.childNodes[3].clientHeight > 1);
                        if(billboardPrebidException && el.style.height === "276px") { // if we got the bug but, we have the big base size, we stay like this.
                            console.log('bug of prebid is suppose to happen NOW')
                            return;
                        }
                        let newHeight = (billboardPrebidException) ? el.childNodes[3].clientHeight : event.size[1];
                        console.log('NEW HEIGHT');
                        console.log(event.size[1] === 1 && billboardPrebidException);
                        console.log('new size: '+ newHeight);
                        el.style.height = newHeight + advertisementHeight + 1 + 'px';
                        if (hasSomeParentTheClass(el, 'wideTopBanner')) {
                            let parents = document.querySelectorAll('.midHeader .wideTopBanner');
                            let parents_array = [...parents]; // convert to array
                            parents_array.forEach(div => {div.style.height = 'auto';});
                        }
                    }
                },
                isFu: obj => typeof(obj) === 'function',
                attachEvents: () => {
                    window.googletag.pubads().addEventListener('slotRenderEnded', (event) => {_.manageAd(event)});
                    let el = document.querySelector('.dfpCloseBtn');
                    if(el !== null) {
                        el.addEventListener('click', (event) => {
                            $(event.target).parent().hide();
                        });
                    }

                    let stickyEl = document.querySelector('.js-sticky-footer-close');
                    if(stickyEl !== null) {
                        stickyEl.addEventListener('click', (event) => {document.getElementById('sticky_footer').remove();});
                    }
                },
                isShowCloseButton: event => {

                    return !event.isEmpty && parseInt(document.getElementById(event.slot.getSlotElementId()).getAttribute('closeButton')) &&
                        event.size != null && event.size.length > 1 && event.size[1] >= _.MIN_AD_HEIGHT_CLOSE_BUTTON;
                },
                isShowAdvertisementPrefix: event => {

                    let advertisementText = document.getElementById(event.slot.getSlotElementId()).getAttribute('advertisementText');
                    return !event.isEmpty && (typeof advertisementText !== typeof undefined && advertisementText);
                },
            }

            window.getCookie = function (cname) {
                var name = cname + "=";
                var ca=document.cookie.split(";");
                for (var i=0; i<ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') c = c.substring(1);
                    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                }
                return "";
            }
            window.hasSomeParentTheClass = function (element, classname) {
                if (element.className.split(' ').indexOf(classname)>=0) return true;
                return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
            }
        })();
    </script>
<script type="text/javascript">
    function OptanonWrapper() { }

    // temp for checks
    </script>
<style>
	.ot-floating-button {
		z-index:12 !important;
	}
</style>
<script type="text/javascript">
        window.helpers = {
            'getCookie': function (k){var v="; "+document.cookie;var p=v.split("; "+k+"=");if(p.length===2)return p.pop().split(";").shift();else return null},
            'setCookie': function (k,v,d){var e='';if(typeof d!=='undefined'){var n=new Date;n.setTime(n.getTime()+864e5*d);e+=';expires="';e+=n.toGMTString();e+='"';}document.cookie=k+'='+v+';path=/' + e},
            'delCookie': function (k){document.cookie=k+'=;path=/;expires=-1'},
            'isNumber': function (n){return !isNaN(n)&&typeof n!==undefined&&n!==null&&n!==''},
            'removeClass': function (e,c){if(document.documentElement.classList){e.classList.remove(c);}else{var r=new RegExp('(^|\\s)'+c+'(\\s|$)', 'g');e.className=e.className.replace(r, c)}},
            'addClass': function (e,c){if(document.documentElement.classList){e.classList.add(c);}else{if(e.className.indexOf(c)<0){if((e.className!==''&&e.className.charAt[e.className.length-1]===' ')||e.className===''){e.className+=c}else{e.className+=' '+c}}}},
            'hasClass': function (e,c){if(document.documentElement.classList){e.classList.contains(c);}else{return e.className.indexOf(c)>=0}},
        };
    </script>
<script>
    
    function loadJsScript(url){
        let jsScript = document.createElement( 'script' );
        jsScript.async = true;
        jsScript.src = url;

        document.head.appendChild(jsScript);
    }

    var allKeyValue = {"Section":"members-admin","Sub_Section":"","Charts_Page":"no","Page_URL":"\/members-admin\/settings-edit-user-details","Domain":"es.investing.com","smd":"5cf363f0e96252259aabb67b8f2df346-1678227771","protected_media":"0","pm":"clear","Adsfree_conversion_score":"2","Crypto_Instrument":"No","user_has_watchlist":"1","session_number":"5","page_path":"es.investing.com\/members-admin\/settings-edit-user-details","page_path_level1":"Members Admin","experiment_record":"headerBidding_enabled_legacy","udid":"5cf363f0e96252259aabb67b8f2df346","edition_id":"4","Traffic_Type":"OG","User_ID":"246932896","reg_days":"26","already_l":"0","b1":"0","b2":"0","b3":"0","b4":"0","redesign":"0","User_type":"Logged_in","utm_source":"responsys","utm_medium":"email","utm_campaign":"Webinar_Push"};
    window.isGDPR   = 0;
    window.isCCPA 	= 0;
    window.adFox 	= 0;
    window.headerBidding = 1;
    if(window.headerBidding === 1) {
        loadJsScript("https://si.education.investing.com/inv/prebid.js");
    }
    if (window.adFox === 1) { // loading AdFox (Yandex AdServer)
        var adServerLibrary = "https://yandex.ru/ads/system/context.js";
        var adServerUsed = "AdFox";
        window.yaContextCb = window.yaContextCb || []
    }
    else { // loading GPT
        var adServerLibrary = "https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        var adServerUsed = "GPT";
    }
    var loadAds = false;
    const loadGpt = () => {
        loadAds = true;
		let gptScript = document.createElement( 'script' );
		gptScript.onload = function () {
			console.log(adServerUsed +  ' loaded');
		};
		gptScript.async = true;
		gptScript.src = adServerLibrary;

        // Load GPT Async
        if(adServerUsed !== "GPT") { // Load AdFox / Yandex
		    document.head.appendChild(gptScript);
        }
        else { // suppose to load GPT
            window.dfpSlots = window.dfpSlots || [];
            window.googletag = window.googletag || {};
            window.googletag.cmd = window.googletag.cmd || [];

            window.a892ffe2982c = {
                defineSlots: function () {
                    _.attachEvents();
                    _.each( allKeyValue, function (val, key) { _.setTargeting(key, val) });
                    _.each([], _.defineSlot);
                }
            }
            window.googletag.cmd.push(function () {

                window.a892ffe2982c.defineSlots();
                //if is not gdpr compliant - get personal ads
                if (!window.isGDPR || (window.isGDPR && getCookie('CMP_CONSENT') === '1')) {
                    window.googletag.pubads().setRequestNonPersonalizedAds(0);
                }

                // ADX ccpa (optout - 1YYN) restricted data processing
                if( window.isCCPA && getCookie('usprivacy') === '1YYN')
                {
                    console.log('CCPA privacy restrict data processing');
                    window.googletag.pubads().setPrivacySettings({
                        'restrictDataProcessing': true
                    });
                }

                window.googletag.pubads().enableSingleRequest();
                window.googletag.enableServices();

                // Display slots after user consent.
                // for (let i = 0; i < window.dfpSlots.length; i++) {
                //     console.log('manual loop ' + window.dfpSlots[i]);
                //     window.googletag.display(window.dfpSlots[i]);
                // }
                window.dfpFlag = 1;
            })
            
            if(window.headerBidding === 1) {
                loadJsScript("https://c.amazon-adsystem.com/aax2/apstag.js");
                (function (w, d, e, u, p, a, m) {
                    w['imhb'] = w['imhb'] || {};
                    w['imhb'].queue = w['imhb'].queue || [];
                    w['imhb'].preset = p;
                    a = d.createElement(e);
                    m = d.getElementsByTagName('script')[0];
                    a.async = 1;
                    a.src = u;
                    m.parentNode.insertBefore(a, m);

                    // config here
                    w['imhb'].queue.push(function () {
                        w['imhb'].loadConfig({
                            page: {
                                pagination: {
                                    current: 1,
                                    total: 1
                                }
                            }
                        });

                        w['imhb'].setTargeting(allKeyValue);
                    });


                })(window, document, 'script', 'https://si.education.investing.com/inv/imhb.js', 'https://si.education.investing.com/inv/es/config-desktop.leg.json');
            }
        }
    }

    if( window.isGDPR ){
        const consentSetInterval = setInterval(() => {
            if( typeof window.__tcfapi !== 'undefined' )
            {
                clearInterval(consentSetInterval);
                window.__tcfapi( 'addEventListener', 2, function( tcData,listenerSuccess )
                {
					if(listenerSuccess) {
						if( tcData && (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') ) {
							var hasGoogleAdvertisingProductsConsent = tcData.vendor.consents[755] || false;
							// Check if the user gave Google Advertising Products consent (iab vendor 755)
							if(hasGoogleAdvertisingProductsConsent) {
								console.log("gpt loaded gdpr-ccpa")
								loadGpt();
							}
						}
					}
                })
            }

        }, 50);

    } else {
        loadGpt();
    }

    var adFoxSlots = adFoxSlots || [];
    function loadAdFoxSlot(slot, params) {
        adFoxSlots[slot] = { ...window.adFoxObj }
        adFoxSlots[slot].containerId = slot;
        adFoxSlots[slot].params = params;
        adFoxSlots[slot].onLoad = (function (){setWhiteBackground(slot)})
        if(slot === 'FP_RU_Sideblock_3_viewable' || slot === 'Sideblock_2_Default') {
            adFoxSlots[slot].lazyLoad = true;
        }
        console.log('loading ad Fox slot by func for slot '+slot)
        window.yaContextCb.push(()=>{Ya.adfoxCode.create(adFoxSlots[slot])})

    }
    
    let upacc = getCookie('upa');
    if(upacc !== null) {
        try{
            let upadec = JSON.parse(atob(decodeURIComponent(upacc)));
            allKeyValue = Object.assign(allKeyValue, upadec);
        } catch (e) { }
    }
      
    window.adFoxObj = {
        ownerId: 316703,
        // containerId: 'FP_RU_Billboard_Default',
        params: {},
        onLoad: function(data) { console.log('on adFox Load'); console.log(data) },
        onRender: function() {console.log('on adFox render');   },
        onError: function(error) { console.log('on adFox error'); console.log(error)  }
    };

    function setWhiteBackground(slotId)
    {
        let el = document.getElementById(slotId);
        if(el) {
            el.style.backgroundColor = 'white';
        }
    }

    function convertKeyValueToYandex(allKeyValue) {
        var KeyValueMapper = {
            puid1: "CID",
            puid2: "User_type",
            puid3: "smd",
            puid4: "Traffic_Type",
            puid5: "Section",
            puid6: "adsTest",
            puid7: "utm_source",
            puid8: "utm_campaign",
            puid9: "utm_medium",
            puid10: "utm_term",
            puid11: "utm_content",
            puid12: "pair_id",
            puid13: "newsID",
            puid14: "contentID",
            puid15: "GL_Ad_ID",
            puid16: "GL_Campaign_ID",
            puid17: "Crypto_Instrument",
            puid18: "Sub_Section",
            puid19: "SectionInstrument",
            puid20: "User_Id",
            puid21: "udid",
            puid22: "edition_id",
            puid23: "reg_days",
            puid24: "already_l",
            puid25: "b1",
            puid26: "b2",
            puid27: "b3",
            puid28: "b4",
            puid29: "pm",
            puid30: "user_has_watchlist",
            puid31: "studios_dfp"
        };
        allPuids = {};
        for (const key in KeyValueMapper) {
            if(allKeyValue.hasOwnProperty(KeyValueMapper[key])) {
                allPuids[key] = allKeyValue[KeyValueMapper[key]]
            }
        }
        return allPuids;
    }
    var allPuids = convertKeyValueToYandex(allKeyValue)

    // Update adFox Obj with Puids
    Object.assign(adFoxObj.params, allPuids);

    // Load Yandex ads refresher
    var thisWindow = window;
    var IDLE_INTERVAL = 5 * 60 * 1000; // 5 minutes
    thisWindow.lastUserRefreshTimestamp = Date.now()
    if(window.adFox === 1) {
        thisWindow.addEventListener("focus", function(){
            refreshAdFoxAds();
        })
    }

    function refreshAdFoxAds(){
        var currentTime = Date.now();
        if(currentTime >= thisWindow.lastUserRefreshTimestamp + IDLE_INTERVAL) {
            console.log("Refreshing only viewable Ad Fox ads");
            Ya.adfoxCode.reload(null, {onlyIfWasVisible: true});
        }
        else {
            // console.log("not yet")
        }
        thisWindow.lastUserRefreshTimestamp = Date.now()
    }

    var googletagGA = window.helpers.getCookie('_ga');

    if (googletagGA) {
        allKeyValue.CID = googletagGA.substr(6);
    }

    // todo: change the screen width logic and move it from here to separate task
    var screenWidthForAds= screen.width || 1366,
        screenWidthValue,
        adBreakPoints = [1336,1440,1920];

    if (screenWidthForAds < adBreakPoints[0]){ screenWidthValue = 'small' }
    else if (screenWidthForAds >= adBreakPoints[0] && screenWidthForAds <= adBreakPoints[1]) {
        screenWidthValue = 'medium'
    }
    else if (screenWidthForAds > adBreakPoints[1]) {
        screenWidthValue = 'big'
    }

    allKeyValue.screen_width = screenWidthValue;
</script>
<script type="text/javascript">
        window.googletag = window.googletag || {};
        window.googletag.cmd = window.googletag.cmd || [];

        window.loadSideBlockAd2 = function () {
            googletag.cmd.push(function () {
                _.defineSlot({"platform":"desktop","sizes":[300,250],"adSlotDivID":"div-gpt-ad-1370187203350-sb2","excludedSections":["Education","portfolio","brokers","directory"],"adUnitDivAttributes":{"advertisementText":"Anuncio","style":"width: 300px; height: 262px;"},"print":false,"preBid":true,"adFoxActive":true,"params":{"pp":"h","ps":"fpwn","p2":"hpgx"},"adFoxStyle":"width: 300px; height: 250px; background-color: #f2f2f2;"});
            });
        };
        window.displaySideBlockAd2 = function () {
            googletag.cmd.push(function () {
                googletag.display('div-gpt-ad-1370187203350-sb2');
            });
        };

        window.loadSideBlockAd3 = function () {
            googletag.cmd.push(function () {
                _.defineSlot({"platform":"desktop","sizes":[[300,250],[300,600]],"adSlotDivID":"div-gpt-ad-1370187203350-sb3","adUnitDivAttributes":{"advertisementText":"Anuncio","style":"width: 300px; height: 600px;"},"print":true,"preBid":true,"adFoxActive":true,"params":{"pp":"i","ps":"fpwn","p2":"hpgx"},"adFoxStyle":"max-width: 300px; background-color: #f2f2f2;","excludedSections":["ccpa"],"defineSlot":"\/6938\/FP_ES_site\/FP_ES_Sideblock_3_viewable"});
                googletag.display('div-gpt-ad-1370187203350-sb3');
            });

            scrollng_ad('scrollingRightBox', 'footerWrapper');
        };
    </script>
<script src="https://i-invdn-com.investing.com/js/protectedMedia.js"></script>
<title>Comunidad Investing.com</title>
<script>

/**
 * Protected Media Score politics:
 * 1. fraudScore means: fraud [2 - clean - 100 fraud]
 * 2. suspScore means: suspicious [2 - clean - 100 suspicious]
 * 3. se means means: load by search engine or ad crawler (for Google Publishers recommended to not block this
 * so Google can score your page for quality
 *
 * JIRA: ADTECH-625
 */
const PM_COOKIE_NAME       = "protectedMedia";
const PM_SCORE_COOKIE_NAME = "pms";
const protectedMediaCookie = getCookie(PM_COOKIE_NAME);
const pmScoreCookie        = getCookie(PM_SCORE_COOKIE_NAME);
window.fraud = 0;
if(protectedMediaCookie === "" || pmScoreCookie === "") { // only hit once per user
	PMScore({
			callback: function(result) {
		if(result.status.indexOf("timeout") !== -1) {
			console.log("timeout: " + JSON.stringify(result));
		}
		else { // success PM call
			if(result.status.indexOf("se") !== -1 && result.se !== 0) {
				// Load by Search engine or ad crawler (for Google Publishers, recommended to not block this so Google
				// can score your page for quality
				console.log("google bot / ad crawler detected");
				return;
			}
			// mark the PM score to user (first time)
            if(protectedMediaCookie === "") {
                setCookie(PM_COOKIE_NAME, result.fraudScore ,365, "/");
            }
            if(pmScoreCookie === "") {
                setCookie(PM_SCORE_COOKIE_NAME, JSON.stringify({'f':result.fraudScore, 's':result.suspScore}),30, "/");
            }

			if (result.fraudScore > 70) { // result.suspScore > 70
				console.log("fraud: " + JSON.stringify(result));
			}
			else {
				console.log("clean: " + JSON.stringify(result));
			}
		}
	},
			mode: "rt",
			timeout: 4000,
		})
	}
else { // user or bot already tagged by protected media (used for second load only)
	if(protectedMediaCookie > 70) {
		window.fraud = 1;
	}
}
</script>
<meta name="robots" content="noindex, nofollow" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@InvestingEspana" />
<meta name="twitter:title" content="Comunidad Investing.com" />
<meta name="twitter:description" content="Bienvenido a Investing.com! Disfruta de las &uacute;ltimas noticias econ&oacute;micas, ent&eacute;rate de los pr&oacute;ximos eventos, y no olvides visitar nuestra secci&oacute;n de an&aacute;lisis diario de forex - ahora categorizado a partir de la popularidad de los art&iacute;culo!" />
<meta name="twitter:image" content="https://i-invdn-com.investing.com/redesign/images/seo/investing_300X300.png" />
<meta property="og:title" content="Comunidad Investing.com" />
<meta property="og:description" content="Bienvenido a Investing.com! Disfruta de las &uacute;ltimas noticias econ&oacute;micas, ent&eacute;rate de los pr&oacute;ximos eventos, y no olvides visitar nuestra secci&oacute;n de an&aacute;lisis diario de forex - ahora categorizado a partir de la popularidad de los art&iacute;culo!" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://es.investing.com/members-admin/settings-edit-user-details" />
<meta property="og:image" content="https://i-invdn-com.investing.com/redesign/images/seo/investing_300X300.png" />
<meta property="og:site_name" content="Investing.com Español" />
<meta property="og:locale" content="es_ES" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="shortcut icon" href="https://i-invdn-com.investing.com/logos/favicon.ico">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta http-equiv="content-language" content="es">
<meta name="description" content="Bienvenido a Investing.com! Disfruta de las últimas noticias económicas, entérate de los próximos eventos, y no olvides visitar nuestra sección de análisis diario de forex - ahora categorizado a partir de la popularidad de los artículo!">
<meta http-equiv="pragma" content="no-cache">
<meta name="baidu_ssp_verify" content="867e13c8aeefe44c96c098634fb27ffe"> <meta name="google-site-verification" content="DTRxWXB3vjNUsTCPICWo9yzZmIllylXYkRevEXo7szg">
<meta name="referrer" content="origin">

<link rel="stylesheet" href="https://i-invdn-com.investing.com/css/mainOldMin_v3b.css" type="text/css">
<link rel="stylesheet" href="https://i-invdn-com.investing.com/css/newMainCssMin_v79u.css" type="text/css">
<link href="https://i-invdn-com.investing.com/css/printContent_v10.css" media="print" rel="stylesheet" type="text/css" />


<script type="text/javascript">
        var domainId = "4";
        window.CDN_URL = "https://i-invdn-com.investing.com";
    </script>
<script src="https://accounts.google.com/gsi/client" async defer></script>
<script src="https://i-invdn-com.investing.com/js/jquery-6.4.9.04.min.js"></script>
<script type="text/javascript" src="https://i-invdn-com.investing.com/js/n/notifications-1.03.min.js"></script>
<script type="text/javascript" src="https://i-invdn-com.investing.com/js/lazysizes.min.js" async></script>
<script type="text/javascript" src="https://i-invdn-com.investing.com/js/n/utils-0.16.min.js"></script>
<script type="text/javascript" src="https://i-invdn-com.investing.com/js/main-1.17.347.min.js"></script>
<script type="text/javascript" src="https://i-invdn-com.investing.com/js/members-admin-2.26.min.js"></script>

<!--[if (gte IE 6)&(lte IE 7)]>
<script src="https://i-invdn-com.investing.com/js/jquery.pseudo-1.1.min.js"></script>
<![endif]-->

<script type="text/javascript">
        window.login_url = '/members-admin/login';
		        window.close_word = 'Cerrar';
        window.lightbox_image = 'Imagen';
        window.lightbox_from = 'Desde';
		        var FP = {
            global  : {
                _defaultDomain  : 'es.investing.com',
                _textAlign      : 'left'
            }
        };
        var userType;
        var userSupportedType ;
    </script>


 <script type="text/javascript">
        /* Modernizr 2.0.6 (Custom Build) | MIT & BSD
		 * Build: http://www.modernizr.com/download/#-csstransitions-iepp-cssclasses-testprop-testallprops-domprefixes
		 */
        window.Modernizr=function(a,b,c){function A(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+n.join(c+" ")+c).split(" ");return z(d,b)}function z(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function y(a,b){return!!~(""+a).indexOf(b)}function x(a,b){return typeof a===b}function w(a,b){return v(prefixes.join(a+";")+(b||""))}function v(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l,m=Object.prototype.toString,n="Webkit Moz O ms Khtml".split(" "),o={},p={},q={},r=[],s,t={}.hasOwnProperty,u;!x(t,c)&&!x(t.call,c)?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],c)},o.csstransitions=function(){return A("transitionProperty")};for(var B in o)u(o,B)&&(s=B.toLowerCase(),e[s]=o[B](),r.push((e[s]?"":"no-")+s));v(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._domPrefixes=n,e.testProp=function(a){return z([a])},e.testAllProps=A,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+r.join(" "):"");return e}(this,this.document);
        window.ie = (function(){var undef,v = 3,div = document.createElement('div'),all = div.getElementsByTagName('i');while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',all[0]);return v > 4 ? v : undef;}());
    </script>

<style>
        .googleContentRec {display:inline-block;width:650px;height:300px;}

    </style>
<style>
        /* INPUTS OVERWRITES */
        .combineSearchBox {border:1px solid #737373;} /* overwrite main css */
        .combineSearchBox.newInput.inputTextBox, .portfolioSearch .newInput.inputTextBox  {padding:0;}
    </style>
<!--[if (IE 8)|(IE 9)]>
<link rel="stylesheet" type="text/css" href="https://i-invdn-com.investing.com/css/ie8-9main_v2b.css">
<![endif]-->
<!--[if IE 8]>
<link rel="stylesheet" type="text/css" href="https://i-invdn-com.investing.com/css/ie8main_v2a.css">
<![endif]-->
<!--[if IE 7]>
<link rel="stylesheet" type="text/css" href="https://i-invdn-com.investing.com/css/ie7main_v1i.css">
<![endif]-->
<style>
        .MainTableDirectory .HeadTitlesRow TH {text-align:center; font-weight:bold;}
    </style>
<style>
        .openTbl TH.icon {text-align:center;}         .openTbl TH.icon SPAN {position:relative; top:2px;}
    </style>
<script>
        var oldIE = false, explorerEight = false ,explorerNine = false, sponsoredArticle;
    </script>
<!--[if lte IE 7]>
	<script>
		oldIE = true;
	</script>
	<![endif]-->
<!--[if (IE 8)]>
	<script>
		explorerEight = true;
	</script>
	<![endif]-->
<!--[if (IE 9)]>
	<script>
		explorerNine = true;
	</script>
	<![endif]-->
<script>var a8c46ca73278caf46b58a2b3eb2f42="3c6090146b3203d0d7109fe9581a7d0d";</script>
<script data-obct type="text/javascript">
    /** DO NOT MODIFY THIS CODE**/
    !function(_window, _document) {
        var OB_ADV_ID='00d807ecaf50797b1d395f73b69546fffe';
        if (_window.obApi) {var toArray = function(object) {return Object.prototype.toString.call(object) === '[object Array]' ? object : [object];};_window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));return;}
        var api = _window.obApi = function() {api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);};api.version = '1.1';api.loaded = true;api.marketerId = OB_ADV_ID;api.queue = [];var tag = _document.createElement('script');tag.async = true;tag.src = '//amplify.outbrain.com/cp/obtp.js';tag.type = 'text/javascript';var script = _document.getElementsByTagName('script')[0];script.parentNode.insertBefore(tag, script);}(window, document);
    obApi('track', 'PAGE_VIEW');
</script><script>window.newsAndAnalysisAlertSettings = JSON.parse('null');</script> 
<script type="text/javascript">
        window.pubsubDebugData = {
            dfp:{
                iframes:[],
                scripts:[]
            },
            code:{
                scripts:[]
            }
        };

        function sendPrimisEventToPubSub(params)
        {
            $.ajax({
                url: "/pubsub/Service/message",
                type:'POST',
                data: params
            });
        }

        function getSekindoParamsFromDFPScript()
        {
            var sekindoParams = {};
            var iframes = $('body').find('iframe');
            for (var i = 0; i < iframes.length; i++) {
                window.pubsubDebugData.dfp.iframes[i] = iframes[i].id;
                if(iframes[i].id && (iframes[i].id.indexOf('_video_') !== -1)){
                    var scripts = iframes[i].contentWindow.document.getElementsByTagName("script");
                    for (var q = 0; q < scripts.length; q++) {
                        window.pubsubDebugData.dfp.scripts[i] = scripts[q].src;
                        if (scripts[q].src && (scripts[q].src.indexOf('https://live.sekindo.com/live/liveView.php') !== -1)) {
                            var url = new URL(scripts[q].src);
                            var queryParams = new URLSearchParams(url.search);
                            if(queryParams.get('s') && queryParams.get('vp_template')){
                                sekindoParams.media_placement_id = queryParams.get('s');
                                sekindoParams.vp_template = queryParams.get('vp_template');
                                sekindoParams.delivery_system = 'dfp';
                                break;
                            }
                        }
                    }
                }
            }

            return sekindoParams;
        }

        function getSekindoParamsFromCodeScript()
        {
            var params = {};
            var scripts = $('body').find('script');
            for (var i = 0; i < scripts.length; i++) {
                window.pubsubDebugData.code.scripts[i] = scripts[i].src;
                if (scripts[i].src && (scripts[i].src.indexOf('https://live.sekindo.com/live/liveView.php') !== -1)) {
                    var url = new URL(scripts[i].src)
                    var queryParams = new URLSearchParams(url.search);
                    if(queryParams.get('s') && queryParams.get('vp_template')){
                        params.media_placement_id = queryParams.get('s');
                        params.vp_template = queryParams.get('vp_template');
                        params.delivery_system = 'code';
                        break;
                    }
                }
            }

            return params;
        }

        window.addEventListener('primisPlayerInit', function (e) {
            var player = e.detail;

            /**
             * Ad started event
             */
            player.addEventListener('adStarted', function (val){
                var sekindoParams = getSekindoParamsFromDFPScript();
                if($.isEmptyObject(sekindoParams)){
                    sekindoParams = getSekindoParamsFromCodeScript();
                }

                cb_params = {};
                cb_params.impValue = val.impValue;
                cb_params.servingFee = val.servingFee;
                sekindoParams.cb_params = cb_params;
                sekindoParams.event_type = 'adStarted';
                sekindoParams.debug = window.pubsubDebugData;

                sendPrimisEventToPubSub(sekindoParams);
            });

            /**
             * Video Start event
             */
            player.addEventListener('videoStart', function (val){
                console.log('Playing video: ' + val.title);
            });
        });
    </script>
</head>
<body class="takeover dfpTakeovers ">

<noscript>
        <iframe src='https://www.googletagmanager.com/ns.html?id=GTM-PGT3R3D'
                height='0' width='0' style='display:none;visibility:hidden'>
        </iframe>
    </noscript>
<script>
        function handleCredentialResponse(response) {
            var formdata = {
                gsi_token: response.credential
            };

            authFormDataAppend(formdata);
            window.setEntryPoint('google one tap');
            jQuery.ajax({
                url : '/members-admin/auth/signInUpBySocialGPlus',
                type: 'POST',
                dataType: 'json',
                data : formdata,
                success : function(data) {
                    window.authHandler(data);
                },
                async : false
            });
        };
        // TODO: put env PROD env on deployment 606447380154-9825jtap5as2sm0f868m536j6v8ptgo7.apps.googleusercontent.com
        window.onload = function () {
            google.accounts.id.initialize({
                client_id: '606447380154-9825jtap5as2sm0f868m536j6v8ptgo7.apps.googleusercontent.com',
                callback: handleCredentialResponse
            });
                    };
    </script>
<script>

	    
        function addGtmToGAEvent(eventNameCd, gaEventCategory, gaEventAction, actionCd = undefined, trackedObject = undefined, eventCdDescription1 = undefined, eventCdValue1 = undefined, uiTemplate = undefined) {
            dataLayer.push({
                event:"GTM event to GA",
                event_name_cd:eventNameCd,
                GA_event_category:gaEventCategory,
                GA_event_action:gaEventAction,
                action_cd:actionCd,
                object:trackedObject,
                ui_template:uiTemplate,
                event_cd_description1:eventCdDescription1,
                event_cd_value1:eventCdValue1
            });
        }
    </script>
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    </script>
<script>
                $(function() {
                    var mutationObserver = new MutationObserver(function(mutations) {
                        mutations.forEach(function(mutation) {
                            if (mutation.attributeName === "class") {
                                if($('header').hasClass('switchHeader')) {
                                    $('.wrapper').addClass('hidden_navBar');
                                } else {
                                    $('.wrapper').removeClass('hidden_navBar');
                                }
                            }
                        });
                    });
                    mutationObserver.observe($('header')[0], {
                        attributes: true
                    });

                });
            </script>
<div id="sideNotificationZone" class="sideNotificationZone">
<div class="floatingAlertWrapper alertWrapper js-notification-item displayNone">
<div class="alertNotifIcon"><span class="js-icon"></span></div>
<div class="alertNotifData">
<a class="alertDataTitle js-title"></a>
<span class="alertDataDetails js-small-text"></span>
</div>
<a data-tooltip="Gestionar mis alertas" class="js-manage-alerts gearIconSmall genToolTip oneliner reverseToolTip"></a>
<span class="alertCloseIconSmall js-close"></span>
</div>
</div>
<div class="breakingNews">
<div class="floatingAlertWrapper">
<span class="breakingNewsTitle bold">Última hora</span>
<span class="breakingNewsText js-breaking-news-content"></span>
</div>
<span class="closeIcon js-close"></span>
</div>
<div class="generalOverlay js-general-overlay displayNone"></div>
<script>
        $('.js-general-overlay').on('click', $.stopProp);
    </script>
<div class="earAdvWrapper">
<div class="earAdv left"></div>
</div>
<div class="wrapper">
<header class="">

<div class="topBar">
<div class="topBarInnerWrapper">
<a href="/" class="topBarLogo">
<img src="https://i-invdn-com.investing.com/logos/investing-com-logo-2022.png" alt="Investing.com - El Portal Financiero Líder" width="166" height="38" class="investingLogo">
</a>
<div id="topBarPopup" load="topBarSpinner"></div>
<div class="js-search-overlay topSearchOverlay displayNone"></div>
<div class="searchDiv newSearchDiv js-main-search-wrapper">
<div class="searchBoxContainer topBarSearch topBarInputSelected">
<input autocomplete='off' type="text" class="searchText arial_12 lightgrayFont js-main-search-bar" value="" placeholder="Buscar en esta web...">
<label class="searchGlassIcon js-magnifying-glass-icon">&nbsp;</label>
<i class="cssSpinner"></i>
</div>
<div class="js-results-dialog displayNone">
<div class="js-query-results newSearch_topBar newSearch_topBarResults displayNone">
<div class="searchMain">
<div class="js-query-quotes-header textBox groupHeader searchPopup_results">
<a class="js-quote-header-link">Cotizaciones</a>
<div class="js-quote-types-dropdown newSearchSelect selectWrap">
<a class="newBtnDropdown noHover">
<span class="js-dropdown-text-input inputDropDown">Todos los instrumentos</span>
<i class="bottunImageDoubleArrow buttonWhiteImageDownArrow"></i>
</a>
<ul class="dropdownBtnList displayNone js-quote-types-dropdown-ul">
<li data-value='all'>Todos los instrumentos</li><li data-value='indice'>Índices</li><li data-value='equities'>Acciones</li><li data-value='etf'>ETFs</li><li data-value='fund'>Fondos</li><li data-value='commodity'>M. primas</li><li data-value='currency'>Divisas</li><li data-value='crypto'>Cripto</li><li data-value='bond'>Bonos</li><li data-value='certificate'>Certificados</li> </ul>
</div>
</div>
<div class="js-scrollable-results-wrapper newResultsContainer">
<div class="js-table-results tableWrapper"></div>
</div>

<div class="js-query-no-results noResults displayNone">
<i class="searchNoResultsNew"></i>
<p class="lighterGrayFont">Por favor, inténtelo con una nueva búsqueda</p>
</div>
<div class="searchResultsFooter">
<i class="blueSearchGlassIcon middle"></i>
<a class="js-footer-link" href="/">Buscar en el sitio:&nbsp;<span class="js-footer-link-text bold"></span></a>
</div>
</div>
<div class="js-right-side-results searchAside"></div>
</div>
<div class="js-default-search-results newSearch_topBar">
<div class="searchMain js-main-group-results"></div>
<div class="searchAside">
<div class="searchAside_item">
<a class="asideTitle" href="/news/most-popular-news">
<div class="js-search-ga-header groupHeader" ga-label="Popular News">Noticias más populares</div>
<span class="js-search-ga-more" ga-label="Popular News - More">Más</span>
</a>
<div class="js-search-ga-items articles mediumTitle1" ga-label="Popular News - Article"><article class="js-article-item articleItem     " data-id="2368276">
<a href="/news/economy/powell-hawkish-en-el-congreso-la-fed-podria-subir-tasas-mas-de-lo-esperado-2368276" class="img"><img class="lazyload" data-src="https://i-invdn-com.investing.com/news/LYNXNPEE56081_S.jpg" alt="Powell hawkish en el Congreso: la Fed podría subir tasas más de lo esperado" onerror="javascript:this.src='https://i-invdn-com.investing.com/news/news-paper_108x81.png';"></a> <div class="textDiv">
<a href="/news/economy/powell-hawkish-en-el-congreso-la-fed-podria-subir-tasas-mas-de-lo-esperado-2368276" title="Powell hawkish en el Congreso: la Fed podría subir tasas más de lo esperado" class="title">Powell hawkish en el Congreso: la Fed podría subir tasas más de lo esperado</a>
</div>
<div class="clear"></div>
</article><article class="js-article-item articleItem     " data-id="2368283">
<a href="/news/economy/wall-street-cae-por-temor-a-un-alza-de-tasas-tras-las-declaraciones-de-powell-2368283" class="img"><img class="lazyload" data-src="https://i-invdn-com.investing.com/news/external-images-thumbnails/LYNXMPEJ260NM_L.jpg" alt="Wall Street cae por temor a un alza de tasas tras las declaraciones de Powell" onerror="javascript:this.src='https://i-invdn-com.investing.com/news/news-paper_108x81.png';"></a> <div class="textDiv">
<a href="/news/economy/wall-street-cae-por-temor-a-un-alza-de-tasas-tras-las-declaraciones-de-powell-2368283" title="Wall Street cae por temor a un alza de tasas tras las declaraciones de Powell" class="title">Wall Street cae por temor a un alza de tasas tras las declaraciones de Powell</a>
</div>
<div class="clear"></div>
</article><article class="js-article-item articleItem     " data-id="2368252">
<a href="/news/economy/en-vivo-jerome-powell-presidente-de-la-fed-comparece-en-el-capitolio-2368252" class="img"><img class="lazyload" data-src="https://i-invdn-com.investing.com/news/moved_small-LYNXMPEJ1105K_L.jpg" alt="EN VIVO: Jerome Powell, presidente de la Fed, comparece en el Capitolio" onerror="javascript:this.src='https://i-invdn-com.investing.com/news/news-paper_108x81.png';"></a> <div class="textDiv">
<a href="/news/economy/en-vivo-jerome-powell-presidente-de-la-fed-comparece-en-el-capitolio-2368252" title="EN VIVO: Jerome Powell, presidente de la Fed, comparece en el Capitolio" class="title">EN VIVO: Jerome Powell, presidente de la Fed, comparece en el Capitolio</a>
</div>
<div class="clear"></div>
</article></div>
</div>
<div class="searchAside_item js-popular-analysis-wrapper">
<a class="asideTitle" href="/analysis/most-popular-analysis">
<div class="js-search-ga-header groupHeader" ga-label="Popular Analysis">Análisis más populares</div>
<span class="js-search-ga-more" ga-label="Popular Analysis - More">Más</span>
</a>
<div class="js-search-ga-items articles smallTitle1 analysisImg js-popular-analysis-items" ga-label="Popular Analysis - Article"><article class="js-article-item articleItem     " data-id="200460476">
<a href="/analysis/niveles-a-vigilar-en-el-ibex-35-bbva-caixabank-iberdrola-inditex-y-santander-200460476" class="img"><img class="lazyload" data-src="https://d4-invdn-com.investing.com/company_logo/efc6a388896aed7dff7bf3ace179bca8.jpg" onerror="javascript:this.src='https://i-invdn-com.investing.com/anonym.gif';"></a> <div class="textDiv">
<a href="/analysis/niveles-a-vigilar-en-el-ibex-35-bbva-caixabank-iberdrola-inditex-y-santander-200460476" title="Niveles a vigilar en el Ibex 35, BBVA, CaixaBank, Iberdrola, Inditex y Santander" class="title">Niveles a vigilar en el Ibex 35, BBVA, CaixaBank, Iberdrola, Inditex y Santander <span class="middle videoIconNew">&nbsp;</span> </a>
</div>
<div class="clear"></div>
</article><article class="js-article-item articleItem     " data-id="200460520">
<a href="/analysis/si-te-quedaste-atrapado-en-bitcoin-no-te-preocupes-200460520" class="img"><img class="lazyload" data-src="https://d4-invdn-com.investing.com/company_logo/8447f4d10d119414f84667a5e9d171dd.jpg" onerror="javascript:this.src='https://i-invdn-com.investing.com/anonym.gif';"></a> <div class="textDiv">
<a href="/analysis/si-te-quedaste-atrapado-en-bitcoin-no-te-preocupes-200460520" title="Si te quedaste atrapado en Bitcoin... ¡No te preocupes!" class="title">Si te quedaste atrapado en Bitcoin... ¡No te preocupes! <span class="middle videoIconNew">&nbsp;</span> </a>
</div>
<div class="clear"></div>
</article><article class="js-article-item articleItem     " data-id="200460466">
<a href="/analysis/6-predicciones-esta-semana-powell-en-el-congreso-y-buenisimos-datos-de-empleo-200460466" class="img"><img class="lazyload" data-src="https://d1-invdn-com.investing.com/company_logo/178eff8825030ba5eddb1fdd2e32c046.jpg" onerror="javascript:this.src='https://i-invdn-com.investing.com/anonym.gif';"></a> <div class="textDiv">
<a href="/analysis/6-predicciones-esta-semana-powell-en-el-congreso-y-buenisimos-datos-de-empleo-200460466" title="6 predicciones esta semana: Powell en el Congreso y buenísimos datos de empleo" class="title">6 predicciones esta semana: Powell en el Congreso y buenísimos datos de empleo <span class="middle videoIconNew">&nbsp;</span> </a>
</div>
<div class="clear"></div>
</article></div>
</div>
</div>
</div>
</div>



<div class="js-group-template textBox displayNone">
<div class="js-group-title groupHeader"></div>
<div class="js-group-results newResultsContainer">
</div>
</div>

<div class="js-news-items-group-template searchAside_item displayNone">
<a class="asideTitle js-group-more-link">
<div class="js-group-title groupHeader"></div>
<span>Más</span>
</a>
<div class="js-group-results articles smallTitle1 analysisImg"></div>
</div>


<a class="row js-quote-row-template js-quote-item displayNone">
<span class="first flag"><i class="ceFlags middle js-quote-item-flag"></i></span>
<span class="second js-quote-item-symbol symbolName"></span>
<span class="third js-quote-item-name"></span>
<span class="fourth typeExchange js-quote-item-type"></span>
</a>

<article class="js-news-item-template articleItem displayNone">
<a href="/" class="js-news-item-link">
<img class="js-news-item-img" src="https://d1-invdn-com.investing.com/company_logo/d01b563261bcf223986f7ac222680343.jpg">
<div class="js-news-item-name textDiv"></div>
</a>
</article>
<div class="js-tool-item-template displayNone">
<a class="js-tool-item-link eventsAndTools">
<span class="js-tool-item-name"></span>
</a>
</div>
</div>
<script type="text/javascript">
	window.topBarSearchData = {
		texts: {
			recentSearchText: 'Mis búsquedas recientes',
			popularSearchText: 'Lo más buscado',
            newsSearchText: 'Noticias',
            analysisSearchText: 'Análisis',
            economicEventsSearchText: 'Eventos Económicos',
            toolsSearchText: 'Herramientas y secciones',
			authorsSearchText: 'Autores',
			webinarsSearchText: 'Webinars'
		},
		popularSearches: [{"pairId":"446","link":"\/equities\/bbva","symbol":"BBVA","name":"Banco Bilbao Vizcaya Argentaria SA","flag":"Spain","type":"Acci\u00f3n - Madrid","ci":"26"},{"pairId":"474","link":"\/equities\/banco-santander","symbol":"SAN","name":"Banco Santander S.A.","flag":"Spain","type":"Acci\u00f3n - Madrid","ci":"26"},{"pairId":"469","link":"\/equities\/telefonica","symbol":"TEF","name":"Telef\u00f3nica S.A.","flag":"Spain","type":"Acci\u00f3n - Madrid","ci":"26"},{"pairId":"271","link":"\/equities\/coca-cola-co","symbol":"KO","name":"Coca-Cola Co","flag":"USA","type":"Acci\u00f3n - Nueva York","ci":"5"},{"pairId":"6846","link":"\/equities\/ferrexpo","symbol":"FXPO","name":"Ferrexpo PLC","flag":"UK","type":"Acci\u00f3n - Londres","ci":"4"}]	};
</script> <div class="topBarTools">
<span id="userAccount" class="topBarUserAvatar js-open-auth-trigger-inside" data-page-type="topBar">
<div class="loggedIn inlineblock"><span onmouseover="_myAccountDropDown.render();" onmouseout="_myAccountDropDown.render();" class="topBarText bold pointer name"><img src="https://lh3.googleusercontent.com/a/AEdFTp5TBPfdC5N4u9lWynTkQ5mWX5mJVahB8wiIhFkUIQ=s96-c" class="userAvatar middle inlineblock" id="userImg"><span class="myAccount topBarText">fernando</span></span></div><div id="myAccountHeaderPop" class="tooltipPopup bigArrowTopbar noHeader displayNone myAccountSelPopup" onmouseover="_myAccountDropDown.render();" onmouseout="_myAccountDropDown.render();"><div class="content"><ul class="bold "><li style="width:px;"><span class="smallGrayArrow middle"></span><a href="/portfolio" class="arial_12 bold">Mi cartera</a></li><li style="width:px;"><span class="smallGrayArrow middle"></span><a href="/members-admin/alert-center" class="arial_12 bold">Centro de alertas</a></li><li style="width:px;"><span class="smallGrayArrow middle"></span><a href="/members-admin/alerts-feed" class="arial_12 bold">Histórico de alertas</a></li><li style="width:px;"><span class="smallGrayArrow middle"></span><a href="/members-admin/saved-items" class="arial_12 bold">Elementos guardados</a></li><li style="width:px;"><span class="smallGrayArrow middle"></span><a href="/members-admin/content-analysis-list" class="arial_12 bold">Contenido</a></li><li style="width:px;"><span class="smallGrayArrow middle"></span><a href="/members-admin/content-analysis-add" class="arial_12 bold">Añadir análisis</a></li></ul><div class="dottedBorder">&nbsp;</div><ul class="noBold "><li style="width:px;"><span class="smallGrayEmptyArrow middle"></span><a href="/members-admin/sentiments" class="arial_12 bold">Mis previsiones</a></li></ul><div class="dottedBorder">&nbsp;</div><ul class="noBold "><li style="width:px;"><span class="smallGrayEmptyArrow"></span><a href="/members-admin/ad-free?source=desktop&medium=profile" class="arial_12 bold">Versión sin publicidad</a></li><li style="width:px;"><span class="smallGrayEmptyArrow"></span><a href="/pro/?entry=navbar_submenu" class="arial_12 bold"><svg width="76" height="16.703296703296704" viewBox="0 0 182 40" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: text-bottom">
<path fill-rule="evenodd" clip-rule="evenodd" d="M84.8691 9.49235L90.2906 8V12.6014L84.8691 14.0938V9.49235Z" fill="#FFA500"></path>
<path d="M0.713867 10.5962L6.62816 8.97949V31.4891H0.713867V10.5962ZM24.8639 31.4891H19.4425V23.2812C19.4425 21.2914 19.5657 18.9285 16.9782 18.9285C14.3907 18.9285 13.8978 20.4208 13.8978 22.4106V31.4891H8.47638V15.6951L13.6514 14.3271V17.3118C14.2131 16.4033 14.9935 15.6531 15.9199 15.1312C16.8464 14.6093 17.8886 14.3327 18.9496 14.3271C23.2621 14.3271 24.8639 16.8143 24.8639 20.7939V31.4891ZM30.0389 31.4891L24.4942 14.8245H30.1621L33.2425 26.0171L36.3228 14.8245H41.7443L36.1996 31.4891H30.0389ZM52.5871 20.7939C52.4255 20.0458 52.024 19.3724 51.4449 18.8778C50.8658 18.3832 50.1413 18.095 49.3836 18.0579C46.9193 18.0579 45.8103 20.2965 45.8103 22.6594L52.5871 20.7939ZM49.8764 28.38C51.0417 28.3802 52.1915 28.1114 53.238 27.594C54.2844 27.0767 55.1997 26.3246 55.9139 25.3953L57.3925 29.3749C55.1573 31.0783 52.4307 31.9956 49.63 31.9865C44.3318 31.9865 40.5121 28.8775 40.5121 23.1568C40.495 21.9819 40.7137 20.8157 41.1551 19.7285C41.5964 18.6412 42.2513 17.6554 43.0802 16.8303C43.9091 16.0053 44.8949 15.3582 45.9782 14.928C47.0615 14.4978 48.2199 14.2934 49.3836 14.3271C54.5586 14.3271 57.7621 17.8092 57.7621 23.0324L46.3032 26.2659C46.6216 26.9381 47.132 27.4987 47.7689 27.8755C48.4057 28.2523 49.1398 28.428 49.8764 28.38ZM68.2354 21.167C69.4812 21.3307 70.6898 21.7093 71.8086 22.2863C72.4245 22.6974 72.9353 23.2497 73.2993 23.8981C73.6634 24.5465 73.8703 25.2726 73.9032 26.0171C73.9032 30.4942 69.8372 31.9865 65.8943 31.9865C61.9514 31.9865 58.6246 30.7429 58.0086 27.012L62.5675 25.644C62.5986 26.0528 62.7095 26.4513 62.8938 26.8167C63.0781 27.182 63.3321 27.5069 63.6413 27.7728C63.9505 28.0386 64.3088 28.2401 64.6954 28.3657C65.0821 28.4912 65.4895 28.5384 65.8943 28.5044C67.0032 28.5044 68.605 28.0069 68.605 26.6389C68.605 25.271 66.88 25.1466 65.8943 24.8979L63.7996 24.4004C61.0889 23.903 58.3782 23.0324 58.3782 19.4259C58.3782 15.8194 62.6907 14.3271 65.8943 14.3271C69.0979 14.3271 72.9175 15.322 73.4104 18.6798L68.7282 19.9234C68.4818 18.431 67.4961 17.9336 65.7711 17.9336C64.0461 17.9336 63.7996 18.1823 63.7996 19.1772C63.7996 20.1721 65.6479 20.6696 66.5104 20.9183L68.2354 21.167ZM80.1872 18.431V25.8928C80.1872 26.6389 80.4336 27.2608 81.1729 27.3851C82.1531 27.5973 83.1707 27.5545 84.13 27.2608L83.0211 31.4891H80.5568C75.9979 31.4891 74.7657 30.2455 74.7657 25.644V11.8398L80.1872 10.3475V14.8245H84.13L83.1443 18.431H80.1872ZM84.8693 15.8194L90.2907 14.3271V31.4891H84.8693V15.8194ZM103.105 23.2812C103.105 21.2914 103.228 18.9285 100.518 18.9285C100.08 18.9253 99.6467 19.0162 99.2467 19.1953C98.8466 19.3743 98.489 19.6373 98.1975 19.9668C97.9061 20.2962 97.6875 20.6846 97.5564 21.106C97.4253 21.5274 97.3847 21.9721 97.4372 22.4106V31.4891H92.139V15.6951L97.314 14.3271V17.3118C97.8756 16.4033 98.6561 15.6531 99.5825 15.1312C100.509 14.6093 101.551 14.3327 102.612 14.3271C106.925 14.3271 108.526 16.8143 108.526 20.7939V31.4891H103.105V23.2812ZM118.26 18.5554C115.796 18.5554 115.057 20.6696 115.057 22.6594C115.057 24.6491 115.919 26.6389 118.137 26.6389C120.355 26.6389 121.464 24.8979 121.464 22.7837C121.464 20.6696 120.602 18.5554 118.26 18.5554ZM118.014 37.3341C114.81 37.3341 111.36 36.4636 110.251 32.8571L115.057 31.6134C115.29 32.2791 115.725 32.8537 116.3 33.2556C116.875 33.6575 117.561 33.8661 118.26 33.852C120.478 33.852 121.341 31.9865 121.341 29.8724V28.2557C120.884 29.0283 120.234 29.6653 119.455 30.1022C118.676 30.539 117.796 30.7601 116.905 30.7429C111.976 30.7429 109.635 27.2608 109.635 22.535C109.635 17.8092 112.223 14.3271 116.905 14.3271C117.808 14.3224 118.696 14.5623 119.476 15.0216C120.256 15.4809 120.9 16.1429 121.341 16.9387V15.6951L126.516 14.3271V29.4993C126.516 34.7225 122.696 37.3341 118.014 37.3341Z" fill="black"></path><path d="M129.217 7.97278H137.248C138.395 7.97278 139.498 8.08414 140.555 8.30687C141.635 8.52959 142.58 8.90823 143.39 9.44277C144.2 9.95504 144.841 10.6566 145.313 11.5475C145.808 12.4162 146.056 13.5075 146.056 14.8216C146.056 16.3139 145.797 17.5166 145.279 18.4298C144.762 19.3429 144.065 20.0557 143.187 20.5679C142.31 21.0579 141.286 21.392 140.116 21.5702C138.969 21.7484 137.766 21.8375 136.506 21.8375H133.469V31.6263H129.217V7.97278ZM136.033 18.2293C136.641 18.2293 137.271 18.207 137.923 18.1625C138.575 18.118 139.172 17.9843 139.712 17.7616C140.274 17.5389 140.724 17.2048 141.061 16.7593C141.421 16.3139 141.601 15.6902 141.601 14.8884C141.601 14.1534 141.444 13.5743 141.129 13.1512C140.814 12.7057 140.409 12.3716 139.914 12.1489C139.419 11.9039 138.868 11.748 138.26 11.6812C137.653 11.6143 137.068 11.5809 136.506 11.5809H133.469V18.2293H136.033Z" fill="url(#paint0_linear)"></path><path d="M147.26 15.59H151.31V18.1291H151.377C151.827 17.1936 152.468 16.4698 153.301 15.9575C154.133 15.4452 155.089 15.1891 156.169 15.1891C156.417 15.1891 156.653 15.2114 156.878 15.2559C157.125 15.3005 157.62 15.423 157.62 15.423L155.663 18.9977C155.663 18.9977 153.953 19.1759 153.368 19.5323C152.806 19.8664 152.367 20.2561 152.052 20.7016C151.76 21.147 151.557 21.5925 151.445 22.0379C151.355 22.4834 151.31 22.8175 151.31 23.0402V31.6263H147.26V15.59Z" fill="url(#paint1_linear)"></path><path d="M156.231 23.6082C156.231 22.3386 156.456 21.1916 156.906 20.167C157.379 19.1202 158.009 18.2293 158.796 17.4943C159.583 16.7593 160.517 16.1914 161.597 15.7905C162.677 15.3896 163.824 15.1891 165.039 15.1891C166.254 15.1891 167.401 15.3896 168.481 15.7905C169.561 16.1914 170.494 16.7593 171.282 17.4943C172.069 18.2293 172.688 19.1202 173.138 20.167C173.61 21.1916 173.846 22.3386 173.846 23.6082C173.846 24.8777 173.61 26.0359 173.138 27.0827C172.688 28.1072 172.069 28.987 171.282 29.722C170.494 30.457 169.561 31.0249 168.481 31.4258C167.401 31.8267 166.254 32.0272 165.039 32.0272C163.824 32.0272 162.677 31.8267 161.597 31.4258C160.517 31.0249 159.583 30.457 158.796 29.722C158.009 28.987 157.379 28.1072 156.906 27.0827C156.456 26.0359 156.231 24.8777 156.231 23.6082ZM160.281 23.6082C160.281 24.2318 160.382 24.8331 160.584 25.4122C160.809 25.9913 161.124 26.5036 161.529 26.949C161.957 27.3945 162.463 27.7509 163.048 28.0181C163.633 28.2854 164.296 28.419 165.039 28.419C165.781 28.419 166.445 28.2854 167.03 28.0181C167.615 27.7509 168.11 27.3945 168.515 26.949C168.942 26.5036 169.257 25.9913 169.459 25.4122C169.684 24.8331 169.797 24.2318 169.797 23.6082C169.797 22.9845 169.684 22.3832 169.459 21.8041C169.257 21.225 168.942 20.7127 168.515 20.2673C168.11 19.8218 167.615 19.4654 167.03 19.1982C166.445 18.9309 165.781 18.7973 165.039 18.7973C164.296 18.7973 163.633 18.9309 163.048 19.1982C162.463 19.4654 161.957 19.8218 161.529 20.2673C161.124 20.7127 160.809 21.225 160.584 21.8041C160.382 22.3832 160.281 22.9845 160.281 23.6082Z" fill="url(#paint2_linear)"></path>
<defs>
<linearGradient id="paint0_linear" x1="129.217" y1="12.5164" x2="147.954" y2="40.5234" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6B00"></stop>
<stop offset="1" stop-color="#FFA500"></stop>
</linearGradient>
<linearGradient id="paint1_linear" x1="129.217" y1="12.5164" x2="147.954" y2="40.5234" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6B00"></stop>
<stop offset="1" stop-color="#FFA500"></stop>
</linearGradient>
<linearGradient id="paint2_linear" x1="129.217" y1="12.5164" x2="147.954" y2="40.5234" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6B00"></stop>
<stop offset="1" stop-color="#FFA500"></stop>
</linearGradient>
</defs>
</svg></a></li><li style="width:px;"><span class="smallGrayEmptyArrow"></span><a href="/members-admin/settings-edit-user-details" class="arial_12 bold">Configuración</a></li><li style="width:px;"><span class="smallGrayEmptyArrow"></span><a href="/members-admin/logout?logoutToken=f95aeefdae5bae03ef778e4c78066ab5" class="arial_12 bold">Cerrar sesión</a></li></ul></div></div><div id="settingsDropDown" class="subMenuOneColumnWrap hoverboxWithShadow settingsPopup" onmouseover="settingsDropDown.render();" onmouseout="settingsDropDown.render();"><div class="subMenuOneColumn"><ul class="bold "></ul><div class="dottedBorder">&nbsp;</div><ul class="noBold "></ul></div><span class="arrow">&nbsp;</span></div> </span>
<a href="/pro/?entry=navbar_icon" class="topBarIconWrap" onclick="trackInvestingProTopBarIconClick()">
<i>
<img class="topBarInvestingProIcon" alt="Investing Pro" src="https://i-invdn-com.investing.com/InvestingProShield.svg" width="14" height="15" />
</i>
</a>
<script type="text/javascript">
        function trackInvestingProTopBarIconClick() {
          if (window.sessionStorage && window.sessionStorage.setItem)
            window.sessionStorage.setItem('investing.referralComponent', 'navbar_icon');

          ga('allSitesTracker.send', 'event', {
            eventCategory: 'inv pro premium',
            eventAction: 'click on investing pro hook',
            eventLabel: 'navbar_icon',
            dimension147 /* event_name_cd */: "click_on_investing_pro_premium_hook",
            dimension163 /* action_cd */: 'click',
            dimension148 /* object */: 'icon',
            dimension162 /* product_feature */: 'none',
            dimension167 /* referral_component */: 'navbar_icon',
            dimension137 /* ui_template */: '3-Above_the_fold_line-none-none-Orange-Black-none-none',
            dimension150: /* event_cd_description1 */ 'destination URL',
            dimension151: /* event_cd_value1 */ '/pro/?entry=navbar_icon',
            dimension75 /* instrument_type */: '',
            dimension138 /* instrument_id */: '',
            dimension145 /* instrument_trend */: '',
            dimension118 /* content_id */: '',
          });
        }
      </script>
<span id="topBarAlertCenterBtn" class="topBarIconWrap">
<i class="topBarAlertsIcon"></i><i class="topBarAlertBadge js-badge arial_10 displayNone">0</i></span>
<span id="portfolioTopBarBtn" class="topBarIconWrap">
<i class="topBarPortfolioIcon"></i></span>
<span id="topBarMarketBtn" class="topBarIconWrap">
<i class="topBarWorldMarketsIcon"></i></span>
 <div class="langSelect inlineblock">
<div id="langSelect" class="inlineblock pointer" onmouseover="$('#editionContainer').fadeOut('fast'); flagsDropDown.render();" onmouseout="flagsDropDown.render();"><span class="ceFlags Spain middle inlineblock"></span></div>
<div id="TopFlagsContainer" class="tooltipPopup countrySelPopup bigArrowTopbar noHeader displayNone" onmouseover="flagsDropDown.render();" onmouseout="flagsDropDown.render();">
<div class="content">
<ul><li><a href="https://www.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to www.investing.com'); setTimeout('document.location = \'https://www.investing.com\'', 500);return false;"><span class="ceFlags USA"></span>English (USA)</a></li><li><a href="https://ru.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to ru.investing.com'); setTimeout('document.location = \'https://ru.investing.com\'', 500);return false;"><span class="ceFlags Russian_Federation"></span>Русский</a></li><li><a href="https://uk.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to uk.investing.com'); setTimeout('document.location = \'https://uk.investing.com\'', 500);return false;"><span class="ceFlags UK"></span>English (UK)</a></li><li><a href="https://tr.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to tr.investing.com'); setTimeout('document.location = \'https://tr.investing.com\'', 500);return false;"><span class="ceFlags Turkey"></span>Türkçe</a></li><li><a href="https://in.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to in.investing.com'); setTimeout('document.location = \'https://in.investing.com\'', 500);return false;"><span class="ceFlags India"></span>English (India)</a></li><li><a href="https://sa.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to sa.investing.com'); setTimeout('document.location = \'https://sa.investing.com\'', 500);return false;"><span class="ceFlags Saudi_Arabia"></span>‏العربية‏</a></li><li><a href="https://ca.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to ca.investing.com'); setTimeout('document.location = \'https://ca.investing.com\'', 500);return false;"><span class="ceFlags Canada"></span>English (Canada)</a></li><li><a href="https://gr.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to gr.investing.com'); setTimeout('document.location = \'https://gr.investing.com\'', 500);return false;"><span class="ceFlags Greece"></span>Ελληνικά</a></li><li><a href="https://au.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to au.investing.com'); setTimeout('document.location = \'https://au.investing.com\'', 500);return false;"><span class="ceFlags Australia"></span>English (Australia)</a></li><li><a href="https://se.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to se.investing.com'); setTimeout('document.location = \'https://se.investing.com\'', 500);return false;"><span class="ceFlags Sweden"></span>Svenska</a></li><li><a href="https://za.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to za.investing.com'); setTimeout('document.location = \'https://za.investing.com\'', 500);return false;"><span class="ceFlags South_Africa"></span>English (South Africa)</a></li><li><a href="https://fi.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to fi.investing.com'); setTimeout('document.location = \'https://fi.investing.com\'', 500);return false;"><span class="ceFlags Finland"></span>Suomi</a></li><li><a href="https://ph.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to ph.investing.com'); setTimeout('document.location = \'https://ph.investing.com\'', 500);return false;"><span class="ceFlags Philippines"></span>English (Philippines)</a></li><li><a href="https://il.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to il.investing.com'); setTimeout('document.location = \'https://il.investing.com\'', 500);return false;"><span class="ceFlags Israel"></span>עברית</a></li><li><a href="https://ng.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to ng.investing.com'); setTimeout('document.location = \'https://ng.investing.com\'', 500);return false;"><span class="ceFlags Nigeria"></span>English (Nigeria)</a></li><li><a href="https://jp.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to jp.investing.com'); setTimeout('document.location = \'https://jp.investing.com\'', 500);return false;"><span class="ceFlags Japan"></span>日本語</a></li><li><a href="https://de.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to de.investing.com'); setTimeout('document.location = \'https://de.investing.com\'', 500);return false;"><span class="ceFlags Germany"></span>Deutsch</a></li><li><a href="https://kr.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to kr.investing.com'); setTimeout('document.location = \'https://kr.investing.com\'', 500);return false;"><span class="ceFlags South_Korea"></span>한국어</a></li><li><a href="https://mx.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to mx.investing.com'); setTimeout('document.location = \'https://mx.investing.com\'', 500);return false;"><span class="ceFlags Mexico"></span>Español (México)</a></li><li><a href="https://cn.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to cn.investing.com'); setTimeout('document.location = \'https://cn.investing.com\'', 500);return false;"><span class="ceFlags China"></span>简体中文</a></li><li><a href="https://fr.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to fr.investing.com'); setTimeout('document.location = \'https://fr.investing.com\'', 500);return false;"><span class="ceFlags France"></span>Français</a></li><li><a href="https://hk.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to hk.investing.com'); setTimeout('document.location = \'https://hk.investing.com\'', 500);return false;"><span class="ceFlags Hong_Kong"></span>繁體中文</a></li><li><a href="https://it.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to it.investing.com'); setTimeout('document.location = \'https://it.investing.com\'', 500);return false;"><span class="ceFlags Italy"></span>Italiano</a></li><li><a href="https://id.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to id.investing.com'); setTimeout('document.location = \'https://id.investing.com\'', 500);return false;"><span class="ceFlags Indonesia"></span>Bahasa Indonesia</a></li><li><a href="https://nl.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to nl.investing.com'); setTimeout('document.location = \'https://nl.investing.com\'', 500);return false;"><span class="ceFlags Netherlands"></span>Nederlands</a></li><li><a href="https://ms.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to ms.investing.com'); setTimeout('document.location = \'https://ms.investing.com\'', 500);return false;"><span class="ceFlags Malaysia"></span>Bahasa Melayu</a></li><li><a href="https://pt.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to pt.investing.com'); setTimeout('document.location = \'https://pt.investing.com\'', 500);return false;"><span class="ceFlags Portugal"></span>Português (Portugal)</a></li><li><a href="https://th.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to th.investing.com'); setTimeout('document.location = \'https://th.investing.com\'', 500);return false;"><span class="ceFlags Thailand"></span>ไทย</a></li><li><a href="https://pl.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to pl.investing.com'); setTimeout('document.location = \'https://pl.investing.com\'', 500);return false;"><span class="ceFlags Poland"></span>Polski</a></li><li><a href="https://vn.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to vn.investing.com'); setTimeout('document.location = \'https://vn.investing.com\'', 500);return false;"><span class="ceFlags Vietnam"></span>Tiếng Việt</a></li><li><a href="https://br.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to br.investing.com'); setTimeout('document.location = \'https://br.investing.com\'', 500);return false;"><span class="ceFlags Brazil"></span>Português (Brasil)</a></li><li><a href="https://hi.investing.com" onclick="ga('allSitesTracker.send', 'event', 'Edition Redirect Popup', 'Users Choice', 'Redirect to hi.investing.com'); setTimeout('document.location = \'https://hi.investing.com\'', 500);return false;"><span class="ceFlags India"></span>हिंदी</a></li></ul> </div>
</div>


</div>
</div>
</div>

</div>
<script type="text/javascript">

	loader([{
		type: 'component', value: 'Translate'
	}]).ready(function(Translate) {
		Translate
			.setDictionary('TopBarAlertsSignInPopup', {
				'popupHeader': 'Alertas recientes',
				'notLoggedInText': "Dese de alta para crear alertas sobre sus instrumentos, \neventos econ\u00f3micos y autores favoritos",
				'iconClasses': 'signinIcon',
				'popupClasses': 'topBarAlertsSignInPopup'
			})
			.setDictionary('TopBarPortfolioSignInPopup', {
				'popupHeader': 'Mi cartera',
				'notLoggedInText': "Reg\u00edstrese para crear y gestionar su propia lista de seguimiento de activos y sus posiciones con la herramienta de carteras de Investing.com.",
				'iconClasses': 'signinIconPortfolio',
				'popupClasses': 'topBarPortfolioBox'
			});
	})
</script>
<style type="text/css">
  .navMenuUL>li>.nav {
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
<div id="navBar" class="navBar">
<nav id="navMenu" class="navMenuWrapper">
<ul class="navMenuUL">
<li>
<a href="/markets/" class="nav">Mercados</a>
<ul class="subMenuNav">
<li class="row">
<a href="/indices/">Índices</a>
<div class="navBarDropDown">
<ul class="main">
<li><a class=" " href="/indices/major-indices">Principales índices</a></li>
<li><a class=" " href="/indices/indices-futures">Futuros de índices</a></li>
<li><a class=" " href="/indices/world-indices">Índices mundiales</a></li>
<li><a class=" " href="/indices/indices-cfds">Índices en tiempo real</a></li>
<li><a class=" " href="/indices/spain-indices">Índices españoles</a></li>
<li><a class=" " href="/indices/global-indices">Índices globales</a></li>
<li><a class=" " href="/commodities/futures-specifications">Especificación</a></li> </ul>
<ul class="popular">
<li><a href="/indices/spain-35">IBEX 35</a></li>
<li><a href="/indices/germany-30">DAX</a></li>
<li><a href="/indices/eu-stoxx50">Euro Stoxx 50</a></li>
<li><a href="/indices/us-spx-500">S&P 500</a></li>
<li><a href="/indices/us-30">Dow Jones</a></li>
<li><a href="/indices/merv">S&P Merval</a></li>
<li><a href="/indices/japan-ni225">Nikkei 225</a></li>
<li><a href="/indices/general-madrid">I.G. Bolsa Madrid</a></li>
</ul>
</div> </li>
<li class="row">
<a href="/equities/">Acciones</a>
<div class="navBarDropDown">
<ul class="main">
<li><a class=" " href="/stock-screener/">Buscador de acciones</a></li>
<li><a class=" " href="/equities/trending-stocks">Valores tendencia</a></li>
<li><a class=" " href="/equities/spain">España</a></li>
<li><a class=" " href="/equities/europe">Europa</a></li>
<li><a class=" " href="/equities/americas">América</a></li>
<li><a class=" " href="/equities/pre-market">Preapertura EE.UU.</a></li>
<li><a class=" " href="/equities/52-week-high">Máx. 52 semanas</a></li>
<li><a class=" " href="/equities/52-week-low">Mín. 52 semanas</a></li>
<li><a class=" " href="/equities/most-active-stocks">Más activos</a></li>
<li><a class=" " href="/equities/top-stock-gainers">Ganadores</a></li>
<li><a class=" " href="/equities/top-stock-losers">Perdedores</a></li>
<li><a class=" " href="/equities/world-adrs">ADR mundiales</a></li>
<li><a class=" " href="/equities/spain-adrs">ADR España</a></li>
<li><a class=" " href="/equities/cannabis-stocks">Acciones Cannabis</a></li> </ul>
<ul class="popular">
<li><a href="/equities/banco-santander">Santander</a></li>
<li><a href="/equities/bbva">BBVA</a></li>
<li><a href="/equities/telefonica">Telefónica</a></li>
<li><a href="/equities/ohl">OHL</a></li>
<li><a href="/equities/gamesa">Siemens Gamesa</a></li>
<li><a href="/equities/iberdrola">Iberdrola</a></li>
<li><a href="/equities/repsol-ypf">Repsol</a></li>
<li><a href="/equities/inditex">Inditex</a></li>
<li><a href="/equities/arcelormittal-reg?cid=32439">ArcelorMittal</a></li>
<li><a href="/equities/abengoa-b">Abengoa B</a></li>
<li><a href="/equities/sacyr-valle">Sacyr</a></li>
<li><a href="/equities/dia">DIA</a></li>
<li><a href="/equities/apple-computer-inc">Apple</a></li>
 <li><a href="/equities/tesla-motors">Tesla</a></li>
<li><a href="/equities/amazon-com-inc">Amazon.com</a></li>
<li><a href="/equities/facebook-inc">Meta Platforms</a></li>
</ul>
</div> </li>
<li class="row">
<a href="/commodities/">Materias primas</a>
<div class="navBarDropDown">
<ul class="main">
<li><a class=" " href="/commodities/real-time-futures">Materias primas</a></li>
<li><a class=" " href="/commodities/metals">Metales</a></li>
<li><a class=" " href="/commodities/grains">Granos</a></li>
<li><a class=" " href="/commodities/energy">Energías</a></li>
<li><a class=" " href="/indices/commodities-indices">Índices de materias primas</a></li>
<li><a class=" " href="/commodities/softs">Perecederos</a></li>
<li><a class=" " href="/commodities/meats">Carnes</a></li> </ul>
<ul class="popular">
<li><a href="/commodities/gold">Oro</a></li>
<li><a href="/commodities/crude-oil">Petróleo crudo WTI</a></li>
<li><a href="/commodities/silver">Plata</a></li>
<li><a href="/commodities/us-coffee-c">Café C EE.UU.</a></li>
<li><a href="/commodities/copper">Cobre</a></li>
<li><a href="/commodities/brent-oil">Petróleo Brent</a></li>
<li><a href="/commodities/us-cocoa">Cacao EE.UU.</a></li>
</ul>
</div> </li>
<li class="row">
<a href="/currencies/">Divisas</a>
<div class="navBarDropDown">
<ul class="main">
<li><a class=" " href="/currencies/us-dollar-index">Índice dólar</a></li>
<li><a class=" " href="/currencies/streaming-forex-rates-majors">Principales Divisas</a></li>
<li><a class=" " href="/currencies/single-currency-crosses">Tipos de cambio</a></li>
<li><a class=" " href="/currencies/live-currency-cross-rates">Cambio cruzados</a></li>
<li><a class=" " href="/currencies/exchange-rates-table">Tabla de tipos de cambio</a></li>
<li><a class=" " href="/currencies/fx-futures">Futuros de Divisas</a></li>
<li><a class=" " href="/currencies/forex-options">Opciones de Divisas</a></li> </ul>
<ul class="popular">
<li><a href="/currencies/eur-usd">EUR/USD</a></li>
<li><a href="/currencies/gbp-usd">GBP/USD</a></li>
<li><a href="/currencies/eur-jpy">EUR/JPY</a></li>
<li><a href="/currencies/usd-brl">USD/BRL</a></li>
<li><a href="/currencies/eur-gbp">EUR/GBP</a></li>
<li><a href="/currencies/usd-mxn">USD/MXN</a></li>
<li><a href="/currencies/eur-chf">EUR/CHF</a></li>
<li><a href="/currencies/usd-jpy">USD/JPY</a></li>
<li><a href="/currencies/usd-rub">USD/RUB</a></li>
<li><a href="/currencies/eur-rub">EUR/RUB</a></li>
</ul>
</div> </li>
<li class="row">
<a href="/crypto/">Cripto</a>
<div class="navBarDropDown">
<ul class="main">
<li><a class=" " href="/crypto/currency-pairs">Pares de criptomonedas</a></li>
<li><a class=" " href="/crypto/currencies">Todas las criptomonedas</a></li>
<li><a class=" " href="/crypto/bitcoin">Bitcoin</a></li>
<li><a class=" " href="/crypto/ethereum">Ethereum</a></li>
<li><a class=" " href="/crypto/dogecoin">Dogecoin</a></li>
<li><a class=" " href="/crypto/solana">Solana</a></li>
<li><a class=" " href="/crypto/cardano">Cardano</a></li>
<li><a class=" " href="/crypto/xrp">XRP</a></li>
<li><a class=" " href="/currency-converter/?tag=Cryptocurrency">Conversor de divisas</a></li> </ul>
<ul class="popular">
<li><a href="/crypto/bitcoin/btc-usd">BTC/USD</a></li>
<li><a href="/crypto/dogecoin/doge-usd">DOGE/USD</a></li>
<li><a href="/crypto/shiba-inu/shib-usd">SHIB/USD</a></li>
<li><a href="/crypto/xrp/xrp-usd">XRP/USD</a></li>
<li><a href="/crypto/shiba-inu/shib-eur">SHIB/EUR</a></li>
<li><a href="/crypto/ethereum/eth-eur">ETH/EUR</a></li>
<li><a href="/crypto/cardano/ada-eur">ADA/EUR</a></li>
<li><a href="/crypto/bitcoin/btc-eur">BTC/EUR</a></li>
<li><a href="/crypto/xrp/xrp-eur">XRP/EUR</a></li>
</ul>
</div> </li>
<li class="row">
<a href="/etfs/">ETFs</a>
<div class="navBarDropDown">
<ul class="main">
<li><a class=" " href="/etfs/major-etfs">Principales ETFs</a></li>
<li><a class=" " href="/etfs/spain-etfs">España - ETFs</a></li>
<li><a class=" " href="/etfs/world-etfs">ETFs Mundiales</a></li>
<li><a class=" " href="/etfs/cannabis-etfs">ETFs Cannabis</a></li> </ul>
<ul class="popular">
<li><a href="/etfs/spdr-s-p-500">SPDR S&P 500</a></li>
<li><a href="/etfs/ishares-msci-emg-markets">iShares MSCI Emerging Markets</a></li>
<li><a href="/etfs/spdr-gold-trust">SPDR Gold Shares</a></li>
<li><a href="/etfs/bbva-accion-ibex-35">Accion IBEX 35 Cotizado Armonizado FI</a></li>
</ul>
</div> </li>
<li class="row">
<a href="/funds/">Fondos</a>
<div class="navBarDropDown">
<ul class="main">
<li><a class=" " href="/funds/world-funds">Fondos mundiales</a></li>
<li><a class=" " href="/funds/major-funds">Principales fondos</a></li> </ul>
<ul class="popular">
<li><a href="/funds/caixabank-equilibrio-estandar-fi">Caixabank Equilibrio Estandar FI</a></li>
<li><a href="/funds/sabadell-rendimiento-base-fi">Sabadell Rendimiento Base FI</a></li>
<li><a href="/funds/quality-inversion-conservadora-fi">Quality Inversion Conservadora FI</a></li>
<li><a href="/funds/caixabank-iter-extra-fi">Caixabank Iter Extra FI</a></li>
</ul>
</div> </li>
<li class="row">
<a href="/rates-bonds/">Renta fija</a>
<div class="navBarDropDown">
<ul class="main">
<li><a class=" " href="/rates-bonds/world-government-bonds">Bonos del Estado</a></li>
<li><a class=" " href="/rates-bonds/government-bond-spreads">Prima de riesgo</a></li>
<li><a class=" " href="/rates-bonds/financial-futures">Futuros financieros</a></li>
<li><a class=" " href="/indices/bond-indices">Índices de bonos</a></li>
<li><a class=" " href="/rates-bonds/forward-rates">Cotizaciones forward</a></li> </ul>
<ul class="popular">
<li><a href="/rates-bonds/spain-10-year-bond-yield">español a 10 años</a></li>
<li><a href="/rates-bonds/spain-2-year-bond-yield">español a 2 años</a></li>
<li><a href="/rates-bonds/de-10y-vs-es-10y">Prima de riesgo España</a></li>
<li><a href="/rates-bonds/us-30-yr-t-bond">EE.UU. 30 años</a></li>
<li><a href="/rates-bonds/germany-10-year-bond-yield">alemán a 10 años</a></li>
<li><a href="/rates-bonds/euro-schatz">Euro Schatz</a></li>
<li><a href="/rates-bonds/u.s.-10-year-bond-yield">EE.UU. 10A</a></li>
<li><a href="/rates-bonds/u.s.-30-year-bond-yield">EE.UU. 30A</a></li>
<li><a href="/rates-bonds/euro-bund">Euro Bund</a></li>
<li><a href="/rates-bonds/euro-bobl">Euro Bobl</a></li>
</ul>
</div> </li>
<li class="row">
<a href="/certificates/">Certificados</a>
<div class="navBarDropDown">
<ul class="main">
<li><a class=" " href="/certificates/major-certificates">Certificados principales</a></li>
<li><a class=" " href="/certificates/world-certificates">Certificados del mundo</a></li> </ul>
<ul class="popular">
<li><a href="/certificates/sg-ftse-mib-gross-tr-5x-s-18jun21">SG FTSE MIB Gross TR 5x Daily Short Strategy RT 18</a></li>
<li><a href="/certificates/vontobel-7x-long-natural-gas-8.06">Vontobel 7X Long Fixed Lever on Natural Gas 8.06</a></li>
<li><a href="/certificates/bnp-call-500.59-eur-aex-31dec99">BNP Call 500.59 EUR AEX 31Dec99</a></li>
<li><a href="/certificates/commerz-put-cac-fut-05-17-31dec99">COMMERZBANK AG Put CAC FUT 05/17 31Dec99</a></li>
</ul>
</div> </li>
</ul> </li>
<li>
<a class="nav" href="//es.investing.com/portfolio/" data-reg_ep="my watchlist navigation menu">
Mi cartera </a>
</li>
<li>
<a class="nav" href="//es.investing.com/crypto/">
Criptomonedas </a>
<div class="navBarDropDown" style="width: 387px">
<ul class="main" style="width: 200px">
<li class="navTitle">Criptomonedas</li>
<li><a class=" " href="/crypto/currencies">Todas las criptomonedas</a></li>
<li><a class=" " href="/crypto/currency-pairs">Pares de criptomonedas</a></li>
<li><a class=" " href="/crypto/ico-calendar">Calendario de ICO</a></li>
<li><a class=" " href="/brokers/cryptocurrency-brokers/">Brokers de criptomonedas</a></li>
<li><a class=" " href="/crypto/bitcoin">Bitcoin</a></li>
<li><a class=" " href="/crypto/ethereum">Ethereum</a></li>
<li><a class=" " href="/crypto/xrp">XRP</a></li>
<li><a class=" " href="/crypto/litecoin">Litecoin</a></li>
<li><a class=" " href="/currency-converter/?tag=Cryptocurrency">Conversor de divisas</a></li> </ul>
<ul class="popular" style="width: 187px">
<li class="navTitle">Más en Criptomonedas</li>
<li><a href="/crypto/bitcoin/btc-usd">BTC/USD</a></li>
<li><a href="/crypto/ethereum/eth-usd">ETH/USD</a></li>
<li><a href="/crypto/litecoin/ltc-usd">LTC/USD</a></li>
<li><a href="/crypto/ethereum-classic/etc-usd">ETC/USD</a></li>
<li><a href="/crypto/ethereum/eth-btc">ETH/BTC</a></li>
<li><a href="/crypto/iota/iota-usd">IOTA/USD</a></li>
<li><a href="/crypto/xrp/xrp-usd">XRP/USD</a></li>
<li><a href="/crypto/bitcoin/bitcoin-futures">Futuros Bitcoin CME</a></li>
</ul>
</div> </li>
<li>
<a class="nav" href="//es.investing.com/news/">
Noticias </a>
<div class="navBarDropDown" style="width: 367px">
<ul class="main" style="width: 180px">
<li class="navTitle">Noticias</li>
<li><a class=" " href="/news/forex-news">Noticias de Divisas</a></li>
<li><a class=" " href="/news/commodities-news">Commodities</a></li>
<li><a class=" " href="/news/stock-market-news">Bolsa</a></li>
<li><a class=" " href="/news/economic-indicators">Datos macro</a></li>
<li><a class=" " href="/news/economy">Economía</a></li>
<li><a class=" " href="/news/technology-news">Tecnología</a></li>
<li><a class=" " href="/news/general">Fondos</a></li>
<li><a class=" " href="/news/cryptocurrency-news">Cripto</a></li> </ul>
<ul class="popular" style="width: 187px">
<li class="navTitle">Más en Noticias</li>
 <li><a href="/news/latest-news">Últimas noticias</a></li>
<li><a href="/news/most-popular-news">Lo más leído</a></li>
<li><a href="/news/headlines">Titulares Pro</a></li>
<li><a href="/economic-calendar/">Calendario Económico</a></li>
<li><a href="/news/world-news">Internacional</a></li>
<li><a href="/news/coronavirus">Coronavirus</a></li>
</ul>
</div> </li>
<style type="text/css">
                #investingProNavMenuItemBlack { display:none; }
                #investingProNavMenuItem:hover #investingProNavMenuItemBlack { display:inline; }
                #investingProNavMenuItem:hover #investingProNavMenuItemWhite { display:none; }
              </style>
<li>
<a class="nav" href="/pro/?entry=navbar_logo" id="investingProNavMenuItem" onclick="trackInvestingProTopMenuLogoClick()">
<img id="investingProNavMenuItemWhite" src="https://i-invdn-com.investing.com/InvestingProWhiteText.svg" alt="InvestingPro" width="70" height="12" style="position:relative;top:2px;" />
<img id="investingProNavMenuItemBlack" src="https://i-invdn-com.investing.com/InvestingProBlackText.svg" alt="InvestingPro" width="70" height="12" style="position:relative;top:2px;" />
</a>
</li>
<script type="text/javascript">
                  function trackInvestingProTopMenuLogoClick() {
                    if (window.sessionStorage && window.sessionStorage.setItem)
                      window.sessionStorage.setItem("investing.referralComponent", "navbar_logo");

                    ga("allSitesTracker.send", "event", {
                      eventCategory: "inv pro premium",
                      eventAction: "click on investing pro hook",
                      eventLabel: "navbar_logo",
                      dimension147 /* event_name_cd */: "click_on_investing_pro_premium_hook",
                      dimension163 /* action_cd */: "click",
                      dimension148 /* object */: "logo",
                      dimension162 /* product_feature */: "none",
                      dimension167 /* referral_component */: "navbar_logo",
                      dimension137 /* ui_template */: "4-Above_the_fold_line-none-InvestingPro-none-Black-none-none",
                      dimension150: /* event_cd_description1 */ "destination URL",
                      dimension151: /* event_cd_value1 */ "/pro/?entry=navbar_logo",
                      dimension75 /* instrument_type */: "",
                      dimension138 /* instrument_id */: "",
                      dimension145 /* instrument_trend */: "",
                      dimension118 /* content_id */: "",
          });
                  }
                </script>
<li>
<a class="nav" href="//es.investing.com/analysis/">
Análisis </a>
<div class="navBarDropDown" style="width: 346px">
<ul class="main" style="width: 159px">
<li class="navTitle">Análisis</li>
<li><a class=" " href="/analysis/market-overview">Visión del mercado</a></li>
<li><a class=" " href="/analysis/forex">Análisis de Divisas</a></li>
<li><a class=" " href="/analysis/stock-markets">Bolsa</a></li>
<li><a class=" " href="/analysis/commodities">Materias primas</a></li>
<li><a class=" " href="/analysis/bonds">Bonos</a></li>
<li><a class=" " href="/analysis/etfs">ETFs</a></li>
<li><a class=" " href="/analysis/cryptocurrency">Criptomonedas</a></li> </ul>
<ul class="popular" style="width: 187px">
<li class="navTitle">Más en Análisis</li>
<li><a href="/analysis/most-popular-analysis">Análisis más populares</a></li>
<li><a href="/analysis/editors-picks">Selección del editor</a></li>
<li><a href="/analysis/comics">Cómics</a></li>
</ul>
</div> </li>
<li>
<a class="nav" href="//es.investing.com/charts/">
Gráficos </a>
<div class="navBarDropDown" style="width: 430px">
<ul class="main" style="width: 210px">
<li class="navTitle">Gráficos en Tiempo Real</li>
<li><a class=" " href="/charts/live-charts">Gráficos tiempo real</a></li>
<li><a class=" " href="/charts/forex-charts">Gráfico de Divisas</a></li>
<li><a class=" " href="/charts/futures-charts">Gráfico futuros</a></li>
<li><a class=" " href="/charts/stocks-charts">Gráfico acciones</a></li>
<li><a class=" " href="/charts/indices-charts">Gráfico índices</a></li>
<li><a class=" " href="/charts/cryptocurrency-charts">Gráfico criptodivisas</a></li> </ul>
<ul class="popular" style="width: 220px">
<li><a href="/charts/real-time-forex-charts">Gráfico interactivo de Divisas</a></li>
<li><a href="/charts/real-time-futures-charts">Gráfico de futuros interactivo</a></li>
<li><a href="/charts/real-time-indices-charts">Gráfico interactivo de índices</a></li>
<li><a href="/charts/real-time-stocks-charts">Gráfico interactivo de acciones</a></li>
<li><a href="/charts/multiple-forex-streaming-charts">Gráficos de Divisas múltiples</a></li>
<li><a href="/charts/multiple-indices-streaming-charts">Gráficos múltiples índices</a></li>
</ul>
</div> </li>
<li>
<a class="nav" href="//es.investing.com/technical/">
Técnico </a>
<div class="navBarDropDown" style="width: 439px">
<ul class="main" style="width: 219px">
<li class="navTitle">Herramientas</li>
<li><a class=" " href="/technical/personalized-quotes-technical-summary">Resumen técnico</a></li>
<li><a class=" " href="/technical/technical-analysis">Análisis técnico</a></li>
<li><a class=" " href="/technical/pivot-points">Calculadora puntos pivote</a></li>
<li><a class=" " href="/technical/moving-averages">Media móvil</a></li>
<li><a class=" " href="/technical/indicators">Indicadores</a></li>
<li><a class=" " href="/technical/candlestick-patterns">Patrones de velas</a></li> </ul>
<ul class="popular" style="width: 220px">
<li class="navTitle">Más en Técnico</li>
<li><a href="/technical/candlestick-patterns">Patrones de velas</a></li>
<li><a href="/tools/fibonacci-calculator">Calculadora de Fibonacci</a></li>
<li><a href="/tools/pivot-point-calculator">Calculadora de puntos pivote</a></li>
</ul>
</div> </li>
<li>
<a class="nav" href="//es.investing.com/brokers/">
Brokers </a>
<div class="navBarDropDown" style="width: 360px">
<ul class="main" style="width: 180px">
<li class="navTitle">Brokers</li>
<li><a class=" " href="/brokers/forex-brokers/">Brokers de Divisas</a></li>
<li><a class=" " href="/brokers/stock-brokers/">Brokers de acciones</a></li>
<li><a class=" " href="/brokers/online-brokers/">Brokers online</a></li>
<li><a class=" " href="/brokers/crypto-exchanges/">Exchanges de criptomonedas</a></li> </ul>
<ul class="popular" style="width: 180px">
<li class="navTitle">Más en Brokers</li>
<li><a href="/brokers/cryptocurrency-brokers/">Brokers de criptomonedas</a></li>
</ul>
</div> </li>
<li>
<a class="nav" href="//es.investing.com/tools/">
Herramientas </a>
<div class="navBarDropDown" style="width: 360px">
<ul class="main" style="width: 180px">
<li class="navTitle">Calendarios</li>
<li><a class=" " href="/economic-calendar/">Calendario Económico</a></li>
<li><a class=" " href="/holiday-calendar/">Festivos</a></li>
<li><a class=" " href="/earnings-calendar/">Calendario de resultados</a></li>
<li><a class=" " href="/dividends-calendar/">Calendario de dividendos</a></li>
<li><a class=" " href="/stock-split-calendar/">Calendario de splits</a></li>
<li><a class=" " href="/ipo-calendar/">Calendario de OPVs</a></li>
<li><a class=" " href="/futures-expiration-calendar/">Calendario de expiración de futuros</a></li>
<li class="navTitle">Herramientas de Inversión</li>
<li><a class=" " href="/stock-screener/">Buscador de acciones</a></li>
<li><a class=" " href="/central-banks/fed-rate-monitor">Barómetro de Tipos Fed</a></li>
<li><a class=" " href="/currency-converter/">Conversor de divisas</a></li>
<li><a class=" " href="/tools/fibonacci-calculator">Calculadora de Fibonacci</a></li> </ul>
<ul class="popular" style="width: 180px">
<li class="navTitle">Más en Herramientas</li>
<li><a href="/tools/correlation-calculator">Correlación de Divisas</a></li>
<li><a href="/tools/pivot-point-calculator">Calculadora de puntos pivote</a></li>
<li><a href="/tools/profit-calculator">Calculadora de beneficios</a></li>
<li><a href="/tools/margin-calculator">Calculadora de margen</a></li>
<li><a href="/tools/currency-heatmap">Heat map de divisas</a></li>
<li><a href="/tools/forex-volatility-calculator">Volatilidad de Divisas</a></li>
<li><a href="/tools/forward-rates-calculator">Calculadora forward de Divisas</a></li>
<li><a href="/tools/mortgage-calculator">Calculadora de hipotecas</a></li>
</ul>
</div> </li>
<li>
<a class="nav" href="//es.investing.com/academy/">
Academia </a>
</li>
<li class="last">
<a class="nav pointer">
Más </a>
<div class="navBarDropDown" style="width: 388px">
<ul class="main" style="width: 220px">
<li><a class=" " href="/tools/">Herramientas</a></li>
<li><a class=" " href="/central-banks/">Bancos centrales</a></li>
<li><a class=" " href="/insights/">Insights</a></li>
<li><a class=" trk_webinar_widget" href="/education/webinars" data-webinar_ep="nav_menu_1004">Webinars</a></li>
<li><a class=" " href="/education/conferences">Conferencias</a></li>
<li><a class=" " href="/education/seminars">Cursos</a></li>
<li><a class=" " href="/members-admin/ad-free?source=desktop&medium=top_menu">Versión sin publicidad</a></li> </ul>
<ul class="popular" style="width: 168px">
<li><a href="/webmaster-tools/">Herramientas Webmaster</a></li>
<li><a href="/broker-blacklist/">Lista negra de brokers</a></li>
<li><a href="/markets/sentiment-outlook">Panorama de sentimientos</a></li>
</ul>
</div> </li>
</ul>
</nav>

<nav id="subNav" class="subMenuWrapper">
<ul class="subNavUL">
<li>
<a class="" href="/quotes/cotizacion-divisas"> Tipos de cambio </a> </li>
<li>
<a data-badgetext="Lo más popular " class=" genBadge trk_webinar_widget" href="/education/webinars" data-webinar_ep="sub_menu_18"> Webinars </a> </li>
<li>
<a class="" href="/commodities/real-time-futures"> Materias primas </a> </li>
<li>
<a class="" href="/charts/real-time-forex-charts"> Gráfico interactivo de Divisas </a> </li>
<li class="last ">
<a class="" href="/indices/major-indices"> Principales índices </a> </li>
</ul>
</nav>
</div>
</header>
<div class="midHeader">
<div id="sln-hbanner" class="wideTopBanner" style="height: 276px;">
<div class="dfpAdUnitContainer billboard">
<div id="Billboard_Default" advertisementText="Anuncio" resize="1" style="width: 970 px; height:276px;">
<script>
            var element = document.getElementById('Billboard_Default');
            element.style.backgroundColor = '#f2f2f2';
                    </script>
</div>
</div>
</div>
</div>
<script type='text/javascript'>
			</script>

<section id="fullColumn" class="">

<script type="text/javascript">
                window.siteData = {
                    htmlDirection: 'ltr',
                    decimalPoint: ',' || '.',
                    thousandSep: '.' || ',',
                    isEu : true,
                    userLoggedIn: true,
                    userHasPhoneRegistered: true,
                    currencyPosition: 'right',
                    datepicker: {
                        applyButton: 'Aceptar',
                        format: 'd/m/Y',
                        formatShort: 'd/m/y',
                        formatLong: 'd/m/Y',
                        formatSend: 'yy-mm-dd',
                        firstDay: '1',
                        dayNames: ["Do","Lu","Ma","Mi","Ju","Vi","Sa"],
                        monthNamesShort: ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."],
                        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                        translations: {
                            custom: ' Personalizar fechas',
                            start: 'Fecha inicio',
                            end: 'Fecha final'
                        }
                    },
                    techTranslations: {"_Currencies_Strong_Buy":"Compra fuerte","_Currencies_Strong_Sell":"Venta fuerte","_specialBuy":"Compra","_specialSell":"Venta","_moving_avarge_tool_sell":"Venta","_moving_avarge_tool_buy":"Compra","_Currencies_Neutral":"Neutral","_not_available":"No disponible","_Currencies_Less_Volatility":"Menor volatilidad","_Currencies_More_Volatility":"Mayor volatilidad","_Currencies_Overbought":"Sobrecompra","_Currencies_Oversold":"Sobrevendido"},
                    edition: $('html').attr('lang'),
                    domainID: '4',
                    appNexusUrl: 'https://secure.adnxs.com/seg?t=2&add=19833590',
                    pageType: ''
                };
                                window.siteData.blocked_users = [];
                                (function (pattern) {
                    window.siteData.elapsedTimePattern = pattern.is('false') ? null : $.extend(JSON.parse(pattern), { justNow: 'Hace un momento' });
                })('{"minutes":{"Hace X minuto":[1],"Hace X minutos":["2-59"]},"hours":{"Hace X hora":[1],"Hace X horas":["2-24"]}}');

                                                window.siteData.mmID = 14;
                
                window.truncatedCommentShowMoreDefine = 'Mostrar más';
            </script>
<a href="http://es.investing.com/members/246932896" class="float_lang_base_2 inlineblock arial_11" target="_blank"><img class="middle" src="https://i-invdn-com.investing.com/images/icons/view_live_profile.gif"> Ver mi perfil</a>
<div class="tabsMembersAdmin"> <ul class="arial_14 bold newBigTabs" id="pairSublinksLevel1">
<li>
Configuración <span class="selected newSiteIconsSprite smallTriangleArrowUp inlineblock">&nbsp;</span>
<span class="newSiteIconsSprite smallTriangleDarkGrayArrowUp displayNone selected1">&nbsp;</span>
</li>
<li>
<a href="/members-admin/content-analysis-add">Contenido</a>
<span class="selected newSiteIconsSprite smallTriangleArrowUp displayNone">&nbsp;</span>
<span class="newSiteIconsSprite smallTriangleDarkGrayArrowUp displayNone selected">&nbsp;</span>
<div class="subMenuOneColumn displayNone">
<ul class="bold">
<li><a href="/members-admin/content-analysis-add" class="arial_12 bold">Artículos</a></li>
<li><a href="/about-us/editorial-guidelines" class="arial_12 bold">Guía editorial</a></li>
<li><a href="/about-us/contributor-benefits" class="arial_12 bold">Ventajas del columnista</a></li>
<li><a href="/about-us/start-contributing" class="arial_12 bold">Comience a publicar con nosotros</a></li>
</ul>
</div>
</li>
<li>
<a href="/members-admin/sentiments">Sentimientos</a>
<span class="selected newSiteIconsSprite smallTriangleArrowUp displayNone">&nbsp;</span>
<span class="newSiteIconsSprite smallTriangleDarkGrayArrowUp displayNone selected">&nbsp;</span>
</li>
<li>
<a href="/members-admin/alert-center">Centro de alertas</a>
<span class="selected newSiteIconsSprite smallTriangleArrowUp displayNone">&nbsp;</span>
<span class="newSiteIconsSprite smallTriangleDarkGrayArrowUp displayNone selected">&nbsp;</span>
<div class="subMenuOneColumn displayNone">
<ul class="bold">
<li><a href="/members-admin/alert-center?location=instrumentAlerts" class="arial_12 bold">Alertas sobre instrumentos</a></li>
<li><a href="/members-admin/alert-center?location=earningsAlerts" class="arial_12 bold">Alertas de resultados</a></li>
<li><a href="/members-admin/alert-center?location=eventAlerts" class="arial_12 bold">Alertas sobre eventos económicos</a></li>
<li><a href="/members-admin/alert-center?location=editorsPicks" class="arial_12 bold">Selección del editor</a></li>
<li><a href="/members-admin/alert-center?location=community" class="arial_12 bold">Comunidad</a></li>
</ul>
</div>
</li>
<li>
<a href="/members-admin/alerts-feed">Histórico de alertas</a>
<span class="selected newSiteIconsSprite smallTriangleArrowUp displayNone">&nbsp;</span>
<span class="newSiteIconsSprite smallTriangleDarkGrayArrowUp displayNone selected">&nbsp;</span>
</li>
<li>
<a href="/members-admin/saved-items">Elementos guardados</a>
<span class="selected newSiteIconsSprite smallTriangleArrowUp displayNone">&nbsp;</span>
<span class="newSiteIconsSprite smallTriangleDarkGrayArrowUp displayNone selected">&nbsp;</span>
</li>
</ul>
<ul class="arial_12 newBigSubTabs " id="pairSublinksLevel2">
<li>
<a href="/members-admin/settings-welcome">Bienvenido</a>
</li>
<li>
<span class="bold">Sus datos</span>
</li>
<li>
<a href="/members-admin/settings-edit-photo">Fotos</a>
</li>
<li>
<a href="/members-admin/settings-notifications">Notificaciones</a>
</li>
<li>
<a href="/members-admin/ad-free">Versión sin publicidad</a>
</li>
<li class="genBadge premium" data-badgetext="Premium">
<a href="/members-admin/insights?source=desktop&medium=settings">Insights</a>
</li>
<li>
<a href="/members-admin/settings-close-account">Cerrar la cuenta</a>
</li>
<li>
<a href="/members-admin/settings-blocked-users">Usuarios bloqueados</a>
</li>
</ul>
<div class="clear"></div>
</div>
<aside id="contentSideBar" class="float_lang_base_1 articlesFilter wide">
<div class="contentSideBarPad">
<ul class="memberAdminSideBar">
<li>Editar datos</li><li><a href="/members-admin/settings-edit-trading-plan">Plan de trading</a></li><li><a href="/members-admin/settings-edit-password">Editar contraseña</a></li><li><a href="/members-admin/settings-close-account">Cerrar la cuenta</a></li> </ul>
</div>
<div class="contentSideBarPad">
<div class="bold blackFont">Estadísticas del usuario</div>
<ul>
<li class="arial_11">Contenido total enviado: <span class="bold">0</span></li>
<li class="arial_11">Comentarios totales: <span class="bold">0</span></li>
</ul>
</div>
</aside><div class="membersContentDiv float_lang_base_1 registerPopup">
<form id="memberRegister" action="" method="POST" name="memberRegister" class="contactUsForm">
<input type="hidden" name="editSettingtoken" value="6e58b8673e92177a3ea5be4a7f60b2c4">
<input type="hidden" name="update" value="member_update">
<input type="hidden" name="utype" value="personal_detials">
<h2>Editar información personal</h2>
<fieldset>
<label for="firstName" class="inlineblock bold">Nombre:</label>
<input type="text" value="fernando" id="firstName" class="newInput inputTextBox" name="user_firstname" maxlength="30">
<span class="bold arial_10 darkRedFont formError js-formError" field="user_firstname"></span>
</fieldset>
<fieldset>
<label for="lastName" class="inlineblock bold">Apellido:</label>
<input type="text" value="mendez" id="lastName" class="newInput inputTextBox" name="user_lastname" maxlength="30">
<span class="bold arial_10 darkRedFont formError js-formError" field="user_lastname"></span>
</fieldset>
<fieldset>
<label for="nick_name" class="inlineblock bold genToolTip oneliner" data-tooltip="El nombre que elija será visible en la web">Nickname:</label>
<input type="text" value="espinoza" id="nick_name" class="newInput inputTextBox" name="nick_name" mminlength="4" maxlength="16">
<span class="bold arial_10 darkRedFont formError js-formError" field="nick_name"></span>
</fieldset>
<fieldset>
<label for="company_country_ID" class="inlineblock bold">País:</label>
<select name="company_country_ID" id="company_country_ID" class="newInput">
<option value="0" selected>Seleccione</option>
<option code="+93" value="104">Afganistán</option><option code="+355" value="95">Albania</option><option code="+49" value="17">Alemania</option><option code="+376" value="206">Andorra</option><option code="+244" value="86">Angola</option><option code="+809" value="184">Anguila</option><option code="+672" value="207">Antártida</option><option code="+809" value="149">Antigua y Barbuda</option><option code="+599" value="127">Antillas Holandesas</option><option code="+966" value="52">Arabia Saudí</option><option code="+213" value="88">Argelia</option><option code="+54" value="29">Argentina</option><option code="+374" value="67">Armenia</option><option code="+297" value="221">Aruba</option><option code="+61" value="25">Australia</option><option code="+43" value="54">Austria</option><option code="+994" value="114">Azerbaiyán</option><option code="+1-242" value="28">Bahamas</option><option code="+973" value="145">Bahréin</option><option code="+880" value="47">Bangladés</option><option code="+1" value="155">Barbados</option><option code="+32" value="34">Bélgica</option><option code="+501" value="31">Belice</option><option code="+229" value="79">Benín</option><option code="+1" value="8">Bermudas</option><option code="+375" value="65">Bielorrusia</option><option code="+591" value="19">Bolivia</option><option code="+387" value="174">Bosnia-Herzegovina</option><option code="+267" value="163">Botsuana</option><option code="+55" value="32">Brasil</option><option code="+673" value="49">Brunéi</option><option code="+359" value="70">Bulgaria</option><option code="+226" value="209">Burkina Faso</option><option code="+257" value="198">Burundi</option><option code="+975" value="208">Bután</option><option code="+238" value="217">Cabo Verde</option><option code="+855" value="173">Camboya</option><option code="+237" value="73">Camerún</option><option code="+1" value="6">Canadá</option><option code="+235" value="189">Chad</option><option code="+56" value="27">Chile</option><option code="+86" value="37">China</option><option code="+357" value="107">Chipre</option><option code="+57" value="122">Colombia</option><option code="+269" value="196">Comoras</option><option code="+243" value="160">Congo</option><option code="+850" value="233">Corea del Norte</option><option code="+82" value="11">Corea del Sur</option><option code="+225" value="78">Costa de Marfil</option><option code="+506" value="15">Costa Rica</option><option code="+385" value="113">Croacia</option><option code="+53" value="175">Cuba</option><option code="+45" value="24">Dinamarca</option><option code="+1-767" value="30">Dominica</option><option code="+593" value="121">Ecuador</option><option code="+20" value="59">Egipto</option><option code="+503" value="117">El Salvador</option><option code="+971" value="143">Emiratos Árabes Unidos</option><option code="+291" value="211">Eritrea</option><option code="+421" value="90">Eslovaquia</option><option code="+386" value="112">Eslovenia</option><option code="+34" value="26">España</option><option code="+1" value="5">Estados Unidos</option><option code="+372" value="89">Estonia</option><option code="+251" value="195">Etiopía</option><option code="+63" value="45">Filipinas</option><option code="+358" value="71">Finlandia</option><option code="+679" value="183">Fiyi</option><option code="+33" value="22">Francia</option><option code="+241" value="200">Gabón</option><option code="+220" value="197">Gambia</option><option code="+995" value="64">Georgia</option><option code="+233" value="74">Ghana</option><option code="+350" value="147">Gibraltar</option><option code="+1-473" value="185">Granada</option><option code="+30" value="51">Grecia</option><option code="+299" value="152">Groenlandia</option><option code="+590" value="187">Guadalupe</option><option code="+1-671" value="118">Guam</option><option code="+502" value="137">Guatemala</option><option code="+594" value="234">Guayana Francesa</option><option code="+224" value="83">Guinea</option><option code="+240" value="215">Guinea Ecuatorial</option><option code="+245" value="130">Guinea-Bissau</option><option code="+592" value="156">Guyana</option><option code="+509" value="116">Haití</option><option code="+31" value="21">Holanda</option><option code="+504" value="128">Honduras</option><option code="+852" value="39">Hong Kong</option><option code="+36" value="93">Hungría</option><option code="+91" value="14">India</option><option code="+62" value="48">Indonesia</option><option code="+964" value="66">Irak</option><option code="+98" value="18">Irán</option><option code="+353" value="33">Irlanda</option><option code="+47" value="167">Isla Bouvet</option><option code="+672" value="230">Isla Norfolk</option><option code="+354" value="106">Islandia</option><option code="+1-345" value="232">Islas Caimán</option><option code="+682" value="146">Islas Cook </option><option code="+298" value="192">Islas Feroe</option><option code="+692" value="144">Islas Marshall </option><option code="+677" value="222">Islas Salomón</option><option code="+1-284" value="132">Islas Vírgenes Británicas</option><option code="+972" value="23">Israel</option><option code="+39" value="10">Italia</option><option code="+1-876" value="119">Jamaica</option><option code="+81" value="35">Japón</option><option code="+962" value="92">Jordania</option><option code="+7" value="102">Kazajistán</option><option code="+254" value="57">Kenia</option><option code="+996" value="204">Kirguistán</option><option code="+686" value="225">Kiribati</option><option code="+965" value="94">Kuwait</option><option code="+856" value="201">Laos</option><option code="+266" value="150">Lesoto</option><option code="+371" value="97">Letonia</option><option code="+961" value="68">Líbano</option><option code="+231" value="124">Liberia</option><option code="+218" value="91">Libia</option><option code="+423" value="190">Liechtenstein</option><option code="+370" value="96">Lituania</option><option code="+352" value="103">Luxemburgo</option><option code="+853" value="169">Macao</option><option code="+389" value="108">Macedonia</option><option code="+261" value="77">Madagascar</option><option code="+60" value="42">Malasia</option><option code="+265" value="111">Malaui</option><option code="+960" value="223">Maldivas</option><option code="+223" value="159">Mali</option><option code="+356" value="109">Malta</option><option code="+212" value="105">Marruecos</option><option code="+596" value="203">Martinica</option><option code="+230" value="188">Mauricio</option><option code="+222" value="158">Mauritania</option><option code="+269" value="235">Mayotte</option><option code="+52" value="7" selected>México</option><option code="+691" value="120">Micronesia</option><option code="+373" value="69">Moldavia</option><option code="+377" value="115">Mónaco</option><option code="+976" value="139">Mongolia</option><option code="+382" value="247">Montenegro</option><option code="+1-664" value="186">Montserrat</option><option code="+258" value="82">Mozambique</option><option code="+95" value="231">Myanmar</option><option code="+264" value="172">Namibia</option><option code="+674" value="199">Nauru</option><option code="+977" value="227">Nepal</option><option code="+505" value="136">Nicaragua</option><option code="+227" value="179">Níger</option><option code="+234" value="20">Nigeria</option><option code="+47" value="60">Noruega</option><option code="+687" value="182">Nueva Caledonia</option><option code="+64" value="43">Nueva Zelanda</option><option code="+968" value="87">Omán</option><option code="+92" value="44">Pakistán</option><option code="+680" value="153">Palaos</option><option code="+970" value="193">Palestina</option><option code="+507" value="142">Panamá</option><option code="+675" value="210">Papúa Nueva Guinea</option><option code="+595" value="148">Paraguay</option><option code="+51" value="125">Perú</option><option code="+689" value="157">Polinesia Francesa</option><option code="+48" value="53">Polonia</option><option code="+351" value="38">Portugal</option><option code="+1" value="13">Puerto Rico</option><option code="+974" value="170">Qatar</option><option code="+44" value="4">Reino Unido</option><option code="+236" value="213">República Centroafricana</option><option code="+420" value="55">República Checa</option><option code="+242" value="76">República Democrática del Congo</option><option code="+1" value="135">República Dominicana</option><option code="+262" value="191">Reunión</option><option code="+250" value="80">Ruanda</option><option code="+40" value="100">Rumanía</option><option code="+7" value="56">Rusia</option><option code="+685" value="164">Samoa</option><option code="+684" value="141">Samoa Estadounidense</option><option code="+1-869" value="151">San Cristóbal y Nieves</option><option code="+378" value="99">San Marino</option><option code="+1-784" value="220">San Vicente y las Granadinas</option><option code="+1-758" value="133">Santa Lucía</option><option code="+239" value="218">Santo Tomé y Príncipe</option><option code="+221" value="40">Senegal</option><option code="+381" value="238">Serbia</option><option code="+248" value="161">Seychelles</option><option code="+232" value="129">Sierra Leona</option><option code="+65" value="36">Singapur</option><option code="+963" value="134">Siria</option><option code="+252" value="194">Somalia</option><option code="+94" value="162">Sri Lanka</option><option code="+268" value="98">Suazilandia</option><option code="+27" value="110">Sudáfrica</option><option code="+249" value="212">Sudán</option><option code="+46" value="9">Suecia</option><option code="+41" value="12">Suiza</option><option code="+597" value="154">Surinam</option><option code="+66" value="41">Tailandia</option><option code="+886" value="46">Taiwán</option><option code="+255" value="85">Tanzania</option><option code="+992" value="62">Tayikistán</option><option code="+670" value="236">Timor Oriental</option><option code="+228" value="81">Togo</option><option code="+690" value="229">Tokelau</option><option code="+676" value="228">Tonga</option><option code="+1-868" value="140">Trinidad y Tobago</option><option code="+216" value="202">Túnez</option><option code="+993" value="216">Turkmenistán</option><option code="+90" value="63">Turquía</option><option code="+688" value="224">Tuvalu</option><option code="+380" value="61">Ucrania</option><option code="+256" value="123">Uganda</option><option code="+598" value="180">Uruguay</option><option code="+998" value="168">Uzbekistán</option><option code="+678" value="181">Vanuatu</option><option code="+58" value="138">Venezuela</option><option code="+84" value="178">Vietnam</option><option code="+681" value="171">Wallis y Futuna</option><option code="+967" value="131">Yemen</option><option code="+253" value="214">Yibuti</option><option code="+260" value="84">Zambia</option><option code="+263" value="75">Zimbabue</option> </select>
</fieldset>
<fieldset>
<label for="user_settingsCurrentTime" class="inlineblock bold">Zona horaria:</label>
<select name="timeZone" id="user_settingsCurrentTime" class="newInput">
<option value="2">(GMT -11:00) Midway Island</option>
<option value="35">(GMT -11:00) Samoa</option>
<option value="3">(GMT -10:00) Hawaii</option>
<option value="4">(GMT -9:00) Alaska</option>
<option value="36">(GMT -8:00) Baja California</option>
<option value="5">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
<option value="37">(GMT -7:00) Arizona</option>
<option value="38">(GMT -7:00) Chihuahua, La Paz, Mazatlan</option>
<option value="6">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
<option value="39">(GMT -6:00) Central America</option>
<option value="7">(GMT -6:00) Central Time (US &amp; Canada)</option>
<option value="40" selected>(GMT -6:00) Guadalajara, Mexico City, Monterrey</option>
<option value="41">(GMT -6:00) Saskatchewan</option>
<option value="42">(GMT -5:00) Bogota, Lima, Quito</option>
<option value="8">(GMT -5:00) Eastern Time (US &amp; Canada)</option>
<option value="43">(GMT -5:00) Indiana (East)</option>
<option value="10">(GMT -4:00) Atlantic Time (Canada)</option>
<option value="9">(GMT -4:00) Caracas</option>
<option value="45">(GMT -4:00) Cuiaba</option>
<option value="46">(GMT -4:00) Georgetown, La Paz, Manaus, San Juan</option>
<option value="11">(GMT -3:30) Newfoundland</option>
<option value="44">(GMT -3:00) Asuncion</option>
<option value="12">(GMT -3:00) Brasilia</option>
<option value="48">(GMT -3:00) Buenos Aires</option>
<option value="49">(GMT -3:00) Cayenne, Fortaleza</option>
<option value="50">(GMT -3:00) Greenland</option>
<option value="51">(GMT -3:00) Montevideo</option>
<option value="47">(GMT -3:00) Santiago</option>
<option value="14">(GMT -1:00) Azores</option>
<option value="53">(GMT -1:00) Cape Verde Is.</option>
<option value="55">(GMT) Coordinated Universal Time</option>
<option value="15">(GMT) Dublin, Edinburgh, Lisbon, London</option>
<option value="56">(GMT) Monrovia, Reykjavik</option>
<option value="16">(GMT +1:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
<option value="57">(GMT +1:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
<option value="58">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>
<option value="54">(GMT +1:00) Casablanca</option>
<option value="166">(GMT +1:00) Lagos</option>
<option value="59">(GMT +1:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
<option value="60">(GMT +1:00) West Central Africa</option>
<option value="62">(GMT +2:00) Amman</option>
<option value="64">(GMT +2:00) Beirut</option>
<option value="65">(GMT +2:00) Cairo</option>
<option value="66">(GMT +2:00) Damascus</option>
<option value="68">(GMT +2:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
<option value="17">(GMT +2:00) Jerusalem</option>
<option value="67">(GMT +02:00) Johannesburg</option>
<option value="61">(GMT +2:00) Windhoek</option>
<option value="71">(GMT +3:00) Baghdad</option>
<option value="63">(GMT +3:00) Istanbul</option>
<option value="70">(GMT +3:00) Kuwait, Riyadh</option>
<option value="18">(GMT +3:00) Moscow, St. Petersburg, Volgograd</option>
<option value="72">(GMT +3:00) Nairobi</option>
<option value="19">(GMT +3:30) Tehran</option>
<option value="20">(GMT +4:00) Abu Dhabi, Dubai, Muscat</option>
<option value="73">(GMT +4:00) Baku</option>
<option value="21">(GMT +4:30) Kabul</option>
<option value="22">(GMT +5:00) Ekaterinburg</option>
<option value="77">(GMT +5:00) Karachi</option>
<option value="23">(GMT +5:30) Chennai, Kolkata, Mumbai, New Delhi</option>
<option value="79">(GMT +5:30) Colombo</option>
<option value="24">(GMT +5:45) Kathmandu</option>
<option value="25">(GMT +6:00) Dhaka</option>
<option value="26">(GMT +6:30) Yangon (Rangoon)</option>
<option value="27">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
<option value="28">(GMT +8:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
<option value="178">(GMT +08:00) Manila</option>
<option value="113">(GMT +8:00) Singapore</option>
<option value="29">(GMT +9:00) Osaka, Sapporo, Tokyo</option>
<option value="88">(GMT +9:00) Seoul</option>
<option value="91">(GMT +10:00) Brisbane</option>
<option value="94">(GMT +10:00) Vladivostok</option>
<option value="30">(GMT +10:30) Adelaide</option>
<option value="31">(GMT +11:00) Canberra, Melbourne, Sydney<option>
<option value="32">(GMT +11:00) Solomon Is., New Caledonia<option>
<option value="1">(GMT +12:00) Eniwetok, Kwajalein<option>
<option value="33">(GMT +13:00) Auckland, Wellington<option>
</select>
</fieldset>
<input type="hidden" name="facontactdetails" value="none">
<h3>Editar detalles de contacto</h3>
<input type="hidden" name="facontactdetails" value="true">
<fieldset>
<label for="member_phone" class="inlineblock bold">Teléfono fijo:</label> <input id="member_phone_country" name="member_phone_country" class="prePhone" value="+52" disabled> <input type="text" class="newInput inputTextBox fullPhone" id="member_phone" value="4778194196" name="member_phone" disabled>
<span class="bold arial_10 darkRedFont formError js-formError" . field="member_phone"></span>
</fieldset>
<fieldset>
<label for="member_IM_Type" class="inlineblock bold">Tipo de Messenger:</label><select name="member_IM_type" id="member_IM_Type" class="newInput">
<option value="0" selected>Seleccione</option>
<option value="186">Google Talk</option><option value="183">ICQ</option><option value="182">MSN</option><option value="185" selected>Skype</option><option value="184">Yahoo</option> </select>
</fieldset>
<fieldset>
<label for="member_IM_ID" class="inlineblock bold">ID del Messenger:</label><input type="text" value="4778194196" id="member_IM_ID" class="newInput inputTextBox" name="member_IM_address">
<fieldset>
<input type="hidden" name="fadditionalinfo" value="none">
<h3>Información adicional<h3>
<input type="hidden" name="fadditionalinfo" value="true">
<fieldset>
<label for="user_age" class="inlineblock bold">Año de nacimiento:<label>
<select name="user_age" id="user_age" class="newInput">
<option value="0" selected>Seleccione<option><option value="1920">1920<option><option value="1921">1921<option><option value="1922">1922<option><option value="1923">1923<option><option value="1924">1924</option><option value="1925">1925<option><option value="1926">1926<option><option value="1927">1927</option><option value="1928">1928<option><option value="1929">1929<option><option value="1930">1930</option><option value="1931">1931<option><option value="1932">1932<option><option value="1933">1933</option><option value="1934">1934<option><option value="1935">1935<option><option value="1936">1936</option><option value="1937">1937<option><option value="1938">1938<option><option value="1939">1939</option><option value="1940">1940<option><option value="1941">1941<option><option value="1942">1942</option><option value="1943">1943<option><option value="1944">1944<option><option value="1945">1945</option><option value="1946">1946<option><option value="1947">1947<option><option value="1948">1948</option><option value="1949">1949<option><option value="1950">1950<option><option value="1951">1951</option><option value="1952">1952<option><option value="1953">1953<option><option value="1954">1954</option><option value="1955">1955<option><option value="1956">1956<option><option value="1957">1957</option><option value="1958">1958<option><option value="1959">1959<option><option value="1960">1960</option><option value="1961">1961<option><option value="1962">1962<option><option value="1963">1963</option><option value="1964">1964<option><option value="1965">1965<option><option value="1966">1966</option><option value="1967">1967<option><option value="1968">1968<option><option value="1969">1969</option><option value="1970">1970<option><option value="1971">1971<option><option value="1972">1972</option><option value="1973">1973<option><option value="1974">1974<option><option value="1975">1975</option><option value="1976">1976<option><option value="1977">1977<option><option value="1978">1978</option><option value="1979">1979<option><option value="1980">1980<option><option value="1981">1981</option><option value="1982">1982<option><option value="1983">1983<option><option value="1984">1984</option><option value="1985">1985<option><option value="1986">1986<option><option value="1987">1987</option><option value="1988">1988<option><option value="1989">1989<option><option value="1990">1990</option><option value="1991">1991<option><option value="1992">1992<option><option value="1993" selected>1993<option><option value="1994">1994<option><option value="1995">1995<option><option value="1996">1996<option><option value="1997">1997<option><option value="1998">1998<option><option value="1999">1999<option><option value="2000">2000<option><option value="2001">2001<option><option value="2002">2002<option><option value="2003">2003<option><option value="2004">2004<option><option value="2005">2005<option><option value="2006">2006<option><option value="2007">2007<option><option value="2008">2008<option><option value="2009">2009<option><option value="2010">2010<option><option value="2011">2011<option><option value="2012">2012<option><option value="2013">2013<option><option value="2014">2014<option><option value="2015">2015<option><option value="2016">2016<option><option value="2017">2017<option><option value="2018">2018<option><option value="2019">2019<option><option value="2020">2020<option><option value="2021">2021<option><option value="2022">2022<option><option value="2023">2023<option> <select>
<fieldset>
<fieldset>
<label for="member_position" class="inlineblock bold">Posición:<label>
<input type="text" value="gerente" id="member_position" class="newInput inputTextBox" name="member_position">
<fieldset>
<fieldset>
<label for="user_gender" class="inlineblock bold">Género:<label>
<i class="radioHolder"><input type="radio" class="radio" name="user_gender" id="user_gender1" value="male" checked><label for="user_gender1"> Masculino<label><i>
<i class="radioHolder"><input type="radio" class="radio" name="user_gender" id="user_gender2" value="female"><label for="user_gender2"> Femenino<label><i>
<fieldset>
<a href="javascript:void(0)" id="jsSubmitEditForm" class="newBtn Arrow LightGray float_lang_base_2">Enviar<a> <div class="clear"><div>
<form>
<div class="memberAdminPrivacyStatement">
<img class="float_lang_base_1" src="https://i-invdn-com.investing.com/images/icons/icon_lock_1.gif">
Nos tomamos la privacidad y la seguridad de vuestros datos muy en serio. Para más información consultad nuestra <a href="/about-us/privacy-policy">política de privacidad<a>. <div class="clear"><div>
<div>
<script type="text/javascript">

		$('#company_country_ID').on('change', function () {
			$('#member_phone_country').val($('option:selected', this).attr('code'));
		});

		var _validator = new Validator();
		function validate() {
			if (_validator.validateForm($('#memberRegister'), JSON.parse('{"nick_name":{"lettersNumbers":"Utilice una combinación de letras y números de 4 a 16 caracteres, sin espacios ni símbolos.","maxLen":[16,"Utilice una combinación de letras y números de 4 a 16 caracteres, sin espacios ni símbolos."],"minLen":[4,"Utilice una combinación de letras y números de 4 a 16 caracteres, sin espacios ni símbolos."]},"user_firstname":{"required":"No incluya símbolos o números en el nombre","onlyLetters":{"0":"No incluya símbolos o números en el nombre","space":true},"maxLen":[16,"Nombre requiere al menos 2 caracteres y un máximo de 16"],"minLen":["2","Nombre requiere al menos 2 caracteres y un máximo de 16"]},"user_lastname":{"required":"No incluya símbolos o números en el nombre","onlyLetters":{"0":"No incluya símbolos o números en el nombre","space":true},"maxLen":[16,"Apellido requiere al menos 2 caracteres y un máximo de 16"],"minLen":["2","Apellido requiere al menos 2 caracteres y un máximo de 16"]}}'))) {
				document.forms.memberRegister.submit();
			}
			return false;
		}

		$(document).ready(function () {
			$('.js-formError').each(function () {
				var $this = $(this);
				if ($this.text()) _validator.bindErrorEvents($this.attr('field'));
			});
			$('#jsSubmitEditForm').click(function (e) {
				e.preventDefault();
				validate();
			});

				})

	<script>
<div> 
<section> 
<div class="clear"><div>
<footer id="footerWrapper">
<div>
<div id="findABroker" class="findABrokerWrapper">
<p class="h2LikeTitle"><a href="/brokers/forex-brokers/" id="fab_link">Encuentre un broker<a><p>
<div id="findABrokerTabs">
<div id="findABroker_html" class="findABroker noTabs">
<a href="javascript:void(0);" class="fab_item" onclick="window.open('/jp.php?v2=M3NkOm45MGozYm9rZjdiYj5oP21maTQ1NSJiMDU_Mk5kEzcTb38ydTRuOWZvZmJrMDFlY2YxO39gIGZnYWQzcDN2ZDo=')" data-broker_pos="1" data-broker_deal_id="307161">
<img data-rowid="307161" loading="lazy" src="https://a-invdn-com.investing.com/Broker_Button_New/Fab120/Exness_Logo_new.png">
<a>
<a href="javascript:void(0);" class="fab_item" onclick="window.open('/jp.php?v2=YiIxbzJlNmw-bz05bj8zMzZgP20yPTo7YnVkNmFrNEg4T2FFYHBkIz9lPmFuZ2NqZ2ZkY2U2O39gIGRlY2ZgI2InMW8=')" data-broker_pos="2" data-broker_deal_id="307175">
<img data-rowid="307175" loading="lazy" src="https://a-invdn-com.investing.com/Broker_Button_New/Fab120/fab_7127653.png">
<a>
<a href="javascript:void(0);" class="fab_item" onclick="window.open('/jp.php?v2=MHBjPW45P2ViM25qN2ZkZDVjYjBjbDc2YnVlNzI4N0tnEGZCNCRmIWM5O2QwOTI7NTdhY2IwMnYwcGNiZGE3dDB1Yz0=')" data-broker_pos="3" data-broker_deal_id="307224">
<img data-rowid="307224" loading="lazy" src="https://a-invdn-com.investing.com/Broker_Button_New/Fab120/fabswissquote.png">
<a>
<a href="javascript:void(0);" class="fab_item" onclick="window.open('/jp.php?v2=ZyczbTNkP2UwYT05MmMzM2QyN2VjbGFgYnVvPWFrYR04TzAUY3MxdmM5aDdmb2NqY2FjYGU7YSUxcTMyNTBuLWciM20=')" data-broker_pos="4" data-broker_deal_id="307238">
<img data-rowid="307238" loading="lazy" src="https://a-invdn-com.investing.com/Broker_Button_New/Fab120/fab_95407527.peg">
<a>
<a href="javascript:void(0);" class="fab_item" onclick="window.open('/jp.php?v2=NHQ3aWYxYjg0ZT46bj9hYTdhN2U_MGdmMyQ3ZWBqbxMyRTQQYnJkI2I4PWI1PGRtNTcxNTRgZyM1dWdmMTQycTRxN2k=')" data-broker_pos="5" data-broker_deal_id="307242">
<img data-rowid="307242" loading="lazy" src="https://a-invdn-com.investing.com/Broker_Button_New/Fab120/fab_73514486.jpg">
<a>
<a href="javascript:void(0);" class="fab_item" onclick="window.open('/jp.php?v2=Zyc3aWE2ZjwxYGxoZDViYjNlNWdjbDo7NSI3ZWZsMExgFzcTZnYxdj9lOmVhaDM6MTNlbWMyNXE0dDIzYGVvLGciN2k=')" data-broker_pos="6" data-broker_deal_id="307287">
<img data-rowid="307287" loading="lazy" src="https://a-invdn-com.investing.com/Broker_Button_New/Fab120/120x60_Updated_OctaFX.png">
<a>
<a href="javascript:void(0);" class="fab_item" onclick="window.open('/jp.php?v2=ZCRmODNkPmQwYWhsbj85OWcxZjRibTc2MyRgMmZsZRk3QDURNiY-eTNpajUyOzkwMTI_Pj5rN3MzczU0MTRkJ2QhZjg=')" data-broker_pos="7" data-broker_deal_id="307313">
<img data-rowid="307313" loading="lazy" src="https://a-invdn-com.investing.com/Broker_Button_New/Fab120/FPM_banner-logoblue-120x60.png">
<a>
<a href="javascript:void(0);" class="fab_item" onclick="window.open('/jp.php?v2=M3NlOzNkYTtlNGxobj9jYzNlYTNmaTQ1YHdkNjE7Yh41QmVBYHA2cWI4PmFiazU8ZWY_OWYzNHBgIGVkMzY1djN2ZTs=')" data-broker_pos="8" data-broker_deal_id="307363">
<img data-rowid="307363" loading="lazy" src="https://a-invdn-com.investing.com/Broker_Button_New/Fab120/fab_57677695.jpg">
<a>
<a href="javascript:void(0);" class="fab_item" onclick="window.open('/jp.php?v2=ZSUzbWQzZjxlNGltZzYwMGcxZTc1Ojc2PCtvPWZsYBxjFD4aNSU1cmQ-OWY3PjM6PzwzNGUwZSE9fWRlMjcwc2UgM20=')" data-broker_pos="9" data-broker_deal_id="307373">
<img data-rowid="307373" loading="lazy" src="https://a-invdn-com.investing.com/Broker_Button_New/Fab120/AVA_NEW_120x60.png">
<a>
<a href="javascript:void(0);" class="fab_item" onclick="window.open('/jp.php?v2=M3MybGM0ZjwyYz05NWRiYjFnZjRkazc2NCM1Z2FrYBxiFT8bMSFhJj5kbDNmbzI7YGY0NzBiZiJmJmNiOj9jIDN2Mmw=')" data-broker_pos="10" data-broker_deal_id="307634">
<img data-rowid="307634" loading="lazy" src="https://a-invdn-com.investing.com/Broker_Button_New/Fab120/fab_21446572.png">
<a>
<a href="javascript:void(0);" class="fab_item" onclick="window.open('/jp.php?v2=NXUzbW45MWs_bjk9M2JjY2M1PmwzPGVkMiVgMjU_M081QjcTbn4ydTdtaDdkbWRtNzAzMzdlYSUxcW5vOz5gIzVwM20=')" data-broker_pos="11" data-broker_deal_id="307704">
<img data-rowid="307704" loading="lazy" src="https://a-invdn-com.investing.com/Broker_Button_New/Fab120/ICMARKET2022.png">
<a>
<a href="javascript:void(0);" class="fab_item" onclick="window.open('/jp.php?v2=OHg-YDZhNG4_bmltZDUxMTJkNmRjbDc2NiFvPTQ-MExgFzEVZ3c2cWY8PmFjajgxMTY1MDNgZyM8fDc2NTAwczh9PmA=')" data-broker_pos="12" data-broker_deal_id="307755">
<img data-rowid="307755" loading="lazy" src="https://a-invdn-com.investing.com/Broker_Button_New/Fab120/eToro_FAB.jpg">
<a>
<div>
<div>
<div>
<script>
	window.FABTabsInitObject = {
		dataStr: '{"1":[{"id":"307161","link":"\/jp.php?v2=M3NkOm45MGozYm9rZjdiYj5oP21maTQ1NSJiMDU_Mk5kEzcTb38ydTRuOWZvZmJrMDFlY2YxO39gIGZnYWQzcDN2ZDo=","img120":"Fab120\/Exness_Logo_new.png"},{"id":"307175","link":"\/jp.php?v2=YiIxbzJlNmw-bz05bj8zMzZgP20yPTo7YnVkNmFrNEg4T2FFYHBkIz9lPmFuZ2NqZ2ZkY2U2O39gIGRlY2ZgI2InMW8=","img120":"Fab120\/fab_7127653.png"},{"id":"307224","link":"\/jp.php?v2=MHBjPW45P2ViM25qN2ZkZDVjYjBjbDc2YnVlNzI4N0tnEGZCNCRmIWM5O2QwOTI7NTdhY2IwMnYwcGNiZGE3dDB1Yz0=","img120":"Fab120\/fabswissquote.png"},{"id":"307238","link":"\/jp.php?v2=ZyczbTNkP2UwYT05MmMzM2QyN2VjbGFgYnVvPWFrYR04TzAUY3MxdmM5aDdmb2NqY2FjYGU7YSUxcTMyNTBuLWciM20=","img120":"Fab120\/fab_95407527.peg"},{"id":"307242","link":"\/jp.php?v2=NHQ3aWYxYjg0ZT46bj9hYTdhN2U_MGdmMyQ3ZWBqbxMyRTQQYnJkI2I4PWI1PGRtNTcxNTRgZyM1dWdmMTQycTRxN2k=","img120":"Fab120\/fab_73514486.jpg"},{"id":"307287","link":"\/jp.php?v2=Zyc3aWE2ZjwxYGxoZDViYjNlNWdjbDo7NSI3ZWZsMExgFzcTZnYxdj9lOmVhaDM6MTNlbWMyNXE0dDIzYGVvLGciN2k=","img120":"Fab120\/120x60_Updated_OctaFX.png"},{"id":"307313","link":"\/jp.php?v2=ZCRmODNkPmQwYWhsbj85OWcxZjRibTc2MyRgMmZsZRk3QDURNiY-eTNpajUyOzkwMTI_Pj5rN3MzczU0MTRkJ2QhZjg=","img120":"Fab120\/FPM_banner-logoblue-120x60.png"},{"id":"307363","link":"\/jp.php?v2=M3NlOzNkYTtlNGxobj9jYzNlYTNmaTQ1YHdkNjE7Yh41QmVBYHA2cWI4PmFiazU8ZWY_OWYzNHBgIGVkMzY1djN2ZTs=","img120":"Fab120\/fab_57677695.jpg"},{"id":"307373","link":"\/jp.php?v2=ZSUzbWQzZjxlNGltZzYwMGcxZTc1Ojc2PCtvPWZsYBxjFD4aNSU1cmQ-OWY3PjM6PzwzNGUwZSE9fWRlMjcwc2UgM20=","img120":"Fab120\/AVA_NEW_120x60.png"},{"id":"307634","link":"\/jp.php?v2=M3MybGM0ZjwyYz05NWRiYjFnZjRkazc2NCM1Z2FrYBxiFT8bMSFhJj5kbDNmbzI7YGY0NzBiZiJmJmNiOj9jIDN2Mmw=","img120":"Fab120\/fab_21446572.png"},{"id":"307704","link":"\/jp.php?v2=NXUzbW45MWs_bjk9M2JjY2M1PmwzPGVkMiVgMjU_M081QjcTbn4ydTdtaDdkbWRtNzAzMzdlYSUxcW5vOz5gIzVwM20=","img120":"Fab120\/ICMARKET2022.png"},{"id":"307755","link":"\/jp.php?v2=OHg-YDZhNG4_bmltZDUxMTJkNmRjbDc2NiFvPTQ-MExgFzEVZ3c2cWY8PmFjajgxMTY1MDNgZyM8fDc2NTAwczh9PmA=","img120":"Fab120\/eToro_FAB.jpg"}]}',
		columnsNumber: 6	};
    var findABrokerSeen = false;
    $(function() {
        $(window).on('scroll',function () {
            if(!findABrokerSeen && $.isInView($('#findABroker'))) {
                findABrokerSeen = true;
                window.addFabEvent('fab_component_view', 'view component', 'view', 'page', 'brokers suggested list', "307161,307175,307224,307238,307242,307287,307313,307363,307373,307634,307704,307755");
            }
        });
        $('#fab_link').on('click',function () {
            window.addFabEvent('fab_hyperlink_click', 'click on hyperlink', 'click', 'link');
        });
        $('.fab_item').on('click',function () {
            window.addFabEvent('fab_broker_logo_click', 'click on broker logo', 'click', 'broker logo', 'broker deal id', $(this).data('broker_deal_id'), 'broker logo position', $(this).data('broker_pos'));
        });
    });
                    addFabEvent(cd147      , action,        cd163,    cd148,         cd150,               cd151,         cd152,               cd)
    window.addFabEvent = function(eventNameCd, gaEventAction, actionCd, trackedObject, eventCdDescription1, eventCdValue1, eventCdDescription2, eventCdValue2) {
        var addFabEventObj = Object.assign({}, window.trackingObj);
        addFabEventObj.eventNameCd = eventNameCd;
        addFabEventObj.gaEventCategory = 'page component';
        addFabEventObj.gaEventAction = gaEventAction;
        addFabEventObj.gaEventLabel = 'fab_component';
        addFabEventObj.actionCd = actionCd;
        addFabEventObj.trackedObject = trackedObject;
        addFabEventObj.eventCdDescription1 = eventCdDescription1;
        addFabEventObj.eventCdValue1 = eventCdValue1;
        addFabEventObj.eventCdDescription2 = eventCdDescription2;
        addFabEventObj.eventCdValue2 = eventCdValue2;
        addFabEventObj.productFeature = 'find a broker';
        window.addGAEvent(addFabEventObj);
    }
<script>
<div>
<section id="theBottom" class="top">
<div class="float_lang_base_1 links">
<div class="title">Investing.com<div>
<ul class="first inlineblock">
<li><a title="Blog" href="https://es.investing.com/blog/">Blog</a></li>
<li><a title="Aplicaciones móvil" href="https://es.investing.com/mobile/">Aplicaciones móvil</a></li>
<li><a title="Mi cartera" href="https://es.investing.com/portfolio/" data-reg_ep="portfolio footer wrapper">Mi cartera<a><li>
<li><a title="Herramientas web" href="/webmaster-tools/">Herramientas web<a></li>
<ul>
<ul class="inlineblock">
<li><a title="Sobre nosotros" href="/about-us/">Sobre nosotros<a></li>
<li><a title="Publicidad" href="https://es.investing.com/about-us/advertise">Publicidad<a><li>
<li><a title="Soporte técnico" href="/about-us/contact-us" target='_blank'>Soporte técnico<a><li>
<ul>
<div class="clear"><div>
<div>
<div class="float_lang_base_1 mobile">
<img src="https://i-invdn-com.investing.com/footer/footerMobile2018.png" width="190" height="185" alt="" class="mobileCells" loading="lazy">
<div class="title">Nuestras aplicaciones</div>
<a href="https://app.appsflyer.com/com.fusionmedia.investing?pid=direct_inv&c=legacy_desktop&af_channel=/members-admin/settings-edit-user-details&af_adset=es&af_ad=footer&af_sub1=null&af_sub_siteid=GA1.1.129838618.1677877489&click_id=null&af_sub2=responsys&af_sub3=email&af_sub4=header_logo&af_sub5=Webinar_Push&af_keywords=Education_WebinarPush_V4_ES_2354_912788&af_ad_id=null&af_adset_id=null" target="_blank">
<img src="https://i-invdn-com.investing.com/footer/img6/googleplay_es.png" width="146" height="42" alt="DESCARGAR" loading="lazy">
</a>
<a href="https://app.appsflyer.com/id909998122?pid=direct_inv&c=legacy_desktop&af_channel=/members-admin/settings-edit-user-details&af_adset=es&af_ad=footer&af_sub1=null&af_sub_siteid=GA1.1.129838618.1677877489&click_id=null&af_sub2=responsys&af_sub3=email&af_sub4=header_logo&af_sub5=Webinar_Push&af_keywords=Education_WebinarPush_V4_ES_2354_912788&af_ad_id=null&af_adset_id=null" target="_blank">
<img src="https://i-invdn-com.investing.com/footer/img6/appstore_es.png" width="132" height="42" alt="App store" loading="lazy">
</a>
</div>
<div class="float_lang_base_1 social">
<div class="title">Síganos</div>
<a target="_blank" href="https://www.facebook.com/InvestingcomEspana" class="facebook" title="Facebook"></a>
<a target="_blank" href="https://twitter.com/InvestingEspana" class="twitter" title="Twitter"></a>
</div>
<div class="clear"></div>
</section>
<section class="bottom">
<img src="https://i-invdn-com.investing.com/logos/footerLogo2.png" width="162" height="34" alt="Investing.com" loading="lazy">
<ul class="float_lang_base_2 clearfix">
<li><a href="/about-us/terms-and-conditions">Términos y Condiciones</a></li>
<li><a href="/about-us/privacy-policy">Política de privacidad</a></li>
<li><a href="/about-us/risk-warning">Advertencia de Riesgo</a></li>
</ul>
<div>&copy; 2007-2023 Fusion Media Ltd. Todos los Derechos Reservados.</div>
<div id="theDisclaimer" class="disclaimer">
<span class="bold">Aviso legal:</span> Las operaciones con instrumentos financieros o criptomonedas implican un elevado riesgo, incluyendo la pérdida parcial o total del capital invertido, y pueden no ser adecuadas para todos los inversores. Los precios de las criptomonedas son extremadamente volátiles y pueden verse afectados por factores externos de tipo financiero, regulatorio o político. Operar sobre márgenes aumenta los riesgos financieros.<br>
Antes de lanzarse a invertir en un instrumento financiero o criptomoneda, infórmese debidamente de los riesgos y costes asociados a este tipo operaciones en los mercados financieros. Fije unos objetivos de inversión adecuados a su nivel de experiencia y su apetito por el riesgo y, siempre que sea necesario, busque asesoramiento profesional.<br />
<b>Fusion Media</b> quiere recordarle que la información contenida en este sitio web no se ofrece necesariamente ni en tiempo real ni de forma exacta. Los datos y precios de la web no siempre proceden de operadores de mercado o bolsas, por lo que los precios podrían diferir del precio real de cualquier mercado. Son precios orientativos que en ningún caso deben utilizarse con fines bursátiles. Ni <b>Fusion Media</b> ni ninguno de los proveedores de los datos de esta web asumen responsabilidad alguna por las pérdidas o resultados perniciosos de sus operaciones basados en su confianza en la información contenida en la web.<br />
Queda prohibida la total reproducción, modificación, transmisión o distribución de los datos publicados en este sitio web sin la autorización previa por escrito de Fusion Media y/o del proveedor de los mismos. Todos los derechos de propiedad intelectual están reservados a los proveedores y/o bolsa responsable de dichos los datos.<br />
<b>Fusion Media</b> puede recibir contraprestación económica de las empresas que se anuncian en la página según su interacción con éstas o con los anuncios que aquí se publican.
</br>
Este aviso legal está traducido de su texto original en inglés, versión que prevalecerá en caso de conflicto entre el texto original en inglés y su traducción al español. </div>
<script src="https://i-invdn-com.investing.com/js/jquery.scroll.0.js"></script>
<script type="text/javascript">
            $('#scrollToDisc').live('click', function()
            {
                $.scrollTo( $('#theBottom'), 0);
            });
        </script>
</section>
</footer>
<script type="text/javascript" src="https://i-invdn-com.investing.com/js/n/consent-manager-1.06.min.js"></script>
<script type="text/javascript" src="https://i-invdn-com.investing.com/js/n/search-bar-2.0-1.18.min.js"></script>
<script type="text/javascript" src="https://static.doubleclick.net/instream/ad_status.js"></script>
<script type="text/javascript">

if(!Modernizr.csstransitions && ie !== 7) {
	// Bind MouseOver effect to Navigation list nodes
	$('.navMenuUL > li').bind('mouseenter', function() {
        clearTimeout($(this).data('hideTimeout'));
        var someelement = this;
        var timeoutId = setTimeout(function(){ $('.subTopMenuTwoColumnContainer', someelement).show();$('.arrow', someelement).show();$('.arrow2', someelement).show(); }, 120);
        $(someelement).data('showTimeout', timeoutId);
    // Bind MouseOut effect to Navigation list nodes
    }).bind('mouseleave', function() {
        clearTimeout($(this).data('showTimeout'));
        var someelement = this;
        var timeoutId = setTimeout(function(){ $('.subTopMenuTwoColumnContainer', someelement).hide();$('.arrow', someelement).hide();$('.arrow2', someelement).hide(); }, 120);
        $(someelement).data('hideTimeout', timeoutId);
    });
    
	// Bind MouseOver effect to Real Time Quotes list nodes
	$('#navRealTime').bind('mouseenter', function() {
        clearTimeout($(this).data('hideTimeout'));
        var someelement = this;
        var timeoutId = setTimeout(function(){ $('.SubmenuNav', someelement).show(); }, 120);
        $(someelement).data('showTimeout', timeoutId);
    // Bind MouseOut effect to Navigation list nodes
    }).bind('mouseleave', function() {
        clearTimeout($(this).data('showTimeout'));
        var someelement = this;
        var timeoutId = setTimeout(function(){ $('.SubmenuNav', someelement).hide(); }, 120);
        $(someelement).data('hideTimeout', timeoutId);
    }); 

	// Bind MouseOver effect to Real Time Quotes list nodes
	$('.navRealTimeSubmenu .row').bind('mouseenter', function() {
		
        clearTimeout($(this).data('hideTimeout'));
        var someelement = this;
        var timeoutId = setTimeout(function(){ $('.navRealTimeSubMenuContainer', someelement).show(); }, 120);
        $(someelement).data('showTimeout', timeoutId);
    // Bind MouseOut effect to Navigation list nodes
    }).bind('mouseleave', function() {
        clearTimeout($(this).data('showTimeout'));
        var someelement = this;
        var timeoutId = setTimeout(function(){ $('.navRealTimeSubMenuContainer', someelement).hide(); }, 120);
        $(someelement).data('hideTimeout', timeoutId);
    });
}
$('#navRealTime').bind('click', function() {
    clearTimeout($(this).data('hideTimeout'));
    var someelement = this;
    var timeoutId = setTimeout(function(){ $('.SubmenuNav', someelement).show(); }, 120);
    $(someelement).data('showTimeout', timeoutId);
});

var _gaq = _gaq || [];
//new
    ga('create', 'UA-2555300-4', 'investing.com');
    ga('create', 'UA-2555300-55', 'auto', {'name': 'allSitesTracker'});  // ALL sites tracker.

var prebidPreActive = '';
    ga('allSitesTracker.set', 'dimension37', ( prebidPreActive ? 'page with prebid' : 'page without prebid'));

    
        ga('allSitesTracker.set', 'dimension127', 0);
    ga('require', 'displayfeatures');
    ga('allSitesTracker.set', 'dimension73','Web');
    ga('allSitesTracker.set', 'dimension17', getCookie('_ga').substr(6));
    ga('allSitesTracker.set', 'dimension1', 246932896);
	ga('allSitesTracker.set', 'dimension2', '246932896'); 
	ga('allSitesTracker.set', 'dimension49', '5cf363f0e96252259aabb67b8f2df346-1678227771');
		ga('allSitesTracker.set', 'dimension38', '5cf363f0e96252259aabb67b8f2df346');	ga('allSitesTracker.set', 'dimension95', '4');

        ga('set','&uid', 246932896);
    ga('set', 'dimension1', 246932896);
	ga('set', 'dimension73','Web');

	ga('allSitesTracker.set', 'dimension106', 'No');
	ga('allSitesTracker.set', 'dimension54', 'No');

	var myDate = new Date();
	ga('allSitesTracker.set', 'dimension81',myDate.getFullYear() + '/' +('0' + (myDate.getMonth()+1)).slice(-2)+ '/' +  ('0' + (myDate.getDate()+1)).slice(-2) + ' '+('0' + (myDate.getHours()+1)).slice(-2)+ ':'+('0' + (myDate.getMinutes())).slice(-2)+ ':'+('0' + (myDate.getSeconds()+1)).slice(-2));
	    ga('allSitesTracker.set', 'dimension170', 'headerBidding_enabled');
	
	                let proNewsCount = 0;
                $('body').find('.pro-title-list-icon').each(function () {
                    ++proNewsCount;
                });

                if(proNewsCount > 0){
                    ga('allSitesTracker.set', 'dimension150','invpro+ article preview');
                    ga('allSitesTracker.set', 'dimension151',proNewsCount);
                }
	        
        ga('send', 'pageview');
        ga('allSitesTracker.set','&uid', 246932896);
	<!-- Crypto Dimension LD -->
	    <!--Adblock Check-->

	jQuery(document).ready(checkAds());

	function checkAds(){

		function isIE() {
			var ua = window.navigator.userAgent;
			var trident = ua.indexOf('Trident/');
			var edge = ua.indexOf('Edge/');
			var msie = ua.indexOf('MSIE ');
			return Math.max(msie,edge,trident)>0;

		}

		var isIE = isIE();
		var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) && !isIE;
		var isFireFox = /Firefox/.test(navigator.userAgent);
		var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
		var isOneOfThoseBrowsers = [isIE,isChrome,isFireFox,isSafari].indexOf(true)>-1;

		var b = 2;

		//var hasAdsenseBlock = !!$('#adsense').length;
		//var hasShadowDom = (!!$("html")[0].shadowRoot);
		//var headerIsShown = ($(".midHeader").height() > 0 && $(".midHeader").css('display') !== 'none');

	    		  
		if (window.google_ad_status == 1){

    		var adbBlk = getCookie('adbBLk');
    		if(isOneOfThoseBrowsers && adbBlk>0){
        		ga('allSitesTracker.set', 'dimension22', '4_Blk_No');
        		setCookie('adbBLk',4,-1000);
    		}  
    		
    	}else{

    	    b = 1;
            $('#TopTextAd').css('display','flex');

			if(isOneOfThoseBrowsers) {
				setCookie('adbBLk',4,1000,'/');
				ga('allSitesTracker.set', 'dimension21', '4_Blk_Yes');
				 
									ga('allSitesTracker.set', 'dimension24', '4_AdBlkPopup');
							}
    	}
		
		$.ajax({
		    url: "/jp.php?b="+b+"&k=MWZhZmAwYWk-YDplYzQ1ZTVhMm03MzQwPT8wYWRqZztlYWNgZjU3ZDBmazNhbWZvYzFlYDI3ZmE1NjU6ZzBlMTEuYShgYmFsPjQ6K2NwNXU1OzI9Ny00cT1pMGFkP2c4ZTRjZGYzN3swemsyYWBmYWMwZTYyYGZnNWA1P2d_ZW0xc2EwYHBhZw==&d=1&i=1678227983&e=&lip=dal-prod-weblegacy-589cc4cf6-mw2vj&ti=1678227983",
		    type: 'get',
		    cache: false,
		    type: 'GET',
		    dataType: 'html',
		    success: function (data) {
		    	  console.log('server jp b1 dal-prod-weblegacy-589cc4cf6-mw2vj');
		    }
		});
    	
    }

    window.ga('allSitesTracker.set', 'dimension168', 1);    	    ga('allSitesTracker.send', 'pageview');
    	<!--End Adblock Check-->


</script>
<script>
//disabled is a temporary argument for testing purposes 
var BoxesEvents = function($,ga,disabled)
{
	var e_stack = []; //each event is pushed to this stack
	//this objcet links urls to event types
    var boxes = {"side_central_banks":"centralbanks","webmaster_tools":"wmt","Most_Popular_News":"mostpop","broker_promotions":"sb_promotions","marketMoversBoxWrapper":"sb_marketmovers","QBS_2_inner":"sb_indices","QBS_3_inner":"sb_commodities","QBS_1_inner":"sb_forex","QBS_4_inner":"sb_bonds","TSB_1_inner":"tsb_fx","TSB_2_inner":"tsb_commodities","TSB_3_inner":"tsb_indices","TSB_4_inner":"tsb_stocks"};

    var resume_click_event = function(ev)
    {
    	if (ev['link']==='') {return;}
        window.location.href = ev['link'];
    }
    
    
	var register_events = function()
	{
	    for (var id in boxes)
	    {
		    (function(id){
			    var _$b = $('#'+id);
			    if (_$b.length < 1) {return;}
			    
			    //box click event
			    _$b.mouseup(function(e){
					if (e.button === 2) {return true;} //right mouse button
					var middleMouse = e.button === 1;
				    if (!middleMouse) {e.preventDefault();}
				    var box_event = boxes[id];
				    e_stack.push({'event':box_event,'link':''});
				    var ce = null; //current event 
				    //function creator
				    var callbackCreate = function(data) {return function() {resume_click_event(data);}}
		            var hitCallback = null;
		            
				    while(ce = e_stack.pop())
				    {
						if (ce['link'].substr(0,10) === "javascript") {continue;}//if the link is javascript call ignore it
						hitCallback = middleMouse ? function(){} : callbackCreate(ce);
				    	//if a link with no event do nothing
					    if (ce['event'] == '') {hitCallback(); return true;}
						
				    					        window.ga('t0.send',{
                            'hitType': 'event',          
                            'eventCategory': 'side-box-events',
                            'eventAction': ce['event'], 
                            'eventValue' : 1,
                            'hitCallback': hitCallback //resume click event
				            }
				        );
				        //fallback if ga doesn't work
				        window.setTimeout(hitCallback,1500);
				    }
				    return middleMouse;
			    });
			    
			    //link event 
                _$b.on('mouseup','a',function(e){
					if (e.button === 2) {return true;} //right mouse button
                	e.preventDefault();
					var url = this.getAttribute('href');
					var event = this.getAttribute('data-gae');
					e_stack.push({'event':'','link':url});
					if (event)
					{
						e_stack.pop();
						e_stack.push({'event':event,'link':url});
					} 
				  });
    	        
		    })(id);
	    }		   	
	};
	
    var init = function()
    {
        if (disabled) {return;}
        if (typeof $ !== 'function') {return;}
        if (typeof ga !== 'function') {return;}
        register_events();
    }();
}(window.jQuery,window.ga,true);
</script>
<script>
    function onProNewsClick(contentId,clickedNode)
    {
        let position = 0;
        let container = ($('section#leftColumn').length === 1 ? $('section#leftColumn') : $('div.allPortfoliosWrapper'));
        container.find('article').each(function(i){
            if($(this).attr('data-id') == contentId){
                position = i;
            }
        });

        ga('allSitesTracker.send', 'event', 'inv pro premium', 'article preview clicked', 'desktop', {
            'dimension147': 'inv_pro_article_clicked',
            'dimension148': 'article preview',
            'dimension163': 'click',
            'dimension118': contentId,
            'dimension152': 'content type',
            'dimension153': 'news',
            'dimension154': 'position',
            'dimension155': ++position
        });
    }
</script>
</div>
<script type='text/javascript'>
	if (!window.googletag) {
		window.googletag = {cmd: []};
	}
	googletag.cmd.push(function() {
            googletag.pubads().setTargeting("DS_CP_all","0");
            googletag.pubads().setTargeting("DS_CP_country","0");
            googletag.pubads().setTargeting("ds_random_tests","10");
          googletag.pubads().enableSingleRequest();  googletag.enableServices();
	            	});        if (sponsoredArticle) {
        googletag.cmd.push(function() { googletag.display(sponsoredArticle); });
        }
        </script><script type='text/javascript'>
	$(document).ready(function () {
	googletag.cmd.push(function() {  googletag.pubads().enableSingleRequest();  googletag.enableServices();
	            	});
		});</script> <script type='text/javascript'>
            (function () {
            	let $ad2;
                $(window).on('scroll.ad2', function () {
                    if (!$ad2) {
                    	$ad2 = $('#ad2');
                    }
                    let scroll = $(window).scrollTop();
                    if($ad2 && $ad2.offset() && typeof(googletag.defineSlot) === 'function') {
                        let distanceFromTop = $ad2.offset().top;
                        if (window.loadSideBlockAd2 && distanceFromTop - scroll <= 705) {
                            window.loadSideBlockAd2();
                            window.loadSideBlockAd2 = null;
                        }
                        if (window.displaySideBlockAd2 && distanceFromTop - scroll <= 700) {
                            window.displaySideBlockAd2();
                            window.displaySideBlockAd2 = null;
                        }
                    }
                })
            	let $ad3;
                $(window).on('scroll.ad3', $.throttle(function () {
                    if (typeof(loadFooterBanner) === 'function'){
                        loadFooterBanner();
                        loadFooterBanner = function(){}
                    }
                    if (!$ad3) {
                    	$ad3 = $('#ad3');
                    }
                    if (window.loadSideBlockAd3 && typeof(googletag.defineSlot) === 'function' && $.isInView($ad3, true, 20)) {
                        window.loadSideBlockAd3();
                        window.loadSideBlockAd3 = null;
						$(window).off('scroll.ad3');
                    }
                }, 16))
            })()
        </script>
<div id="abPopup" class="genPopup ab displayNone">
<div class="header">Cómo detener el bloqueo de anuncios en este sitio web <span class="headerLinks">
<a href="javascript:void(0);" class="js-chrome-ext js-toggle-btn">Chrome adblock extension</a>
<a href="javascript:void(0);" class="active js-adbp js-toggle-btn">AdBlock Plus</a>
</span>
<div class="clear"></div>
</div>
<div class="content js-intro" id="ab-intro">
<img id="ab-header-src">
<p class="title">Nos hemos dado cuenta de que utiliza un bloqueo de publicidad</p>
<p>Cada año, empleamos millones de euros para que usted pueda acceder GRATIS a cotizaciones y gráficos de alta calidad en tiempo real. Esto es posible gracias a la publicidad de nuestra web.</p>
 <p></p>
<p>Para seguir utilizando Investing.com, autorice a su sistema de bloqueo de publicidad a mostrarle los anuncios de este sitio web.</p>
<a href="javascript:void(0);" class="newButton orange hugeBtn js-chrome-ext allowBtn">Permitir este dominio</a> <div class="clear"></div>
<div class="adFreeSubscribeWrap">
<span class="subscribeAdFree bold newBtn noIcon green" data-url="/ad-free-subscription/?src=adblock&source=desktop&medium=adblock"><a href="javascript:void(0);">Suscríbase a nuestra versión sin publicidad</a></span>
</div>
</div>
<div class="content displayNone" id="ab-how-pop">
<img id="ab-content-src">
<div class="clear"></div>
<a href="javascript:void(0);" class="js-back howToBottom bold"> Atrás</a>
</div>
</div>
<script>
            window.CDN_URL='https://i-invdn-com.investing.com';
            window.LANGUAGE_SUFFIX='es';
        </script>
<script>
            $(function(){
                var pageViewCounter = getCookie('page_view_count') || 0;
                pageViewCounter++;
                document.cookie = "page_view_count=" + pageViewCounter + ";expires=0;domain=.investing.com;path=/";
            });
        </script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/vaafb692b2aea4879b33c060e79fe94621666317369993" integrity="sha512-0ahDYl866UMhKuYcW078ScMalXqtFJggm7TmlUtp0UlD4eQk0Ixfnm5ykXKvGJNFjLMoortdseTfsRT8oCfgGA==" data-cf-beacon='{"rayId":"7a46427fec2db6ee","token":"00ab903b5e184b1a9d53b0a7a5085300","version":"2023.2.0","si":100}' crossorigin="anonymous"></script>
</body>

<img src="https://secure.adnxs.com/seg?t=2&add=19833489,19833493" width="1" height="1" />

<script>var TimeZoneID = +"58";window.timezoneOffset = +"3600";window.stream = "https://streaming.forexpros.com:443";</script><script>window.uid = 246932896</script><script>

			$(function(){
				$(window).trigger("socketRetry",[["domain-4:"]]);
			});
			</script><script>function refresher() { void (0);}</script><script>
    	var _comscore = _comscore || [];
    	_comscore.push(
    	{ c1: "2", c2: "16896267" }

    	);
    	(function()
    	{ var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true; s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js"; el.parentNode.insertBefore(s, el); }

    	)();
    	</script>
<script type="text/javascript">
        fbq = window.fbq || $.noop;
    </script>
</html>
