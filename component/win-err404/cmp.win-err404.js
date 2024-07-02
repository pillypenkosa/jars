//console.log( '' );






class ComponentWinErr404 {




	static args = {};





	static html( objData = {} ) {
		const fooName = this.name + '.html()';
		
		this.args = objData.args ? objData.args : {}; 




		let tagParam = {
			//'class' 		: 'active',
			//'name' 			: 'Any',
			//'title' 		: 'Всплывающая подсказка',
			//'data-id' 		: 'any-data',
			//'onclick' 		: `${ this.name }.clc( ${ this.name }.args )`,
			//'selected' 		: '',
			//'defer' 		: '',
		};

		let html = 'Error 404! Нажаль, такої сторінки не існує... ';


		setMeta({
			title 			: 'Error 404',
			//description 	: '',
			//keywords 		: '',
			//image 			: '',
			//url 			: '',
			//type 			: '' ,
			//site_name 		: '',
		});

		return { tagParam, html };
	}










	static clc( data ) {
		const fooName = this.name + '.clc()';

		//console.log( 'fooName', fooName );
		//console.log( 'data', data );

	}
















	static html222( tag ) {

		//const title = 'Головна';
		document.title = appProjectName + ' ' + this.name;


		let data = {
			tag: tag,
			param: [
				{ k: 'class' 		, v: 'anyCls' 											, },
				{ k: 'name' 		, v: 'anyName' 											, },
				{ k: 'title' 		, v: 'Вспливаюча підказка' 								, },
				{ k: 'data-id' 		, v: 'anyData' 											, },
				{ k: 'selected' 	, v: '' 												, }, // без значений
				{ k: 'defer' 		, v: '' 												, }, // без значений

				// onclick - прописати рядком з дотримуванням лапок ( тобто без них ) як тут // в аргумент потрапить реальний массив this.arrArgs
				{ k: 'onclick' 		, v: this.name + '.clc( ' + this.name + '.arrArgs )' 	, },

				// в аргумент потрапляє рядок ( вказувати в лапках )
				//{ k: 'onclick' 		, v: `ComponentAny.clc( 'левый текст' )` 	, }, 
				//{ k: 'onclick' 		, v: `ComponentAny.clc( '${ txt }' )` 		, }, 

			],
			innerHTML: 'Error 404! Нажаль, такої сторінки не існує...',
		};

		//console.log( tag );


		return getComponentHtml( data );
	}











	








}























