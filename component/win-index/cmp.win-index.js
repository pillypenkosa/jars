// © 2023 DJS





class ComponentWinIndex {



	static args = {};


	// обрані фільми ( або добірки )
	static arrSelectedFilms = [];





	static html( objData = {} ) {
		const fooName = this.name + '.html()';
		//console.log( 'fooName: ', fooName );


		
		this.args = objData.args ? objData.args : {}; 


		let tagParam = {
			//'class' 		: 'active',
			//'name' 		: 'Any',
			//'title' 		: 'Всплывающая подсказка',
			//'data-id' 	: 'any-data',
			//'onclick' 	: `${ this.name }.clc( ${ this.name }.args )`,
			//'selected' 	: '',
			//'defer' 		: '',
		};



		//let html = '<div class="info">Бажаю здоров\'я! ))</div>';
		//let html = `<div>${ fooName }</div>`;
		let html = '';

/*
		let arrSelected025 = [];
		let arrSelected033 = [];
		let arrSelected05 = [];

		arrListJars.forEach( k => {

			if ( k.hash ) {

				if ( k.hash._025 ) 
					arrSelected025.push( k );
				
				if ( k.hash._033 ) 
					arrSelected033.push( k );
				
				if ( k.hash._05 ) 
					arrSelected05.push( k );
			}
		});


	
		console.log( 'arrSelected025: ', arrSelected025 );
		console.log( 'arrSelected033: ', arrSelected033 );
		console.log( 'arrSelected05: ', arrSelected05 );




		if ( arrSelected025.length ) 
			html += `${ Component( 'Spoyler', { volume: '_025', } ) }`;

		


*/




		html += `<div id="modal"></div>
			${ Component( 'Spoyler', { volume: '_025', } ) }
			${ Component( 'Spoyler', { volume: '_033', } ) }
			${ Component( 'Spoyler', { volume: '_05', } ) }
			<br/>
		`;







		arrListJarsName.forEach( k => {

			html += `${ Component( 'Spoyler', { id: k.id, title: k.title, } ) }`;
		});



		setMeta({
			title 			: appProjectName,
			description 	: appProjectName + ', jars collection...',
			//keywords 		: 'Ключові слова...' + name,
			image 			: 'img/pic/logoDJS.png',
			//url 			: 'url/any/there/' + name,
			//type 			: 'Тіпі-тіп ' + name,
			//site_name 	: 'Назва сайту, мабуть стале значення... ' + name,
		});



		return { tagParam, html };
	}






	static clc( data ) {
		const fooName = this.name + '.clc()';


		//console.log( 'fooName', fooName );
		//console.log( 'data', data );

	}










}























