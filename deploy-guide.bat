@echo off
echo ========================================
echo   FreelanceTimer Deployment Script
echo ========================================
echo.

cd /d C:\Users\Administrator\.qclaw\workspace-agent-82268c76\freelance-timer

echo [Step 1] Checking for GitHub CLI...
where gh >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo Found GitHub CLI!
    goto :github
)

echo GitHub CLI not installed.
echo.
echo Please manually push your code to GitHub:
echo.
echo 1. Go to: https://github.com/new
echo 2. Repository name: freelance-timer
echo 3. Select: Public
echo 4. Click: Create repository
echo 5. Then run these commands in terminal:
echo    cd C:\Users\Administrator\.qclaw\workspace-agent-82268c76\freelance-timer
echo    git remote add origin https://github.com/YOUR_USERNAME/freelance-timer.git
echo    git push -u origin master
echo.
echo OR install GitHub CLI from: https://github.com/cli
pause
exit /b

:github
echo [Step 2] Checking GitHub auth...
gh auth status
if %ERRORLEVEL% neq 0 (
    echo Please run: gh auth login
    pause
    exit /b
)

echo [Step 3] Creating GitHub repository...
gh repo create freelance-timer --public --source=. --push
if %ERRORLEVEL% neq 0 (
    echo Failed to create repo. Trying with existing repo...
    gh repo view
)

echo.
echo [Step 4] Deployment ready!
echo Now go to: https://vercel.com/new
echo 1. Select: Import Git Repository
echo 2. Choose: freelance-timer
echo 3. Add Environment Variables:
echo    - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = pk_test_xxx
echo    - CLERK_SECRET_KEY = sk_test_xxx
echo    - NEXT_PUBLIC_CLERK_SIGN_IN_URL = /sign-in
echo    - NEXT_PUBLIC_CLERK_SIGN_UP_URL = /sign-up
echo    - NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL = /dashboard
echo    - NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL = /dashboard
echo 4. Click: Deploy
echo.
echo Done!
pause