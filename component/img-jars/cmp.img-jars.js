//console.log( 'header' );




class ComponentImgJars {



	static html( className, tagName, data = null ) {


		//return 'ComponentImgJars.html()';


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



		//console.log( data );


		let html = '';
		if ( data) {
			if ( data.ml ) {

				if ( data.ml == '025' ) 
					html = this.getHtmlGalery( '.25' );

				if ( data.ml == '033' ) 
					html = this.getHtmlGalery( '.33' );

				if ( data.ml == '05' ) 
					html = this.getHtmlGalery( '.5' );

			}
		}



		//const title = 'Головна';
		//document.title = appProjectName + ' ' + appVersion;



		return getComponentHtml({ tag: this.tagName,
			innerHTML: html, 
		});
	}






	static getHtmlGalery( volume ) {

		//return volume;

		let html = '';

		let num = 1;
		arrJars.forEach( ( k, i ) => {
			if ( k.volume == '.33' ) {
				html += `<div class="each">
					<div class="num">${ num++ }</div>
					<img src="img/jars/${ k.id }.jpg" alt="Jar: ${ k.title } ${ k.taste }, ${ k.barcode }">
				</div>`;
			}
		});

		return html;

	}








}











