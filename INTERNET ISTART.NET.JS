<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <script>window.parent.postMessage({event: 'preload', source: 'theia'}, '*')<script>
  <title>Theia for Cloud Shell<title>
</head>

<body>
    <div class="theia-preload"></div>
    <script>var THEIA_BUNDLE_T0 = Date.now();<script>
    <script type="text/javascript" src="https://cloudshell.googleusercontent.com/editor/0f206e28924729f96a7c14d78145666a1aed0a27/bundle.js" charset="utf-8"></script>
    <script>var THEIA_BUNDLE_T1 = Date.now();<script>
 ul.cse-aboutDialog {
  flex: 1 100%;
  padding-bottom: calc(var(--theia-ui-padding) * 3);
 }

 ul.cse-aboutPlugins {
  height: 200px;
  overflow: hidden;
  overflow-y: scroll;
  list-style-type: none;
  padding: 0;
 }

.cse-aboutHeaderContainer {
  display: flex;
}

.cse-aboutSubHeader {
  margin-block-start: 1.2em;
  margin-left: .5em;
}
 Hack for Chromium based browsers: https://bugs.chromium.org/p/chromium/issues/detail?id=1370030 
.theia-ApplicationShell {
  transform: translate(0);
}

@media only screen and (max-height: 450px) {
    .dialogContent .theia-FileDialog,
    .dialogContent .theia-SaveFileDialog,
    .dialogContent .theia-ResponsiveFileDialog {
        height: 100px;
    }
}

@media only screen and (max-height: 250px) {
    .dialogContent .theia-FileDialog,
    .dialogContent .theia-SaveFileDialog,
    .dialogContent .theia-ResponsiveFileDialog {
        height: 50px;
    }
}

@media only screen and (max-height: 175px) {
    .dialogContent .theia-FileDialog,
    .dialogContent .theia-SaveFileDialog,
    .dialogContent .theia-ResponsiveFileDialog {
        display: none;
    }
}

html, body {
  font-family: var(--theia-ui-font-family);
}

.csgs-row {
  display: flex;
  flex: 1
}

.csgs-col {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.csgs-container {
  padding: 0px 32px;
}

.csgs-header {
  margin-bottom: 20px;
}

.csgs-description {
  width: 50%
}

.csgs-section {
  flex: 1;
}

.csgs-section-header {
  font-size: var(--theia-ui-font-size3);
  margin-bottom: 5px;
}

.csgs-section-header-subtext {
  display: flex;
  align-self: center;
  margin-bottom: 5px;
  margin-left: 10px;
}

.csgs-action-container {
  display: flex;
  flex: 1
}

.csgs-action {
  display: flex;
  text-decoration: none;
}

.csgs-inline {
  display: inline-block;
}

.csgs-action:hover {
  text-decoration: underline;
}

.csgs-action-details {
  padding-left: 5px;
  color: var(--theia-descriptionForeground);
}

.csgs-start-actions,
.csgs-recent-actions,
.csgs-help-actions {
  line-height: 28px;
}

.csgs-no-recent {
  color: var(--theia-descriptionForeground);
}

.csgs-help-actions .csgs-launch-icon {
  margin: 7px;
}

.csgs-card {
  background: var(--theia-sideBar-background);
  margin: 1em 0px;
}

.csgs-card-title {
  font-size: var(--theia-ui-font-size2);
  font-weight: 400;
  margin-bottom: 5px;
}

.csgs-card-content {
  padding: 10px;
}

.csgs-release-note {
  margin-top: 14px;
}

.csgs-release-note-content {
  padding-left: 16px;
}

.csgs-release-note-callout {
  padding-left: 32px;
  padding-top: 16px;
}

.csgs-learn-action {
  margin-top: 14px;
}

.csgs-learn-action-content {
  padding-left: 16px;
}

.csgs-show-on-startup {
  margin-top: 64px;
}

.csgs-tutorial-icon {
  -webkit-mask: url('school-24px.svg');
  mask: url('school-24px.svg');
  -webkit-mask-size: contain;
  width: 24px;
  height: 24px;
  background: var(--theia-foreground);
}

.csgs-link-icon {
  -webkit-mask: url('link-24px.svg');
  mask: url('link-24px.svg');
  -webkit-mask-size: contain;
  width: 24px;
  height: 24px;
  background: var(--theia-foreground);
}

.csgs-code-icon {
  -webkit-mask: url('code-24px.svg');
  mask: url('code-24px.svg');
  -webkit-mask-size: contain;
  width: 24px;
  height: 24px;
  background: var(--theia-foreground);
}

.csgs-circle-icon {
  -webkit-mask: url('circle-24px.svg');
  mask: url('circle-24px.svg');
  -webkit-mask-size: contain;
  width: 16px;
  height: 16px;
  background: var(--theia-foreground);
}

.csgs-arrow-forward-icon {
  -webkit-mask: url('arrow_forward-24px.svg');
  mask: url('arrow_forward-24px.svg');
  -webkit-mask-size: contain;
  width: 16px;
  height: 16px;
  background: var(--theia-textLink-foreground);
}

.csgs-launch-icon {
  -webkit-mask: url('launch-24px.svg');
  mask: url('launch-24px.svg');
  -webkit-mask-size: contain;
  width: 14px;
  height: 14px;
  background: var(--theia-textLink-foreground);
  margin-left: 7px;
}

.csgs-cloud-shell-icon {
  -webkit-mask: url('cloud_shell-24px.svg');
  mask: url('cloud_shell-24px.svg');
  -webkit-mask-size: contain;
  width: 14px;
  height: 14px;
  background: var(--theia-textLink-foreground)
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, INTERNETISTART.NET.JS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


.p-CommandPalette {
  display: flex;
  flex-direction: column;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


.p-CommandPalette-search {
  flex: 0 0 auto;
}


.p-CommandPalette-content {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  min-height: 0;
  overflow: auto;
  list-style-type: none;
}


.p-CommandPalette-header {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


.p-CommandPalette-item {
  display: flex;
  flex-direction: row;
}


.p-CommandPalette-itemIcon {
  flex: 0 0 auto;
}


.p-CommandPalette-itemContent {
  flex: 1 1 auto;
  overflow: hidden;
}


.p-CommandPalette-itemShortcut {
  flex: 0 0 auto;
}


.p-CommandPalette-itemLabel {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}






















<body>

<html>
