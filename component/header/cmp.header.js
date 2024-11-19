//console.log( '' );





class ComponentHeader {



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




		let clsUnvisible = '';
		if ( Router.urlGET ) {
			if ( Router.urlGET.win ) {
				if ( Router.urlGET.win == 'index' || Router.urlGET.win == 'movie' ) 
					clsUnvisible = 'unvisible';
			}
		}


/*
				<div class="btn-menu pointer" onclick="ComponentHeader.clc()">
					<img src="img/pic/menu.png" alt="menu">
				</div>
*/

		let html = `
			<div class="head">
				<div class="title">${ appProjectName }</div>

			</div>
			<div class="nav-menu"></div>
		`;
			//<div class="nav-menu ${ clsUnvisible }">${ Component( 'Menu' ) }</div>

		return { tagParam, html };
	}




	static clc() {
		const fooName = this.name + '.clc()';
		//console.log( 'fooName', fooName );
		//console.log( 'data', data );


		//document.querySelector( '.nav-menu' ).classList.toggle( 'unvisible' );


		let bodyMenu = document.querySelector( 'cmp-header .nav-menu' );

		if ( bodyMenu.innerHTML ) 
			this.delHtmlMenu();

		else 
			this.addHtmlMenu();
	}






	static addHtmlMenu() {
		document.querySelector( 'cmp-header .nav-menu' ).innerHTML = Component( 'Menu' );
	}

	static delHtmlMenu() {
		document.querySelector( 'cmp-header .nav-menu' ).innerHTML = '';
	}










	static hide() {

		document.querySelector( '.nav-menu' ).classList.add( 'unvisible' );


	}







}











