@set d=2023-03-08
@set t=10:05

@set name=Jars
@set fp=jars



echo const appVersion = '%d% %t%'; > js/version.js



git add .
git commit -m "%name% DJS %d% %t%"
git push



cd ../db 
go-v.bat %d% %t% && go-app.bat %d% %t% && cd ../%fp%




