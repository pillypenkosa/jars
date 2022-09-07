//console.log( '' );







// статически место модального окна прописано в index.html

class ComponentModal {


	static btnIDs = {};



	static index() {
		
		return '<div id="cmp_modal"></div>'
	}







	static html( txt, obj ) { 	// txt - какой компонент отобразить в модальном окне, data - объект данных для компонента

/*
		{
			id: '',
			component: '',
		}
*/


		//console.log( 'ComponentModal:html()' );
		//console.log( txt );
		//console.log( obj );


		let htmlContent = '';

		if ( txt == 'users' )
			htmlContent = ComponentModalUser.html( obj.group, obj.id );


		if ( txt == 'films' )
			htmlContent = ComponentModalFilm.html( obj.id );









		let txtClose = 'Close X';


		let htmlModal = `<div class="body">
			<div class="side" onclick="ComponentModal.clcClose()">${ txtClose }</div>
			<div class="content">${ htmlContent }</div>
			<div class="side" onclick="ComponentModal.clcClose()">${ txtClose }</div>
		</div>
		`;


		//alert( 555 );

		document.getElementById( 'cmp_modal' ).innerHTML = htmlModal;
	}





	static clcClose() {

		document.getElementById( 'cmp_modal' ).innerHTML = '';
	}









}























