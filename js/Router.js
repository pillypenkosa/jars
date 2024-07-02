




class Router {






	static loadApp() {

		let name = this.name + '.loadApp()';


/*
		document.querySelector( 'app' ).innerHTML = `
			<header>${ Component( 'Header' ) } </header>
			<div id="middle">
				<div id="content"></div>
			</div>
			<footer>${ Component( 'Footer' ) }</footer>
		`;


*/

/*
		let app = document.createElement( 'div' );
		app.innerHTML = App.html();
		document.querySelector( 'app' ).replaceWith( app );
*/


		document.querySelector( 'app' ).innerHTML = App.html();

		this.loadContent();
	}





	static loadContent() {

		//console.clear();

		let name = this.name + '.loadContent()';

		//cns( 'ok', name );
		//cns( 'var', 'window.location.search', window.location.search.slice( 1 ) );


		const search = window.location.search.slice( 1 );

		//cns( 'var', 'search', search );

		let cmpName = '';


		if ( search ) {
			//cns( 'ok', 'Є якийсь `window.location.search`' );

			dependences.forEach( k => {

				if ( k.regexp ) {
					if ( k.regexp.test( search )) 
						cmpName = k.cmp;
				}
			});


			if ( !cmpName ) {

				//cns( 'warning', 'Немає компонента для цього URL... тому вставимо Win-Err404' );
				addErr( 'URL не існує...' );
				cmpName = 'Win-Err404';
			} 

		} else 
			cmpName = 'Win-Index';


		//cns( 'var', 'cmpName', cmpName );

		document.getElementById( 'content' ).innerHTML = Component( cmpName );
		//isErr();
	}































	static loadContent222() {

		//console.clear();

		let name = this.name + '.loadContent()';

		//let ok = `\x1b[32m ok ${ this.name }.loadContent()`;
		//let err = `\x1b[31m err ${ this.name }.loadContent()`;

		//return;



		let hash = window.location.hash ? window.location.hash : '';
		
		//console.log( ok, hash );

		let html = '';
		if ( hash ) {

			let cmp = dependences.filter( k => {

				if ( k.route ) 
					if ( k.route == hash ) 
						return k;
				
			});

			if ( cmp.length ) {
				if ( cmp[ 0 ].name ) 
					html = Component( cmp[ 0 ].name );
				
			} else {
				addWarning( name + ' ...такого `url` не існує...' );
				

				//cns( 'warning', '...такого `url` не існує...', );

				html = Component( 'Win-Err404' );

			}

		} else 
			html = Component( 'Win-Index' );


		// відображення помилок в консолі
		isErr();

		document.getElementById( 'content' ).innerHTML = html;
	}


















	static link222( txt ) {

		//history - встроенный объект, не трогать!!!
		if ( history.pushState ) {
			history.pushState( null, null, window.location.protocol + "//" + window.location.host + window.location.pathname + '#' + txt );
		
			this.loadContent();
		}
	}



	// подсветка активных элементов, например кнопок в навигации или изменения чего-либо в хедере, футере и т.д. и т.п.
	static activeElem222( txt ) { // txt






	}








}








