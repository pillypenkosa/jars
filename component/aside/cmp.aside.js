//console.log( 'aside' );









class ComponentAside {

	static template = `<aside></aside>`;



	static arrBtns = [

		{ title: 'Jars' 			, id: 'jars' 			, },

	];





	static html() {

		let htmlBtns = '';

		this.arrBtns.forEach( k => {
			//htmlBtns += `<div class="btn" data-id="${ k.id }" onclick="AsideComponent.showWin( '${ k.id }' )">${ k.title }</div>`;
			htmlBtns += `<div class="btn" data-id="${ k.id }" onclick="ComponentAside.showWin( '${ k.id }' )">${ k.title }</div>`;
		});

		return `<aside>
			${ htmlBtns }
		</aside>`;
	}




	static showWin( id ) {

		// подсветка кнопок
		btnLight( 'aside', id );




		// очистка контента
		document.getElementById( 'content' ).innerHTML = '';

	

		let content = document.getElementById( 'content' );

		//alert( txt );
		

		if ( id == 'jars' ) 
			content.innerHTML = ComponentJars.html();
		
	} 








}















