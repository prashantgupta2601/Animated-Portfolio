@echo off
call npm create vite@latest temp-app -- --template react-swc
xcopy temp-app . /E /H /Y
rmdir /S /Q temp-app
call npm install
call npm install tailwindcss postcss autoprefixer framer-motion react-icons react-simple-typewriter react-scroll @tsparticles/react @tsparticles/slim emailjs-com react-helmet-async react-hot-toast
call npx tailwindcss init -p
