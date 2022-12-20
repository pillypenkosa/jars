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
			let num = 1;
			arrJars.forEach( ( k, i ) => {
				if ( k.volume == '.25' ) {
					html += `<div class="each">
						<div class="num">${ num++ }</div>
						<img src="img/jars/${ k.id }.jpg" alt="Jar: ${ k.title } ${ k.taste }, ${ k.barcode }">
					</div>`;
				}
			});
		}



		if ( id == '033' ) {
			let num = 1;
			arrJars.forEach( ( k, i ) => {
				if ( k.volume == '.33' ) {
					html += `<div class="each">
						<div class="num">${ num++ }</div>
						<img src="img/jars/${ k.id }.jpg" alt="Jar: ${ k.title } ${ k.taste }, ${ k.barcode }">
					</div>`;
				}
			});
		}



		if ( id == '05' ) {
			let num = 1;
			arrJars.forEach( ( k, i ) => {
				if ( k.volume == '.5' ) {
					html += `<div class="each">
						<div class="num">${ num++ }</div>
						<img src="img/jars/${ k.id }.jpg" alt="Jar: ${ k.title } ${ k.taste }, ${ k.barcode }">
					</div>`;
				}
			});
		}










		document.getElementById( 'content' ).innerHTML = html;

	}







}











