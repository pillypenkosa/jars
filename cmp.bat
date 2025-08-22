@chcp 65001

@set up=JarsGallery
@set low=jars-gallery
@set pref=__NEW_COMPONENT_
@set intro=© 2025 DJS



@set tab=	




@if exist component\%low% (

	@echo ERROR!!! Компонент `%low%` вже існує...


) else (

	mkdir "component\%pref%%low%"
	echo /* %intro% */ cmp-%low% {} >> component\%pref%%low%\cmp.%low%.css




	echo // %intro% >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js

	echo class Component%up% { >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js

	echo %tab%static args = {}; >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js

	echo %tab%static html( objData = {} ^) { >> component\%pref%%low%\cmp.%low%.js
	echo %tab%%tab%const fooName = this.name + '.html(^)'; >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js

	echo %tab%%tab%this.args = objData.args ? objData.args : {}; >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js

	echo %tab%%tab%let tagParam = { >> component\%pref%%low%\cmp.%low%.js
	echo %tab%%tab%%tab%//'class' %tab%%tab%: '', >> component\%pref%%low%\cmp.%low%.js
	echo %tab%%tab%%tab%//'name' %tab%%tab%: '', >> component\%pref%%low%\cmp.%low%.js
	echo %tab%%tab%%tab%//'title' %tab%%tab%: '', >> component\%pref%%low%\cmp.%low%.js
	echo %tab%%tab%%tab%//'data-id' %tab%: '', >> component\%pref%%low%\cmp.%low%.js
	echo %tab%%tab%%tab%//'onclick' %tab%: '', >> component\%pref%%low%\cmp.%low%.js
	echo %tab%%tab%%tab%//'selected' %tab%: '', >> component\%pref%%low%\cmp.%low%.js
	echo %tab%%tab%%tab%//'defer' %tab%%tab%: '', >> component\%pref%%low%\cmp.%low%.js
	echo %tab%%tab%}; >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js

	echo %tab%%tab%let html = fooName; >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js

	echo %tab%%tab%setMeta({ >> component\%pref%%low%\cmp.%low%.js
	echo %tab%%tab%%tab%title %tab%%tab%%tab%: fooName, >> component\%pref%%low%\cmp.%low%.js
	echo %tab%%tab%%tab%description %tab%: 'Опис...', >> component\%pref%%low%\cmp.%low%.js
	echo %tab%%tab%%tab%//image %tab%%tab%: '', >> component\%pref%%low%\cmp.%low%.js

	echo %tab%%tab%}^); >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js

	echo %tab%%tab%return { tagParam, html };  >> component\%pref%%low%\cmp.%low%.js
	echo %tab%} >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js

	echo %tab%static clc( data ^) { >> component\%pref%%low%\cmp.%low%.js
	echo %tab%%tab%const fooName = this.name + '.clc(^)'; >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js

	echo %tab%%tab%//console.log( 'fooName: ', fooName ^); >> component\%pref%%low%\cmp.%low%.js
	echo %tab%%tab%//console.log( 'data: ', data ^); >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	
	echo %tab%} >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js

	echo } >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js	
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js	
	echo. >> component\%pref%%low%\cmp.%low%.js
	echo. >> component\%pref%%low%\cmp.%low%.js










	@echo Ok
)





