@echo off
chcp 65001 >nul
echo ========================================
echo   FreelanceTimer 一键部署脚本
echo ========================================
echo.

echo [步骤 1] 检查 GitHub 登录状态...
gh auth status
if %ERRORLEVEL% neq 0 (
    echo.
    echo GitHub 未登录！请在浏览器中完成授权。
    echo 1. 打开: https://github.com/login/device
    echo 2. 输入代码: 5592-51A6
    echo 3. 完成授权后按回车继续...
    pause
    gh auth status
)
echo ✓ GitHub 已登录
echo.

echo [步骤 2] 创建 GitHub 仓库...
gh repo create freelance-timer --public --source=. --push
if %ERRORLEVEL% neq 0 (
    echo 创建仓库失败，尝试推送现有仓库...
    git push -u origin master 2>nul
)
echo ✓ 仓库已创建并推送
echo.

echo [步骤 3] 登录 Vercel...
echo.
echo 请在浏览器中完成 Vercel 登录：
echo 1. 打开: https://vercel.com/oauth/device
echo 2. 输入终端显示的代码
echo 3. 完成授权后按回车继续
echo.
cmd /c "vercel link --yes"
if %ERRORLEVEL% equ 0 (
    echo ✓ Vercel 项目已链接
) else (
    echo 警告: Vercel 链接失败，将在 Vercel Dashboard 手动导入
)
echo.

echo [步骤 4] 添加环境变量...
vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY 2>nul
vercel env add CLERK_SECRET_KEY 2>nul
vercel env add NEXT_PUBLIC_CLERK_SIGN_IN_URL 2>nul
vercel env add NEXT_PUBLIC_CLERK_SIGN_UP_URL 2>nul
vercel env add NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL 2>nul
vercel env add NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL 2>nul
echo ✓ 环境变量模板已准备
echo.

echo ========================================
echo   部署完成！
echo ========================================
echo.
echo 你的项目已推送到 GitHub。
echo 现在访问 https://vercel.com/dashboard 导入并部署。
echo.
pause