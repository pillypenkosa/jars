//console.log( 'header' );




class ComponentMiddle {



	static html() {


		return getComponentHtml({ tag: 'middle',
			innerHTML: `
				<div id="content"></div>
			`, 
		});
	}



	static innerHtml( id ) {

		let html = '';




		if ( id == '025' ) {
			arrJars.forEach( k => {
				if ( k.volume == '.25' ) {
					html += `<div class="each">
						<img src="img/jars/${ k.id }.jpg" alt="Jar: ${ k.title }">
					</div>`;
				}
			});
		}


		if ( id == '033' ) {
			arrJars.forEach( k => {
				if ( k.volume == '.33' ) {
					html += `<div class="each">
						<img src="img/jars/${ k.id }.jpg" alt="Jar: ${ k.title }">
					</div>`;
				}
			});
		}



		if ( id == '05' ) {
			arrJars.forEach( k => {
				if ( k.volume == '.5' ) {
					html += `<div class="each">
						<img src="img/jars/${ k.id }.jpg" alt="Jar: ${ k.title }">
					</div>`;
				}
			});
		}











		document.getElementById( 'content' ).innerHTML = html;

	}







}











