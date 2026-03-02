@echo off
cd /d "c:\Users\Andres\Projects\SimpleA\Simpleaio"
git add -A
git commit -m "Add dynamic ads.txt toggle system with Azure Functions API"
git push origin main
echo.
echo Done! Check GitHub Actions for deployment status.
pause
