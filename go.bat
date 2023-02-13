@set d=2023-02-13
@set t=11:15



echo const appVersion = '%d% %t%'; > js/version.js



git add .
git commit -m "DJS"
git push



cd ../db 
go-v.bat %d% %t% && go-app.bat




