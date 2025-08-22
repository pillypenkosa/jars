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


		let html = '';

		arrListJarsVolume.forEach( k_volume => {

			//console.log( k_volume );
			html += Component( 'Spoiler', { 
				id 		: k_volume.id, 
				title 	: k_volume.title, 
				type 	: 'volume', 
			});
		});
		html += '<br/>';



		arrListJarsName.forEach( k_name => {

			html += Component( 'Spoiler', { 
				id 		:  k_name.id, 
				title 	: k_name.title, 
				type 	: 'name', 
			});
		});
		html += '<br/>';



		arrListJarsCat.forEach( k_cat => {

			//console.log( k_cat );
			html += Component( 'Spoiler', { 
				id 		: k_cat.id, 
				title 	: k_cat.title, 
				type 	: 'cat', 
			});
		});
		html += '<br/>';





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























