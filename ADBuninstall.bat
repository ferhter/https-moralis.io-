@echo off
adb kill-server
rd /s /q "%USERPROFILE%"\.android
del /F "%SystemRoot%\system32\AdbWinApi.dll"
del /F "%SystemRoot%\system32\adb.exe"
del /F "%USERPROFILE%\desktop\adb.lnk"
del /F "%USERPROFILE%\×ÀÃæ\adb.lnk"