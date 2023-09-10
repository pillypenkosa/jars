//console.log( 'header' );




class ComponentTableList {



	static html( className, tagName, data = {} ) {


		//console.log( className );
		//console.log( tagName );
		//console.log( data );



		//alert( className );
		//alert( tagName );


		this.className = className;
		this.tagName = tagName;
		
		this.paramAttr = [

			{ k: 'tag' 			, v: tagName 							, }, // tag ставити завжди першим у массиві
			//{ k: 'class' 		, v: 'active' 							, },
			//{ k: 'name' 		, v: 'Параметр name' 					, },
			//{ k: 'title' 		, v: 'Підказка title, яка вспливає' 	, },
			//{ k: 'selected' 	, v: '' 								, },
			//{ k: 'defer' 		, v: '' 								, },
			//{ k: 'data-id' 		, v: 'anyData' 							, },
			//{ k: 'onclick' 		, v: this.className + '.clc( ' + this.className + '.arrArgs )' 	, },

		];


		let html = '';

		if ( data ) {
			if ( data.ml ) {

				if ( data.ml == '025' ) 
					html = this.getList( '.25' );

				if ( data.ml == '033' ) 
					html = this.getList( '.33' );

				if ( data.ml == '05' ) 
					html = this.getList( '.5' );

			}
		}



		return getComponentHtml({ tag: tagName,
			innerHTML: html, 
		});
	}





	static getList( txt ) {

		let html = '';
		arrListJars.forEach( k => {

			let type = '';


			if ( k.volume == txt ) {
				html += `<div class="each">
					<div class="title">${ k.title }</div>
					<div class="taste">${ k.taste }</div>
					<div class="barcode">${ k.barcode ? k.barcode : '' }</div>
					<div class="ml">0${ txt } л</div>
				</div>`;
			}
		});

		return html;
	}






}











