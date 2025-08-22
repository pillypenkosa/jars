

LoadDependences.load();



window.onload = function() { 
	
	Router.loadApp();





	document.querySelector( 'cmp-win-index' ).addEventListener( 'click', function( e ) {

		//if ( e.target.tagName == 'cmp-spoyler' || e.target.closest( 'cmp-spoyler' ) ) {
		//if ( e.target.tagName == 'cmp-spoyler' || e.target.closest( 'cmp-spoyler' ) ) {
		
		if ( e.target.classList.contains( 'spoiler-title' ) || e.target.closest( '.spoiler-title' ) ) {
			let elemParent = e.target.closest( 'cmp-spoiler' );

			//console.log( e.target.tagName );
			//console.log( elemParent );


			//elemParent.find( '.body' );

			//console.log( elemParent.querySelector( '.body' ) );


			ComponentSpoiler.clc( elemParent );



		}




	});












};
















