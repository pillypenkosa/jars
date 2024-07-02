//console.log( '' );





class ComponentHeader {



	static args = {};


	// чи відображати меню 	
	static tfMenu = true; 		// при першому завантаженні застосування - TRUE !!!


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



		//let html = appProjectName + ' ' + appVersion;
		//&#128660;
		let html = `
			<div class="head">
				<div class="title">${ appProjectName }</div>
				<div class="btn-menu pointer" onclick="ComponentHeader.clc()">
					<img src="img/pic/menu.png" alt="menu">
				</div>
			</div>
			<div class="nav-menu">${ Component( 'Menu' ) }</div>
		`;

		return { tagParam, html };
	}




	static clc() {
		const fooName = this.name + '.clc()';
		//console.log( 'fooName', fooName );
		//console.log( 'data', data );



		let elem = document.querySelector( '.nav-menu' );
		if ( this.tfMenu ) {

			//elem.innerHTML = Component( 'Menu' );
			elem.style.display = 'block';

		} else
			//elem.innerHTML = '';
			elem.style.display = 'none';


		this.tfMenu = !this.tfMenu;
	}








}











