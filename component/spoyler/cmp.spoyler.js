// © 2024 DJS 



class ComponentSpoyler { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'objData: ', objData ); 

		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-key' 		: objData.key, 
			//'data-id' 		: objData.id, 
			//'onclick' 		: 'ComponentSpoyler.clc( this )', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}


		//console.log( objData );

		let html = '';

		if ( objData ) {
			if ( objData.id ) {

				tagParam[ 'data-id' ] = objData.id;

				let title = '';
				if ( objData.title ) 
					title = objData.title;
				

				html = `
					<div class="title" onclick="${ this.name }.clc( this )">
						<div class="txt">${ title }</div>
						<div class="pm" title="Розгорнути / згорнути">+</div>
					</div>
					<div class="modal"></div>
					<div class="body"></div>
				`; 
			}




			if ( objData.volume ) {


				let title = '';
				if ( objData.volume == '_025' )
					title = 'Vol. 0.25';

				if ( objData.volume == '_033' )
					title = 'Vol. 0.33';

				if ( objData.volume == '_05' )
					title = 'Vol. 0.5';



				tagParam[ 'data-id' ] = objData.volume;

				html = `
					<div class="title" onclick="${ this.name }.clc( this )">
						<div class="txt">${ title }</div>
						<div class="pm" title="Розгорнути / згорнути">+</div>
					</div>
					<div class="modal"></div>
					<div class="body"></div>
				`; 
			}
		}

		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem );

		let elemParent = elem.closest( 'cmp-spoyler' );


		//console.log( 'elemParent: ', elemParent );




		//let key = elemParent.dataset.key;
		let id = elemParent.dataset.id;


		//console.log( 'key: ', key );
		//console.log( 'id: ', id );




		let arrSelected025 = [];
		let arrSelected033 = [];
		let arrSelected05 = [];

		let html = '';
		arrListJars.forEach( k => {

			if ( k.hash ) {

				if ( k.hash[ id ] ) {
					//arrSelected025.push( k );
					//console.log( k );

					if ( k.hash._025 ) 
						arrSelected025.push( k );

					if ( k.hash._033 ) 
						arrSelected033.push( k );

					if ( k.hash._05 ) 
						arrSelected05.push( k );

				}
			}
		});


		//console.log( arrSelected025 );
		//console.log( arrSelected033 );
		//console.log( arrSelected05 );

		if ( arrSelected025.length ) 
			html += `
				<div class="title-vol">--- volume: 0.25 ml</div>
				<div class="arr-jars">
					${ Component( 'Jars-025', arrSelected025 ) }
				</div>
			`;


		if ( arrSelected033.length ) 
			html += `
				<div class="title-vol">--- volume: 0.33 ml</div>
				<div class="arr-jars">
					${ Component( 'Jars-033', arrSelected033 ) }
				</div>
			`;

		
		if ( arrSelected05.length ) 
			html += `
				<div class="title-vol">--- volume: 0.5 ml</div>
				<div class="arr-jars">
					${ Component( 'Jars-05', arrSelected05 ) }
				</div>
			`;



		let elemBody = document.querySelector( `cmp-spoyler[ data-id="${ id }" ] .body` );


		if ( !elemBody.innerHTML ) 
			elemBody.innerHTML = html;

		else {


			this.closeModal( elemParent );


			elemBody.classList.toggle( 'unvisible' );
		}


		let htmlPM = '';
		if ( elemBody.classList.contains( 'unvisible' ) ) 
			htmlPM = '+';
		else 
			htmlPM = '-';
			
		elem.querySelector( '.title .pm' ).innerHTML = htmlPM;



		elemBody.innerHTML = html;
	} 
 
 




	static modal( elem ) { // data - id
		const fooName = this.name + '.modal()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 
		//console.log( 'objListJars: ', objListJars[ data ] ); 



		//console.log( 'id: ', elem.dataset.id ); 

		let obj = {};

		if ( elem.dataset.id ) {

			if ( objListJars[ elem.dataset.id ] ) {

				obj = objListJars[ elem.dataset.id ];

			}
		}
		



		let elemParent = elem.closest( 'cmp-spoyler' );




		//console.log( 'elemParent: ', elemParent ); 





		let htmlVolume = '';
		if ( obj.hash ){

			if ( obj.hash._025 )
				htmlVolume = '0.25';

			if ( obj.hash._033 )
				htmlVolume = '0.33';

			if ( obj.hash._05 )
				htmlVolume = '0.5';
		}


		elemParent.querySelector( '.modal' ).innerHTML = `<div>
			<div class="close pointer" onclick="${ this.name }.close( this )">x Close</div>
			<div class="img">
				<img src="img/jars/${ obj.id }.jpg" alt="">
			</div>
			<div class="info">
				<div class="info-title">${ obj.title }</div>
				<div class="info-volume">${ htmlVolume } ml</div>
				<div class="info-barcode">${ obj.barcode }</div>
			</div>
		</div>`; 
	}








	static close( elem ) {
		const fooName = this.name + '.close()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 


		let elemParent = elem.closest( 'cmp-spoyler' );


		//console.log( 'elemParent: ', elemParent ); 

		this.closeModal( elemParent );
	}







	static closeModal( elem ) { // elem - parent
		const fooName = this.name + '.closeModal()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

		elem.querySelector( '.modal' ).innerHTML = '';
	}






	static linkTo( data = {} ) {
		const fooName = this.name + '.linkTo()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 







	}






 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
