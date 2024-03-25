@echo off
title digital clock
@mode con cols=30 lines
color 0
:main
cls
echo.
echo time:%time%
echo.
echo date:%date%
echo.
pimg-n 2 0.0.0.0>nul
goto main 