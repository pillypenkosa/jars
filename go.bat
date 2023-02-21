@set d=2023-02-21
@set t=10:30

@set name=Jars
@set name=jars



echo const appVersion = '%d% %t%'; > js/version.js



git add .
git commit -m "%name% DJS %d% %t%"
git push



cd ../db 
go-v.bat %d% %t% && go-app.bat %d% %t% && cd ../%fp%




