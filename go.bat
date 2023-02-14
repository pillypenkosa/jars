@set d=2023-02-14
@set t=14:43

@set name=Jars



echo const appVersion = '%d% %t%'; > js/version.js



git add .
git commit -m "%name% DJS %d% %t%"
git push



cd ../db 
go-v.bat %d% %t% && go-app.bat %d% %t%




