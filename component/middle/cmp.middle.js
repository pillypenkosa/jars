//console.log( 'header' );




class ComponentMiddle {



	static html() {


		//const title = 'Головна';
		document.title = appProjectName + ' ' + appVersion;



		return getComponentHtml({ tag: 'middle',
			innerHTML: `
				<div id="content"></div>
			`, 
		});
	}



	static innerHtml( id ) {

		let html = '';
		let ml = '';


		html = `
			<div class="nav-list-img">
				<div class="btn" data-id="${ id }" onclick="ComponentMiddle.clcBtnList( this )">Список ${ id }</div>
				<div class="btn" data-id="${ id }" onclick="ComponentMiddle.clcBtnImg( this )">Зображення ${ id }</div>
			</div>
			<div class="list"></div>
			<div class="galery"></div>
		`;





/*
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
*/




/*

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



*/



		document.getElementById( 'content' ).innerHTML = html;
	}




	// відображення списком
	static clcBtnList( elem ) {

		//console.log( elem.dataset.id );
		document.querySelectorAll( '#content .galery' )[ 0 ].innerHTML = '';
		document.querySelectorAll( '#content .list' )[ 0 ].innerHTML = Component( 'Table-List', { ml: elem.dataset.id } );
	}



	// відображення зображеннями
	static clcBtnImg( elem ) {
		//console.log( elem );
		//console.log( elem.dataset.id );
		document.querySelectorAll( '#content .list' )[ 0 ].innerHTML = '';
		document.querySelectorAll( '#content .galery' )[ 0 ].innerHTML = Component( 'Img-Jars', { ml: elem.dataset.id } );
	}












}











