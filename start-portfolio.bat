@echo off
cd /d "%~dp0"
echo Starting Swayam Patel portfolio...
echo.
echo Open this URL in your browser:
echo http://127.0.0.1:5173/
echo.
npm.cmd run dev -- --host 127.0.0.1 --port 5173
pause
