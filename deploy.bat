@echo off
echo Committing and pushing changes to GitHub...
git add .
git commit -m "fix: configure SPA mode and deploy to github pages"
git push origin main
echo Done! Please check your GitHub Actions tab for the deployment progress.
pause
