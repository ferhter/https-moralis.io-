<DOCTYPE html>

<html lang="">
	<head>
				<title>Servicio de Monitoreo</title>
				
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<link rel="icon" type="image/png" href="https://us13-static.cloudns.net/images/web/favicon.gif" />
		
		<script src="https://us13-static.cloudns.net/js/jquery.min.js?ver=34352" type="text/javascript"></script>
		<script src="https://us13-static.cloudns.net/js/jquery.ui.js?ver=34352" type="text/javascript"></script>
		<script src="https://us13-static.cloudns.net/js/jquery.additional.min.js?ver=34352" type="text/javascript"></script>
				
		<link href="https://us13-static.cloudns.net/css/additional.min.css?ver=34352" rel="stylesheet" type="text/css" />
		
					<link href="https://us13-static.cloudns.net/css/fonts.css?ver=34352" rel="stylesheet" type="text/css" />
				<link href="https://us13-static.cloudns.net/css/new-style.css?ver=34352" rel="stylesheet" type="text/css" />
		<link href="https://us13-static.cloudns.net/css/icons.css?ver=34352" rel="stylesheet" type="text/css" />
		<link href="https://us13-static.cloudns.net/css/c-panel.css?ver=34352" rel="stylesheet" type="text/css" />
		
				<link href="https://us13-static.cloudns.net/css/monitoring.css?ver=34352" rel="stylesheet" type="text/css" />
				
		<link href="https://us13-static.cloudns.net/css/responsive.css?ver=34352" rel="stylesheet" type="text/css" />
		<link href="https://us13-static.cloudns.net/css/popup.css?ver=34352" rel="stylesheet" type="text/css" />
		<link href="https://us13-static.cloudns.net/css/header-responsive.css?ver=34352" rel="stylesheet" type="text/css" />
		
		
						<script type="text/javascript">
			var JQUERY_AJAX_STARTED = false;
			var CLOUD_AJAX_STARTED = false;
			var TIPSY_AJAX_STARTED = false;
			var HCAPTCHA_AJAX_STARTED = false;
			var CHART_AJAX_STARTED = false;
			
						
			function loadJs (callback, dependency) {
				if (document.readyState !== 'complete') {
					return setTimeout(function() {
						loadJs(callback, dependency);
					}, 500);
				}
				
				if (typeof JQUERY_JS_FILE_LOADED === "undefined") {
					TIPSY_JS_FILE_LOADED = undefined;
					FITTEXT_JS_FILE_LOADED = undefined;
					
					if (JQUERY_AJAX_STARTED === true) {
						return setTimeout(function() {
							loadJs(callback, dependency);
						}, 1000);
					} else {
						var xhttp = new XMLHttpRequest();
						xhttp.onreadystatechange = function() {
							JQUERY_AJAX_STARTED = true;
							if (this.readyState == 4 && this.status == 200) {
								var response = JSON.parse(this.responseText);
								(1,eval)(response.js);
							}
						}
						xhttp.open("POST", "/ajaxActions.php?action=js", true);
						xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
						xhttp.send("action=jquery");

						return setTimeout(function() {
							loadJs(callback, dependency);
						});
					}
				}
				
				if (typeof CLOUD_JS_FILE_LOADED === "undefined") {
					if (CLOUD_AJAX_STARTED === true) {
						return setTimeout(function() {
							loadJs(callback, dependency);
						}, 1000);
					} else {
						CLOUD_AJAX_STARTED = true;
						$.post('/ajaxActions.php?action=js', {
							'action': 'cloud'
						}, function (response) {
							if (response.status) {
								(1,eval)(response.js);
							}
						}, 'json');

						return setTimeout(function() {
							loadJs(callback, dependency);
						});
					}
				}
				
				if (typeof JQUERY_JS_FILE_LOADED === "undefined" || typeof TIPSY_JS_FILE_LOADED === 'undefined') {
					if (TIPSY_AJAX_STARTED === true) {
						return setTimeout(function() {
							loadJs(callback, dependency);
						}, 1000);
					} else {	
						TIPSY_AJAX_STARTED = true;
						$.post('/ajaxActions.php?action=js', {
							'action': 'tipsy'
						}, function (response) {
							if (response.status && typeof TIPSY_JS_FILE_LOADED === "undefined") {
								(1,eval)(response.js);
							}
						}, 'json');

						return setTimeout(function() {
							loadJs(callback, dependency);
						});
					}
				}
				
				if (dependency === 'hcaptcha' && typeof hcaptcha === "undefined") {
					if (HCAPTCHA_AJAX_STARTED === true) {
						return setTimeout(function() {
							loadJs(callback, dependency);
						}, 1000);
					} else {	
						HCAPTCHA_AJAX_STARTED = true;
						$.post('/ajaxActions.php?action=js', {
							'action': 'hcaptcha'
						}, function (response) {
							if (response.status) {
								(1,eval)(response.js);
							}
						}, 'json');

						return setTimeout(function() {
							loadJs(callback, dependency);
						});
					}
				}
				
				if (dependency === 'chart' && typeof CHART_JS_FILE_LOADED === "undefined") {
					if (CHART_AJAX_STARTED === true) {
						return setTimeout(function() {
							loadJs(callback, dependency);
						}, 1000);
					} else {	
						CHART_AJAX_STARTED = true;
						$.post('/ajaxActions.php?action=js', {
							'action': 'chart'
						}, function (response) {
							if (response.status) {
								(1,eval)(response.js);
							}
						}, 'json');

						return setTimeout(function() {
							loadJs(callback, dependency);
						});
					}
				}
				
								
				if (typeof JQUERY_JS_FILE_LOADED !== "undefined" && typeof CLOUD_JS_FILE_LOADED !== "undefined" && typeof TIPSY_JS_FILE_LOADED !== 'undefined') {
					callback();
				}
			}
				
			loadJs(function(){
				$(function () {
					$("a.tooltip, .header-tooltip, a.logout").tooltip({
						track: true,
						delay: 0,
						showURL: false,
						showBody: "<body>",
						fade: 250 
					});
					
						
					checkDirection('ltr');

											addTranslation('cart_menu', 'Cesta (%s)');
									});
			});
		</script>	</head>
	<body class="lang-es">
		
		<div id="cloudOverlay"></div>
		<div id="cloudPage">
			<div id="cloudPageClose"></div>
			<div id="cloudPageContent"></div>
		</div>
		<div id="cloudSecondOverlay"></div>
		<div id="cloudMessage">
			<div id="cloudMessageClose"></div>
			<div id="cloudMessageContent"></div>
		</div>
		
		<div class="popup" id="cloudnspop">
			<div id="popupOverlay" class="overlay" onclick="hidePopup(0);"></div>
			<div class="popup-wraper">
				<button type="button" class="close-btn close-popup" aria-label="cerrar" onclick="hidePopup(0);">
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 40 40"><path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg>
				</button>
				<div class="popup-content"></div>
			</div>
		</div>
		
		<div class="popup popup-message" id="popup-message">
			<div id="popupSecondOverlay" class="overlay" onclick="hidePopupMessage(0);"></div>
			<div class="popup-wraper">
				<button type="button" class="close-btn close-popup" aria-label="cerrar" onclick="hidePopupMessage(0);">
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 40 40"><path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg>
				</button>
				<div class="popup-content"></div>
			</div>
		</div>
		
		<div class="popup popup-confirmation a-c" id="popup-confirmation">
			<div id="popupConfirmationOverlay" class="overlay" onclick="loadJs(function(){hideConfirmation(0);});"></div>
			<div class="popup-wraper">
				<button type="button" class="close-btn close-popup" aria-label="cerrar" onclick="loadJs(function(){hideConfirmation(0);});">
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 40 40"><path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg>
				</button>
			<div class="popup-content a-c"></div>
			<div class="popup-buttons a-c">
				<button onclick="loadJs(function(){hideConfirmation(0);});" class="round-btn m-btn x-bright-btn">cancelar</button>
				<button onclick="loadJs(function(){hideConfirmation(1);});" class="round-btn m-btn color-btn">Bueno</button>
			</div>
		    </div>
		</div>
		
		<div id="splashScreen">
			<div class="lds-roller" id="splashImage"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
		
				
			
					
		<header class="dashboard">
			<div class="wraper">
				<a href="/" class="logo"></a>
														<div class="lang-bar mobile-lang-bar">
						<a href="javascript:void(0);" onClick="loadJs(function(){showLanguages(event)}); return false;" class="drop-down">
							<span class="lang lang-es"></span>
							<span>Español</span>
						</a>
						<ul class="drop-down-menu">
																								<li >
										<a href="/main/lang/en/">
											<span class="lang lang-en"></span>
											<span>English</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/ru/">
											<span class="lang lang-ru"></span>
											<span>Русский</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/de/">
											<span class="lang lang-de"></span>
											<span>Deutsch</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/fr/">
											<span class="lang lang-fr"></span>
											<span>Français</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/ro/">
											<span class="lang lang-ro"></span>
											<span>Română</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/bg/">
											<span class="lang lang-bg"></span>
											<span>Български</span>
										</a>
									</li>
																																															<li >
										<a href="/main/lang/pt/">
											<span class="lang lang-pt"></span>
											<span>Português</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/it/">
											<span class="lang lang-it"></span>
											<span>Italiano</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/pl/">
											<span class="lang lang-pl"></span>
											<span>Polski</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/sk/">
											<span class="lang lang-sk"></span>
											<span>Slovenský</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/ua/">
											<span class="lang lang-ua"></span>
											<span>Українська</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/tr/">
											<span class="lang lang-tr"></span>
											<span>Türkçe</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/jp/">
											<span class="lang lang-jp"></span>
											<span>日本語</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/hi/">
											<span class="lang lang-hi"></span>
											<span>हिंदी</span>
										</a>
									</li>
																																<li  class="font-smaller" >
										<a href="/main/lang/id/">
											<span class="lang lang-id"></span>
											<span>Bahasa Indonesia</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/he/">
											<span class="lang lang-he"></span>
											<span>עברית</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/chs/">
											<span class="lang lang-chs"></span>
											<span>简体中文</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/cht/">
											<span class="lang lang-cht"></span>
											<span>繁體中文</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/vn/">
											<span class="lang lang-vn"></span>
											<span>Tiếng Việt</span>
										</a>
									</li>
																																<li >
										<a href="/main/lang/ir/">
											<span class="lang lang-ir"></span>
											<span>فارسی</span>
										</a>
									</li>
																					</ul>
					</div>
								<nav>
					<ul>
						<li>
							<a href="/main/" class="active">Panel</a>
						</li>
						<li class="cursor-default">
							<a href="javascript: void(0);" class="drop-down cursor-default">Facturación</a>
							<ul class="drop-down-menu">
																								<li><a href="/billing/">Métodos de pago y Renovación Automática</a>
								<li><a href="/orders/">Pedidos</a></li>
								<li><a href="/invoices/">Facturas</a></li>
								<li><a href="/balance/">Saldo de la Cuenta</a></li>
								<li><a href="/vouchers/">Cupones</a></li>
								<li><a href="/affiliate-program/">Programa de Afiliación </a></li>
							</ul>
						</li>
						<li>
							<a href="/jobs/">Herramientas</a>
						</li>
						
						<li>
							<a href="/api-settings/">API & Resellers</a>
						</li>
						
						<li class="cursor-default">
							<a href="javascript: void(0);" class="drop-down cursor-default">Servicios</a>
							<ul class="drop-down-menu">
								<li><a href="/premium/">Premium DNS</a></li>
								<li><a href="/ddos-protected-plans/">DDoS Protected</a>
								<li><a href="/geodns/">GeoDNS</a></li>
								<li><a href="/private-dns-servers/">Servidores DNS Privados</a></li>
							</ul>
						</li>
						
						<li class="cursor-default">
							<a href="javascript: void(0);" class="drop-down cursor-default">
								Soporte técnico															</a>
							<ul class="drop-down-menu">
								<li>
									<a href="/support/">
																					Tickets																			</a>
								</li>
																<li><a href="/livechat/">Live Chat</a></li>
																<li><a href="/wiki/">Wiki</a></li>
							</ul>
						</li>
					</ul>
				</nav>
				<aside>
					<div>
						<a href="/order/step/1/" class="icon icon-cart icon-white header-tooltip" id="cartHeaderProductsTitle" title="Cesta (0)" aria-label="Cesta (0)">
						<span id="cartHeaderProducts" class="counter hidden">0</span>
						</a>
						
																		<div class="lang-bar desktop-lang-bar">
							<a href="javascript:void(0);" onClick="loadJs(function(){showLanguages(event)}); return false;" class="drop-down">
								<span class="lang lang-es"></span>
								<span>Español</span>
							</a>
							<ul class="drop-down-menu">
																											<li >
											<a href="/main/lang/en/">
												<span class="lang lang-en"></span>
												English											</a>
										</li>
																																				<li >
											<a href="/main/lang/ru/">
												<span class="lang lang-ru"></span>
												Русский											</a>
										</li>
																																				<li >
											<a href="/main/lang/de/">
												<span class="lang lang-de"></span>
												Deutsch											</a>
										</li>
																																				<li >
											<a href="/main/lang/fr/">
												<span class="lang lang-fr"></span>
												Français											</a>
										</li>
																																				<li >
											<a href="/main/lang/ro/">
												<span class="lang lang-ro"></span>
												Română											</a>
										</li>
																																				<li >
											<a href="/main/lang/bg/">
												<span class="lang lang-bg"></span>
												Български											</a>
										</li>
																																																					<li >
											<a href="/main/lang/pt/">
												<span class="lang lang-pt"></span>
												Português											</a>
										</li>
																																				<li >
											<a href="/main/lang/it/">
												<span class="lang lang-it"></span>
												Italiano											</a>
										</li>
																																				<li >
											<a href="/main/lang/pl/">
												<span class="lang lang-pl"></span>
												Polski											</a>
										</li>
																																				<li >
											<a href="/main/lang/sk/">
												<span class="lang lang-sk"></span>
												Slovenský											</a>
										</li>
																																				<li >
											<a href="/main/lang/ua/">
												<span class="lang lang-ua"></span>
												Українська											</a>
										</li>
																																				<li >
											<a href="/main/lang/tr/">
												<span class="lang lang-tr"></span>
												Türkçe											</a>
										</li>
																																				<li >
											<a href="/main/lang/jp/">
												<span class="lang lang-jp"></span>
												日本語											</a>
										</li>
																																				<li >
											<a href="/main/lang/hi/">
												<span class="lang lang-hi"></span>
												हिंदी											</a>
										</li>
																																				<li  class="font-smaller" >
											<a href="/main/lang/id/">
												<span class="lang lang-id"></span>
												Bahasa Indonesia											</a>
										</li>
																																				<li >
											<a href="/main/lang/he/">
												<span class="lang lang-he"></span>
												עברית											</a>
										</li>
																																				<li >
											<a href="/main/lang/chs/">
												<span class="lang lang-chs"></span>
												简体中文											</a>
										</li>
																																				<li >
											<a href="/main/lang/cht/">
												<span class="lang lang-cht"></span>
												繁體中文											</a>
										</li>
																																				<li >
											<a href="/main/lang/vn/">
												<span class="lang lang-vn"></span>
												Tiếng Việt											</a>
										</li>
																																				<li >
											<a href="/main/lang/ir/">
												<span class="lang lang-ir"></span>
												فارسی											</a>
										</li>
																								</ul>
						</div>
											</div>
				</aside>
				<button class="mobile-nav-btn" id="mobileNavBtn" onClick="loadJs(function(){openMobileMenu()});"><span></span></button>
				<div class="mobile-nav a-c">
					<ul>
						<li>
							<a href="/main/">Panel</a>
						</li>
						<li onClick="expandMobileMenu(this);">
							<a href="javascript: void(0);" class="drop-down cursor-default">Facturación</a>
							<ul class="drop-down-menu">
																								<li><a href="/billing/">Métodos de pago y Renovación Automática</a>
								<li><a href="/orders/">Pedidos</a></li>
								<li><a href="/invoices/">Facturas</a></li>
								<li><a href="/balance/">Saldo de la Cuenta</a></li>
								<li><a href="/vouchers/">Cupones</a></li>
								<li><a href="/affiliate-program/">Programa de Afiliación </a></li>
							</ul>
						</li>
						<li>
							<a href="/jobs/">Herramientas</a>
						</li>
						
						<li>
							<a href="/api-settings/">API & Resellers</a>
						</li>
						
						<li onClick="expandMobileMenu(this);">
							<a href="javascript: void(0);" class="drop-down cursor-default">Servicios</a>
							<ul class="drop-down-menu">
								<li><a href="/premium/">Premium DNS</a></li>
								<li><a href="/ddos-protected-plans/">DDoS Protected</a>
								<li><a href="/geodns/">GeoDNS</a></li>
								<li><a href="/private-dns-servers/">Servidores DNS Privados</a></li>
							</ul>
						</li>
						
						<li  onClick="expandMobileMenu(this);">
							<a href="javascript: void(0);" class="drop-down cursor-default">
								Soporte técnico															</a>
							<ul class="drop-down-menu">
								<li>
									<a href="/support/">
																					Tickets																			</a>
								</li>
																<li><a href="/livechat/">Live Chat</a></li>
																<li><a href="/wiki/">Wiki</a></li>
							</ul>
						</li>
					</ul>
				</div>
				
			</div>
		</header>
		<div class="sub-header">
			<div class="wraper">
				<ul>
					<li class="overflowHidden">
						<a aria-label="Configuración" title="Configuración" href="/profile/" class="icon icon-settings header-tooltip subheader-mail">
							alaikum226@gmail.com						</a>
					</li>
					<li>
						<a  href="/subscription/" class="icon icon-free header-tooltip user-data-tooltip" id="userDataPlan">Free						</a>
					</li>
										<li>
						<a  href="/subscription-monitoring/" class="icon icon-free header-tooltip">
															Free Monitoring
													</a>
					</li>
															<li>
						<a href="/balance/" class="icon icon-wallet header-tooltip " aria-label="Saldo: $0.00" title="Saldo">
							$0.00						</a>
					</li>
				</ul>
				<div class="mobile-subheader">
					<div class="overflowHidden">
						<a aria-label="Menú" title="Menú" href="javascript: void(0)" class="header-tooltip subheader-mail" onClick="openSubheaderMenu();">
							alaikum226@gmail.com						</a>
						<button class="open-drop-down" onClick="openSubheaderMenu();"></button>
					</div>
					<div class="menu" id="subHeaderMobileMenu">
						<ul>
							<li>
								<a aria-label="Configuración" title="Configuración" href="/profile/" class="icon icon-settings header-tooltip">Configuración</a>
							</li>
							<li>
								<a  href="/subscription/" class="icon icon-free header-tooltip user-data-tooltip" id="userDataPlan">Free								</a>
							</li>
														<li>
								<a  href="/subscription-monitoring/" class="icon icon-free header-tooltip">
																	Free Monitoring
															</a>
							</li>
																					<li>
								<a href="/balance/" class="icon icon-wallet header-tooltip  " aria-label="Saldo: $0.00" title="Saldo">
									$0.00								</a>
							</li>
						</ul>
					</div>
				</div>
				<a href="/logout/" class="login icon icon-on-off"> <span>Finalizar la sesión</span></a>
			</div>
		</div>

<section class="wraper section-row">
	<div class="wraper w-b b-r ww-bw fo-wraper monitoring-wraper halfPage f-l">
		<div>
			<p class="mt-20 bold i-b">Servicio de Monitoreo</p>
			<button type="button" class="round-btn s-btn bright-btn mt-20 i-b f-r" onClick="return monitoring_deactivate(6886, '¿Está seguro de que desea borrar esta comprobación de monitoreo?');">Eliminar </button>
		</div>
		
		<form method="post" onsubmit="return monitoring_recordModify(6886);" id="fo_form" class="flat2-input-style xs-input-wraper popup-form-wraper failover-settings-popup">
			
			<ul>
				<li>
					<label class="label-auto">Nombre:</label>
					<input type="text" id="fo_name" value="internet-start.net" maxlength="32">
					<span class="fo-info">&nbsp;<span class="info" title="Nombre de su comprobación de monitoreo. No debe tener más de 32 caracteres y solo puede contener caracteres a-z, A-Z, 0-9, -, . y espacios.">?</span></span>
				</li>
				
				<li class="monitoringTypeNot monitoringTypeNot12">
					<label class="label-auto">IP/Host:</label>
					<input type="text" id="fo_ip" value="192.168.1.254">
					<span class="fo-info">&nbsp;<span class="info" title="Dirección IP que desea monitorear.">?</span></span>
				</li>
				<li>
					<label class="label-auto">Tipo de monitoreo:</label>
					<select id="fo_check_type" onchange="dashboard_monitoringChangeType()">
													<option value="1" >Ping (15% threshold)</option>
														<option value="2" >Ping (25% threshold)</option>
														<option value="3" >Ping (50% threshold)</option>
														<option value="4" >HTTP</option>
														<option value="5" >HTTPS</option>
														<option value="6" >HTTP custom string</option>
														<option value="7" >HTTPS custom string</option>
														<option value="8" >TCP</option>
														<option value="9" >UDP</option>
														<option value="10" >DNS</option>
														<option value="12" >Heartbeat</option>
														<option value="13" selected="selected">TLS (SSL) certificate</option>
												</select>
					<span class="fo-info">&nbsp;<span class="info" title="Tipo de monitoreo que desea realizar en la dirección IP.">?</span></span>
				</li>

				<li class="monitoringTypeNot monitoringTypeNot12">
					<label class="label-auto">Región de monitoreo:</label>
					<select id="fo_monitoring_region">
												<option value="global" selected="selected">Global</option>
												<option value="eur" >Continent: Europa</option>
												<option value="nam" >Continent: Norteamérica</option>
												<option value="asi" >Continent: Asia-Pacific</option>
										
													<option value="at" >País: Austria</option>
													<option value="bg" >País: Bulgaria</option>
													<option value="br" >País: Brazil</option>
													<option value="ca" >País: Canada</option>
													<option value="de" >País: Germany</option>
													<option value="es" >País: Spain</option>
													<option value="fi" >País: Finland</option>
													<option value="fr" >País: France</option>
													<option value="hk" >País: Hong Kong</option>
													<option value="hu" >País: Hungary</option>
													<option value="il" >País: Israel</option>
													<option value="in" >País: India</option>
													<option value="it" >País: Italy</option>
													<option value="jp" >País: Japan</option>
													<option value="kr" >País: South Korea</option>
													<option value="mx" >País: Mexico</option>
													<option value="nl" >País: Netherlands</option>
													<option value="pe" >País: Peru</option>
													<option value="pl" >País: Poland</option>
													<option value="ro" >País: Romania</option>
													<option value="ru" >País: Russian Federation</option>
													<option value="sg" >País: Singapore</option>
													<option value="tr" >País: Turkey</option>
													<option value="tw" >País: Taiwan</option>
													<option value="uk" >País: United Kingdom</option>
													<option value="us" >País: United States</option>
													<option value="za" >País: South Africa</option>
											</select>
					<span class="fo-info">&nbsp;<span class="info" title="La prueba de monitoreo será monitoreada solo desde esta región.">?</span></span>
				</li>

				<li>
					<label class="label-auto">Período de Monitoreo:</label>
					<select id="fo_check_period">				
													<option value="600">10 Minutos</option>
													<option value="900">15 Minutos</option>
													<option value="1200">20 Minutos</option>
													<option value="1800">30 Minutos</option>
													<option value="3600" selected="selected">1 Hora</option>
											</select>
				</li>
				<li>
					<label class="label-auto">Número de comprobaciones a considerar arriba(up)/abajo(down):</label>
					<input type="text" id="fo_status_change_checks" value="1">
					<span class="fo-info">&nbsp;<span class="info" title="El número de comprobaciones para confirmar el cambio de estado.">?</span></span>
				</li>
			</ul>
			
			<ul class="monitoringType monitoringType4 monitoringType5 monitoringType6 monitoringType7" style="display:none">
				<li class="fo-url">
					<label class="label-auto">URL para verificar:</label>
				</li>
				<li class="col flex-line fo-url">
					http<span class="monitoringType monitoringType5 monitoringType7 fo-span" style="display:none">s</span>://&nbsp;<input type="text" id="fo_http_host" value="internet-start.net" placeholder="FQDN" class="fo-domain" onKeyUp="equalizeFOHostnameValues(this)" />&nbsp;:&nbsp;


					<input type="text" id="fo_http_port" value="443" placeholder="port" class="fo-port" onKeyUp="equalizeFOHostnameValues(this)" />
					&nbsp;/&nbsp;

					<input type="text" id="fo_http_path" placeholder="ruta" value="" class="fo-path" onKeyUp="equalizeFOHostnameValues(this)" />
					<span class="fo-info">&nbsp;<span class="info" title="El FQDN será monitoreado en la dirección IP.">?</span></span>
				</li>

				<li class="fo-url-triple-row">
					<label class="label-auto">Dominio:</label>
					<input type="text" id="fo_http_hostm" value="internet-start.net" placeholder="FQDN" class="fo-domainm" onKeyUp="equalizeFOHostnameValues(this)" />
				</li>


				<li class="fo-url-triple-row">
					<label class="label-auto">Puerto:</label>
					<input type="text" id="fo_http_portm" placeholder="port" class="fo-portm" value="443" onKeyUp="equalizeFOHostnameValues(this)" />
				</li>


				<li class="fo-url-triple-row">
					<label class="label-auto">ruta:</label>
					<input type="text" id="fo_http_pathm" placeholder="ruta" value="" class="fo-pathm" onKeyUp="equalizeFOHostnameValues(this)" />
				</li>
		
				<li>
					<label class="label-auto">HTTP status code:</label>
					<input type="text" id="fo_http_status_code" value="200">
					<span class="fo-info">&nbsp;<span class="info" title="HTTP status code the monitored server will return.">?</span></span>
				</li>
			</ul>
			
			<ul class="monitoringType monitoringType6 monitoringType7" style="display:none">
				<li>
					<label class="label-auto">Cadena a corresponder:</label>
					<input type="text" id="fo_http_content" placeholder="OK" value="">
					<span class="fo-info">&nbsp;<span class="info" title="El contenido devuelto por la URL marcada debe ser igual a esta cadena.">?</span></span>
				</li>
			</ul>

			<ul class="monitoringType monitoringType8 monitoringType9" style="display:none">
				<li>
					<label class="label-auto">Puerto:</label>
					<input type="text" id="fo_port" value="443" placeholder="Número de port">
					<span class="fo-info">&nbsp;<span class="info" title="El número de port al que se realizará la verificación TCP o UDP.">?</span></span>
				</li>
			</ul>
			
			<ul class="failover-notifications monitoringType monitoringType8 monitoringType9" style="display:none">
				<li>
					<label class="label-auto state-title-label">El puerto (port) debe ser:</label>
					<label class="state-label">
						<input class="minus-999-em" type="radio" name="monitoring_port" value="1" id="monitoring_port_open" checked="checked">
						<span class="radiobutton"></span><span>Abierto / Abierta</span>&nbsp;<span class="fo-info"><span class="info monitoringType monitoringType8" title="La comprobación de monitoreo se considerará ACTIVA (UP) si el puerto (port) está abierto y se establece una conexión TCP exitosa.">?</span></span><span class="fo-info"><span class="info monitoringType monitoringType9" title="La comprobación de monitoreo se considerará ACTIVA (UP), si el puerto (port) está abierto.">?</span></span>
					</label>
				
					<label class="state-label">
						<input class="minus-999-em" type="radio" name="monitoring_port" value="0" id="monitoring_port_closed" >
						<span class="radiobutton"></span><span>Cerrado / Cerrada</span>
						<span class="fo-info"><span class="info" title="La comprobación de monitoreo se considerará ACTIVA (UP) si el puerto (port) está cerrado, filtrado o no se ha establecido una conexión exitosa. Esta opción se puede usar para monitorear si su firewall está funcionando como se esperaba.">?</span></span>
					</label>
				</li>
			</ul>

			<ul class="monitoringType monitoringType10" style="display:none">
				<li>
					<label class="label-auto">Host a consultar:</label>
					<input type="text" id="fo_dns_host" placeholder="FQDN" value="internet-start.net">
					<span class="fo-info">&nbsp;<span class="info" title="El FQDN para el que se realizará la verificación de DNS.">?</span></span>
				</li>
			</ul>

			<ul class="monitoringType monitoringType10" style="display:none">
				<li>
					<label class="label-auto">Tipo de consulta:</label>
					<select id="fo_dns_type">
						<option value="A" >A</option>
						<option value="AAAA" >AAAA</option>
						<option value="MX" >MX</option>
						<option value="NS" >NS</option>
						<option value="PTR" >PTR</option>
						<option value="CNAME" >CNAME</option>
					</select>
					<span class="fo-info">&nbsp;<span class="info" title="Tipo de consulta DNS para la verificación de DNS.">?</span></span>
				</li>
			</ul>

			<ul class="monitoringType monitoringType10" style="display:none">
				<li>
					<label class="label-auto">Respuesta requerida:</label>
					<input type="text" id="fo_dns_response" placeholder="Respuesta a la consulta." value="" >
					<span class="fo-info">&nbsp;<span class="info" title="Respuesta esperada para la verificación de DNS.">?</span></span>
				</li>
			</ul>
			
			<ul class="monitoringType monitoringType13" style="display:none" id="fo-url">
		
				<li class="fo-url">
					<label class="label-auto">URL para verificar:</label>
				</li>
				<li class="col flex-line fo-url">
					https://&nbsp;<input type="text" id="fo_ssl_host" value="internet-start.net" placeholder="FQDN" class="fo-domain" onKeyUp="equalizeFOHostnameValues(this)" />&nbsp;:&nbsp;

					<input type="text" id="fo_ssl_port" value="443" placeholder="port" style="width:42px" class="fo-port"  onKeyUp="equalizeFOHostnameValues(this)" />
					<span class="fo-info">&nbsp;<span class="info" title="El FQDN será monitoreado en la dirección IP.">?</span></span>
				</li>

				<li class="fo-url-triple-row">
					<label class="label-auto">Dominio:</label>
					<input type="text" id="fo_ssl_hostm" value="internet-start.net" placeholder="FQDN" class="fo-domainm" onKeyUp="equalizeFOHostnameValues(this)" />
				</li>

				<li class="fo-url-triple-row">
					<label class="label-auto">Puerto:</label>
					<input type="text" id="fo_ssl_portm" class="fo-port" value="443" placeholder="port" class="fo-portm" onKeyUp="equalizeFOHostnameValues(this)" />
				</li>


				<li>
					<label class="label-auto">Timeout:</label>
					<input type="text" id="fo_ssl_timeout" class="fo-timeout" value="10" placeholder="5">
					<span class="fo-info">&nbsp;<span class="info" title="Seconds to wait for the server to reply. Must be between 4 and 10.">?</span></span>
				</li>
			</ul>
			
			<ul class="failover-notifications">
				<li>
					<label class="label-auto state-title-label">Estado:</label>
					<label class="state-label">
						<input class="minus-999-em" type="radio" name="monitoring_state" value="1" id="monitoring_state_active" checked="checked" checked="checked">
						<span class="radiobutton"></span><span>Activo(a)</span>
					</label>
					<label class="state-label">
						<input class="minus-999-em" type="radio" name="monitoring_state" value="0" id="monitoring_state_paused" >
						<span class="radiobutton"></span><span>Pausado</span>
					</label>
				</li>
			</ul>
			<button type="submit" class="round-btn color-btn h-c">modificar</button>
		</form>
						<br>
		<p class="f-l xs-t pb-10">
			<strong>Certificate details from the last craw</strong><br>
			Hosts: <br>
			Expiration date: -<br>
			Issuer: -		</p>
			</div>
	
	<div class="wraper w-b b-r ww-bw fo-wraper monitoring-wraper halfPage f-r  xs-input-wraper">
		<p class="mt-20 w-100">Notificaciones</p>
		<div class="notification info"><div>Por defecto el sistema de Monitoring está enviando notificaciones por correo electrónico a su cuenta de correo electrónico. Al configurar las notificaciones aquí, sobrescribirán las notificaciones predeterminadas.</div></div>
		<div id="notifications"></div>
		
		<button type="button" onclick="showPopup('monitoring-records', '&show=create-notification&monitoring_id=6886');" class="round-btn color-btn h-c">crear nueva notificación</button>
	</div>
	<br class="clear">

	<div class="b-r ww-bw">
		<div class="monitoring-log-table-wraper uptime-table-wraper">
			<h2 class="w-100">
				Cambios en el tiempo de actividad								<span class="f-r download-icons">
					<a class="icon icon-darker icon-csv info" href="javascript: void(0)" onClick='externalJobs_addNew(18, {"record_id":"6886","name":"internet-start.net","type":"uptime"})' title="Descargar  .csv" aria-label="Descargar  .csv"></a>
				</span>
							</h2>
			<div id="monitoring_uptime_table" class="table-h-scroll fo_actions_table"></div>
		</div>
				<br>		
				<div class="monitoring-log-table-wraper history-table-wraper">
			<h2 class="w-100">
				Historial de Monitoreo								<span class="f-r download-icons">
					<a class="icon icon-darker icon-csv info" href="javascript: void(0)" onClick='externalJobs_addNew(18, {"record_id":"6886","name":"internet-start.net","type":"history"})' title="Descargar  .csv" aria-label="Descargar  .csv"></a>
				</span>
							</h2>
			<div id="fo_monitoring_table" class="table-h-scroll fo_actions_table"></div>
		</div>
		<br>
		<br>
				<div class="a-c w-100">
			<button type="button" class="round-btn s-btn bright-btn" onClick="return monitoring_deactivate(6886, '¿Está seguro de que desea borrar esta comprobación de monitoreo?');">Eliminar este registro de monitoreo  </button>
		</div>
	</div>
</section>

<script type="text/javascript">
$(function () {
	dashboard_monitoringChangeType();
	monitoring_uptime_log(6886);
	monitoring_log(6886);
	monitoring_showNotifications(6886);
	
	$('.info').tooltip({
		track: true,
		delay: 0,
		showURL: false,
		showBody: "<body>",
		fade: 250 
	});
	
	$(window).resize(function() {
		dashboard_monitoringChangeType();
	});
});
</script>

				
			<div class="clear"></div>
			
		<footer>
			<section class="section-wraper flex-3-col">
				<div class="col">
					<ul>
						<li>Compañia</li>
						<li><a href="/about-us/">Acerca de nosotros</a></li>
						<li><a href="/news/">Noticias</a></li>
						<li><a href="/contact/">Contacto</a></li>
						<li><a href="/data-centers/">Centros de datos</a></li>
						<li><a href="/media-and-reviews/">Medios y Reseñas</a></li>
						<li><span class="a" onclick="openLink(this)" data-href="/feedback/">Retroalimentación</span></li>
						<li><span class="a" onclick="openLink(this)" data-href="/careers/">Carreras</span></li>
					</ul>
				</div>
				<div class="col">
					<ul class="a-l">
						<li>Alojamiento DNS </li>
						<li><a href="/premium/">Premium DNS</a></li>
						<li><a href="/ddos-protected-plans/">DNS protegido de DDoS</a></li>
						<li><a href="/geodns/">GeoDNS</a></li>
					</ul>
				</div>
				<div class="col">
					<div>
						<a href="/dns-services/" class="a-title">Servicios</a>
					</div>
					<div class="flex-2-col">
						<div class="col">
							<ul class="a-l">
								<li></li>
								<li><a href="/dynamic-dns/">DNS Dinámico</a></li>
								<li><a href="/reverse-dns/">DNS Inverso</a></li>
								<li><a href="/dns-failover/">DNS Failover</a></li>
								<li><a href="/anycast-dns/">Anycast DNS</a></li>
								<li><a href="/monitoring/">Monitoreo</a></li>
								<li><a href="/email-forwarding/">Email Forwarding</a></li>
								<li><a href="/domain-pricing-list/">Nombres de dominios</a></li>
								<li><a href="https://www.cloudprima.com/?utm_source=footer&amp;utm_campaign=ClouDNS+Web" target="_blank">VPS Protegido de DDoS</a></li>
							</ul>
						</div>
						<div class="col">
							<ul class="a-l">
								<li></li>
								<li><a href="/secondary-dns/">DNS Secundario</a></li>
								<li><a href="/dnssec/">DNSSEC</a></li>
								<li><a href="/managed-dns/">Managed DNS</a></li>
								<li><a href="/enterprise-dns/">Enterprise DNS</a></li>
								<li><a href="/google-workspace/">Google Workspace</a></li>
								<li><a href="/ssl-certificates/">Certificados SSL</a></li>
								<li><a href="/private-dns-servers/">Servidores DNS Privados</a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section class="section-wraper flex-3-col">
				<div class="col">
					<ul>
						<li>Base de Conocimientos</li>
						<li><a href="https://www.cloudns.net/blog/">Blog</a></li>
						<li><a href="/wiki/">Wiki</a></li>
						<li><a href="/features/">Características</a></li>
						<li><a href="/faq/">Preguntas Frecuentes</a></li>
						<li><span class="a" onclick="openLink(this)" data-href="/api-help/">HTTP API</span></li>
						<li><span class="a" onclick="openLink(this)" data-href="/whmcs-module/">WHMCS module</span></li>
						<li><span class="a" onclick="openLink(this)" data-href="/hostbill-module/">Hostbill module</span></li>
						<li><a href="/domain-parking/">Estacionamiento de dominio</a></li>
						<li><span class="a" onclick="openLink(this)" data-href="/payment-methods/">Métodos de pago</span></li>
						<li><span class="a" onclick="openLink(this)" data-href="/tools/">DNS tool</span></li>
						<li><span class="a" onclick="openLink(this)" data-href="/spf-generator/">SPF generator</span></li>
					</ul>
				</div>
				<div class="col">
					<ul class="a-l">
						<li>Socios</li>
						<li><a href="/affiliate/">Programa de Afiliación</a></li>
						<li><a href="/resellers-api/">Revendedores</a></li>
					</ul>
					<br>
					<ul class="a-l">
						<li></li>
						<li><span class="a" onclick="openLink(this)" onclick="openLink(this)" data-href="http://www.icann.org/en/resources/registrars/registrant-rights/educational" data-target="_blank">Registrant Educational Materials</span></li>
						<li><span class="a" onclick="openLink(this)" onclick="openLink(this)" data-href="http://www.icann.org/en/resources/registrars/registrant-rights/benefits" data-target="_blank">Registrant Benefits and Responsibilities</span></li>
						<li><span class="a" onclick="openLink(this)" onclick="openLink(this)" data-href="http://www.internic.net/whois.html" data-target="_blank">Whois</span></li>
					</ul>
				</div>
								<div class="col a-r social-links">
					<ul>
						<li>Conexión social </li>
						<li>
							<span class="a sl-fb" onclick="openLink(this)" data-href="http://www.facebook.com/cloudns" data-target="_blank"></span>
							<span class="a sl-twitter" onclick="openLink(this)" data-href="http://www.twitter.com/ClouDNS" data-target="_blank"></span>
							<span class="a sl-git-hub" onclick="openLink(this)" data-href="https://github.com/ClouDNS" data-target="_blank"></span>
							<span class="a sl-li" onclick="openLink(this)" data-href="https://www.linkedin.com/company/cloud-dns-ltd" data-target="_blank"></span>
							<span class="a sl-v-kontakt" onclick="openLink(this)" data-href="https://vk.com/cloudns" data-target="_blank"></span>
							<span class="a sl-youtube" onclick="openLink(this)" data-href="https://www.youtube.com/c/CloudnsNet" data-target="_blank"></span>
						</li>
						<li><a href="/certificates/" class="footer-certificate"></a></li>
					</ul>
				</div>
							</section>

			<section class="wraper flex-2-col">
				<div class="col">
					<span class="a" onclick="openLink(this)" data-href="/tos/">Terms of service</span>&nbsp; | &nbsp;
					<span class="a" onclick="openLink(this)" data-href="/privacy-policy/">Privacy Policy</span><br><br>
					<p>&copy;2023  ClouDNS</p>
				</div>
				<div class="col a-r">
					<a href="https://www.cloudns.net/" class="footer-logo"></a><br>
				</div>
			</section>
			<section class="wraper">
				<p class="a-c">
					Todos los precios son finales e incluyen todos los impuestos requeridos. ¡No hay otros cargos ocultos! 				</p>
			</section>
		</footer>
		
				<a href="/livechat/">
			<div class="livechat-footer">
				Online - Live Chat
			</div>
		</a>
				
		
		<script type="text/javascript">
						
			loadJs(function () {
				$(function() {
					
					function logJsError (msg, url, line, col, error, lastclicked, timestamp, part) {
						var extra = !col ? '' : '\nColumn: ' + col;
						$.post(AJAXACTIONS_URL + '?action=errorlog', {
							'action': 'log',
							'error': msg,
							'url': url + ' (Part ' + part + '/2)',
							'line': line,
							'extra': extra,
							'lastClicked': lastclicked,
							'lastClickedTimestamp': timestamp,
							'timestampErrorSent': Math.floor(Date.now() / 1000 - 0.1),
							'errorStack': error.stack,
						});  
					}
					
					var MY_LAST_ERROR = {'stack':'undefined'};
					var lastClicked = 'undefined';
					var lastClickedTimestamp = 1680203202;
					$('body').on('click', function(e) {
						lastClicked = e.target;
						lastClickedTimestamp = Math.floor(Date.now() / 1000);
					});
					window.onerror = function(msg, url, line, col, error) {
						logJsError(msg, url, line, col, error, '', '', '1');
						// timeout to ensure that onClick has finished
						setTimeout (function() {
							logJsError('', '', '', '', MY_LAST_ERROR, '<' + lastClicked.nodeName + '>, ID: ' + lastClicked.id + ', Class: ' + lastClicked.className, lastClickedTimestamp, '2');
						}, 100);
						// suppress error from showing in Console
						return true;
					};
					
									});
			});
		</script>
		
				<script async src="https://www.googletagmanager.com/gtag/js?id=UA-1653088-9"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'UA-1653088-9');
						gtag('set', {'user_id': '719290'});
					</script>
		
				
				
				
		<script type="application/ld+json">{"@context":"http:\/\/schema.org","@type":"Organization","name":"ClouDNS","url":"https:\/\/www.cloudns.net\/","logo":"https:\/\/www.cloudns.net\/images\/logo\/logo-white-net-155x68.png","sameAs":["http:\/\/www.facebook.com\/cloudns","http:\/\/www.twitter.com\/ClouDNS","https:\/\/github.com\/ClouDNS","https:\/\/vk.com\/cloudns","https:\/\/www.linkedin.com\/company\/cloud-dns-ltd","https:\/\/www.youtube.com\/c\/CloudnsNet"]}</script>
	</body>
</html>
