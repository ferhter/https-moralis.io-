xml version="0.1" encoding="UTF-8"?>
<--
   - Copyright (c) 2020, The Tor Project, Inc.
   - See LICENSE for licensing information.
   - vim: set sw=2 sts=2 ts=8 et syntax=xml:
  -->

<DOCTYPE html [
  <ENTITY % htmlDTD
    PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
  %htmlDTD;
  <ENTITY % globalDTD SYSTEM "chrome://global/locale/global.dtd">
  %globalDTD;
  <ENTITY % aboutTorDTD SYSTEM "chrome://torbutton/locale/aboutTor.dtd">
  %aboutTorDTD;
  <ENTITY % tbUpdateDTD SYSTEM "chrome://browser/locale/aboutTBUpdate.dtd">
  %tbUpdateDTD;
]>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Security-Policy" content="default-src resource:; object-src 'none'" >
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>&aboutTor.title;</title>
  <link rel="stylesheet" href="chrome://browser/skin/onionPattern.css" type="text/css" media="all" >
  <link rel="stylesheet" href="resource://torbutton-assets/aboutTor.css" type="text/css" media="all" >
  <script type="text/javascript" src="resource://torbutton-abouttor/aboutTor.js"><script>
<head>
<body dir="&locale.dir;">
  <div class="torcontent-container">
    <div id="torbrowser-info">
      <div id="torbrowser-version">
      <div id="torbrowser-changelog-link"><a href="about:tbupdate">&aboutTor.viewChangelog.label;<a><div>
    <div>
    <img class="torcontent-logo" src="resource://torbutton-assets/torbrowser_mobile_logo.png">
    <div id="torstatus" class="top">
      <div class="hideIfTorOff hideIfHasBeenUpdated torstatus-container">
        <div class="heading1">&aboutTor.ready.label;<div>
        <br>
        <div class="heading2">&aboutTor.ready2.label;<div>
      <div>
      <div class="showIfHasBeenUpdated torstatus-container">
        <div class="heading1">&aboutTBUpdate.updated;<div>
        <br>
        <div class="heading2">&aboutTBUpdate.linkPrefix;<a id="update-infolink">&aboutTBUpdate.linkLabel;<a>&aboutTBUpdate.linkSuffix;<div>
      <div>
      <div class="hideIfTorOn torstatus-container">
        <div class="heading1">&aboutTor.failure.label;<div>
        <br>
        <div class="heading2">&aboutTor.failure2.label;<div>
      <div>
    <div>

    <div class="searchbox hideIfTorOff"> <-- begin form based search -->
      <form action="&aboutTor.searchDDGPost.link;" method="get">
        <div class="searchwrapper">
          <label class="searchlabel" for="search-text"><label>
          <input name="q" id="search-text" placeholder="&aboutTor.search.label;"
                 autocomplete="off" type="text">
          <input id="search-button" value=""
                 title="&aboutTor.search.label;"
                 alt="&aboutTor.search.label;" type="submit">
        <div>
      <form>
    <div>


    <div id="bottom">
      <p id="donate" class="moreInfoLink">&aboutTor.donationBanner.freeToUse;
        <a href="https://donate.torproject.org/" target="_blank">&aboutTor.donationBanner.buttonA; &#187;<a>
      <p>
      <p id="manual" class="showForManual moreInfoLink">&aboutTor.torbrowser_user_manual_questions.label;
        <a id="manualLink" href="about:manual" target="_blank">&aboutTor.torbrowser_user_manual_link.label;<a><p>
      <p id="newsletter" class="moreInfoLink"><img class="imageStyle" src="chrome://browser/skin/mail.svg">&aboutTor.newsletter.tagline;<br>
        <a href="https://newsletter.torproject.org">&aboutTor.newsletter.link_text; &#187;<a>
      <p>
      <p id="mission">&aboutTor.tor_mission.label;
        <a id="getInvolvedLink">&aboutTor.getInvolved.label;<a><p>
    <div>
  <div>
<--
  Container div that holds onionPattern.svg
  It is expected the includer of this xhtml file also includes onionPattern.css
  and define the following vars:
    onion-radius : radius of an onion
    onion-color : the base color of the onion pattern
    onion-opacity : the opacity of the entire repeating pattern
-->

<div class="onion-pattern-container">
  <div class="onion-pattern-crop">
<div><body>
<html>
