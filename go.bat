@set d=2023-02-25
@set t=15:40

@set name=Jars
@set fp=jars



echo const appVersion = '%d% %t%'; > js/version.js



git add .
git commit -m "%name% DJS %d% %t%"
git push



cd ../db 
go-v.bat %d% %t% && go-app.bat %d% %t% && cd ../%fp%




