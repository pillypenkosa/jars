




class App {



	static html( data = {} ) {
		const fooName = this.name + '.html()';

		//console.log( 'fooName', fooName );
		//console.log( 'data', data );


		let html = `		
			${ Component( 'Header' ) }
			<div id="middle">
				<div id="content"></div>
			</div>
			${ Component( 'Logo' ) }
			${ Component( 'Footer' ) }
		`;



		return html;
	}











}













