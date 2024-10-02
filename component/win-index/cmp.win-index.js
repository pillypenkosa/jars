// © 2024 DJS





class ComponentWinIndex {



	static args = {};


	// обрані фільми ( або добірки )
	static arrSelected = [];





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
		let html = fooName;
	

			//<div id="showSelectedFilms">Оберіть категорію...</div>
		html = `

			<div id="showSelected"></div>

			<div id="logo">
				<img src="img/pic/logoDJS.png" alt="logo" />
			</div>



		`;





		setMeta({
			title 			: 'Jars DJS',
			description 	: 'Jars DJS, jars collection...',
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





	// відбір об'єктів за вказаною категорією
	static getSelected( data ) {
		const fooName = this.name + '.getSelected()';


		//console.log( 'fooName: ', fooName );
		//console.log( 'data: ', data );






		this.arrSelected = arrListJars;









		if ( data.value ) {
			if ( data.value != 'all' ) {

				this.arrSelected = this.arrSelected.filter( k => {

					if ( k.hash ) {
						if ( k.hash[ data.value ] ) 
							return true;
					}
				});
			}
		}



		if ( data.type ) {
			if ( data.type != 'all' ) {

				this.arrSelected = this.arrSelected.filter( k => {

					if ( k.hash ) {
						if ( k.hash[ data.type ] ) 
							return true;
					}
				});
			}
		}



		if ( data.name ) {
			if ( data.name != 'all' ) {

				this.arrSelected = this.arrSelected.filter( k => {

					if ( k.hash ) {
						if ( k.hash[ data.name ] ) 
							return true;
					}
				});
			}
		}








		



		//console.log( 'this.arrSelected: ', this.arrSelected );




		//return;


		this.showSelected();
	}




	// добірка
	static getSelection( data ) {
		const fooName = this.name + '.getSelection()';

		//console.log( 'fooName: ', fooName );
		//console.log( 'data: ', data );





		this.arrSelected = [];






		this.showSelected();
	}


















	// відображення обраних фільмів
	static showSelected() {
		const fooName = this.name + '.showSelected()';

		//console.log( 'fooName: ', fooName );

		//console.log( 'arrSelected: ', this.arrSelected );


		let html = '';



		let arrJar025 = [];
		let arrJar033 = [];
		let arrJar05 = [];

		//console.log( this.arrSelected);


		this.arrSelected.forEach( k => {

			if ( k.hash ) {
				if ( k.hash._025 )
					arrJar025.push( k );	
			}

			if ( k.hash ) {
				if ( k.hash._033 )
					arrJar033.push( k );	
			}

			if ( k.hash ) {
				if ( k.hash._05 )
					arrJar05.push( k );	
			}

		});



		//console.log( 'arr025', arrJar025 );
		//console.log( 'arr033', arrJar033 );
		//console.log( 'arr05', arrJar05 );

		let htmlJar025 = '';
		let htmlJar033 = '';
		let htmlJar05 = '';
		
		if ( arrJar025.length ) 
			htmlJar025 = `<div class="each-value" data-val="_025">
				<div class="title-value">--- Jars 0.25 ---</div>
				${ Component( 'Jars-By-Value', arrJar025 ) }
			</div>`;

		if ( arrJar033.length ) 
			htmlJar033 = `<div class="each-value" data-val="_033">
				<div class="title-value">--- Jars 0.33 ---</div>
				${ Component( 'Jars-By-Value', arrJar033 ) }
			</div>`;

		if ( arrJar05.length ) 
			htmlJar05 = `<div class="each-value" data-val="_05">
				<div class="title-value">--- Jars 0.5 ---</div>
				${ Component( 'Jars-By-Value', arrJar05 ) }
			</div>`;


		html = htmlJar025 + htmlJar033 + htmlJar05;


		document.getElementById( 'showSelected' ).innerHTML = html;
	}




















}























