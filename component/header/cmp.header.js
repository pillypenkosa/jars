//console.log( '' );









class ComponentHeader {

	static cp = [
		{ id: '025' 	, title: '0.25 л'	, },
		{ id: '033' 	, title: '0.33 л'	, },
		{ id: '05' 		, title: '0.5 л' 	, },

	];






	static html() {

		// &#9776; ☰
		// &#8801; ≡







		let innerHTML = `
			<div class="title">Jars</div>
			<div class="btn-menu" onclick="ComponentHeader.clc()">
				<img src="img/pic/menu.png" alt="menu">
			</div>
			<div class="nav"></div>
		`;


		return getComponentHtml({ tag: 'header', 
			param: [
				//{ k: 'class' 		, v: 'active' 					, },
				//{ k: 'name' 		, v: 'Имя Розы' 				, },
				//{ k: 'title' 		, v: 'Всплывающая подсказка' 	, },
				//{ k: 'data-id' 		, v: 'any-data' 				, },
				//{ k: 'onclick' 		, v: `${ f }( ${ arg } )` 		, },
				//{ k: 'selected' 	, v: '' 						, },
				//{ k: 'defer' 		, v: '' 						, },
			], 
			innerHTML,
		});
	}




	static clc() {

		//alert();

		let content = document.querySelectorAll( 'cmp-header .nav' )[ 0 ];




		let cpHtml = '';
		this.cp.forEach( k => {
			cpHtml += `<div class="btn-filter" onclick="ComponentHeader.clcBtn( '${ k.id }' )">${ k.title }</div>`;
		});


		content.innerHTML = cpHtml;
	}






	static clcBtn( id ) {

		//alert( id );
		//let content = document.querySelectorAll( 'cmp-header .nav' )[ 0 ];


		document.querySelectorAll( 'cmp-header .nav' )[ 0 ].innerHTML = '';

		//console.log( div );

		


		ComponentMiddle.innerHtml( id );


/*

		let cpHtml = '';
		this.cp.forEach( k => {
			cpHtml += `<div class="btn-filter">${ k.title }</div>`;
		});


		content.innerHTML = cpHtml;

*/

	}
















}











